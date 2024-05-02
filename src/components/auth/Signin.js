import { useState } from "react";
import "../auth/Login.css";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Signin() {
  const navigate = useNavigate();
  // const apiUrl = process.env.REACT_APP_API_URL;
  // const apiKey = process.env.REACT_APP_LOGIN_KEY;

  const [cookies, setCookie] = useCookies(["name"]);
  const [spnieer, setspineer] = useState(false);
  const [logData, setLogData] = useState({ email: "", password: "" });

  const handlechange = (e) => {
    const { name, value } = e.target;
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (name === "email") {
      if (!emailRegex.test(value)) {
        // toast.error('Please enter a valid email address');
      }
    }
    setLogData({
      ...logData,
      [e.target.name]: e.target.value,
    });
  };

  const Check = (e) => {
    const expirationDate = new Date();

    // Set the expiration date to a date far into the future
    expirationDate.setFullYear(expirationDate.getFullYear() + 10);

    e.preventDefault();
    setspineer(true);
    axios
      .post(
        `https://jellyfish-app-6kizf.ondigitalocean.app/public/admin/login`,
        logData
      )
      .then((res) => {
        setspineer(false);
        toast.success(res?.data?.message);
        console.log(res?.data?.result);
        const item = localStorage.setItem("currentUser", res?.data?.result);
        console.log(item, "item");  
        console.log(localStorage.getItem("currentUser"));

        setTimeout(() => {
          navigate("/menu");
        }, 1000);
      })
      .catch((error) => {
        if (error?.response?.status === 400) {
          toast.error(error?.response?.data?.message);
          setspineer(false);
        } else if (error?.response?.status === 404) {
          toast.error("Network Error Retry");
          setspineer(false);
        } else if (error) {
          setspineer(false);
          toast.error(error.message);
        }
      });
  };
  return (
    <div className="w-full">
      <div
        className="auth-main-container w-full"
        style={{ paddingTop: "97px" }}
      >
        <div className="heading-container">
          <h2 className="heading">Welcome Back</h2>
          <p className="sec-heading" style={{ fontsize: "15px" }}>
            Take another step in your mobile journey!
          </p>
        </div>
        <form className="form-container">
          <div className="input-container">
            <input
              className="input"
              type="text"
              name="email"
              placeholder="Email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onChange={handlechange}
            />
          </div>
          <div className="input-container">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password "
              onChange={handlechange}
              maxLength={16}
            />
          </div>
          <div className="btn-container" onClick={(e) => Check(e)}>
            {spnieer === true ? (
              <div>
                <div
                  className="w-6 h-6 rounded-full animate-spin
               border-4 border-solid border-[black] border-t-transparent"
                ></div>
              </div>
            ) : (
              <div>
                <div className="w-6 h-6 "></div>
              </div>
            )}
            <div className="hover-div">
              <button className="submit-btn" type="submit">
                Log In
              </button>
              <button className="submit-btn1" type="submit">
                Log In
              </button>
            </div>
          </div>
        </form>
        <div className="footer-contanier">
          <div className="bounce-main-div">
            <div
              className="bounceLeft rotation flex "
              style={{
                marginTop: "3px",
                justifyContent: "flex-start",
                position: "relative",
              }}
            >
              <span className="bounce-div">NEXT</span>
              <div className="rotate-div"></div>
            </div>
            <p className="heading1" onClick={() => navigate("/signup")}>
              Sign Up
            </p>
          </div>
          <p className="heading1" onClick={() => navigate("/forgotpassword")}>
            Forgot Password ?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
