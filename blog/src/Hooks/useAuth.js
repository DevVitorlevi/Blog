import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Certifique-se de importar o que é necessário
import { useState, useEffect } from "react";
import { db } from "../firebase/config"; // Certifique-se de que o caminho para a configuração está correto

const googleProvider = new GoogleAuthProvider(); // Instancia o provedor do Google

export const useAuth = () => {
    const [loading, setLoading] = useState(null);
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    // Função para verificar se a operação foi cancelada
    function checkIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    // Função para criar um novo usuário com email e senha
    const createUser = async (formData) => {
        checkIsCancelled();
        setLoading(true);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.senha
            );

            await updateProfile(user, {
                displayName: formData.name
            });

            return user;
        } catch (error) {
            console.log(error);
        }

        setLoading(false);
    };

    // Função de logout
    const logout = () => {
        checkIsCancelled();
        signOut(auth);
    };
    const login = async(data) =>{
        checkIsCancelled()
        setLoading(true)

        try {
            await signInWithEmailAndPassword(auth,data.email,data.passoword)
        } catch (error) {
            console.log(error)
        }

        setLoading(false)
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        logout,
        login,
        loading
    };
};

// Função para fazer login com o Google
export const signInWithGoogle = async () => {
    try {
        // Certifique-se de que está utilizando o método correto
        const result = await signInWithPopup(getAuth(), googleProvider); 
        console.log("Usuário logado com Google:", result.user);
        return result.user; // Retorna os dados do usuário autenticado
    } catch (error) {
        console.error("Erro ao fazer login com Google:", error);
        return null;
    }
};
