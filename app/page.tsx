'use client';

// Usamos a importação que funciona com a biblioteca que está ativa na memória
import { useCompletion } from '@ai-sdk/react';

export default function Home() {
  const { completion, input, handleInputChange, handleSubmit, isLoading } = useCompletion({
    api: '/api/gerar',
    streamProtocol: 'text'
  });

  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>⚡ Gerador de Ideias em Tempo Real com Gemini</h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>Escreva um tema abaixo e assista a inteligência artificial responder palavra por palavra instantaneamente.</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Ex: Jogos de RPG, Robôs de Limpeza, Design Patterns"
          value={input}
          onChange={handleInputChange}
          required
          style={{ flex: 1, padding: '12px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          disabled={isLoading}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '6px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.7 : 1
          }}
        >
          {isLoading ? 'Escrevendo...' : 'Gerar Ideias'}
        </button>
      </form>

      {/* O estado 'completion' atualiza e renderiza os blocos de texto dinamicamente */}
      {completion && (
        <div style={{
          padding: '25px',
          backgroundColor: '#fafafa',
          borderRadius: '10px',
          border: '1px solid #eaeaea',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          whiteSpace: 'pre-wrap'
        }}>
          <h3 style={{ marginTop: 0, color: '#0070f3' }}>✨ Ideias Sugeridas:</h3>
          <p style={{ lineHeight: '1.6', fontSize: '16px' }}>{completion}</p>
        </div>
      )}
    </main>
  );
}
