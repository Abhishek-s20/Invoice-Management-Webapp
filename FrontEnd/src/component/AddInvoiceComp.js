import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { GridAddIcon } from '@mui/x-data-grid';
import axios from 'axios';
import { Alert, AlertTitle } from '@mui/material';
import { toast} from "react-toastify";

export default function AddInvoiceComp() {
  const [open, setOpen] = React.useState(false);
  const [invoice, setInvoice] = React.useState({business_code:"",cust_number:'', clear_date:'', buisness_year:'', doc_id:'', posting_date:'', document_create_date:'', due_in_date:'', invoice_currency:'', document_type:'', posting_id:'', area_business:'', total_open_amount:'', baseline_create_date:'', cust_payment_terms:'', invoice_id:'', isOpen:'', aging_bucket:'', is_deleted:''})
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    <Alert severity="success">
    <AlertTitle>Success</AlertTitle>
    This is a success alert — <strong>check it out!</strong>
  </Alert>
    setOpen(false);
  };

  const onValueChange = (e) =>
  {
    // console.log(invoice);
    setInvoice({...invoice, [e.target.name]:e.target.value});
  };

  const handleSubmit = ()=>{
    // handleClose()
    axios.get(`http://localhost:8080/highradius/AddData?business_code=${invoice["business_code"]}&cust_number=${invoice["cust_number"]}&clear_date=${invoice["clear_date"]}&buisness_year=${invoice["buisness_year"]}&doc_id=${invoice["doc_id"]}&posting_date=${invoice["posting_date"]}&document_create_date=${invoice["document_create_date"]}&due_in_date=${invoice["due_in_date"]}&invoice_currency=${invoice["invoice_currency"]}&document_type=${invoice["document_type"]}&posting_id=${invoice["posting_id"]}&area_business=${invoice["area_business"]}&total_open_amount=${invoice["total_open_amount"]}&baseline_create_date=${invoice["baseline_create_date"]}&cust_payment_terms=${invoice["cust_payment_terms"]}&invoice_id=${invoice["invoice_id"]}`)
    .then((response)=>{(response.status===200)?toast.success('Added record successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
  :toast.error('Failed to add!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
});
    handleClose()
  }
  function changeBackground(e)
  {
    e.target.style.backgroundColor = '#14aff1';
  };

  function resetBackground(e)
  {
    
    e.target.style.backgroundColor = '#5f727e'
  };

  return (
    <div>
      <span className='addBttn'>
      <Button variant="outlined" startIcon={<GridAddIcon/>} onClick={handleClickOpen}
      sx={{
        borderTopLeftRadius: '16px',
        borderBottomLeftRadius: '16px',
        color:'white',
        borderColor:'#14aff1',
        width:'150px',
      }}
      style={{
        borderTopRightRadius:'1px',
        borderBottomRightRadius:'1px',
      }}>
        Add
      </Button>
      </span>
      <Dialog open={open} onClose={handleClose}
      fullWidth
      maxWidth="lg"
      PaperProps={{
        style: {
          backgroundColor: 'rgb(27 51 67)',
          // boxShadow: '1px 1px cyan',
          color:'#FFFF',
          borderRadius:'10px',
        },
      }}
      >

        <DialogTitle>Add</DialogTitle>
        <DialogContent>
          
          <Box
      component="form"
      sx={{
        // display:'flex',
        // justifyContent:'space-between',
        // flexWrap:'wrap',
        '& > :not(style)': { m:1, width: '25ch' },
        '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{backgroundColor:'white', borderRadius:'10px'},
        '.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root':{top:'8px'},
        marginLeft:'60px',
      }}
      noValidate
      autoComplete="off"
    >
          <TextField
            autoFocus
            margin="dense"
            id="business_code"
            label="Business Code"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="business_code"
            value={invoice.business_code}
          />
          <TextField
            autoFocus
            margin="dense"
            id="cust_number"
            label="Customer Number"
            type="number"
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="cust_number"
            value={invoice.cust_number}
          />
          <TextField
            autoFocus
            margin="dense"
            id="clear_date"
            label="Clear Date"
            type="date"
            InputLabelProps={{ shrink: true, required: true }}
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="clear_date"
            value={invoice.clear_date}
          />
          <TextField
            autoFocus
            margin="dense"
            id="buisness_year"
            label="Business Year"
            type="number"
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="buisness_year"
            value={invoice.buisness_year}
          />
          <TextField
            autoFocus
            margin="dense"
            id="doc_id"
            label="Document id"
            type="number"
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="doc_id"
            value={invoice.doc_id}
          />
          <TextField
            autoFocus
            margin="dense"
            id="posting_date"
            label="Posting Date"
            type="date"
            InputLabelProps={{ shrink: true, required: true }}
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="posting_date"
            value={invoice.posting_date}
          />
          <TextField
            autoFocus
            margin="dense"
            id="document_create_date"
            label="Document Create Date"
            type="date"
            InputLabelProps={{ shrink: true, required: true }}
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="document_create_date"
            value={invoice.document_create_date}
          />
          <TextField
            autoFocus
            margin="dense"
            id="due_in_date"
            label="Due Date"
            type="date"
            InputLabelProps={{ shrink: true, required: true }}
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="due_in_date"
            value={invoice.due_in_date}
          />
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
            autoFocus
            margin="dense"
            id="document_type"
            label="Document Type"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="document_type"
            value={invoice.document_type}
          />
          <TextField
            autoFocus
            margin="dense"
            id="posting_id"
            label="Posting Id"
            type="number"
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="posting_id"
            value={invoice.posting_id}
          />
          <TextField
            autoFocus
            margin="dense"
            id="total_open_amount"
            label="Total open amount"
            type="number"
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="total_open_amount"
            value={invoice.total_open_amount}
          />
          <TextField
            autoFocus
            margin="dense"
            id="baseline_create_date"
            label="Baseline Create Date"
            type="date"
            InputLabelProps={{ shrink: true, required: true }}
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="baseline_create_date"
            value={invoice.baseline_create_date}
          />
          <TextField
            autoFocus
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
          <TextField
            autoFocus
            margin="dense"
            id="'invoice_id'"
            label="Invoice Id"
            type="number"
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="invoice_id"
            value={invoice.invoice_id}
          />
        </Box>
        </DialogContent>
        <DialogActions style={{justifyContent:'center'}}>
          <Button onClick={handleSubmit} sx={{backgroundColor:'#5f727e', color: 'white', minWidth:'48%', borderRadius:'16px'}} onMouseEnter = {changeBackground} onMouseLeave = {resetBackground}>Add</Button>
          <Button onClick={handleClose} sx={{backgroundColor:'#5f727e', color: 'white', minWidth:'47%', borderRadius:'16px'}} onMouseEnter = {changeBackground} onMouseLeave = {resetBackground}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
