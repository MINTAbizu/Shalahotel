import React, { useState } from "react";
import {
  Container, TextField, Button, Typography, Box, Paper
} from "@mui/material";
import API from "../Api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <Container maxWidth="xs" className="mb-3">
      <Paper sx={{ mt: 10, p: 4 }}>
        <Typography variant="h5" textAlign="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Email" name="email" margin="normal" onChange={handleChange} />
          <TextField fullWidth label="Password" type="password" name="password" margin="normal" onChange={handleChange} />
          {error && <Typography color="error">{error}</Typography>}
          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>Login</Button>
          <Button fullWidth variant="text" sx={{ mt: 1 }} onClick={() => navigate("/register")}>Register</Button>
        </form>
      </Paper>
    </Container>
  );
}
