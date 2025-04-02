import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css"

const AddContact = () => {
    const { actions } = useContext(Context);
    const [errors, setErrors] = useState({});
    const [payload, setPayload] = useState({
        full_name: "",
        email: "",
        phone_number: "",
        role: "",
        user_id: ""  // 🔹 Agregamos user_id en el estado
    });

    // Obtener user_id desde localStorage al montar el componente
    useEffect(() => {
        const storedUserId = localStorage.getItem("id");
        if (storedUserId) {
            setPayload(prevPayload => ({
                ...prevPayload,
                user_id: storedUserId // 🔹 Lo asignamos al payload
            }));
        }
    }, []);

    // Manejo del cambio en los inputs
    const handleChange = (e) => {
        setPayload({
            ...payload,
            [e.target.name]: e.target.value
        });
    };

    // Validación del formulario
    const validateForm = () => {
        let newErrors = {};
        let genericLegend = "*Campo obligatorio.";

        if (!payload.full_name.trim()) newErrors.full_name = genericLegend;
        if (!payload.email.trim()) newErrors.email = genericLegend;
        if (!payload.phone_number.trim()) newErrors.phone_number = genericLegend;
        if (!payload.role.trim()) newErrors.role = genericLegend;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Retorna `true` si no hay errores
    };

    // Manejo del envío del formulario
    const handleAdd = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("Enviando payload:", payload); // 🔹 Verifica que user_id esté en el payload
            actions.addContact(payload);
            setPayload({
                full_name: "",
                email: "",
                phone_number: "",
                role: "",
                user_id: localStorage.getItem("id") || "" // 🔹 Mantiene user_id después del reset
            });
        }
    };

    return (
        <div className="formis">
            <form onSubmit={handleAdd}>
                <div className="mb-3">
                    <input
                        type="text"
                        name="full_name"
                        value={payload.full_name}
                        onChange={handleChange}
                        placeholder="Nombre completo"
                        className="input d-flex justify-content-center"
                        style={{width:"200%"}}
                    />
                    {errors.full_name && <p className="text-danger">{errors.full_name}</p>}
                </div>

                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        value={payload.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="input d-flex justify-content-center"
                        style={{width:"200%"}}
                    />
                    {errors.email && <p className="text-danger">{errors.email}</p>}
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        name="phone_number"
                        value={payload.phone_number}
                        onChange={handleChange}
                        placeholder="Teléfono"
                        className="input d-flex justify-content-center"
                        style={{width:"200%"}}
                    />
                    {errors.phone_number && <p className="text-danger">{errors.phone_number}</p>}
                </div>

                <div className="mb-3">
                    <select
                        name="role"
                        value={payload.role}
                        onChange={handleChange}
                        className="input d-flex justify-content-center"
                        style={{width:"200%"}}
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
                    {errors.role && <p className="text-danger">{errors.role}</p>}
                </div>

                <div className="d-flex justify-content-center">
                    <button type="submit" className="login-buttonesN2" style={{width:"200%"}}>
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddContact;
