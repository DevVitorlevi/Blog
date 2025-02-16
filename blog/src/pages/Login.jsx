import React, { useState } from 'react';
import { Container, Form } from '../Styles/Form';

const Register = () => {

    const [formData, setFormData] = useState({
        email: '',
        senha: '',
    });

    const [error, setError] = useState({
        email: '',
        senha: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Limpa o erro quando o usuário começa a digitar
        setError({ ...error, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let hasError = false;
        let newError = { email: '', senha: '', };


        if (!emailRegex.test(formData.email)) {
            hasError = true;
            newError.email = 'Email inválido';
        }

        if (formData.senha.length < 8) {
            hasError = true;
            newError.senha = 'A senha deve ter pelo menos 8 caracteres';
        }

        if (hasError) {
            setError(newError);
            return;
        }

        // Se não houver erros, limpa os campos
        setFormData({ email: '', senha: '', });
        setError({ email: '', senha: '', });
    };

    return (
        <Container>
            <Form>
                <h1>Cadastre-se</h1>
                <form onSubmit={handleSubmit}>

                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {error.email && <p style={{ color: 'red' }}>{error.email}</p>}

                    <label>Senha:</label>
                    <input type="password" name="senha" value={formData.senha} onChange={handleChange} />
                    {error.senha && <p style={{ color: 'red' }}>{error.senha}</p>}


                    <button type="submit">Cadastrar</button>
                </form>
            </Form>
        </Container>
    );
};

export default Login;
