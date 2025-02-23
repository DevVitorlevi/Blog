import { db } from "../firebase/config";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    GoogleAuthProvider, 
    signInWithPopup 
} from "firebase/auth";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

export const useAuth = () => {
    const [loading, setLoading] = useState(null);
    const [cancelled, setCancelled] = useState(false);
    
    const auth = getAuth();

    function checkIsCancelled() {
        if (cancelled) return;
    }

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
                displayName: formData.name,
            });

            return user;
        } catch (error) {
            console.log(error);
        }  

        setLoading(false);
    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        loading,
    };
};

// 🚀 Agora com a correção do login Google:
export const signInWithGoogle = async () => {
    try {
        const auth = getAuth(); // Obtém a instância de autenticação do Firebase
        const result = await signInWithPopup(auth, googleProvider);
        console.log("Usuário logado:", result.user);
        return result.user;
    } catch (error) {
        console.error("Erro ao fazer login com Google:", error);
        return null;
    }
};
