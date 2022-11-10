import { Component } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'


function ProtectedRoutes(props) {
    const [token, settoken] = useState(window.localStorage.getItem("token"))

    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.loggedIn.value)
    console.log("inside login", isLoggedIn.isLoggedIn)
    // let token = window.localStorage.getItem("token");
    console.log("inside login token", token)

    if (token == null) {
        navigate("/login")

        return;
    }

    return props.component
    // if(window.innerWidth<=500){
    //     // alert('mobile device entered')
    //     if (!props.navCloseStatus) {
    //         props.NAV_CLOSE()
    //         props.NAV_CLOSE_ORIGINAL_STATUS()
    //     }

    // }
    console.log('inside protected routes ....', isLoggedIn.isLoggedIn)
    // return  <Outlet/>
    // return isLoggedIn.isLoggedIn == true ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes