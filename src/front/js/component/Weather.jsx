import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Alert, Spinner } from 'react-bootstrap';
import { Context } from '../store/appContext';
import { TiWeatherPartlySunny } from "react-icons/ti";
import "../../styles/Footer.css"

const Weather = () => {
    const { store, actions } = useContext(Context);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleGetWeather = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    await actions.getWeather(latitude, longitude);
                },
                (error) => {
                    setError('No se pudo obtener la ubicación.');
                    console.error(error);
                }
            );
        } else {
            setError('Geolocalización no es soportada por este navegador.');
        }
    };

    useEffect(() => {
        if (show) {
            handleGetWeather();
        }
    }, [show]);

    return (
        <>
            <Button  style={{background:"none",border:"none"}} onClick={handleShow} className="m-2">
                <TiWeatherPartlySunny className='login-buttonesGadgets' style={{fontSize:"2em"}}  /> {/* Ajusta el tamaño del ícono */}
            </Button>

            <Modal className='container-modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='heading-modal'>Clima Actual</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {store.loading && (
                        <div className="text-center">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Cargando...</span>
                            </Spinner>
                            <p>Cargando clima...</p>
                        </div>
                    )}

                    {error && <Alert variant="danger">{error}</Alert>}

                    {store.weather && (
                        <div>
                            <p><strong>País:</strong> {store.weather.pais}</p>
                            <p><strong>Región:</strong> {store.weather.region}</p>
                            <p><strong>Ciudad:</strong> {store.weather.ciudad}</p>
                            <p><strong>Temperatura:</strong> {store.weather.temperatura} °C</p>
                            <p><strong>Humedad:</strong> {store.weather.humedad}%</p>
                            <p><strong>Clima:</strong> {store.weather.clima}</p>
                            <p><img src={store.weather.icono} alt="icono" style={{ display: 'block', margin: '0 auto' }}/></p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button className='close-button'  onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Weather;