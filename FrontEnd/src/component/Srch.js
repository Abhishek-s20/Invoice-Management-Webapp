import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const Srch = (props) => {
  // const [name, setName] = React.useState('');
  const {setSearch, search,setSendRequest } = props;
    const handleChange=(event)=>{
      setSendRequest(false);
      console.log(event.target.value);
      setSearch(event.target.value);
    };
  return (
    <span>
        <TextField id="input-with-sx"
          // label="Search Customer ID"
          variant="outlined"
          value={search}
          placeholder='Search Customer Id'
          onChange={handleChange}
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        autoComplete='off'
        sx={{
            backgroundColor:'white',
            borderRadius:'15px',
            // '.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root':
            // {
                
            // },
            '.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root': {
                /* align-items: center; */
                /* justify-items: center; */
                /* justify-content: center; */
                /* justify-self: center; */
                /* align-content: center; */
                left: '50px',
                top: '10px',
                color:'#14aff1',
                
               
            }
        }}/>
    </span>
  )
}
