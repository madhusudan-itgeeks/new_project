import logo from './logo.svg';
import './App.css';
import { Toaster } from "react-hot-toast";
import {Login} from './components/auth/Login';
import { Partner } from './components/partner/Partner';

function App() {
  return (
  <>
   <div>
        <Toaster position="top-right" reverseOrder={true} />
        
      </div>
      <div>
        {/* <Login/> */}
        <Partner/>
       </div>
    </>
     
  );
}

export default App;
