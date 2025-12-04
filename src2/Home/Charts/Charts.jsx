import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Charts() {
  const [chart, setChart] = React.useState("");
  const [numberOfCharts, setNumberOfCharts] = React.useState(7);

  const handleChange = (event) => {
    setChart(event.target.value);

  };
  return (
    <div className="w-screen bg-[#444446] text-white">
      <div className="max-w-[1440px] m-auto p-5">
        <h1 className="text-3xl font-bold font-serif">Create Chart</h1>
        <hr className="my-2" />

        
        <Box sx={{ minWidth: 120 }} className="my-5 w-10np">
          <FormControl fullWidth variant="outlined">
            <InputLabel
              id="charts-select-label"
              shrink
              sx={{
                color: "white",
                backgroundColor: "#444446", // match your background
                px: "4px", // fixes notch alignment
              }}
            >
              Charts
            </InputLabel>

            <Select
              labelId="charts-select-label"
              id="charts-select"
              value={chart}
              onChange={handleChange}
              label="Charts"
              notched
              sx={{
                color: "white",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                ".MuiSvgIcon-root": {
                  color: "white",
                },
              }}
            >
              {[...Array(numberOfCharts)].map((item, i) => (
                <MenuItem value={i + 1} key={i}>
                  {i + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>


      </div>
    </div>
  );
}

export default Charts;
