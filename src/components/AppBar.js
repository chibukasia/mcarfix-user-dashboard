import React from "react";
// import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar,Box, Toolbar, Typography, IconButton } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: "#fdf5f1"
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  

function AppBarComponent({handleCollapse}){

    return(
        <Box sx={{flexGrow: 1 }}>
            <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar variance="dense">
                    <IconButton edge="start" aria-label="menu" sx={{mr: 2 }} onClick={handleCollapse}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="primary" component="div">
                        McarFix
                    </Typography>
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </Box>
    )
}

export default AppBarComponent