import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import countriesData from './../../../../countries.json';
import statesData from './../../../../states.json';
import citiesData from './../../../../cities.json';
import './../../styles/Register.css';

const Register = () => {
  const { store, actions } = useContext(Context);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    first_last_name: '',
    second_last_name: '',
    nationality: '',
    gender: '',
    birthdate: '',
    email: '',
    password: '',
    phone_number: '',
    facebook: '',
    instagram: '',
    x: '',
    blood_type: '',
    allergy: '',
    disease: '',
    city: '',
    state: '',
    address: '',
    home_country: '',
    country_of_residence: '',
    country_of_destination: '',
    zip_code: '',
    latitude: '',
    longitude: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    actions.register(formData);
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="register">
      <h2>Bienvenid@ a tu migrante app</h2>
      <h3>Completa el siguiente formulario para inscribirte</h3>
      <div className='form'>
        {step === 1 && (
          <div>
            <h3>Datos Personales</h3>
            <input type="text" name="first_name" placeholder="Nombre" value={formData.first_name} onChange={handleChange} />
            <input type="text" name="first_last_name" placeholder="Apellido 1" value={formData.first_last_name} onChange={handleChange} />
            <input type="text" name="second_last_name" placeholder="Apellido 2" value={formData.second_last_name} onChange={handleChange} />
            <button onClick={handleNext}>Siguiente</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3>Información de Contacto</h3>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} />
            <input type="text" name="phone_number" placeholder="Teléfono" value={formData.phone_number} onChange={handleChange} />
            <button onClick={handleBack}>Atrás</button>
            <button onClick={handleNext}>Siguiente</button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3>Dirección</h3>
            <input type="text" name="city" placeholder="Ciudad" value={formData.city} onChange={handleChange} />
            <input type="text" name="state" placeholder="Estado" value={formData.state} onChange={handleChange} />
            <input type="text" name="zip_code" placeholder="Código Postal" value={formData.zip_code} onChange={handleChange} />
            <button onClick={handleBack}>Atrás</button>
            <button onClick={handleSubmit}>Registrar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;




<!-- HTML !-->
<button class="button-19" role="button">Button 19</button>

/* CSS */
.button-19 {
  appearance: button;
  background-color: #1899D6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: din-round,sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;
}

.button-19:after {
  background-clip: padding-box;
  background-color: #1CB0F6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

.button-19,
.button-19:focus {
  user-select: auto;
}

.button-19:hover:not(:disabled) {
  filter: brightness(1.1);
  -webkit-filter: brightness(1.1);
}

.button-19:disabled {
  cursor: auto;
}

.button-19:active {
  border-width: 4px 0 0;
  background: none;
}