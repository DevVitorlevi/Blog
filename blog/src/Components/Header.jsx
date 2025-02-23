import { NavLink } from "react-router-dom";
import { Headerdiv } from "../Styles/Header";
import { useAuthValue } from "../Context/AuthContext"; // Corrigir para usar o useAuthValue, já que você usa o contexto aqui

const Header = () => {
    const { user } = useAuthValue(); // Acesse diretamente do contexto

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
                            <NavLink to="/login">Entre</NavLink>
                        </li>
                    </>
                )}
                {user && (
                    <>
                        <li>
                            <NavLink to="/profile">Perfil</NavLink> {/* Exemplo de página de perfil */}
                        </li>
                        <li>
                            <NavLink to="/logout">Sair</NavLink> {/* Exemplo de logout */}
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
