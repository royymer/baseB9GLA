import React from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export default function Spinner(props) {
  
  return(
    <Backdrop  open={props.loading}>
        <CircularProgress color="inherit" />
    </Backdrop>
  );
}