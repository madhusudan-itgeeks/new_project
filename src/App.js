import logo from './logo.svg';
import './App.css';
import { Toaster } from "react-hot-toast";
import {Login} from './components/auth/Login';
import { Partner } from './components/partner/Partner';
import ProtectedRoute from './routing/ProtectedRoute';
import Signin from './components/auth/Signin';
import AuthBanner from './components/auth/AuthBanner';
import Practice from './Practice';
import ImageUpload from './imageupload';


function App() {
  return (
    <div className="App">
      <Toaster />
      <ProtectedRoute/>
      {/* <Login /> */}
      {/* <Signin/> */}
      {/* <AuthBanner/> */}
      {/* <Practice/> */}
      {/* <ImageUpload/> */}

     
    </div>
  );
}

export default App;
