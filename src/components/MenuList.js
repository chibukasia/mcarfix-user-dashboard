import React, { useState } from 'react'
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LoginIcon from '@mui/icons-material/Login';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {Link} from 'react-router-dom'

function MenuList() {
    const [open, setOpen] = useState(false) 
    const [open1, setOpen1] = useState(false) 
    const [open2, setOpen2] = useState(false) 
    const [open3, setOpen3] = useState(false) 
    const [open4, setOpen4] = useState(false) 
    const [open5, setOpen5] = useState(false) 
    const [open6, setOpen6] = useState(false)

    function handleOpen(){
        setOpen(open=>!open)
    }

    function handleOpen1(){
        setOpen1(open=>!open)
    }

    function handleOpen2(){
        setOpen2(open=>!open)
    }

    function handleOpen3(){
        setOpen3(!open3)
    }

    function handleOpen4(){
        setOpen4(!open4)
    }

    function handleOpen5(){
        setOpen5(!open5)
    }

    function handleOpen6(){
        setOpen6(!open6)
    }
  return (
    <div className="side-menu">
        <h3>Hi, Test User</h3>
        <List
            sx={{ width: '100%', maxWidth: 360}}
            component="nav"
            // aria-labelledby="nested-list-subheader"
        >
            <Link to={'/dashboard'}>
                <ListItemButton sx={{':hover':{bgcolor: '#ed7f21'}}}>
                    <ListItemText primary="Dashboard" color='white'/>
                </ListItemButton>
            </Link>
            <Link to="/market_place">
                <ListItemButton sx={{':hover':{bgcolor: '#ed7f21'}}}>
                    <ListItemText primary="Market Place" color='white'/>
                </ListItemButton>
            </Link>
            <Link to="/problem">
                <ListItemButton sx={{':hover':{bgcolor: '#ed7f21'}}}>
                    <ListItemText primary="Problem/Symptom" color='white'/>
                </ListItemButton>
            </Link>
            <Link to="/part-dealers">
                <ListItemButton sx={{':hover':{bgcolor: '#ed7f21'}}}>
                    <ListItemText primary="Part Dealers" color='white'/>
                </ListItemButton>
            </Link>
            <ListItemButton sx={{':hover':{bgcolor: '#ed7f21'}}} onClick={handleOpen}>
                <ListItemText primary="Car Repairs" color='white'/>
                {open ? <ExpandMore/> : <KeyboardArrowRightIcon/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to={'/auto-garages'}>
                        <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        {/* <RadioButtonUncheckedIcon fontSize='small'/> */}
                            <ListItemText primary="Auto Garages" />
                        </ListItemButton>
                    </Link>
                    <Link to={'/authorized-mechanics'}>
                        <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'},pl: 3 }}>
                            <ListItemText primary="Authorized Mechanics" />
                        </ListItemButton>
                    </Link>
                </List>
            </Collapse>
            <ListItemButton sx={{':hover':{bgcolor: '#ed7f21'}}} onClick={handleOpen1}>
                <ListItemText primary="Services" color='white'/>
                {open1 ? <ExpandMore/> : <KeyboardArrowRightIcon/>}
            </ListItemButton>
            <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to={'/register-car'}>
                        <ListItemButton sx={{':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                            <ListItemText primary="Register Your Car" />
                        </ListItemButton>
                    </Link>
                    <Link to={'/service-checklist'}>
                        <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                            <ListItemText primary="Service Checklist" />
                        </ListItemButton>
                    </Link>
                    <ListItemButton sx={{':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Purchase Part" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Request Bookings" />
                    </ListItemButton>
                    <ListItemButton sx={{':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Generate Report" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Renew Insurance" />
                    </ListItemButton>
                    <ListItemButton sx={{':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="My Cars" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Report Theft" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Report Accident" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton sx={{':hover':{bgcolor: '#ed7f21'}}} onClick={handleOpen2}>
                <ListItemText primary="My Order History" color='white'/>
                {open2 ? <ExpandMore/> : <KeyboardArrowRightIcon/>}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Order Summary" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Pending Orders" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Requested Prices" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Accepted Orders" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Confirmed Orders" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Cancelled Orders" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton sx={{':hover':{bgcolor: '#ed7f21'}}} onClick={handleOpen3}>
                <ListItemText primary="User Activities" color='white'/>
                {open3 ? <ExpandMore/> : <KeyboardArrowRightIcon/>}
            </ListItemButton>
            <Collapse in={open3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Post An Issue" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Vehicles Owner Forum" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Vehicle Reported Stolen" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton sx={{':hover':{bgcolor: '#ed7f21'}}} onClick={handleOpen4}>
                <ListItemText primary="Informational" color='white'/>
                {open4 ? <ExpandMore/> : <KeyboardArrowRightIcon/>}
            </ListItemButton>
            <Collapse in={open4} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 2 }} onClick={handleOpen6}>
                        <ListItemText primary="News and Articles" />
                        {open6 ? <ExpandMore/>: <KeyboardArrowRightIcon />}
                    </ListItemButton>
                    <Collapse in={open6} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 2 }}>
                                <ListItemText primary="Feed" />
                            </ListItemButton>
                            <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 2 }}> 
                                <ListItemText primary="Post an Article" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Emergency Services" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Traffic and Rules" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Specialist Services" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Car Financing" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Motor Vehicles Regulators" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton sx={{':hover':{bgcolor: '#ed7f21'}}} onClick={handleOpen5}>
                <ListItemText primary="About mCarFix" color='white'/>
                {open5 ? <ExpandMore/> : <KeyboardArrowRightIcon/>}
            </ListItemButton>
            <Collapse in={open5} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Support" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="How it works" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Update Profile" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                    <ListItemButton sx={{ ':hover':{bgcolor: '#ed7f21'}, pl: 3 }}>
                        <ListItemText primary="Terms And Privacy Policy" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton sx={{':hover':{bgcolor: '#ed7f21'}}}>
                <ListItemText primary="Subscription History" color='white'/>
            </ListItemButton>
            <ListItemButton sx={{':hover':{bgcolor: '#ed7f21'}, pl: 1}}>
                <LoginIcon/>
                <ListItemText primary="Log out" color='white'/>
            </ListItemButton>
        </List>
    </div>
  )
}

export default MenuList