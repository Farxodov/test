import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { data, Link, useNavigate } from "react-router-dom";
import { loginAxios, registerAxios } from "../axios";
import axios from "axios";
import { toast } from "sonner";
import { urlApi } from "../url";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const email = watch("email");

  const onSubmit = async (d) => {
      try {
        const response = await axios.get(urlApi + "users?email="+d.email)
        
        if(response?.data.length==1 && response.data[0].password===d.password){
          toast.success("Success")
          localStorage.setItem("mydata",JSON.stringify(response.data[0]))
          navigate("/");
        } else if (response.data[0].password!==d.password){
          toast.error("password is wrong")
        } else {
          toast.error("smth went wrong contact us")
        }

        
      } catch (error) {
        toast.error(error)
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

          </div>

          <Button
            variant="contained"
            type="submit"
            className="!bg-blue-600 hover:!bg-blue-700 !py-3 !text-lg !mt-2 !rounded-xl shadow-md"
          >
            Log-in
          </Button>
          <p className="text-center">
       
             <Link
              to={"/register"}
              className="text-blue-600 hover:underline hover:text-blue-400"
            >
              
              Register
            </Link> if you do not have an account
           
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
