import React from "react";
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import '../components/headerTandas.css'

const HeaderTandas = ({ tandas }) => {
  
  const endOfDay = () => {
    confirm("Vas a borrar todas las tandas.")
    window.localStorage.clear();
}
  return <>
      <div className="cards-header">
        <div className="discount-wrapper">
          <div className="circle">
            <div className="pie">
              <svg>
                <circle cx="60" cy="60" r="50"></circle>
              </svg>
            </div>
            <div className="counter">{ tandas.length }</div>
          </div>
        </div>
        <div className="cards-header-date">
        <div className="container flex">
            <button className="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4" type="submit" value="Fin del dia" onClick={() => endOfDay(tandas)}>Fin del dia</button>
        </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          
          <div NameName="text-right mr-4">
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
           <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>


    </>

}

export default HeaderTandas