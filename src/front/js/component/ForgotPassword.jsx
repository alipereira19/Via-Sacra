import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';
import './../../styles/auth.css';

const ForgotPassword = () => {
    const { actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await actions.forgotPassword(email);
            if (result.error) {
                setError(result.error);
                setMessage('');
            } else {
                setMessage(result.message);
                setError('');
                navigate('/reset-password', { state: { email } });
            }
        } catch (error) {
            setError("Ocurrió un error inesperado. Por favor, inténtalo de nuevo.");
            setMessage('');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h2 className="auth-title">Recuperar Contraseña</h2>
                    <p className="auth-subtitle">Ingresa tu email para recibir instrucciones</p>
                </div>

                {message && (
                    <div className="auth-message auth-message-success">
                        {message}
                    </div>
                )}

                {error && (
                    <div className="auth-message auth-message-error">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="auth-form-group">
                        <label className="auth-label">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="auth-input"
                            placeholder="ejemplo@correo.com"
                        />
                    </div>

                    <button
                        type="submit"
                        className="auth-button auth-button-primary"
                    >
                        Enviar Instrucciones
                    </button>

                    <div className="auth-footer">
                        <button
                            type="button"
                            onClick={() => navigate('/login')}
                            className="auth-link-button"
                        >
                            ← Volver al inicio de sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;