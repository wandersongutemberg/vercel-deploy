import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export async function POST(req) {
  try {
    // 1. Recebe os dados enviados pelo seu formulário frontend
    const { tema } = await req.json();

    if (!tema) {
      return Response.json({ erro: "Por favor, envie um tema!" }, { status: 400 });
    }

    // 2. Cria um comando personalizado (Prompt) para guiar o comportamento da IA
    const promptPersonalizado = `Você é um assistente criativo. Forneça 3 ideias de projetos ou conceitos interessantes sobre o seguinte tema: "${tema}". Mantenha as ideias diretas, curtas e inspiradoras.`;

    // 3. Chama o modelo da Google de forma rápida usando o SDK da Vercel
    const { text } = await generateText({
      model: google('gemini-2.5-flash'), // Modelo rápido e eficiente para tarefas de texto
      prompt: promptPersonalizado,
    });

    // 4. Retorna as ideias em formato JSON para o seu site
    return Response.json({ resultado: text });
    
  } catch (error) {
    console.error("Erro no processamento da API:", error);
    return Response.json({ erro: "Ocorreu um erro interno ao processar sua requisição." }, { status: 500 });
  }
}
