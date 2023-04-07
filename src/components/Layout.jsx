import { React, useContext}  from "react";
import SideBar from './SideBar'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
//import Footer from "./dumbComponents/Footer";
import { useAuth } from '../context/authContext'
import WeatherPanel from "./Weather/WeatherPanel";

const Layout = () => {

    const { user } = useAuth()
    //    const authContext = useContext(context)

    //console.log("users", user)
    return <>
        <div className=" dark:text-white text-gray-600 flex text-sm">
            <SideBar />
            <div className="flex-grow overflow-hidden h-full flex flex-col">
                <NavBar />
                <Outlet />
            </div>
        </div>

    </>

}

export default Layout