import React, { useEffect, useState } from "react";

const HelpPlaces = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [embassyInfo, setEmbassyInfo] = useState("Buscando embajada...");
    const user_principal_id = 1; // Reemplázalo con el ID del usuario autenticado

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("La geolocalización no es soportada por este navegador.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitud: latitude, longitud: longitude });

                // Enviar coordenadas al backend
                try {
                    const response = await fetch("http://localhost:5000/api/ubicacion_embajada", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ latitud: latitude, longitud: longitude, user_principal_id })
                    });

                    const data = await response.json();
                    if (response.ok) {
                        setEmbassyInfo(data.ubicacion_embajada);
                    } else {
                        setError(data.error || "No se encontró la embajada.");
                    }
                } catch (err) {
                    setError("Error en la conexión con el servidor.");
                }
            },
            (error) => {
                setError("Error al obtener la ubicación.");
            }
        );
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div>
                <h2>Ubicación del Usuario</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {location ? (
                    <p>Latitud: {location.latitud}, Longitud: {location.longitud}</p>
                ) : (
                    <p>Obteniendo ubicación...</p>
                )}
                <h3>Lugares de ayudas más cercanos:</h3>
                <p>{embassyInfo}</p>
            </div>
        </div>
    );
};

  
  export default HelpPlaces