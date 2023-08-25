import { Routes, Route, BrowserRouter } from "react-router-dom";

import Welcome from '../src/components/Welcome.js';
import Properties from './pages/Properties.js';
import Goldenvisa from "./pages/Goldenvisa.js"
// import Header from './components/Header';
// import Footer from './components/Footer.js'
import About from './pages/About.js';
import Signup from './pages/Signup.js';
import ConfirmEmail from './pages/ConfirmEmail.js';
import CreatePassword from './pages/CreatePassword.js';
import PhoneNumber from './pages/PhoneNumber.js';
import VerifyNumber from './pages/VerifyNumber.js';
import Login from './pages/Login.js';
import ForgotPassword from './pages/ForgotPassword.js';
import SellWithStake from './pages/SellWithStake.js';
import Profile from "./pages/Profile.js";
import Wallet from "./pages/Wallet.js";
import ExitWindows from "./pages/ExitWindows.js";
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Welcome/>}> </Route>
        <Route path="/properties" element={<Properties/>}> </Route>
        <Route path="/about" element={<About/>}> </Route>
        <Route path="/goldenvisa" element={<Goldenvisa/>}> </Route>
        <Route path="/signup" element={<Signup/>}> </Route>
        <Route path="/confirmemail" element={<ConfirmEmail/>}> </Route>
        <Route path="/createpassword" element={<CreatePassword/>}> </Route>
        <Route path="/phonenumber" element={<PhoneNumber/>}> </Route>
        <Route path="/verifynumber" element={<VerifyNumber/>}> </Route>
        <Route path="/login" element={<Login/>}> </Route>
        <Route path="/forgotpassword" element={<ForgotPassword/>}> </Route>
        <Route path="/sell-with-stake" element={<SellWithStake/>}> </Route>
        <Route path="/profile" element={<Profile/>}> </Route>
        <Route path="/wallet" element={<Wallet/>}> </Route>
        <Route path="/exitwindows" element={<ExitWindows/>}> </Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
