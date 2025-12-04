import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { urlApi } from "../url";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data.password == data.password2) {
      try {
        const newdata= data
        delete newdata.password2
        const response = await axios.post(urlApi+"users",newdata);
        // ------------------------------
        console.log(response);
        toast.success("It`s successful")
        navigate("/login");
      } catch (error) {
        // ------------------------------
        console.log(error);
        toast.error(String(error))
      }
    } else {
      setError("password", {
        type: "required",
        message: "Passwords are not same",
      });
    }
  };

  return (
    <div className="p-[1%] w-full h-screen">
      <div className="w-full h-full not-1md:flex-col flex items-center justify-center 1md:justify-baseline rounded-2xl p-5 bg-[#99989828]">
        <img
          className="1md:w-[1000px] 1md:min-w-[500px] w-[50%] "
          src="./logo.png"
          alt="log not found 404"
        />

        <form
          className=" 1md:min-w-[450px] min-w-[300px] bg-white/70 backdrop-blur-xl p-8 rounded-2xl text-gray-900 flex flex-col gap-6 shadow-md border border-gray-300/50"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-5">
            {/* NAME */}
            <TextField
              label="Name"
              type="text"
              variant="outlined"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
              InputProps={{ style: { color: "#111" } }}
              InputLabelProps={{ style: { color: "#555" } }}
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 4,
                  message: "Name must be at least 4 letters",
                },
                maxLength: {
                  value: 20,
                  message: "Name can't be over 20 letters",
                },
              })}
            />

            {/* EMAIL */}
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
              InputProps={{ style: { color: "#111" } }}
              InputLabelProps={{ style: { color: "#555" } }}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
            />

            {/* PASSWORD */}
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{ style: { color: "#111" } }}
              InputLabelProps={{ style: { color: "#555" } }}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />

            {/* CONFIRM PASSWORD */}
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              error={!!errors.password2}
              helperText={errors.password2?.message}
              InputProps={{ style: { color: "#111" } }}
              InputLabelProps={{ style: { color: "#555" } }}
              {...register("password2", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
          </div>

          <Button
            variant="contained"
            type="submit"
            className="!bg-blue-600 hover:!bg-blue-700 !py-3 !text-lg !mt-2 !rounded-xl shadow-md"
          >
            Create Account
          </Button>
          <p className="text-center">
            {" "}
            <Link
              to={"/login"}
              className="text-blue-600 hover:underline hover:text-blue-400"
            >
              {" "}
              Log-in
            </Link>{" "}
            if you already have an account{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
