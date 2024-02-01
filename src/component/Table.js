// src/Table.js
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
  TextField,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { pink } from "@mui/material/colors";

const columns = ["id", "Name", "Gender", "Age", "Class"];

const initialData = [
  { id: 1, name: "John Doe", gender: "Male", age: 25, class: "I" },
  { id: 5, name: "arlie Brown", gender: "Male", age: 22, class: "I" },
  { id: 6, name: "Diana Ross", gender: "Female", age: 37, class: "II" },
  { id: 7, name: "Eric Taylor", gender: "Male", age: 45, class: "IV" },
];

const TableComponent = () => {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [newRow, setNewRow] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddRow = () => {
    setData([...data, { id: data.length + 1, ...newRow }]);
    setNewRow({});
    handleClose();
  };

  const handleDeleteRow = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  const handleChange = (e) => {
    setNewRow({ ...newRow, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div style={{ padding: "50px", backgroundColor: "lightblue",height:'900px'}}>
        
<Stack
  direction="row"
  justifyContent="space-between"
  alignItems="center"
  spacing={0}
>

        <h1>Student Table</h1>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Student
        </Button>
        </Stack>
     
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            marginTop: 10,
          }}
        >
          <TableContainer
            sx={{ width: "100%" }}
            component={Paper}
          >
            <Table>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell style={{ fontWeight: 600 }} key={column}>
                      {column}
                    </TableCell>
                  ))}
                  <TableCell style={{ fontWeight: 600 }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    {columns.map((column) => (
                      <TableCell key={column}>
                        {row[column.toLowerCase()]}
                      </TableCell>
                    ))}
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDeleteRow(row.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "white",
            boxShadow: 24,
            padding: "30px",
            borderRadius: "14px",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0}
          >
            <h2>Add Student </h2>
            <CloseIcon onClick={handleClose} />
          </Stack>
          <TextField
            label="Name"
            name="name"
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select label="Gender" name="gender" onChange={handleChange}>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Others"}>Others</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Age"
            name="age"
            type='number'
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Class"
            name="class"
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAddRow}>
            Add
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default TableComponent;
