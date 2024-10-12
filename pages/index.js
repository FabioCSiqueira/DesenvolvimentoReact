import { useState } from 'react';

export default function Home() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sum = parseFloat(num1) + parseFloat(num2);
    setSum(sum);
  };

  return (
    <div style={{ padding: '50px' }}>
      <h1>Soma de Números</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Número 1:
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Número 2:
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Calcular</button>
      </form>
      {sum !== null && <h2>Resultado: {sum}</h2>}
    </div>
  );
}
