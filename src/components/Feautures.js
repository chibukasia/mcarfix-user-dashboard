import React from 'react'
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';
import service from '../icons/service.png'
import garage from '../icons/garage.png'
import symptom from '../icons/symptom.png'
import carpart from '../icons/carpart.png'

function Feautures() {
  return (
    <div className='features-container'>
        <div style={{textAlign: 'center'}}>
        <h1>Your Number Plate Your Solution</h1>
            <Link to='/register-car' style={{color: "green"}}>Click here to register your vehicle and enjoy all the benefits of mCarFix</Link>
        </div>
        <h2>Features</h2>
        <div className='items-div'> 
            <div className='item'>
                <div className='image-div' >
                    <img src={service} />
                </div>
                <div className='details'>
                    <Link to={'/register-car'}>
                        <h3>Register Your Car</h3>
                        <p>Connect with part dealers</p>
                    </Link>
                </div>
            </div>
            <div className='item'>
                <div className='image-div'>
                    <img src={carpart}/>
                </div>
                <div className='details'>
                    <Link to={'/part-dealers'}>
                        <h3>Part Dealers</h3>
                        <p>Connect with part dealers</p>
                    </Link>
                </div>
            </div>
            <div className='item'>
                <div className='image-div' >
                    <img src={symptom} />
                </div>
                <div className='details'>
                    <Link to={'/part-dealers'}>
                        <h3>Problem/Symptoms</h3>
                        <p>Connect with part dealers</p>
                    </Link>
                </div>
            </div>
            <div className='item'>
                <div className='image-div' >
                    <img src={service} />
                </div>
                <div className='details'>
                    <Link to={'/register-car'}>
                        <h3>Register Your Car</h3>
                        <p>Connect with part dealers</p>
                    </Link>
                </div>
            </div>
            <div className='item'>
                <div className='image-div'>
                    <img src={carpart}/>
                </div>
                <div className='details'>
                    <Link to={'/part-dealers'}>
                        <h3>Part Dealers</h3>
                        <p>Connect with part dealers</p>
                    </Link>
                </div>
            </div>
            <div className='item'>
                <div className='image-div' >
                    <img src={symptom} />
                </div>
                <div className='details'>
                    <Link to={'/part-dealers'}>
                        <h3>Problem/Symptoms</h3>
                        <p>Connect with part dealers</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feautures