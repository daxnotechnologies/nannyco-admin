import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, {useState} from "react";
import "./css/styles.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import userimage from './user.jpg'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
};

const columns = [
  { field: 'id', headerName: 'ID', flex:1 },
  {
    field: "ParentName",
    headerName: "Parent Name",
    flex: 1,
  },
  {
    field: "Username",
    headerName: "Username",
    flex: 1,
  },
  {
    field: "PhoneEmail",
    headerName: "Phone/Email",
    flex: 1,
  },

  {
    field: "Action",
    headerName: "Action",
    flex: 3,
    editable: false,
    renderCell: ActionButton,
  },
];

const rows = [
  { id: 1, ParentName: 'Snow', Username: 'Jon', PhoneEmail: 35 },
  { id: 2, ParentName: 'Snow', Username: 'Jon', PhoneEmail: 35 },


];

function ActionButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
          <Button
        variant="contained"
        style={{backgroundColor:"#000", color:"#fff", marginLeft: 16}}
        size="small"

        // onClick={setOpen(true)}
      >
        View Children
      </Button>
      <Button
        variant="contained"
        size="small"
        style={{backgroundColor:"#000", color:"#fff", marginLeft: 16}}
        onClick={handleOpen}
      >
        View
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card style={{padding:20, marginBottom:8}}>
            <div className="row">
            <div className="col-3">
            <img src={userimage} width="100" height="50" />

            </div>

          <div className="col d-flex align-items-center"> 
          <div>         
            <h2><b>John Andrew</b></h2>
            <h6>John_001</h6>
            </div>
          </div>
          </div>
          </Card>
          <Card style={{ padding:30}}>
            <h6><LocalPhoneIcon  style={{marginRight:10}}/> +1-202-555-0183</h6>
            <h6><PersonIcon style={{marginRight:10}}/> Male</h6>
            <h6><CalendarMonthIcon style={{marginRight:10}}/>16-04-2000</h6>
            <h6><LocationOnIcon style={{marginRight:10}}/>Address: 45 Berkshire Avenue Revere</h6>
          </Card>
          <Button
        variant="contained"
        style={{backgroundColor:"#000", color:"#fff", marginTop: 20}}
        size="medium"

        //   onClick={}
      >
        Edit Profile
      </Button>




        </Box>
      </Modal>



      <Button
        variant="contained"
        style={{backgroundColor:"#000", color:"#fff", marginLeft: 16}}
        size="small"
        //   onClick={}
      >
        Delete
      </Button>
    </>
  );
}

export default function AllParents() {
  // const [rows, setRows] = useState([]);

  return (
    <div className="container" style={{height:700,padding:30, width: "100%"}}>
      <h1 style={{paddingBottom: 40, textAlign:"center"}}><b>All Parents</b></h1>
      <div>
        <DataGrid
          style={{ height: "70vh", width: "100%" }}
          columns={columns}
          rows={rows}
          pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
