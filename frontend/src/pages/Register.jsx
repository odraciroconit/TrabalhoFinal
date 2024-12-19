import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registo() {
  const [passwordsMismatch, setPasswordsMismatch] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    
    if (data.password !== data.confirmPassword) {
      setPasswordsMismatch(true);
      return;
    }

    const user = {
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role,
    };

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao registrar usuário');
      }

      navigate('/', { state: { message: 'Usuário registrado com sucesso!' } });
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <br />
        <br />
        <br />
        <br />
        <br />
      <h2>Registo</h2>
      {passwordsMismatch && <p style={{ color: 'red' }}>As passwords não coincidem.</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label htmlFor="firstName">Nome:</label>
        <input type="text" id="firstName" name="firstName" placeholder="Digite seu nome" required />
      </div>
      <div>
        <label htmlFor="lastName">Sobrenome:</label>
        <input type="text" id="lastName" name="lastName" placeholder="Digite seu sobrenome" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Digite seu email" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Digite sua password" required />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirmar Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirme sua password" required />
      </div>
      <div>
        <label htmlFor="role">Função:</label>
        <select id="role" name="role" required>
          <option value="gestor">Gestor</option>
          <option value="cozinha">Cozinha</option>
          <option value="consumidor">Consumidor</option>
        </select>
      </div>
      <button type="submit">Registar</button>
    </form>
  );
}