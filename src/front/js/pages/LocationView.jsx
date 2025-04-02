import React, { useEffect, useState, useContext } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { RiHome6Fill } from "react-icons/ri";
import Swal from 'sweetalert2';


const libraries = ["places"];
const mapContainerStyle = { width: "100%", height: "350px" };

const LocationView = () => {
    const { store, actions } = useContext(Context);
    const [selectedType, setSelectedType] = useState(null);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API,
        libraries,
    });

    useEffect(() => {
        if (store.userLocation) {
            console.log("Ubicación detectada:", store.userLocation);
        }
    }, [store.userLocation]);

    useEffect(() => {
        if (selectedType && store.userLocation) {
            actions.fetchNearbyPlaces(selectedType);
        }
    }, [selectedType, store.userLocation]);

    if (loadError) return <p>Error cargando el mapa</p>;
    if (!isLoaded) return <p>Cargando mapa...</p>;

    return (
        <>
            <div className="containermap">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={store.userLocation}
                    zoom={14}
                >
                    {store.userLocation && <Marker position={store.userLocation} />}
                    {store.nearbyPlaces?.map((place, index) => (
                        place.location && (
                            <Marker
                                key={index}
                                position={{
                                    lat: place.location.latitude,
                                    lng: place.location.longitude,
                                }}
                                onClick={() =>
                                    Swal.fire(
                                        `Dirección: ${place.formattedAddress}\nTeléfono internacional: ${place.internationalPhoneNumber || "No disponible"}`
                                    )
                                }
                            />
                        )
                    ))}
                </GoogleMap>
            </div>

            <div className="containermaplist places-list">
                {store.nearbyPlaces.length > 0 ? (
                    store.nearbyPlaces.map((place, index) => (
                        <div key={index} className="containerData">
                            <h2>{place.displayName?.text || "Sin nombre"}</h2>
                            <p>{place.formattedAddress || "Dirección desconocida"}</p>
                            {place.internationalPhoneNumber && (
                                
                                <p><hr/>Teléfono internacional: {place.internationalPhoneNumber}</p>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="heading">Presione la opción que desee para obtener las ubicaciones</p>
                )}
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <button className='login-buttonesMap' onClick={() => setSelectedType("hospital")}>Hospitales</button>
                <button className='login-buttonesMap' onClick={() => setSelectedType("police")}>Policía</button>
                <button className='login-buttonesMap' onClick={() => setSelectedType("embassy")}>Embajadas</button>
            </div>
            <br />
            <br />

        </>
    );
};

export default LocationView;