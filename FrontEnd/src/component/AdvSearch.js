import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

export default function AdvSearch(props) {
  const [open, setOpen] = React.useState(false);
  const {invoice, setInvoice, setAvsrch} = props;
  const handleClickOpen = () => {
    setOpen(true);
  };
  function changeBackground(e)
  {
    e.target.style.backgroundColor = '#14aff1';
  };

  function resetBackground(e)
  {
    
    e.target.style.backgroundColor = '#5f727e'
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onValueChange=(e)=>{
    console.log(e.target.value);
    setInvoice({...invoice, [e.target.name]:e.target.value});
  }

  const handleSubmit=()=>
  {
    setAvsrch(true);
    handleClose();
  }

  return (
    <div>
      <span className='addBttn'>
      <Button variant="outlined" onClick={handleClickOpen}
      sx={{
        borderTopRightRadius: '16px',
        borderBottomRightRadius: '16px',
        color:'white',
        borderColor:'#14aff1',
        width:'170px',
        
      }}
      style={{
        borderTopLeftRadius:'1px',
        borderBottomLeftRadius:'1px',
      }}>
        ADVANCE SEARCH
      </Button>
      </span>
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

        <DialogTitle>Advance Search</DialogTitle>
        <DialogContent >
          
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m:1, width: '25ch' },
        '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{backgroundColor:'white', borderRadius:'10px'},
        '.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root':{top:'8px'},
        // display:'flex',
        // justifyContent:'space-around'
        marginLeft:'25px',
        
      }}
      
      noValidate
      autoComplete="off"
    >
          <TextField
            autoFocus
            margin="dense"
            id="doc_id"
            label="Document Id"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="doc_id"
            value={invoice.doc_id}
          />
          <TextField
            autoFocus
            margin="dense"
            id="invoice_id"
            label="Invoice id"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="invoice_id"
            value={invoice.invoice_id}
          />
          <TextField
            autoFocus
            margin="dense"
            id="cust_number"
            label="Customer Number"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="cust_number"
            value={invoice.cust_number}
          />
          <TextField
            autoFocus
            margin="dense"
            id="buisness_year"
            label="Business Year"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e)=>onValueChange(e)}
            name="buisness_year"
            value={invoice.buisness_year}
          />
        </Box>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleSubmit} sx={{backgroundColor:'#5f727e', color: 'white', minWidth:'48%', borderRadius:'16px'}} onMouseEnter = {changeBackground} onMouseLeave = {resetBackground}>Search</Button>
          <Button onClick={handleClose} sx={{backgroundColor:'#5f727e', color: 'white', minWidth:'47%', borderRadius:'16px'}} onMouseEnter = {changeBackground} onMouseLeave = {resetBackground}>Cancel</Button>
       
        </DialogActions>
      </Dialog>
    </div>
  );
}
