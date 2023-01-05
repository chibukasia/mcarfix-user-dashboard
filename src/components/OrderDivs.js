import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import * as UI from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="order">
        <div className="order-div">
          <div className="icon-div">
            <ShoppingCartIcon fontSize="large" />
          </div>
          <div className="text-div">
            <Typography>Pending Orders</Typography>
            <Typography>70 Order(s)</Typography>
            {/* <ArrowForwardIcon/> */}
          </div>
        </div>
        <div className="order-div">
          <div className="icon-div">
            <ShoppingCartCheckoutIcon fontSize="large" />
          </div>
          <div className="text-div">
            <Typography>Requested Orders</Typography>
            <Typography>70 Order(s)</Typography>
          </div>
        </div>
        <div className="order-div">
          <div className="icon-div">
            <AddShoppingCartIcon fontSize="large" />
          </div>
          <div className="text-div">
            <Typography>Accepted Orders</Typography>
            <Typography>70 Order(s)</Typography>
          </div>
        </div>
        <div className="order-div">
          <div className="icon-div">
            <SendIcon fontSize="large" />
          </div>
          <div className="text-div">
            <Typography>Confirmed Orders</Typography>
            <Typography>70 Order(s)</Typography>
          </div>
        </div>
        <div className="order-div">
          <div className="icon-div">
            <DeleteIcon fontSize="large" />
          </div>
          <div className="text-div">
            <Typography>Confirmed Orders</Typography>
            <Typography>70 Order(s)</Typography>
          </div>
        </div>
      </div>
      <div style={{backgroundColor: '#ededed'}}>
        <h1 style={{textAlign: 'center'}}>Your Number Plate Your Solution</h1>
      </div>
    </Box>
  );
}
