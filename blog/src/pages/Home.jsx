import { useEffect, useState } from "react"; // Importa hooks do React para gerenciar estado e efeitos colaterais
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Importa funções do Firebase para autenticação
import Register from "./Register"; // Importa o componente de registro

const Home = () => {
    // Estado para armazenar os dados do usuário autenticado
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const autenticacao = getAuth(); // Obtém a instância de autenticação do Firebase

        // Firebase observa mudanças no estado de autenticação do usuário
        const cancelarObservador = onAuthStateChanged(autenticacao, (usuario) => {
            setUsuario(usuario); // Se o usuário estiver autenticado, atualiza o estado com os dados dele
        });

        return () => cancelarObservador(); // Remove o observador ao desmontar o componente, evitando vazamento de memória
    }, []);

    return (
        <div>
            {/* Se o usuário estiver logado, exibe uma mensagem de boas-vindas com seu nome */}
            {/* Caso contrário, exibe o formulário de registro */}
            {usuario ? <p>Bem-vindo, {usuario.displayName}</p> : <Register />}
        </div>
    );
};

export default Home; // Exporta o componente para ser usado em outras partes da aplicação
