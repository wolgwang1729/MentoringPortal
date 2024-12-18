import React from "react";  
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Authorize } from './services/auth.services'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from "react";
import { login, logout } from "./features/authSlice";
import "./App.css"
import { Bounce, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


function Layout(){

    const [Loading, setLoading] = useState(true);
    const dispatch = useDispatch();
  
    const loadData = async () => {
  
      try {
          
        console.log("hello buddy");
        const res = await Authorize.getUser();
        dispatch(login({data : res.data}));
        setLoading(false);
  
      } catch (error) {
        dispatch(logout());
        setLoading(false);
      }
    }
  
  
    useEffect(()=>{
  
      loadData();
    },[])


    return Loading ? 
(    <div className="h-screen w-full flex justify-center items-center">
        <div className="loader"></div>
    </div>) : (
        <div className="relative">
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition: Bounce
          />
          <Header />
          <Outlet />
          <Footer />
        </div>
    )
}

export default Layout;