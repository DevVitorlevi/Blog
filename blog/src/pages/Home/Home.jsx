import { useEffect, useState } from "react"; // Importa hooks do React para gerenciar estado e efeitos colaterais
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Importa funções do Firebase para autenticação
import { Link } from "react-router-dom";
import Register from "../Auth/Register"; // Importa o componente de registro

const Home = () => {
    // Estado para armazenar os dados do usuário autenticado
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const autenticacao = getAuth(); // Obtém a instância de autenticação do Firebase

        // Firebase observa mudanças no estado de autenticação do usuário
        const cancelarObservador = onAuthStateChanged(autenticacao, (usuario) => {
            setUsuario(usuario); // Se o usuário estiver autenticado, atualiza o estado com os dados dele
            console.log(usuario)
        });

        return () => cancelarObservador(); // Remove o observador ao desmontar o componente, evitando vazamento de memória
    }, []);

    return (
        <div>
            <Link to='/dashboard'>Quimica</Link>

        </div>
    );
};

export default Home; // Exporta o componente para ser usado em outras partes da aplicação
