import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  Chip
} from '@mui/material';

const DataValidationPage = () => {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const store_name=localStorage.getItem("store_name");
  const store_location=localStorage.getItem("store_location");
  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/warranty/setup/merchantverifications', {
        store_name: "Addidas", 
        store_location: "Jaipur"
      });
      
    //   console.log("API Response:", response.data); 

      if (response.data.data.length > 0) { 
        setData(response.data.data);
      } else {
        setData([]);
        console.error('No valid data received.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleValidationPrompt = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };
  const handleValidation = async (validate) => {
    if (selectedItem) {
      const updatedStatus = validate ? 'validated' : 'rejected';

      try {
        const response = await axios.patch(
        `http://localhost:5000/warranty/setup/merchantverifications/${selectedItem._id}`,
        { status: updatedStatus }
      );
        // console.log(response.data)
        if (response.data.success) {
          setData((prevData) => 
            prevData.map((item) => 
              item._id === selectedItem._id
                ? { ...item, status: updatedStatus }
                : item
            )
          );
        } else {
          console.error('Failed to update warranty status');
        }
      } catch (error) {
        console.error('Error updating warranty status:', error);
      }
    }

    setOpenDialog(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending Verification':
        return 'warning';
      case 'validated':
        return 'success';
      case 'rejected':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Purchase Date</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Store Name</TableCell>
              <TableCell>Store Location</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row._id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  backgroundColor: 
                    row.status === 'validated' 
                      ? 'rgba(76, 175, 80, 0.1)' 
                      : row.status === 'rejected' 
                      ? 'rgba(244, 67, 54, 0.1)' 
                      : 'inherit'
                }}
              >
                <TableCell>{row._id}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.product_name}</TableCell>
                <TableCell>{row.purchase_date}</TableCell>
                <TableCell>{row.expiry_date || 'N/A'}</TableCell>
                <TableCell>{row.store_name}</TableCell>
                <TableCell>{row.store_location}</TableCell>
                <TableCell>
                  <Chip 
                    label={row.status || 'pending'}
                    color={getStatusColor(row.status || 'pending')}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  {row.status === 'Pending Verification' ? (  
                    <Button 
                      variant="contained" 
                      color="primary"
                      size="small"
                      onClick={() => handleValidationPrompt(row)}
                    >
                      Validate
                    </Button>
                  ) : (
                    <Chip 
                      label={row.status === 'validated' ? Math.round(Date.now() / 2024) : 'Rejected'}
                      color={getStatusColor(row.status)}
                      size="small"
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >
        <DialogTitle>Validate Entry</DialogTitle>
        <DialogContent>
          Are you sure you want to validate this entry?
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => handleValidation(false)} 
            color="error"
          >
            Reject
          </Button>
          <Button 
            onClick={() => handleValidation(true)} 
            color="success"
            autoFocus
          >
            Validate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DataValidationPage;
