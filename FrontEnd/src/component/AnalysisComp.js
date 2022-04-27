import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

export default function AnalysisComp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='addBttn'>
      <Button variant="outlined" onClick={handleClickOpen}
      sx={{
        color:'white',
        borderColor:'#14aff1',
        width:'160px',
        
      }}
      style={{
        borderTopRightRadius:'1px',
        borderTopLeftRadius:'1px',
        borderBottomRightRadius:'1px',
        borderBottomLeftRadius:'1px',
        borderRight:'0px',
        borderLeft:'0px',
      }}

      >
        ANALYTICS VIEW
      </Button>
      <Dialog open={open} onClose={handleClose}
      fullWidth
      maxWidth="lg"
      PaperProps={{
        style: {
          backgroundColor: '#283a45',
          boxShadow: '1px 1px cyan',
          color:'#FFFF'
        },
      }}
      >

        <DialogTitle>Edit Details</DialogTitle>
        <DialogContent >
          <DialogContentText>
            Please enter all the details carefully, it is mandatory to fill all the boxes.
             After that click on Add.
          </DialogContentText>
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m:1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
        </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
