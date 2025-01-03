import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";
import {Container,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Button,Paper,Typography,Box,Dialog,DialogTitle,DialogContent,DialogActions,TextField,Snackbar,Alert,} from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { useLocation } from 'react-router-dom';
import CheckAuthAndRedirect from './jwt_auth';

const WarrantyList = () => {
  CheckAuthAndRedirect(); // Call the function to handle redirection based on token

  const [warranties, setWarranties] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const location = useLocation();
  const { email } = location.state || {};
  const [newWarranty, setNewWarranty] = useState({
    email:email,
    product_name: "",
    store_name: "",
    store_location: "",
    invoice: null,
    status: "Pending Verification",
  });





  const fetchWarranties = async () => {
    try {
      const response = await axios.post("http://localhost:5000/warranty/setup/getwarranty" ,{"email":email});
      console.log(response.data)
      setWarranties(response.data);
    } catch (error) {
      console.error("Error fetching warranties:", error);
    }
  };

  useEffect(() => {
    fetchWarranties();
  }, []);

  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);

  const handleSnackbarClose = () => setOpenSnackbar(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWarranty((prev) => ({ ...prev, [name]: value }));
    setNewWarranty((prev) => ({ ...prev, email: email }));
  };

  const handleFileChange = (e) => {
    setNewWarranty((prev) => ({ ...prev, invoice: e.target.files[0] }));
     setNewWarranty((prev) => ({ ...prev, email: email }));
  };

  const handleFormSubmit = async () => {
    try {

      console.log("Warranty added:", newWarranty);
      
      const response = await axios.post("http://localhost:5000/warranty/setup/createwarranty", newWarranty,{
        headers: {
            'Content-Type': 'multipart/form-data',
        },
      });
      fetchWarranties();


      // Add the new warranty to the list and show confirmation
      setWarranties((prev) => [...prev, response.data]);
      setOpenSnackbar(true);

      handleDialogClose();
      setNewWarranty({
        product_name: "",
        purchase_date: "",
        store_name: "",
        store_location: "",
        invoice: null,
        status: "Pending Verification",
      });
    } catch (error) {
      console.error("Error adding warranty:", error);
    }
  };

  return (
    <div>
      <Navbar />
    <Container maxWidth="lg">
      <Box my={4} textAlign="center">
        <Typography variant="h3" gutterBottom>
          Warranty Storage
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Keep track of your warranties and always know when they expire.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutline />}
          onClick={handleDialogOpen}
          sx={{ marginBottom: "30px" }}
          >
          Add New Warranty
        </Button>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="warranty table">
            <TableHead>
              <TableRow>
                <TableCell align="center"><strong>Warranty ID</strong></TableCell>
                <TableCell align="center"><strong>Product Name</strong></TableCell>
                <TableCell align="center"><strong>Purchase Date</strong></TableCell>
                <TableCell align="center"><strong>Expiry Date</strong></TableCell>
                <TableCell align="center"><strong>Store</strong></TableCell>
                <TableCell align="center"><strong>Location</strong></TableCell>
                <TableCell align="center"><strong>Status</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {warranties.length > 0 ? (
                warranties.map((warranty) => (
                  <TableRow key={warranty.id}>
                    <TableCell align="center">{warranty._id}</TableCell>
                    <TableCell align="center">{warranty.product_name}</TableCell>
                    <TableCell align="center">{warranty.purchase_date}</TableCell>
                    <TableCell align="center">{warranty.expiry_date}</TableCell>
                    <TableCell align="center">{warranty.store_name}</TableCell>
                    <TableCell align="center">{warranty.store_location}</TableCell>
                    <TableCell align="center">{warranty.status}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No warranties available.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Add Warranty Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose} fullWidth maxWidth="sm">
        <DialogTitle>Add New Warranty</DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            label="Product Name"
            name="product_name"
            fullWidth
            value={newWarranty.product_name}
            onChange={handleInputChange}
            />
          <TextField
            margin="normal"
            label="Purchase Date"
            name="purchase_date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={newWarranty.purchase_date}
            onChange={handleInputChange}
            />
          <TextField
            margin="normal"
            label="Store Name"
            name="store_name"
            fullWidth
            value={newWarranty.store_name}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            label="Store Location"
            name="store_location"
            fullWidth
            value={newWarranty.store_location}
            onChange={handleInputChange}
            />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ marginTop: "16px", display: "block" }}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleFormSubmit} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
        <Alert onClose={handleSnackbarClose} severity="success" variant="filled">
          Warranty has been sent for verification!
        </Alert>
      </Snackbar>
    </Container>
        </div>
  );
};

export default WarrantyList;
