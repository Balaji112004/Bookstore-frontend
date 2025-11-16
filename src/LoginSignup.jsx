import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "./context/UserContext";
import { useNavigate } from "react-router-dom";

function LoginSignup() {
  const [mode, setMode] = useState("signup");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // 🔥 Backend Base URL
  const backendURL = "https://bookstorebackend-production-f262.up.railway.app";

  const [signupData, setSignupData] = useState({
    name: "",
    mobile: "",
    password: "",
    address: "",
    email: "",
  });

  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendURL}/api/user/signup`, signupData);
      alert("Signup successful! Please log in.");
      setMode("login");

      setSignupData({
        name: "",
        mobile: "",
        password: "",
        address: "",
        email: "",
      });
    } catch (err) {
      console.error("Signup failed:", err);
      alert("Signup failed! Try again.");
    }
  };

const handleLoginSubmit = async (e) => {
  e.preventDefault();
  console.log("Login attempt:", loginData); // <--- check values
  try {
    const res = await axios.post(`${backendURL}/api/user/login`, loginData);
    console.log("Login response:", res.data);
    if (res.data) {
      setUser(res.data);
      alert(`Welcome, ${res.data.name}!`);
      navigate("/home");
    } else {
      alert("Invalid credentials!");
    }
  } catch (err) {
    console.error("Login failed:", err);
    alert("Login failed!");
  }
};


  return (
    <div className="h-[20vh] ">
      <div className="h-[100%] flex justify-center items-center ">
        <h1 className="text-4xl font-bold p-20 pr-50 ml-3 ">
          {mode === "signup" ? "Sign Up" : "Login"}
        </h1>
      </div>

      <div className="h-[75vh] flex flex-col items-center">
        {mode === "signup" ? (
          <form onSubmit={handleSignupSubmit} className="lg:w-1/3">
            <h3 className="my-2 font-bold">Name</h3>
            <input
              className="border-2 p-2 pl-3 rounded w-full mb-3"
              type="text"
              value={signupData.name}
              name="name"
              placeholder="Enter Your Name"
              onChange={handleSignupChange}
            />

            <h3 className="my-2 font-bold">Mobile</h3>
            <input
              className="border-2 p-2 pl-3 rounded w-full mb-3"
              type="text"
              value={signupData.mobile}
              name="mobile"
              placeholder="Enter Your Mobile"
              onChange={handleSignupChange}
            />

            <h3 className="my-2 font-bold">E-Mail</h3>
            <input
              className="border-2 p-2 pl-3 rounded w-full mb-3"
              type="email"
              value={signupData.email}
              name="email"
              placeholder="Enter Your E-Mail"
              onChange={handleSignupChange}
            />

            <h3 className="my-2 font-bold">Password</h3>
            <input
              className="border-2 p-2 pl-3 rounded w-full mb-3"
              type="password"
              value={signupData.password}
              name="password"
              placeholder="Enter Your Password"
              onChange={handleSignupChange}
            />

            <h3 className="my-2 font-bold">Address</h3>
            <input
              className="border-2 p-2 pl-3 rounded w-full mb-3"
              type="text"
              value={signupData.address}
              name="address"
              placeholder="Enter Your Address"
              onChange={handleSignupChange}
            />

            <div className="flex gap-3 mt-4 pb-4 lg:pb-0 justify-between">
              <button
                type="submit"
                className="bg-blue-700 p-3 rounded-2xl text-white hover:bg-blue-500 px-4 text-lg"
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={() => setMode("login")}
                className="bg-gray-700 p-3 rounded-2xl text-white hover:bg-gray-500 px-4 text-lg"
              >
                Login
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleLoginSubmit} className=" lg:w-1/3">
            <h3 className="my-2 font-bold">Name</h3>
            <input
              className="border-2 p-2 pl-3 rounded w-full mb-3"
              type="text"
              value={loginData.name}
              name="name"
              placeholder="Enter Your Name"
              onChange={handleLoginChange}
            />

            <h3 className="my-2 font-bold">Password</h3>
            <input
              className="border-2 p-2 pl-3 rounded w-full mb-3"
              type="password"
              value={loginData.password}
              name="password"
              placeholder="Enter Your Password"
              onChange={handleLoginChange}
            />

            <div className="flex gap-3 mt-4 justify-between">
              <button
                type="submit"
                className="bg-blue-700 p-3 text-lg rounded-2xl text-white hover:bg-blue-500 px-4"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="bg-gray-700 p-3 text-lg rounded-2xl text-white hover:bg-gray-500 px-4"
              >
                Sign Up
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;

