import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"



export default function EditComp(props) {


  const [open, setOpen] = React.useState(false);
  const [invoice, setInvoice] = React.useState({invoice_currency:'USD', cust_payment_terms:'NAH4'})
  // const [status, setStatus] = React.useState();
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const {state, toggle,setToggle} = props
  const handleClose = () => {
    setOpen(false);
  };
  const onValueChange=(e)=>{
    // console.log(e.target.value);
    setInvoice({...invoice, [e.target.name]:e.target.value});
  }

  const handleSubmit = ()=>{
    // setStatus(0);
    (toggle===true)?setToggle(false):setToggle(true)
    handleClose()
    
    axios.get(`http://localhost:8080/highradius/EditServ?invoice_currency=${invoice["invoice_currency"]}&cust_payment_terms=${invoice["cust_payment_terms"]}&sl_no=${state}`)
    .then((response)=>{(response.status===200)?toast.success('Successfully Edited!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    :toast.error('Failed to Edit!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
  })
  };
  function changeBackground(e)
  {
    e.target.style.backgroundColor = '#14aff1';
  };

  function resetBackground(e)
  {
    
    e.target.style.backgroundColor = '#5f727e'
  };

  return (
    <div className='addBttn'>
       {/* <ToastContainer position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
/> */}
      <Button variant="outlined" startIcon={<EditIcon/>} onClick={handleClickOpen} disabled={props.state.length !==1 }
      sx={{
        color:'#FFFF',
        borderColor:'#14aff1',
        width:'150px',
        '&.Mui-disabled':
        { color: 'white',}        
      }}
      
      style={{
        borderRight:'0px',
        borderLeft:'0px',
        borderTopRightRadius:'1px',
        borderTopLeftRadius:'1px',
        borderBottomRightRadius:'1px',
        borderBottomLeftRadius:'1px',
      }}
      >
        EDIT
      </Button>
      <Dialog open={open} onClose={handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        style: {
          backgroundColor: '#283a45',
          boxShadow: '1px 1px cyan',
          color:'#FFFF'
        },
      }}
      >

        <DialogTitle>Edit</DialogTitle>
        <DialogContent >
          
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m:1, width: '25ch' },
        '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{backgroundColor:'white', borderRadius:'10px'},
        '.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root':{top:'8px'},
        display:'flex',
        justifyContent:'space-around'
        
      }}
      
      
      noValidate
      autoComplete="off"
    >
          <TextField
            autoFocus
            margin="dense"
            id="invoice_currency"
            label="Invoice Currency"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="invoice_currency"
            value={invoice.invoice_currency}
          />
          <TextField
            
            margin="dense"
            id="cust_payment_terms"
            label="Customer Payment Terms"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="cust_payment_terms"
            value={invoice.cust_payment_terms}
          />
        </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} sx={{backgroundColor:'#5f727e', color: 'white', minWidth:'49%', borderRadius:'16px'}} onMouseEnter = {changeBackground} onMouseLeave = {resetBackground}>EDIT</Button>
          <Button onClick={handleClose} sx={{backgroundColor:'#5f727e', color: 'white', minWidth:'50%', borderRadius:'16px'}} onMouseEnter = {changeBackground} onMouseLeave = {resetBackground}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
