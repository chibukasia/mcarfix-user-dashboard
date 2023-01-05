// import logo from './logo.svg';
import './App.css';
// import AppBarComponent from './components/AppBar';
// import SideBar from './components/SideBar';
// import { width } from '@mui/system';
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import MarketPlace from './components/MarketPlace';
import PartDealers from './components/PartDealers';
import Problem from './components/Problem';
import SubscriptionHistory from './components/SubscriptionHistory';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div>
      <Routes>
        {/* <Route exact path='/' element={<App />}/> */}
        <Route exact path='/' element={<Home />}>
          <Route exact path='dashboard' element={<Dashboard/>} />
          <Route exact path='market_place' element={<MarketPlace />}/>
          <Route exact path='part-dealers' element={<PartDealers />}/>
          <Route exact path='problem' element={<Problem />}/>
          <Route exact path='subscription-history' element={<SubscriptionHistory />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
