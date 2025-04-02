import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Context } from '../store/appContext';
import './../../styles/auth.css';

const ResetPassword = () => {
    const { actions } = useContext(Context);
    const location = useLocation();
    const email = location.state?.email || '';
    const [resetCode, setResetCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }
        try {
            const result = await actions.resetPassword(email, resetCode, newPassword);
            if (result.error) throw new Error(result.error);
            setMessage(result.message);
            setError('');
            setTimeout(() => navigate('/login'), 1000);
        } catch (error) {
            setError(error.message);
            setMessage('');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h2 className="auth-title">Restablecer Contraseña</h2>
                    <p className="auth-subtitle">Ingresa el código y tu nueva contraseña</p>
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
                            readOnly
                            className="auth-input"
                        />
                    </div>

                    <div className="auth-form-group">
                        <label className="auth-label">Código de verificación</label>
                        <input
                            type="text"
                            value={resetCode}
                            onChange={(e) => setResetCode(e.target.value)}
                            required
                            className="auth-input"
                            placeholder="Ingresa el código recibido"
                        />
                    </div>

                    <div className="auth-form-group">
                        <label className="auth-label">Nueva Contraseña</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="auth-input"
                            placeholder=""
                        />
                    </div>

                    <div className="auth-form-group">
                        <label className="auth-label">Confirmar Contraseña</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="auth-input"
                            placeholder="Repite tu nueva contraseña"
                        />
                    </div>

                    <button
                        type="submit"
                        className="auth-button auth-button-primary"
                    >
                        Restablecer Contraseña
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

export default ResetPassword;