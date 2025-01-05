import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { DesktopPxToVw } from "../utils/convertfontsize";
import { InputBox, InputContainer, LableText } from "./styles/Registration";

function Registration() {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    console.log("function hit", event.target.value);
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const saveUser = () => {
    console.log(userData);
  };

  return (
    <Stack
      sx={{
        width: "25%",
        height: "fit-content",
        background: "rgba(0, 0, 0, 0.4)",
        position: "absolute",
        top: "50%",
        left: "50%;",
        transform: "translate(-50%, -50%)",
        padding: DesktopPxToVw(40),
        gap: DesktopPxToVw(30),
        borderRadius: DesktopPxToVw(18),
      }}
    >
      <Box sx={{ margin: "auto", textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: DesktopPxToVw(40),
            fontWeight: 700,
            color: "white",
          }}
        >
          MovieSphere
        </Typography>
        <Typography
          sx={{
            fontSize: DesktopPxToVw(20),
            color: "rgba(255,253,258,0.7)",
          }}
        >
          sign-up for exploring new movies information
        </Typography>
      </Box>
      <form onSubmit={saveUser}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: DesktopPxToVw(20),
          }}
        >
          <Stack sx={{ gap: DesktopPxToVw(20) }}>
            <InputContainer>
              <LableText>Username</LableText>
              <InputBox
                name="userName"
                value={userData.userName}
                placeholder="Enter your username"
                onChange={handleChange}
                type="text"
              />
            </InputContainer>
            <InputContainer>
              <LableText>Email</LableText>
              <InputBox
                name="email"
                value={userData.email}
                placeholder="Enter your email"
                onChange={handleChange}
                type="email"
              />
            </InputContainer>
            <InputContainer>
              <LableText>Password</LableText>
              <InputBox
                name="password"
                value={userData.password}
                placeholder="Enter your password"
                onChange={handleChange}
                type="password"
              />
            </InputContainer>
            <InputContainer>
              <LableText>Confirm Password</LableText>
              <InputBox
                name="confirmPassword"
                value={userData.confirmPassword}
                placeholder="Re-enter the password"
                onChange={handleChange}
                type="password"
              />
            </InputContainer>
          </Stack>

          <Button
            sx={{
              width: "100%",
              borderRadius: DesktopPxToVw(12),
              background: "linear-gradient(to right, purple, blue)",
              color: "white",
              textTransform: "capitalize",
              height: DesktopPxToVw(50),
            }}
            type="submit"
          >
            Create Account
          </Button>

          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontSize: DesktopPxToVw(15),
              color: "rgba(255,253,258,0.7)",
              margin: "auto",
              span: {
                color: "purple",
              },
            }}
          >
            Already have an account ? <span>Sign In</span>
          </Typography>
        </Box>
      </form>
    </Stack>
  );
}

export default Registration;
