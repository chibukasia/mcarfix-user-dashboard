import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  '& .MuiTextField-root': { m: 1, width: '25ch' },
};

export default function FormModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Smell like</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" noValidate autoComplete='off'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Fill in
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <TextField
        //   error
          id="outlined-basic"
          label="Issue"
          defaultValue="Problem"
        />
        <TextField
        //   error
          id="outlined-error-helper-text"
          label="Problem"
          defaultValue="Problem"
        />
        <TextField id="outlined-basic" label="Problem" variant="outlined" defaultValue="Problem" />
        <TextField id="outlined-basic" label="Issue" variant="outlined" defaultValue="Problem"/>
        <TextField id="outlined-basic" label="Problem" variant="outlined" defaultValue="Problem"/>
        <TextField id="outlined-basic" label="Issue" variant="outlined" defaultValue="Problem"/>
        <Button sx={{width: '100%', backgroundColor: "#ed7f21"}}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}