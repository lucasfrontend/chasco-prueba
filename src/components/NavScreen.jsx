import React from "react";
import { Link } from 'react-router-dom'

const NavScreen = () => {
  return <>
      <div className="cards-header">
        <Link to="/table">
            <span>Tabla</span>
        </Link>
        <Link to="/deudores">
            <span>Deudores</span>
        </Link>
      </div>
    </>

}

export default NavScreen