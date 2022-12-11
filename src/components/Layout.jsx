import { React, useContext}  from "react";
import SideBar from './SideBar'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from "./dumbComponents/Footer";
import { useAuth } from '../context/authContext'

const Layout = () => {

    const { user } = useAuth()
    //    const authContext = useContext(context)

    console.log("users", user)
    return <>
        <canvas class="orb-canvas"></canvas>
        <div className="dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
            <SideBar />
            <div className="flex-grow overflow-hidden h-full flex flex-col">
                <NavBar />
                <Outlet />
                <Footer />
            </div>
        </div>

    </>

}

export default Layout