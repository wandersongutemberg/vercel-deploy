import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// 🔑 CONFIGURAÇÕES SÊNIOR DE ROTA DO NEXT.[...](asc_slot://start-slot-7)JS 🚀
export const dynamic = 'force-dynamic'; // Força a rota a ser sempre dinâmica (evita cache)[...](asc_slot://start-slot-8)
export const runtime = 'nodejs';       // Garante o ambiente de execução estável para streaming


export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return Response.json({ erro: "Por favor, envie um tema!" }, { status: 400 });
    }

    const promptPersonalizado = `Você é um assistente criativo. Forneça 3 ideias de projetos ou conceitos interessantes sobre o seguinte tema: "${prompt}". Mantenha as ideias diretas, curtas e inspiradoras.`;

    const result = streamText({
      model: google('gemini-2.5-flash'),
      prompt: promptPersonalizado,
    });

    // 🚀 Retornamos estritamente texto puro de forma ultra compatível!
    return result.toTextStreamResponse();
    
  } catch (error) {
    console.error("Erro no streaming do backend:", error);
    return Response.json({ erro: error.message }, { status: 500 });
  }
}
