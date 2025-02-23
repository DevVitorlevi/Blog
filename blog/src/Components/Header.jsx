import { NavLink } from "react-router-dom";
import { Headerdiv } from "../Styles/Header";
import { useAuthValue } from "../Context/AuthContext";
import { useAuth } from "../Hooks/useAuth"; // Corrigir a importação

const Header = () => {
    const { user } = useAuthValue(); // Acessa o usuário do contexto
    const { logout } = useAuth(); // Função de logout


    return (
        <Headerdiv>
            <h1>
                <NavLink to="/">Blog</NavLink>
            </h1>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                {!user && (
                    <>
                        <li>
                            <NavLink to="/register">Cadastrar</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Entrar</NavLink>
                        </li>
                    </>
                )}
                {user && (
                    <>
                        <li>
                            <NavLink to="/profile">Perfil</NavLink>
                        </li>
                        <li>
                            <NavLink to="/createpost">Criar Post</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </li>
                        <li>
                            <span onClick={logout}>Sair</span> {/* Botão para sair */}
                        </li>
                    </>
                )}
                <li>
                    <NavLink to="/about">Sobre</NavLink>
                </li>
            </ul>
        </Headerdiv>
    );
};

export default Header;
