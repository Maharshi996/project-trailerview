import React from "react";
import { Box, Typography } from "@mui/material";
import { DesktopPxToVw } from "../utils/convertfontsize";

function Navbar() {
  const NavBarContents = ["Home", "New", "Categories", "Login/Logout"];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: DesktopPxToVw(100),
        backgroundColor: "rgba(0,0,0,0.1)",
        backdropFilter: "blur(20px)",
        paddingX: DesktopPxToVw(40),
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "sans-serif",
          fontSize: DesktopPxToVw(40),
        }}
      >
        Trailerview
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "50%",
          justifyContent: "space-evenly",
        }}
      >
        {NavBarContents.map((item) => {
          return (
            <Typography
              key={item}
              sx={{ fontFamily: "sans-serif", fontSize: DesktopPxToVw(20) }}
            >
              {item}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
}

export default Navbar;
