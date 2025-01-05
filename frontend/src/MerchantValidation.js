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
  Chip, Select, MenuItem 
} from '@mui/material';
import Navbar from './navbar';
import Footer from "./Footer"
import NoData from "./assets/nodata.jpg"
const DataValidationPage = () => {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [openrejectform,setOpenrejectform]=useState(null);
  const store_name=localStorage.getItem("SN");
  const store_location=localStorage.getItem("SA");
  const phone_no=localStorage.getItem("WN");
  const [formData, setFormData] = React.useState({
      message: '',
      email:'',
      product_name:'',
      purchase_date:'',
      store_name:store_name,
      store_location:store_location,
      phone_no:phone_no,
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
    const [filterStatus, setFilterStatus] = useState('All');
    let temp;
    const handleFilterChange = async (value) => {
      temp=0;
      setFilterStatus(value);
      // console.log(value)
      try {
        const response = await axios.post('http://localhost:5000/warranty/setup/merchantverifications', {
          store_name: store_name, 
          store_location: store_location,
          status:value,
        });
        
        // console.log("API Response:", response.data); 
  
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
    
  const fetchData = async () => {
    temp=0;
    try {
      const response = await axios.post('http://localhost:5000/warranty/setup/merchantverifications', {
        store_name: store_name, 
        store_location: store_location,
        status:null,
      });
      
      // console.log("API Response:", response.data); 

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
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submit behavior
    try{
      // console.log(formData)
      const response= await axios.post('http://localhost:5000/warranty/setup/rejectwarranty' ,formData)
    //  alert("Message Has been sent Successfully")
     }
     catch(error)
     {
       console.log(error)
     }
    // console.log(formData.message)
    setOpenrejectform(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [yearexpiry,setYearexpiry]=useState([]);
  const [monthexpiry,setMonthexpiry]=useState([]);
  const handleyearchange=async(e)=>{
    e.preventDefault();
    setYearexpiry(e.target.value);
  }
  const handlemonthchange=async(e)=>{
    e.preventDefault();
    setMonthexpiry(e.target.value);
  }

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
        { status: updatedStatus ,
          year:yearexpiry,
          month:monthexpiry,
          currdate:selectedItem.purchase_date,
        }
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
      if(updatedStatus==='rejected'){
        setFormData({
          ...formData,
          ["product_name"]: selectedItem.product_name,
          ["purchase_date"]: selectedItem.purchase_date,
          ["email"]:selectedItem.email,
        })
        setOpenrejectform(true);
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
  let [nodata,setNodata]=useState(true);
  return (
    <>
    <Navbar></Navbar>
    {data.length ? (
      setNodata=false
    ): (
      setNodata=true
    )
    }
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
              <TableCell>
              <Select
                value={filterStatus}
                onChange={(e) => 
                  handleFilterChange(e.target.value)}
                // displayEmpty
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Pending Verification">Pending</MenuItem>
                <MenuItem value="validated">Completed</MenuItem>
                <MenuItem value="rejected">Cancelled</MenuItem>
              </Select>
              <br />
              Status
            </TableCell>
              <TableCell>Invoice</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              const fileTypePrefix = row.invoice.slice(0, 5);
              let fileType = "";
              let fileExtension = "";
              if (fileTypePrefix === "JVBER") {
                fileType = "application/pdf";
                fileExtension = "pdf";
              }
              else{
                fileType = "image/png";
                fileExtension = "png";
                
              }
              const curstatus=row.status
              // console.log(curstatus)
              temp++;
              // if(curstatus!=='rejected'){  
                return (
              
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
                    label={row.expiry_date>Date.now() ? 'Validated': 'Rejcted'}
                    color={getStatusColor(row.status || 'pending')}
                    size="small"
                    />
                </TableCell>
                <TableCell>
                  <a href={`data:${fileType};base64,${row.invoice}` }download={`invoice.${fileExtension}`}>Invoice Download</a></TableCell>
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
                      label={row.status === 'validated' ? 'Validated' : 'Rejected'}
                      color={getStatusColor(row.status)}
                      size="small"
                      />
                    )}
                </TableCell>
              </TableRow>
            )
        })}
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
        <div className="d-flex" style={{ maxWidth: '20rem', margin: '0 auto' }}>
  {/* <div className="text-center"> */}
    <div className='mx-2 d-flex'>
      Year:
      <input
        type="text"
        value={yearexpiry}
        onChange={handleyearchange}
        style={{ width: '100%' }}
      />
    </div>
    <div  className='mx-2 d-flex'>
      Month:
      <input
        type="text"
        value={monthexpiry}
        onChange={handlemonthchange}
        style={{ width: '100%' }}
      />
    {/* </div> */}
  </div>
</div>

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


      <Dialog
        open={openrejectform}
        onClose={() => setOpenrejectform(false)}
        >
        <DialogTitle>Justify Rejection</DialogTitle>
        
        <div className="container d-flex justify-content-center align-items-center ">
  {/* <div className="row w-100 justify-content-center"> */}
    {/* <div className="col-md-6 col-lg-4"> */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
        <div className="form-group mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Enter rejection message"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
            required
            />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3">
          Send
        </button>
      </form>
    {/* </div> */}
  {/* </div> */}
</div>


      </Dialog>
      
    </div>
    {setNodata ? (
      <>
      <div className="container d-flex justify-content-center align-items-center   ">
      <img src={NoData} style={{ 
        maxWidth: "50%", 
        maxHeight: "50%", 
        objectFit: "contain" 
      }}  ></img>
        </div>
      <br></br>
      <div className="container d-flex justify-content-center align-items-center display-6">No warranties found</div>
      </>
    ) : (
      <div></div>
    ) 
    }
        {/* <Footer></Footer> */}
            </>
  );
};

export default DataValidationPage;
