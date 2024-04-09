import logo from './logo.svg';
import './App.css';
import { Toaster } from "react-hot-toast";
import {Login} from './components/auth/Login';
import { Partner } from './components/partner/Partner';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Login />
     
    </div>
  );
}

export default App;
