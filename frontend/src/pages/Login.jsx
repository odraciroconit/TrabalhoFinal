import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    
    function handleInputChange(identifier, value) {
        setEnteredValues((prevValues) => ({
            ...prevValues,
            [identifier]: value,
        }));
    }

    
    function handleSubmit(event) {
        event.preventDefault();
        const authData = enteredValues;
        console.log(enteredValues);

        
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(authData),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Falha ao autenticar');
                }
            })
            .then((data) => {
                console.log(data);
                
                localStorage.setItem('token', data.token);
                localStorage.setItem('role', data.role);
                navigate('/'); 
            })
            .catch((error) => {
                console.error('Erro de login:', error);
                alert('Credenciais inválidas');
            });
    }

    return (

        
        <form onSubmit={handleSubmit}>
            <br />
            <br />
            <br />
            <br />
            <h2>Login</h2>
            <br />
            <br />
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu email"
                    required
                    value={enteredValues.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Digite sua password"
                    required
                    value={enteredValues.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                />
            </div>
            <button type="submit">Entrar</button>
        </form>
    );
}