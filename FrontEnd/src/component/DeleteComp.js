import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


export default function DeleteComp(props) {
  const [open, setOpen] = React.useState(false);
  // const [status, setStatus] = React.useState(501);
  const {state, toggle, setToggle} = props
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // React.useEffect(()=>{
  //   console.log(props.state);
  // });
  
  const handleSubmit = ()=>{
    (toggle===true)?setToggle(false):setToggle(true)
    handleClose()
    axios.get(`http://localhost:8080/highradius/DeleteData?sl_no=${state}`)
    .then((response)=>{(response.status===200)?toast.success('Successfully Deleted!', {
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
    <div>
      <span className='addBttn'>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
/>
      <Button variant="outlined" disabled={props.state.length ===0 } onClick={handleClickOpen} endIcon={<DeleteIcon/>}
      sx={{
        borderTopRightRadius: '16px',
        borderBottomRightRadius: '16px',
        color:'white',
        borderColor:'#14aff1',
        width:'150px',
        '&.Mui-disabled':
        { color: 'white',} 
        
      }}
      style={{
        borderTopLeftRadius:'1px',
        borderBottomLeftRadius:'1px',
      }}>
        Delete
      </Button>
      </span>
      <Dialog open={open} onClose={handleClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        style: {
          backgroundColor: '#283a45',
          boxShadow: '1px 1px cyan',
          color:'#FFFF'
        },
      }}
      >

        <DialogTitle>Delete</DialogTitle>
        <DialogContent >
          <DialogContentText
          sx={{color:'white'}}>
            Are you sure you want to delete these records?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} sx={{backgroundColor:'#5f727e', color: 'white', minWidth:'49%', borderRadius:'16px'}} onMouseEnter = {changeBackground} onMouseLeave = {resetBackground}>Delete</Button>
          <Button onClick={handleClose} sx={{backgroundColor:'#5f727e', color: 'white', minWidth:'50%', borderRadius:'16px'}} onMouseEnter = {changeBackground} onMouseLeave = {resetBackground}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
