import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ImCalculator } from "react-icons/im";
import "../../styles/Footer.css"

const Calculator = () => {
    const [showModal, setShowModal] = useState(false);
    const [input, setInput] = useState('');

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleButtonClick = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const calculateResult = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    const clearInput = () => {
        setInput('');
    };

    return (
        <div>
            <Button  style={{background:"none",border:"none"}} onClick={handleOpenModal} >
            <ImCalculator className='login-buttonesGadgets' style={{fontSize:"2em"}}/>
            </Button>

            {/* Modal de Bootstrap */}
            <Modal className='container-modal' show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title className='heading-modal'>Calculadora</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Pantalla de la calculadora */}
                    <div
                        style={{
                            backgroundColor: '#f0f0f0',
                            padding: '10px',
                            borderRadius: '5px',
                            textAlign: 'right',
                            fontSize: '24px',
                            border: '1px solid #ccc',
                            marginBottom: '10px',
                        }}
                    >
                        {input || '0'}
                    </div>

                    {/* Botones de la calculadora */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                        {/* Fila 1 */}
                        <Button variant="light" onClick={() => handleButtonClick('7')} style={{ fontSize: '20px' }}>7</Button>
                        <Button variant="light" onClick={() => handleButtonClick('8')} style={{ fontSize: '20px' }}>8</Button>
                        <Button variant="light" onClick={() => handleButtonClick('9')} style={{ fontSize: '20px' }}>9</Button>
                        <Button variant="primary" onClick={() => handleButtonClick('/')} style={{ fontSize: '20px' }}>/</Button>

                        {/* Fila 2 */}
                        <Button variant="light" onClick={() => handleButtonClick('4')} style={{ fontSize: '20px' }}>4</Button>
                        <Button variant="light" onClick={() => handleButtonClick('5')} style={{ fontSize: '20px' }}>5</Button>
                        <Button variant="light" onClick={() => handleButtonClick('6')} style={{ fontSize: '20px' }}>6</Button>
                        <Button variant="primary" onClick={() => handleButtonClick('*')} style={{ fontSize: '20px' }}>*</Button>

                        {/* Fila 3 */}
                        <Button variant="light" onClick={() => handleButtonClick('1')} style={{ fontSize: '20px' }}>1</Button>
                        <Button variant="light" onClick={() => handleButtonClick('2')} style={{ fontSize: '20px' }}>2</Button>
                        <Button variant="light" onClick={() => handleButtonClick('3')} style={{ fontSize: '20px' }}>3</Button>
                        <Button variant="primary" onClick={() => handleButtonClick('-')} style={{ fontSize: '20px' }}>-</Button>

                        {/* Fila 4 */}
                        <Button variant="light" onClick={() => handleButtonClick('0')} style={{ fontSize: '20px' }}>0</Button>
                        <Button variant="light" onClick={() => handleButtonClick('.')} style={{ fontSize: '20px' }}>.</Button>
                        <Button variant="dark" onClick={calculateResult} style={{ fontSize: '20px' }}>=</Button>
                        <Button variant="primary" onClick={() => handleButtonClick('+')} style={{ fontSize: '20px' }}>+</Button>

                        {/* Botón de limpiar */}
                        <Button
                            
                            onClick={clearInput}
                            style={{ gridColumn: 'span 4', fontSize: '20px', backgroundColor:"rgb(184, 0, 169)", border:"none" }}
                        >
                            C
                        </Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='close-button' onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Calculator;