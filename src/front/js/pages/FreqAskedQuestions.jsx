import React, { useState } from 'react';
import "../../styles/home.css";

const faqs = [
  { question: "Transporte", answer: "Ten en cuenta que viajar hacinado en camiones con poca ventilación, puede causarte deshidratación severa o asfixia. También recuerda que viajar en trenes de carga es muy peligroso, ya que puedes caerte y sufrir lesiones graves e incluso la muerte. " },
  { question: "Ríos", answer: "En épocas de lluvia evita cruzar por arroyos o caminar por el cauce de ríos, ya que en cuestión de minutos aumentan su nivel y te pueden arrastrar. Evita bañarte en ríos o estanques, especialmente si no sabes nadar, pues podrían tener zonas profundas difíciles de detectar a simple vista y corres el peligro de ahogarte. " },
  { question: "Desierto durante el día", answer: "En el desierto, especialmente en los estados del norte de México, las temperaturas son extremas durante el día, llegando a los 50º C (122º Fahrenheit) o más, por eso, considera llevar contigo: Agua potable (al menos 4 litros). Alimentos enlatados o empaquetados. Suero oral o en su defecto agua con una pizca de sal. Usa pantalones y mangas largas para protegerte del sol y mantener la humedad de tu sudor. Usa zapatos cómodos y de preferencia cerrados" },
  { question: "Desierto durante la noche", answer: "Durante las noches, las temperaturas pueden bajar a -10ºC (14º Fahrenheit), o menos, por eso, considera llevar contigo: Ropa abrigadora, zapatos cómodos y calcetines gruesos, dulces o alimentos calóricos que te ayudarán a mantener tu temperatura corporal regular, guantes para proteger tus manos, una lámpara de mano y cerillos." },
  { question: "Deshidratación", answer: "Si presentas alguno de estos síntomas, es probable que estés deshidratado: Sed intensa, sequedad en la boca, ojos hundidos, piel seca, orina oscura y escasa, fatiga, mareos, confusión, irritabilidad, dolor de cabeza, calambres musculares, pulso débil y rápido. Si presentas estos síntomas, busca un lugar fresco y sombreado, hidrátate y descansa." },
  { question: "Hipotermia", answer: "Si presentas alguno de estos síntomas, es probable que estés sufriendo de hipotermia: Escalofríos, piel pálida y fría, fatiga, confusión, somnolencia, habla lenta, pulso débil y lento, respiración lenta y superficial. Si presentas estos síntomas, busca un lugar cálido, abrígate y toma bebidas calientes." },
  { question: "Golpe de calor", answer: "Si presentas alguno de estos síntomas, es probable que estés sufriendo de un golpe de calor: Temperatura corporal alta, piel roja, caliente y seca, pulso rápido y fuerte, dolor de cabeza, mareos, náuseas, vómito, confusión, desorientación, pérdida de la conciencia. Si presentas estos síntomas, busca un lugar fresco y sombreado, hidrátate y descansa." },
  { question: "Mordedura o picadura de animales venenosos", answer: "Si presentas alguno de estos síntomas, es probable que hayas sido mordido o picado por un animal venenoso: Dolor intenso en la zona de la mordedura o mordedura, hinchazón, enrojecimiento, sangrado, debilidad, mareos, náuseas, vómito, dificultad para respirar, visión borrosa, parálisis, convulsiones. Si presentas estos síntomas, busca ayuda de inmediato." },
  { question: "Más información", answer: <>Si quieres saber más tips, puedes consultar nuestro <a href="/chatbot">Chatbot</a>.</> },
  ];

const FreqAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='backpage'>
          <div className='containerFAQ'>
            <h2 className='heading'>Tips</h2>
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

export default FreqAskedQuestions;