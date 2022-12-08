import React from "react";
import SideBar from './SideBar'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from "./dumbComponents/Footer";

const Layout = () => {
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