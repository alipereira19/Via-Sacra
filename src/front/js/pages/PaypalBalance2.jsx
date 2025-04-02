import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/Login.css"

const PaypalBalance2 = () => {
  const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal
  const navigate = useNavigate();

  const handleDonateClick = () => {
    setShowModal(true); // Muestra el dgsds modal
  };

  const handleGoToLogin = () => {
    setShowModal(false); // Oculta el modal antes de navegar
    navigate("/login"); // Redirige al login
  };
  const handleLoginRedirect = () => {
    window.location.href = '/home';
  };
  document.addEventListener('DOMContentLoaded', function() {
    const cardNumber = document.querySelector('#card-number');
    const cardName = document.querySelector('#card-name');
    const cardExpiry = document.querySelector('#card-expiry');
    const cardCVV = document.querySelector('#card-cvv');
    const cardNumberDisplay = document.querySelector('.cardNumber');
    const cardHolderDisplay = document.querySelector('#card-holder-name');
    const cardExpiryDisplay = document.querySelector('#card-expiration-date');
    const cardCVVDisplay = document.querySelector('#card-cvv');
    const creditCard = document.querySelector('.creditCard');
    const form = document.querySelector('#payment-form');

    function formatCardNumber(value) {
        return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }

    function formatExpiry(value) {
        return value.replace(/^(\d{2})(\d{0,2})/, '$1/$2').trim();
    }

    cardNumber.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        e.target.value = formatCardNumber(value);
        cardNumberDisplay.textContent = e.target.value || '•••• •••• •••• ••••';
    });

    cardName.addEventListener('input', function(e) {
        cardHolderDisplay.textContent = e.target.value.toUpperCase() || 'JUAN PEREZ';
    });

    cardExpiry.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        e.target.value = formatExpiry(value);
        cardExpiryDisplay.textContent = e.target.value || 'MM/AA';
    });

    cardCVV.addEventListener('focus', function() {
        creditCard.classList.add('flipped');
    });

    cardCVV.addEventListener('blur', function() {
        creditCard.classList.remove('flipped');
    });

    cardCVV.addEventListener('input', function(e) {
        cardCVVDisplay.textContent = e.target.value || '123';
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            alert('Payment successful!');
        } else {
            creditCard.classList.add('shake');
            setTimeout(() => creditCard.classList.remove('shake'), 820);
        }
    });

    function validateForm() {
        return (
            cardNumber.value.replace(/\s/g, '').length === 16 &&
            cardName.value.trim() !== '' &&
            cardExpiry.value.length === 5 &&
            cardCVV.value.length === 3
        );
    }

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.classList.add('focusedInput');
        });
        input.addEventListener('blur', () => {
            input.classList.remove('focusedInput');
        });
    });
});

  return (
    <div className="backpagenn2">
        <div className="containerc">
        <div className=""></div>
        <div className="contents">
            <div className="cardContainerc">
                <div className="creditCardc">
                    <div className="creditCardFront">
                        <div className="cardNumber">•••• •••• •••• ••••</div>
                        <div className="cardDetails">
                            <div className="cardHolder">
                                <div className="label">NOMBRE COMPLETO</div>
                                <div id="card-holder-name">JUAN PEREZ</div>
                            </div>
                            <div className="cardExpiration">
                                <div className="label">VENCIMIENTO</div>
                                <div id="card-expiration-date">MM/AA</div>
                            </div>
                        </div>
                    </div>
                    <div className="creditCardBack">
                        <div className="cvvStrip"></div>
                        <div className="cvvNumber" id="card-cvv">123</div>
                    </div>
                </div>
            </div>
            <div className="formContainer slideFadeIn">
                <div id="payment-form">
                    <div className="formGroup">
                        <label for="money">Cantidad en dólares</label>
                        <select style={{width:"100%", textAlign:"center", fontWeight:'bolder', height:"50px", fontSize:'20'}} id="money">
                            <option value="10">$10</option>
                            <option value="20">$20</option>
                            <option value="50">$50</option>
                            <option value="100">$100</option>
                        </select>
                    </div>
                    <div className="formGroup">
                        <label for="card-number">Número de tarjeta</label>
                        <input type="text" id="card-number" placeholder="1234 5678 9012 3456" maxlength="19"/>
                    </div>
                    <div className="formGroup">
                        <label for="card-name">Nombre completo</label>
                        <input type="text" id="card-name" placeholder="John Doe"/>
                    </div>
                    <div className="formGroup">
                        <label for="card-expiry">Fecha de vencimiento</label>
                        <input type="text" id="card-expiry" placeholder="MM/YY" maxlength="5"/>
                    </div>
                    <div className="formGroup">
                        <label for="card-cvv">CVV</label>
                        <input type="password" id="card-cvv" placeholder="123" maxlength="3"/>
                    </div>
                    <button type="submit" onClick={handleDonateClick}>Donar</button>
                    {showModal && (
        <div className="modal-overlay" style={{background:"rgb(82, 88, 243)"}}>
          <div className="modal-content">
            <h3 className='heading'>¡Gracias por tu donación!</h3>
            <p style={{textAlign:'center'}}>Tu apoyo es muy valioso para nosotros.</p>
          </div>
        </div>
      )}
                </div>
            </div>
            <button className='login-buttonesN2' style={{width:"50%"}} onClick={handleLoginRedirect}>Regresar</button>
        </div>
    </div>
    </div>
  );
}

export default PaypalBalance2
