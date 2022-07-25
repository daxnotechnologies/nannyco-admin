import React from "react";
import "./css/styles.css";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Card from '@mui/material/Card';

export default function Login(){
    return(
        <div className="container d-flex justify-content-center ">
            <div style={{width:700}}>

                    <Card style={{padding:30}} >
            <TextField className="my-4" fullWidth id="outlined-basic" label="Email" variant="outlined" />
            <TextField className="my-4" fullWidth id="outlined-basic" label="Password" variant="outlined" />
            <Button
            style={{backgroundColor:"#000", color:"#fff"}}
            className="my-4 "
        variant="contained"

        size="small"

        //   onClick={}
      >
       Login
      </Button>
      </Card>


                </div>



        </div>
    )
}