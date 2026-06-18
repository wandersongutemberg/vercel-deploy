export default function handler(req, res) {
    res.status(200).json({
        mensagem: "Olá do Backend Serverless!",
        horario: new Date().toISOString()
    });
}