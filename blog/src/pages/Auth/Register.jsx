import React, { useState } from 'react';
import { Container, Form } from '../../Styles/Form';
import { useAuth, signInWithGoogle } from '../../Hooks/useAuth';

const Register = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        senha: '',
        confirm: '',
    });
    const { createUser, loading } = useAuth()

    const [error, setError] = useState({
        name: '',
        email: '',
        senha: '',
        confirm: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Limpa o erro quando o usuário começa a digitar
        setError({ ...error, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let hasError = false;
        let newError = { name: '', email: '', senha: '', confirm: '' };

        if (!formData.name.trim()) {
            hasError = true;
            newError.name = 'Nome é obrigatório';
        }

        if (!emailRegex.test(formData.email)) {
            hasError = true;
            newError.email = 'Email inválido';
        }

        if (formData.senha.length < 8) {
            hasError = true;
            newError.senha = 'A senha deve ter pelo menos 8 caracteres';
        }

        if (formData.senha !== formData.confirm) {
            hasError = true;
            newError.confirm = 'As senhas não coincidem';
        }

        if (hasError) {
            setError(newError);
            return;
        }
        const res = await createUser(formData)

        // Se não houver erros, limpa os campos
        setFormData({ name: '', email: '', senha: '', confirm: '' });
        setError({ name: '', email: '', senha: '', confirm: '' });


        console.log(res)
    };

    return (
        <Container>
            <button onClick={signInWithGoogle}>Entrar com Google</button>
            <Form>
                <h1>Cadastre-se</h1>
                <form onSubmit={handleSubmit}>
                    <label>Nome:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    {error.name && <p style={{ color: 'red' }}>{error.name}</p>}

                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {error.email && <p style={{ color: 'red' }}>{error.email}</p>}

                    <label>Senha:</label>
                    <input type="password" name="senha" value={formData.senha} onChange={handleChange} />
                    {error.senha && <p style={{ color: 'red' }}>{error.senha}</p>}

                    <label>Confirme a Senha:</label>
                    <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} />
                    {error.confirm && <p style={{ color: 'red' }}>{error.confirm}</p>}

                    {!loading && <button type='submit'>Cadastre</button>}
                    {loading && <button type='submit' disabled>Aguarde...</button>}
                </form>
            </Form>
        </Container>
    );
};

export default Register;
