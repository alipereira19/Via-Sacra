import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Context } from './store/appContext.js';
import HelpPlaces from './pages/HelpPlaces.jsx';
import Embassies from './pages/Embassies.jsx';
import Chat from './pages/Chat.jsx';
import Blog from './pages/Blog.jsx';
import Gadgets from './pages/Gadgets.jsx';
import ChatBot from './pages/ChatBot.jsx';
import ContactList from './pages/ContactList.jsx';
import ImmigrationRequirements from './pages/ImmigrationRequirements.jsx';
import PaypalBalance from './pages/PaypalBalance.jsx';
import FreqAskedQuestions from './pages/FreqAskedQuestions.jsx';
import Emergency from './pages/Emergency.jsx';
import StatsAndReports from './pages/StatsAndReports.jsx';
import Help from './pages/Help.jsx';
import LocationView from './pages/LocationView.jsx';
import AdminConsole from './pages/AdminConsole.jsx';
import DashboardEdition from './pages/DashboardEdition.jsx';
import injectContext from "./store/appContext";
import Home from "./pages/Home.jsx";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ResetPassword from "./component/ResetPassword.jsx";
import ForgotPassword from "./component/ForgotPassword.jsx";
import PaypalBalance2 from "./pages/PaypalBalance2.jsx"

const Layout = () => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const { store } = useContext(Context);

    // Sincronizar el token con el localStorage
    useEffect(() => {
        const handleStorageChange = () => {
            const newToken = localStorage.getItem("token");
            if (newToken !== token) {
                setToken(newToken);
            }
        };

        // Escuchar cambios en el localStorage
        window.addEventListener('storage', handleStorageChange);

        // Verificar el token periódicamente
        const interval = setInterval(() => {
            const currentToken = localStorage.getItem("token");
            if (currentToken !== token) {
                setToken(currentToken);
            }
        }, 1000);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            clearInterval(interval);
        };
    }, [token]);


    useEffect(() => {
        if (store.user?.isAuthenticated) {
            const currentPath = window.location.pathname;
            const isAuthPath = ['/login', '/signup', '/forgot-password'].includes(currentPath);

            if (isAuthPath) {
                const redirectPath = store.user.role === 'admin' ? '/admin-dashboard' : '/home';
                window.location.href = redirectPath;
            }
        }
    }, [store.user]);

    return (
        <BrowserRouter>
            <ScrollToTop>
                {!token ? (
                    <Routes>
                        <Route path="/login" element={<Login setToken={setToken} />} />
                        <Route path="/signup" element={<Register />} />
                        <Route path="/reset-password" element={<ResetPassword />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="*" element={<Navigate to="/login" replace />} />
                        <Route path="/paypal-balance" element={<PaypalBalance />} />

                    </Routes>
                ) : (
                    <>
                        <Navbar style={{ position: "fixed-top", top: 0, zIndex: 1000 }} />
                        <div style={{ flex: 1, overflowY: "auto" }}>
                            <Routes>
                                <Route path="/" element={<Navigate to="/home" replace />} />
                                <Route path="/paypal-balance2" element={<PaypalBalance2 />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/chat" element={<Chat />} />
                                <Route path="/help-places" element={<HelpPlaces />} />
                                <Route path="/embassies" element={<Embassies />} />
                                <Route path="/blog" element={<Blog />} />
                                <Route path="/gadgets" element={<Gadgets />} />
                                <Route path="/chatbot" element={<ChatBot />} />
                                <Route path="/contact-list" element={<ContactList />} />
                                <Route path="/immigration-requirements" element={<ImmigrationRequirements />} />
                                <Route path="/freq-asked-questions" element={<FreqAskedQuestions />} />
                                <Route path="/emergency" element={<Emergency />} />
                                <Route path="/stats-and-reports" element={<StatsAndReports />} />
                                <Route path="/help" element={<Help />} />
                                <Route path="/location-view" element={<LocationView />} />
                                <Route path="/admin-console" element={<AdminConsole />} />
                                <Route path="/dashboard-edition" element={<DashboardEdition />} />
                                <Route path="*" element={<Navigate to="/home" replace />} />
                            </Routes>
                        </div>
                        <Footer style={{ position: "sticky", bottom: 0, zIndex: 1000 }} />
                    </>
                )}
            </ScrollToTop>
        </BrowserRouter>
    );
};



export default injectContext(Layout);
