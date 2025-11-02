import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper
} from "@mui/material";
// import API from "../Api/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/Authcontext";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [error, setError] = useState("");
  const [nameerror, setNameError] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const navigate = useNavigate();
const {register}=useAuth()
  // ✅ Form input handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    if (e.target.name === "name") setNameError("");
    if (e.target.name === "email") setEmailError("");
    if (e.target.name === "password") setPasswordError("");
  };

  // ✅ Email and password validators
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isStrongPassword = (pwd) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(pwd);

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.name.trim()) {
      setNameError("Name is required");
      return;
    }

    if (!form.email || !isValidEmail(form.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!form.password || form.password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }

    if (!isStrongPassword(form.password)) {
      setPasswordError("Password must include uppercase, lowercase, number and special character");
      return;
    }

    try {
      // ✅ Send POST request
      // const response = await API.post("/register", form);
const response = await register({
  name: form.name,
  email: form.email,
  password: form.password,
});
console.log("Registration Success:", response.data);

      navigate("/login");
    } catch (err) {
      console.error("Registration Error:", err);
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  // ✅ UI
  return (
    <Container maxWidth="xs" className="mb-3">
      <Paper sx={{ mt: 10, p: 4 }}>
        <Typography variant="h5" textAlign="center" gutterBottom>
          Register
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          {nameerror && <Typography color="error">{nameerror}</Typography>}
          <TextField
            fullWidth
            label="Name"
            name="name"
            margin="normal"
            onChange={handleChange}
            required
          />

          {/* Email Field */}
          {emailerror && <Typography color="error">{emailerror}</Typography>}
          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            onChange={handleChange}
            required
          />

          {/* Phone Field */}
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            type="tel"
            margin="normal"
            onChange={handleChange}
            required
          />

          {/* Password Field */}
          {passworderror && <Typography color="error">{passworderror}</Typography>}
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

          {/* Error Message */}
          {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}

          {/* Submit Button */}
          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
