import React, { useState } from 'react'
import { Container, Form } from '../Styles/Form';
const Register = () => {
    const [formData, setFormdata] = useState({
        name: '',
        email: '',
        senha: '',
        confirm: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault()

        setFormdata({ name: '', email: '', senha: '', confirm: '' })

    }
    return (
        <>
            <Container>
                <Form>
                    <form onSubmit={handleSubmit}>
                        <label>Nome:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        <label>Senha</label>
                        <input type="password" name="senha" value={formData.senha} onChange={handleChange} />
                        <label>Confirme a Senha</label>
                        <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} />
                    </form>
                </Form>
            </Container>
        </>
    )
}

export default Register