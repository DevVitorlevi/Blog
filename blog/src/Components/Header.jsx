import { NavLink } from "react-router-dom"
import { Headerdiv } from '../Styles/Header'
const Header = () => {
    return (
        <>
            <Headerdiv>

                <h1><NavLink to='/'>Blog</NavLink></h1>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/register'>Cadastrar</NavLink></li>
                    <li><NavLink to='/login'>Entre</NavLink></li>
                    <li><NavLink to='/about'>Sobre</NavLink></li>
                </ul>
            </Headerdiv>
        </>
    )
}

export default Header