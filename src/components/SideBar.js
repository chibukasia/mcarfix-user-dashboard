import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import LoginIcon from '@mui/icons-material/Login';
import {Link} from 'react-router-dom'
// import service from '../icons/service.png'
// import Link from 'react-router-dom'
// import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';


function SideBar(){
    return (
        <div className="side-menu">
            <h3>Hi, Test User</h3>
            <div className="side-list">
            <Link to="/"><div className="li-div"><li>Dashboard</li></div></Link>
            <Link to="/market_place"><div className="li-div"><li>Market Place</li></div></Link>
            <Link to="/problem"><div className="li-div"><li>Problem/Symptom</li></div></Link>
            <Link to="/part-dealers"><div className="li-div"><li>Part Dealers</li></div></Link>
            <Link to="/car_repairs"><div className="li-div"><li>Car Repairs</li></div></Link>
            <Link to="/service"><div className="li-div"><li>Service</li></div></Link>
            <Link to="/my_order_history"><div className="li-div"><li>My Order History</li></div></Link>
            <Link to="/user_activities"><div className="li-div"><li>User Activities</li></div></Link>
            <Link to="/informational"><div className="li-div"><li>Informational</li></div></Link>
            <Link to="/about_mcarfix"><div className="li-div"><li>About McarFix</li></div></Link>
            <Link to="/subscription-history"><div className="li-div"><li>Subscription History</li></div></Link>
            <Link to="/logout"><div className="li-div"><li><LoginIcon  fontSize="small"/> <span>Log Out</span></li></div></Link>
            </div>
        </div>
    )
}

export default SideBar