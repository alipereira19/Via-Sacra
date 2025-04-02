import React, { useState } from 'react';
import { RiHome6Fill } from "react-icons/ri";
import "../../styles/home.css"

const faqs = [
  { question: "¿Por qué me pidieron mi tipo de sangre en el registro?", answer: "En caso de una emergencia, muchas veces se dificulta la atención médica por falta de sangre universal. Al saber tu tipo, aumentamos la probabilidad de que la atención que te brinden los cuerpos de protección civil, sea eficaz." },
  { question: "¿Cuántos contactos de emergencia puedo registrar?", answer: "Puedes registrar todos los que quieras. Recuerda que también puedes eliminarlos o editarlos en cualquier momento en caso de que cambien de teléfono o correo electrónico." },
  { question: "¿Por qué me pidieron acceso a mi ubicación?", answer: "En caso de una emergencia, tu ubicación será enviada a los contactos que hayas registrado para que puedan ayudarte a obtener auxilio en conjunto con las autoridades correspondientes." },
  { question: "¿Qué pasa si oprimo el botón de emergencia?", answer: "Tus contactos recibirán al instante un mensaje de correo en el cuál se les indica que estas en peligro y que se pongan en contacto contigo o con las autoridades para apresurar tu auxilio." },

  ];

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='backpage'>
          <div className='containerFAQ'>
            <h2 className='heading'>Preguntas Frecuentes</h2>
            <div>
        {faqs.map((faq, index) => (
          <div  key={index}>
            <div className='login-buttonesFAQ' onClick={() => toggleFAQ(index)} >
              <h5 >{faq.question}</h5>
            </div>
            
            <div className={`collapse ${openIndex === index ? 'show' : ''}`}>
              <div className="containerAnswer">{faq.answer}</div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>);
};

export default Help;