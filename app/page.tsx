'use client';

import { useState } from 'react';

export default function Home() {
  const [tema, setTema] = useState('');
  const [resultado, setResultado] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function buscarIdeias(e) {
    e.preventDefault();
    setCarregando(true);
    setResultado('');

    try {
      // Faz uma chamada HTTP do tipo POST para a nossa rota de API que criamos no Passo 1
      const response = await fetch('/api/gerar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tema }),
      });

      const data = await response.json();

      if (data.erro) {
        setResultado(`Erro: ${data.erro}`);
      } else {
        setResultado(data.resultado);
      }
    } catch (error) {
      setResultado('Não foi possível conectar ao servidor backend.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>💡 Gerador de Ideias com Gemini e Vercel SDK</h1>
      <p>Escreva um tema abaixo e deixe a inteligência artificial dar sugestões criativas para você.</p>

      <form onSubmit={buscarIdeias} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Ex: Jogos Indie, Receitas Saudáveis, Estudos de CSS"
          value={tema}
          onChange={(e) => setTema(e.target.value)}
          required
          style={{ flex: 1, padding: '12px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          disabled={carregando}
          style={{ padding: '12px 24px', fontSize: '16px', borderRadius: '6px', backgroundColor: '#0070f3', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          {carregando ? 'Pensando...' : 'Gerar Ideias'}
        </button>
      </form>

      {resultado && (
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', border: '1px solid #ddd', whiteSpace: 'pre-wrap' }}>
          <h3>✨ Sugestões Criativas:</h3>
          <p>{resultado}</p>
        </div>
      )}
    </main>
  );
}
