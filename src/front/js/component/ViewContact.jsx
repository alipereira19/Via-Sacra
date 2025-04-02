import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import { IoMdContact } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { FaRegHandPointDown } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";


const ViewContact = () => {
    const { store, actions } = useContext(Context);
    const [detector, setDetector] = useState(false);
    const [payload, setPayload] = useState({
        full_name: "",
        email: "",
        phone_number: "",
        role: "",
    });

    const handleEdit = async (event, payload, id) => {
        try {
            event.preventDefault();
            await actions.editContact(id, payload);
            setDetector((prev) => !prev);
            setPayload({
                full_name: "",
                email: "",
                phone_number: "",
                role: "",
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id, event) => {
        event.preventDefault(); // Evita que la página se recargue

        const result = await Swal.fire({
            title: "¿Estás seguro?",
            text: "No podrás recuperar este contacto una vez eliminado.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        });
    
        if (result.isConfirmed) {
            try {
                await actions.deleteContact(id);
                setDetector((prev) => !prev);
    
                // Mensaje de éxito
                Swal.fire({
                    title: "¡Eliminado!",
                    text: "El contacto ha sido eliminado con éxito.",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                });
            } catch (error) {
                console.error(error);
    
                // Mensaje de error
                Swal.fire({
                    title: "Error",
                    text: "Hubo un problema al eliminar el contacto.",
                    icon: "error",
                    confirmButtonColor: "#d33",
                });
            }
        }
    };

    useEffect(() => {
        actions.viewContacts();
    }, [detector]);

    return (
        <div className="">
            <div className="">
                <div className="containerData" style={{ overflowY: 'auto', maxHeight: '400px' }}>
                    {Array.isArray(store.contact) && store.contact.length > 0 ? (
                        store.contact.map((item, index) => (
                            <div style={{ textAlign: 'left', marginBottom: '10px' }} key={index}>
                                <div>
                                    <p><IoMdContact style={{ fontSize: '2.5em', color: 'rgb(184, 0, 169)' }} />{item.full_name}</p>
                                    <p>
                                        <BsFillTelephoneFill style={{ fontSize: '2em', color: 'rgb(184, 0, 169)' }} /> {item.phone_number}
                                    </p>
                                    <p>
                                        <AiTwotoneMail style={{ fontSize: '2em', color: 'rgb(184, 0, 169)' }} /> {item.email}
                                    </p>
                                </div>
                                <div className="cointainer-fluid row">
                                    <button
                                        type="button"
                                        className="col login-buttonesMap"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#exampleModal${index}`}
                                        style={{ width: '50%' }}
                                    >
                                        Editar
                                    </button>
                                    <div
                                        className="modal fade"
                                        id={`exampleModal${index}`}
                                        tabIndex="-1"
                                        aria-labelledby="exampleModalLabel"
                                        aria-hidden="true"
                                    >
                                        <div className="container modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="heading modal-title fs-5" id="exampleModalLabel">
                                                        Editar Contacto
                                                    </h1>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="mb-3">
                                                        <input
                                                            type="text"
                                                            value={payload.full_name}
                                                            onChange={(e) =>
                                                                setPayload({ ...payload, full_name: e.target.value })
                                                            }
                                                            placeholder="Nombre completo"
                                                            className="form-control"
                                                        />
                                                        <br />
                                                        <input
                                                            type="email"
                                                            value={payload.email}
                                                            onChange={(e) =>
                                                                setPayload({ ...payload, email: e.target.value })
                                                            }
                                                            placeholder="Email"
                                                            className="form-control"
                                                        />
                                                        <br />
                                                        <input
                                                            type="text"
                                                            value={payload.phone_number}
                                                            onChange={(e) =>
                                                                setPayload({ ...payload, phone_number: e.target.value })
                                                            }
                                                            placeholder="Teléfono"
                                                            className="form-control"
                                                        />
                                                        <br />
                                                        <select
                                                            value={payload.role}
                                                            onChange={(e) =>
                                                                setPayload({ ...payload, role: e.target.value })
                                                            }
                                                            className="form-control"
                                                        >
                                                            <option value="">Seleccione un parentezco</option>
                                                            <option value="Conyuge">Cónyugue</option>
                                                            <option value="Padre">Padre</option>
                                                            <option value="Madre">Madre</option>
                                                            <option value="Hijo">Hijo</option>
                                                            <option value="Hija">Hija</option>
                                                            <option value="Amistad">Amistad</option>
                                                            <option value="Tutor">Tutor</option>
                                                            <option value="Representante legal">Representante legal</option>
                                                        </select>
                                                        <br />
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button
                                                        className="login-buttonesMap"
                                                        style={{ width: '100%' }}
                                                        onClick={(event) => handleEdit(event, payload, item.id)}
                                                    >
                                                        Guardar cambios
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="col login-buttonesEmergencia"
                                        style={{ width: '50%' }}
                                        onClick={(event) => handleDelete(item.id, event)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                                <hr />
                            </div>
                        ))
                    ) : (
                        <p className="heading" style={{ fontSize: "110%" }}>No tienes contactos. Por favor, registralos.<br /><FaArrowDown style={{ fontSize: "3em" }} /></p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ViewContact;