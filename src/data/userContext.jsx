import React from 'react';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider= ({ children }) => {
    const [autenticado, setAutenticado] = useState(false);
    const login = () => {
        setAutenticado(true);
    };
    const logout = () => {
        setAutenticado(false);
    };
    return (
        <AuthContext.Provider value={{ autenticado, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};