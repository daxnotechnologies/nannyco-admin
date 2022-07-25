import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React ,{useState} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

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
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "NannyName",
    headerName: "Nanny Name",
    flex: 1,
  },
  {
    field: "Email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "Phone",
    headerName: "Phone",
    flex: 1,
  },
  {
    field: "Gender",
    headerName: "Gender",
    flex: 1,
  },
  {
    field: "Action",
    headerName: "Action",
    flex: 1,
    editable: false,
    renderCell: ActionButton,
  },
];

function ActionButton() {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        //   onClick={}
      >
        View
      </Button>

      <Modal
        // open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}></Box> */}
      </Modal>

      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        //   onClick={}
      >
        Edit
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        //   onClick={}
      >
        Delete
      </Button>
    </>
  );
}

export default function AllNanies() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <h1>All AllNanies</h1>
      <div>
        <DataGrid
          style={{ height: "70vh", width: "100%" }}
          columns={columns}
          rows={rows}
          getRowId={(Rows) => Rows._id}
          pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
