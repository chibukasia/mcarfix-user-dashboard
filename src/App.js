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
import RegisterYourCar from './components/services/RegisterYourCar';
import AutoGuarages from './components/car_repairs/AutoGuarages';
import AuthorizedMechanics from './components/car_repairs/AuthorizedMechanics'
import GenerateReports from './components/services/GenerateReports';
import MyCars from './components/services/MyCars';
import PurchasePart from './components/services/PurchasePart';
import RenewInsurance from './components/services/RenewInsurance';
import ReportAccident from './components/services/ReportAccident'
import ReportTheft from './components/services/ReportTheft';
import RequestedBookings from './components/services/RequestedBookings';
import ServiceChecklist from './components/services/ServiceChecklist';
import AcceptedOrders from './components/my_order_history/AcceptedOrders';
import CancelledOrders from './components/my_order_history/CancelledOrders';
import ConfirmedOrders from './components/my_order_history/ConfirmedOrders';
import OrderSummary from './components/my_order_history/OrderSummary';
import PendingOrders from './components/my_order_history/PendingOrders';
import RequestedPrices from './components/my_order_history/RequestedPrices';
import PostAnIssue from './components/user_activities/PostAnIssue';
import VehicleOwnerForum from './components/user_activities/VehicleOwnerForum';
import VehicleReportedStolen from './components/user_activities/VehicleReportedStolen';
import CarFinancing from './components/informational/CarFinancing';
import EmergencyServices from './components/informational/EmergencyServices';
import Feed from './components/informational/Feed';
import MotorVehicleRegulators from './components/informational/MotorVehicleRegulators';
import PostAnArticle from './components/informational/PostAnArticle';
import SpecialistServices from './components/informational/SpecialistServices';
import TrafficAndRules from './components/informational/TrafficAndRules';
import HowItWorks from './components/about_mcarfix/HowItWorks';
import Profile from './components/about_mcarfix/Profile';
import Support from './components/about_mcarfix/Support';
import TermsAndPrivacyPolicy from './components/about_mcarfix/TermsAndPrivacyPolicy';
import UpdateProfile from './components/about_mcarfix/UpdateProfile';

function App() {
  return (
    <div>
      <Routes>
        {/* <Route exact path='/' element={<App />}/> */}
        <Route exact path='/' element={<Home />}>
          <Route exact path='dashboard' element={<Dashboard/>} />
          <Route exact path='market-place' element={<MarketPlace />}/>
          <Route exact path='part-dealers' element={<PartDealers />}/>
          <Route exact path='problem' element={<Problem />}/>
          <Route exact path='subscription-history' element={<SubscriptionHistory />}/>
          <Route exact path='register-car' element={<RegisterYourCar />}/>
          <Route exact path='auto-garages' element={<AutoGuarages/>}/>
          <Route exact path='authorized-mechanics' element={<AuthorizedMechanics/>}/>
          <Route exact path='generate-reports' element={<GenerateReports/>}/>
          <Route exact path='my-cars' element={<MyCars/>}/>
          <Route exact path='purchase-part' element={<PurchasePart/>}/>
          <Route exact path='renew-insurance' element={<RenewInsurance/>}/>
          <Route exact path='report-accident' element={<ReportAccident/>}/>
          <Route exact path='report-theft' element={<ReportTheft/>}/>
          <Route exact path='requested-bookings' element={<RequestedBookings/>}/>
          <Route exact path='service-checklist' element={<ServiceChecklist/>}/>
          <Route exact path='accepted-orders' element={<AcceptedOrders/>}/>
          <Route exact path='cancelled-orders' element={<CancelledOrders/>}/>
          <Route exact path='confirmed-orders' element={<ConfirmedOrders/>}/>
          <Route exact path='order-summary' element={<OrderSummary/>}/>
          <Route exact path='pending-orders' element={<PendingOrders/>}/>
          <Route exact path='requested-prices' element={<RequestedPrices/>}/>
          <Route exact path='post-an-issue' element={<PostAnIssue/>}/>
          <Route exact path='vehicle-owner-forum' element={<VehicleOwnerForum/>}/>
          <Route exact path='vehicle-reported-stolen' element={<VehicleReportedStolen/>}/>
          <Route exact path='car-financing' element={<CarFinancing/>}/>
          <Route exact path='emergency-services' element={<EmergencyServices/>}/>
          <Route exact path='feed' element={<Feed/>}/>
          <Route exact path='motor-vehicles-regulators' element={<MotorVehicleRegulators/>}/>
          <Route exact path='post-an-article' element={<PostAnArticle/>}/>
          <Route exact path='specialist-services' element={<SpecialistServices/>}/>
          <Route exact path='traffic-and-rules' element={<TrafficAndRules/>}/>
          <Route exact path='how-it-works' element={<HowItWorks/>}/>
          <Route exact path='profile' element={<Profile/>}/>
          <Route exact path='support' element={<Support/>}/>
          <Route exact path='terms-and-privacy-policy' element={<TermsAndPrivacyPolicy/>}/>
          <Route exact path='update-profile' element={<UpdateProfile/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
