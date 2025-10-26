import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Box } from "@mui/material";
import API from "../Api/axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/users")
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>All Users</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((u) => (
            <TableRow key={u._id}>
              <TableCell>{u.name}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
