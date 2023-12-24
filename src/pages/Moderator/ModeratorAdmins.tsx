import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import adminsArray from "../../utils/admins";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type AdminsTable = {
  id: number;
  country: string;
  name: string;
  phone: string;
  mail: string;
  lastSesia: string;
};

type Props = {};

const ModeratorAdmins = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [newAdmin, setNewAdmin] = useState<AdminsTable>({
    id: adminsArray.length + 1,
    country: "",
    name: "",
    phone: "",
    mail: "",
    lastSesia: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddAdmin = () => {
    adminsArray.push(newAdmin);

    handleClose();
    setNewAdmin({
      id: adminsArray.length + 1,
      country: "",
      name: "",
      phone: "",
      mail: "",
      lastSesia: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAdmin((prevAdmin) => ({ ...prevAdmin, [name]: value }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TableContainer
        sx={{ maxWidth: 950, margin: "15px auto" }}
        component={Paper}
      >
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Країна</TableCell>
              <TableCell>Ім’я</TableCell>
              <TableCell>Телефон</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>
                Остання сессія <br />
                (дата/час/тривалість)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adminsArray.map((admin, index) => (
              <TableRow key={admin.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{admin.country}</TableCell>
                <TableCell>{admin.name}</TableCell>
                <TableCell>{admin.phone}</TableCell>
                <TableCell>{admin.mail}</TableCell>
                <TableCell>{admin.lastSesia}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="success" onClick={handleOpen}>
        Add Admin
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Admin
          </Typography>
          <TextField
            label="Country"
            name="country"
            value={newAdmin.country}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Name"
            name="name"
            value={newAdmin.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            value={newAdmin.phone}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="mail"
            value={newAdmin.mail}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAddAdmin}>
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModeratorAdmins;
