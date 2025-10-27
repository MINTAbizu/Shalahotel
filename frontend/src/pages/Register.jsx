import React, { useState } from "react";
import {
  Container, TextField, Button, Typography, Paper
} from "@mui/material";
import API from "../Api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [error, setError] = useState("");
  const [nameerror, setnameerror] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [passworderror, setpassworderror] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "email") setemailerror("");
    if (e.target.name === "password") setpassworderror("");
    if (e.target.name === "name") setnameerror("");
    setError("");
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isStrongPassword = (pwd) => {
    // min 8 chars, at least one lowercase, one uppercase, one digit and one special char
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(pwd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setnameerror("");
    setemailerror("");
    setpassworderror("");
    setError("");

    if (!form.name.trim()) {
      setnameerror("Name is required");
      return;
    }

    if (!form.email || !isValidEmail(form.email)) {
      setemailerror("Please enter a valid email address");
      return;
    }

    if (!form.password || form.password.length < 8) {
      setpassworderror("Password must be at least 8 characters");
      return;
    }

    if (!isStrongPassword(form.password)) {
      setpassworderror("Password must include uppercase, lowercase, number and special character");
      return;
    }

    try {
      await API.post("/register", form);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <Container maxWidth="xs" className="mb-3">
      <Paper sx={{ mt: 10, p: 4 }}>
        <Typography variant="h5" textAlign="center" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          {nameerror && <Typography color="error">{nameerror}</Typography>}
          <TextField fullWidth label="Name" name="name" margin="normal" onChange={handleChange} required />

          {emailerror && <Typography color="error" sx={{ mt: 1 }}>{emailerror}</Typography>}
          <TextField fullWidth label="Email" name="email" margin="normal" onChange={handleChange} required />

          <TextField fullWidth label="Phone" name="phone" margin="normal" onChange={handleChange} required />

          {passworderror && <Typography color="error" sx={{ mt: 1 }}>{passworderror}</Typography>}
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            margin="normal"
            onChange={handleChange}
            required
            helperText="Min 8 chars, include uppercase, lowercase, number & special char"
          />

          {error && <Typography color="error">{error}</Typography>}
          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>Register</Button>
        </form>
      </Paper>
    </Container>
  );
}
