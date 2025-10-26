import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Box p={4}>
      <Typography variant="h4">Welcome, {user?.name}</Typography>
      <Typography sx={{ mt: 2 }}>Your email: {user?.email}</Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => navigate("/users")}
      >
        Manage Users
      </Button>
    </Box>
  );
}
