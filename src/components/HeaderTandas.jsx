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
      <div class="cards-header">
        <div class="discount-wrapper">
          <div class="circle">
            <div class="pie">
              <svg>
                <circle cx="60" cy="60" r="50"></circle>
              </svg>
            </div>
            <div class="counter">{ tandas.length }</div>
          </div>
        </div>
        <div class="cards-header-date">
        <div className="container flex">
            <button className="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4" type="submit" value="Fin del dia" onClick={() => endOfDay(tandas)}>Fin del dia</button>
        </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          
          <div className="text-right mr-4">
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
           <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>


    </>

}

export default HeaderTandas