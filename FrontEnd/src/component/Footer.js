import React from 'react';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';

function Footer(props) {
  return (
    <Grid
      item
      xs={12}
      style={{
        position:"relative",
        padding: "0px",
        display: 'flex',
        width:"100%",
        justifyContent: 'center',
        alignItems: "center",
        
      }}
    >
      <Typography sx={{ color: 'white', backgroundColor:'#2e4351', fontSize:'14px' }}>
      <a href='https://www.highradius.com/privacy-policy/' style={{color:'#14aff1'}}>Privacy Policy </a> | <span>&#169;</span> Copyright 2022 Highradius. All Rights Reserved.
      </Typography>
    </Grid>
  )
}

export default Footer;
