import React, { useState } from "react";
import { NavLink as NavLinkRouterReact, Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../components/sidebar.css'

const NavLink = ({ to, children, ...props}) => {
  return (
    <NavLinkRouterReact 
    { ...props }
    className={({isActive}) => isActive ? 'text-blue bg-black bg-opacity-10' : undefined}
    to={to}
    >{children}
    </NavLinkRouterReact>
  )
}


const SideBar = () => {

  const [open, setOpen] = useState(false);
  
    return <>
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-40" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        {/*
          <div className="w-24 h-16 text-blue-500 flex items-center justify-center">
              <img src={logo} alt="" />
          </div>
        */}
        <div className="py-3 pt-6 px-1 flex justify-end">
          <div
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <div className={`${
          open ? "b-active burger" : "burger"
        } `}>
              <svg width="90%" height="90%" viewBox="0 0 26 24">
                <rect y="0" width="26" height="3" fill="white"></rect>
                <rect y="10" width="26" height="3" fill="white"></rect>
                <rect y="20" width="26" height="3" fill="white" />
              </svg>  
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 relative">
 
        <NavLink
            to='/'
            className="group flex items-center text-sm gap-3.5 font-medium hover:bg-gray-800 rounded-md">
            <div className="flex pb-8">
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="" viewBox="0 0 16 16">
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                </svg>
              </div>                
              <h1 style={{ transitionDelay: `100ms`,   }}
                className={`whitespace-pre pl-2 font-bold duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              > Home </h1>
            </div>
          </NavLink>

          <NavLink
            to='/home'
            className="group flex items-center text-sm gap-3.5 font-medium hover:bg-gray-800 rounded-md">
            <div className="flex pb-8">
              <div className="text-blue">
                <svg viewBox="0 0 15 15" width="23" height="23" data-reactid=".0.1.0.1.0.$airfield.0"><title data-reactid=".0.1.0.1.0.$airfield.0.0">airfield</title><path fill="#FFFF" d="m 6.818182,0.6818182 -2.045455,0 C 4.090909,0.6818182 4.090909,0 4.772727,0 l 5.454546,0 c 0.681818,0 0.681818,0.6818182 0,0.6818182 l -2.045455,0 c 0,0 0.818182,0.590909 0.818182,1.9545454 L 9,4 15,4 15,6 9,8 8.5,13 11,14.318182 11,15 4,15 4,14.318182 6.5,13 6,8 0,6 0,4 6,4 6,2.6363636 C 6,1.2727272 6.818182,0.6818182 6.818182,0.6818182 Z" data-reactid=".0.1.0.1.0.$airfield.0.4:$0"></path></svg>
              </div>                
              <h1 style={{ transitionDelay: `100ms`,   }}
                className={`whitespace-pre pl-2 font-bold duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              > Tandas </h1>
            </div>
          </NavLink>

          <NavLink
            to='/beer'
            className="group flex items-center text-sm gap-3.5 font-medium hover:bg-gray-800 rounded-md">
            <div className="flex pb-8">
              <div className="">
              <svg class="beer-svg" width="29" height="29" viewBox="0 0 138 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.17578 128C8.74229 131.624 9.71024 134.597 11.2691 137.24C13.653 141.282 16.9519 144.709 20.9007 147.244C28.3074 152 38.612 152 59.2211 152C79.8302 152 90.1347 152 97.5415 147.244C101.49 144.709 104.789 141.282 107.173 137.24C108.732 134.597 109.7 131.624 110.266 128H8.17578Z" fill="#FAD000" />
                <rect class="beer-height" x="33" y="24" width="93" height="0" fill="#FFFF" />
                <path d="M107 59H122.466C129.663 59 135.241 65.2916 134.379 72.437L131.123 99.437C130.395 105.465 125.281 110 119.209 110H107" stroke="black" stroke-width="6" />
                <path d="M105.847 70.0425L106.928 98.1551C107.339 108.851 107.635 116.649 107.256 122.749C106.88 128.803 105.85 132.843 103.833 136.127C101.796 139.447 99.0637 142.285 95.8254 144.449C92.6208 146.591 88.623 147.775 82.5888 148.383C76.5076 148.996 68.7038 149 58 149C47.2962 149 39.4924 148.996 33.4112 148.383C27.377 147.775 23.3792 146.591 20.1746 144.449C16.9363 142.285 14.2045 139.447 12.1666 136.127C10.1499 132.843 9.1205 128.803 8.74418 122.749C8.36493 116.649 8.66118 108.851 9.07241 98.1551L10.1533 70.0425C10.5177 60.5631 10.7862 53.6592 11.4991 48.2568C12.2061 42.8992 13.3193 39.3125 15.1995 36.3903C17.4779 32.8493 20.5529 29.8903 24.1787 27.7496C27.171 25.983 30.7979 25.0085 36.1786 24.5079C41.6045 24.003 48.5135 24 58 24C67.4865 24 74.3955 24.003 79.8214 24.5079C85.2021 25.0085 88.829 25.983 91.8213 27.7496C95.4471 29.8903 98.5221 32.8493 100.801 36.3903C102.681 39.3125 103.794 42.8992 104.501 48.2568C105.214 53.6592 105.482 60.5631 105.847 70.0425Z" stroke="white" stroke-width="6" />
                <path d="M34 59V115" stroke="black" stroke-width="6" stroke-linecap="round" />
                <path d="M57 59V115" stroke="black" stroke-width="6" stroke-linecap="round" />
                <path d="M80 59V115" stroke="black" stroke-width="6" stroke-linecap="round" />
                <g>
                  <circle cx="12" cy="40" r="12" fill="white" />
                  <circle cx="77" cy="22" r="12" fill="white" />
                  <circle cx="33.5" cy="38.5" r="11.5" fill="white" />
                  <circle cx="34.5" cy="44.5" r="12.5" fill="white" />
                  <circle cx="34.5" cy="80.5" class="beer-drop" r="11.5" fill="white" />
                  <circle cx="98.5" cy="33.5" r="17.5" fill="white" />
                  <circle cx="81" cy="41" r="16" fill="white" />
                  <circle cx="55.5" cy="48.5" r="16.5" fill="white" />
                  <circle cx="25" cy="25" r="17" fill="white" />
                  <circle cx="51" cy="21" r="21" fill="white" />
                </g>
              </svg>
              </div>                
              <h2 style={{ transitionDelay: `300ms`,   }}
                className={`whitespace-pre pl-2 font-bold duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              > Cerveza </h2>
            </div>
          </NavLink>
          
          <NavLink
            to='/data'
            className="group flex items-center text-sm gap-3.5 font-medium hover:bg-gray-800 rounded-md">
            <div className="flex pb-8">
              <div className="">
                <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                  <defs />
                  <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
                </svg>
              </div>                
              <h2 style={{ transitionDelay: `200ms`,   }}
                className={`whitespace-pre pl-2 font-bold duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              > Datos </h2>
            </div>
          </NavLink>

          <NavLink
            to='/404'
            className="group flex items-center text-sm gap-3.5 font-medium hover:bg-gray-800 rounded-md">
            <div className="flex pb-8">
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-calculator" viewBox="0 0 16 16">
                  <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                  <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
                </svg>
              </div>                
              <h2 style={{ transitionDelay: `400ms`,   }}
                className={`whitespace-pre pl-2 font-bold duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              > cal C(!)L adora </h2>
            </div>
          </NavLink>

          <NavLink
            to='/other'
            className="group flex items-center text-sm gap-3.5 font-medium hover:bg-gray-800 rounded-md">
            <div className="flex pb-8">
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                </svg>
              </div>                
              <h2 style={{ transitionDelay: `500ms`,   }}
                className={`whitespace-pre pl-2 font-bold duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              > Alerts </h2>
            </div>
          </NavLink>



          <NavLink
            to='/setting'
            className="group flex items-center text-sm gap-3.5 font-medium hover:bg-gray-800 rounded-md">
            <div className="flex pb-8">
              <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg> 
              </div>                
              <h2 style={{ transitionDelay: `600ms`,   }}
                className={`whitespace-pre pl-2 font-bold duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              > setting </h2>
            </div>
          </NavLink>

          <div className="flex justify-end">
            <img src={logo} alt="" />
          </div>
       {/* 
       SETTING
                 <svg viewBox="0 0 512 512"className="text-white" fill="currentColor">
                <path d="M272 512h-32c-26 0-47.2-21.1-47.2-47.1V454c-11-3.5-21.8-8-32.1-13.3l-7.7 7.7a47.1 47.1 0 01-66.7 0l-22.7-22.7a47.1 47.1 0 010-66.7l7.7-7.7c-5.3-10.3-9.8-21-13.3-32.1H47.1c-26 0-47.1-21.1-47.1-47.1v-32.2c0-26 21.1-47.1 47.1-47.1H58c3.5-11 8-21.8 13.3-32.1l-7.7-7.7a47.1 47.1 0 010-66.7l22.7-22.7a47.1 47.1 0 0166.7 0l7.7 7.7c10.3-5.3 21-9.8 32.1-13.3V47.1c0-26 21.1-47.1 47.1-47.1h32.2c26 0 47.1 21.1 47.1 47.1V58c11 3.5 21.8 8 32.1 13.3l7.7-7.7a47.1 47.1 0 0166.7 0l22.7 22.7a47.1 47.1 0 010 66.7l-7.7 7.7c5.3 10.3 9.8 21 13.3 32.1h10.9c26 0 47.1 21.1 47.1 47.1v32.2c0 26-21.1 47.1-47.1 47.1H454c-3.5 11-8 21.8-13.3 32.1l7.7 7.7a47.1 47.1 0 010 66.7l-22.7 22.7a47.1 47.1 0 01-66.7 0l-7.7-7.7c-10.3 5.3-21 9.8-32.1 13.3v10.9c0 26-21.1 47.1-47.1 47.1zM165.8 409.2a176.8 176.8 0 0045.8 19 15 15 0 0111.3 14.5V465c0 9.4 7.7 17.1 17.1 17.1h32.2c9.4 0 17.1-7.7 17.1-17.1v-22.2a15 15 0 0111.3-14.5c16-4.2 31.5-10.6 45.8-19a15 15 0 0118.2 2.3l15.7 15.7a17.1 17.1 0 0024.2 0l22.8-22.8a17.1 17.1 0 000-24.2l-15.7-15.7a15 15 0 01-2.3-18.2 176.8 176.8 0 0019-45.8 15 15 0 0114.5-11.3H465c9.4 0 17.1-7.7 17.1-17.1v-32.2c0-9.4-7.7-17.1-17.1-17.1h-22.2a15 15 0 01-14.5-11.2c-4.2-16.1-10.6-31.6-19-45.9a15 15 0 012.3-18.2l15.7-15.7a17.1 17.1 0 000-24.2l-22.8-22.8a17.1 17.1 0 00-24.2 0l-15.7 15.7a15 15 0 01-18.2 2.3 176.8 176.8 0 00-45.8-19 15 15 0 01-11.3-14.5V47c0-9.4-7.7-17.1-17.1-17.1h-32.2c-9.4 0-17.1 7.7-17.1 17.1v22.2a15 15 0 01-11.3 14.5c-16 4.2-31.5 10.6-45.8 19a15 15 0 01-18.2-2.3l-15.7-15.7a17.1 17.1 0 00-24.2 0l-22.8 22.8a17.1 17.1 0 000 24.2l15.7 15.7a15 15 0 012.3 18.2 176.8 176.8 0 00-19 45.8 15 15 0 01-14.5 11.3H47c-9.4 0-17.1 7.7-17.1 17.1v32.2c0 9.4 7.7 17.1 17.1 17.1h22.2a15 15 0 0114.5 11.3c4.2 16 10.6 31.5 19 45.8a15 15 0 01-2.3 18.2l-15.7 15.7a17.1 17.1 0 000 24.2l22.8 22.8a17.1 17.1 0 0024.2 0l15.7-15.7a15 15 0 0118.2-2.3z" />
                <path d="M256 367.4c-61.4 0-111.4-50-111.4-111.4s50-111.4 111.4-111.4 111.4 50 111.4 111.4-50 111.4-111.4 111.4zm0-192.8a81.5 81.5 0 000 162.8 81.5 81.5 0 000-162.8z" />
              </svg>
       
       
       CASITAAA
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="" viewBox="0 0 16 16">
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                </svg>
              */}
        </div>
      </div>
    </section>

{/*

      <div className="left-side bg-black bg-opacity-60 w-22">
          <div className="w-24 h-16 text-blue-500 flex items-center justify-center">
            <img src={logo} alt="" />
          </div>
          <div className=" flex flex-grow mt-12 flex-col text-gray-400">
            <NavLink to="/home">
              <div className="h-14 w-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                </svg>
              </div>
            </NavLink>
            <NavLink to="/data">
            <div className="h-14 w-full flex items-center justify-center">
              <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                <defs />
                <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
              </svg>
            </div>
            </NavLink>
            <NavLink to="/beer">
              <div className="h-14 w-full flex items-center justify-center">
                <svg className="beer-svg" width="24" height="38" viewBox="0 0 138 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.17578 128C8.74229 131.624 9.71024 134.597 11.2691 137.24C13.653 141.282 16.9519 144.709 20.9007 147.244C28.3074 152 38.612 152 59.2211 152C79.8302 152 90.1347 152 97.5415 147.244C101.49 144.709 104.789 141.282 107.173 137.24C108.732 134.597 109.7 131.624 110.266 128H8.17578Z" fill="#FAD000" />
                  <rect className="beer-height" x="33" y="24" width="93" height="0" fill="#FAD000" />
                  <path d="M107 59H122.466C129.663 59 135.241 65.2916 134.379 72.437L131.123 99.437C130.395 105.465 125.281 110 119.209 110H107" stroke="black" stroke-width="6" />
                  <path d="M105.847 70.0425L106.928 98.1551C107.339 108.851 107.635 116.649 107.256 122.749C106.88 128.803 105.85 132.843 103.833 136.127C101.796 139.447 99.0637 142.285 95.8254 144.449C92.6208 146.591 88.623 147.775 82.5888 148.383C76.5076 148.996 68.7038 149 58 149C47.2962 149 39.4924 148.996 33.4112 148.383C27.377 147.775 23.3792 146.591 20.1746 144.449C16.9363 142.285 14.2045 139.447 12.1666 136.127C10.1499 132.843 9.1205 128.803 8.74418 122.749C8.36493 116.649 8.66118 108.851 9.07241 98.1551L10.1533 70.0425C10.5177 60.5631 10.7862 53.6592 11.4991 48.2568C12.2061 42.8992 13.3193 39.3125 15.1995 36.3903C17.4779 32.8493 20.5529 29.8903 24.1787 27.7496C27.171 25.983 30.7979 25.0085 36.1786 24.5079C41.6045 24.003 48.5135 24 58 24C67.4865 24 74.3955 24.003 79.8214 24.5079C85.2021 25.0085 88.829 25.983 91.8213 27.7496C95.4471 29.8903 98.5221 32.8493 100.801 36.3903C102.681 39.3125 103.794 42.8992 104.501 48.2568C105.214 53.6592 105.482 60.5631 105.847 70.0425Z" stroke="black" stroke-width="6" />
                  <path d="M34 59V115" stroke="black" stroke-width="6" stroke-linecap="round" />
                  <path d="M57 59V115" stroke="black" stroke-width="6" stroke-linecap="round" />
                  <path d="M80 59V115" stroke="black" stroke-width="6" stroke-linecap="round" />
                  <g>
                  <circle cx="12" cy="40" r="12" fill="white" />
                  <circle cx="77" cy="22" r="12" fill="white" />
                  <circle cx="33.5" cy="38.5" r="11.5" fill="white" />
                  <circle cx="34.5" cy="44.5" r="12.5" fill="white" />
                  <circle cx="34.5" cy="80.5" className="beer-drop" r="11.5" fill="white" />
                  <circle cx="98.5" cy="33.5" r="17.5" fill="white" />
                  <circle cx="81" cy="41" r="16" fill="white" />
                  <circle cx="55.5" cy="48.5" r="16.5" fill="white" />
                  <circle cx="25" cy="25" r="17" fill="white" />
                  <circle cx="51" cy="21" r="21" fill="white" />
                  </g>
                </svg>
              </div>
            </NavLink>
            <NavLink to="/setting">
            <div className="h-14 w-full flex items-center justify-center text-white">
              <svg viewBox="0 0 512 512" fill="currentColor">
                <path d="M272 512h-32c-26 0-47.2-21.1-47.2-47.1V454c-11-3.5-21.8-8-32.1-13.3l-7.7 7.7a47.1 47.1 0 01-66.7 0l-22.7-22.7a47.1 47.1 0 010-66.7l7.7-7.7c-5.3-10.3-9.8-21-13.3-32.1H47.1c-26 0-47.1-21.1-47.1-47.1v-32.2c0-26 21.1-47.1 47.1-47.1H58c3.5-11 8-21.8 13.3-32.1l-7.7-7.7a47.1 47.1 0 010-66.7l22.7-22.7a47.1 47.1 0 0166.7 0l7.7 7.7c10.3-5.3 21-9.8 32.1-13.3V47.1c0-26 21.1-47.1 47.1-47.1h32.2c26 0 47.1 21.1 47.1 47.1V58c11 3.5 21.8 8 32.1 13.3l7.7-7.7a47.1 47.1 0 0166.7 0l22.7 22.7a47.1 47.1 0 010 66.7l-7.7 7.7c5.3 10.3 9.8 21 13.3 32.1h10.9c26 0 47.1 21.1 47.1 47.1v32.2c0 26-21.1 47.1-47.1 47.1H454c-3.5 11-8 21.8-13.3 32.1l7.7 7.7a47.1 47.1 0 010 66.7l-22.7 22.7a47.1 47.1 0 01-66.7 0l-7.7-7.7c-10.3 5.3-21 9.8-32.1 13.3v10.9c0 26-21.1 47.1-47.1 47.1zM165.8 409.2a176.8 176.8 0 0045.8 19 15 15 0 0111.3 14.5V465c0 9.4 7.7 17.1 17.1 17.1h32.2c9.4 0 17.1-7.7 17.1-17.1v-22.2a15 15 0 0111.3-14.5c16-4.2 31.5-10.6 45.8-19a15 15 0 0118.2 2.3l15.7 15.7a17.1 17.1 0 0024.2 0l22.8-22.8a17.1 17.1 0 000-24.2l-15.7-15.7a15 15 0 01-2.3-18.2 176.8 176.8 0 0019-45.8 15 15 0 0114.5-11.3H465c9.4 0 17.1-7.7 17.1-17.1v-32.2c0-9.4-7.7-17.1-17.1-17.1h-22.2a15 15 0 01-14.5-11.2c-4.2-16.1-10.6-31.6-19-45.9a15 15 0 012.3-18.2l15.7-15.7a17.1 17.1 0 000-24.2l-22.8-22.8a17.1 17.1 0 00-24.2 0l-15.7 15.7a15 15 0 01-18.2 2.3 176.8 176.8 0 00-45.8-19 15 15 0 01-11.3-14.5V47c0-9.4-7.7-17.1-17.1-17.1h-32.2c-9.4 0-17.1 7.7-17.1 17.1v22.2a15 15 0 01-11.3 14.5c-16 4.2-31.5 10.6-45.8 19a15 15 0 01-18.2-2.3l-15.7-15.7a17.1 17.1 0 00-24.2 0l-22.8 22.8a17.1 17.1 0 000 24.2l15.7 15.7a15 15 0 012.3 18.2 176.8 176.8 0 00-19 45.8 15 15 0 01-14.5 11.3H47c-9.4 0-17.1 7.7-17.1 17.1v32.2c0 9.4 7.7 17.1 17.1 17.1h22.2a15 15 0 0114.5 11.3c4.2 16 10.6 31.5 19 45.8a15 15 0 01-2.3 18.2l-15.7 15.7a17.1 17.1 0 000 24.2l22.8 22.8a17.1 17.1 0 0024.2 0l15.7-15.7a15 15 0 0118.2-2.3z" />
                <path d="M256 367.4c-61.4 0-111.4-50-111.4-111.4s50-111.4 111.4-111.4 111.4 50 111.4 111.4-50 111.4-111.4 111.4zm0-192.8a81.5 81.5 0 000 162.8 81.5 81.5 0 000-162.8z" />
              </svg>
            </div>
            </NavLink>
            <NavLink to="/">
              <div className="h-14 w-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>  
              </div>
            </NavLink>
            <NavLink to="/">
              <div className="h-14 w-full flex items-center justify-center text-white">

              </div>
            </NavLink>
            <NavLink to="/">
              <div className="h-14 w-full flex items-center justify-center text-white">

              </div>
            </NavLink>            
          </div>
      </div>
*/}

    </>

}

export default SideBar