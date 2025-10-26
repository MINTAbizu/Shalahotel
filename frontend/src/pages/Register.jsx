import React, { useState } from "react";
import {
  Container, TextField, Button, Typography, Paper
} from "@mui/material";
import API from "../Api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [error, setError] = useState("");
  const [nameerror,setnameerror]=useState('')
  const [emailerror,setemailerror]=useState('')
  const [passworderror,setpassworderror]=useState('')
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
// const emailformat= email.test()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!name){
      setnameerror("Name is required");
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
          <TextField fullWidth label="Name" name="name" margin="normal" onChange={handleChange}  required/>
         
          <TextField fullWidth label="Email" name="email" margin="normal" onChange={handleChange} required />
          <TextField fullWidth label="Phone" name="phone" margin="normal" onChange={handleChange}  required/>
          <TextField fullWidth label="Password" type="password" name="password" margin="normal" onChange={handleChange}  required/>
          {error && <Typography color="error">{error}</Typography>}
          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>Register</Button>
        </form>
      </Paper>
    </Container>
  );
}
