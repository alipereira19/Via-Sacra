import React from 'react'
import CurrencyConverter from './CurrencyConverter.jsx'
import Weather from './Weather.jsx'
import Calculator from './Calculator.jsx'
import EmergencyButton from './EmergencyButton.jsx'
import "../../styles/Footer.css"


const Footer = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;




  return (
    <>
      <div className="container-fluid card">
        <div className=''>
          <div className='buttons'>
            <Calculator />
            <Weather />
            <CurrencyConverter />
          </div>
        </div>

        <div className='buttons'>
          <EmergencyButton />
        </div>

      </div>

    </>
  );
}

export default Footer
