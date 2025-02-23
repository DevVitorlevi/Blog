import { useContext, createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Criação do Contexto
const AuthContext = createContext();

// Componente Provider
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const cancelarObservador = onAuthStateChanged(auth, (usuario) => {
            setUser(usuario); // Atualiza o estado com o usuário autenticado
        });

        return () => cancelarObservador(); // Remove o observador ao desmontar o componente
    }, [auth]);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook customizado para acessar o valor do contexto
export function useAuthValue() {
    return useContext(AuthContext);
}
