import { FastifyInstance } from 'fastify';
import { GoogleGenAI, Type } from '@google/genai';
import * as dotenv from 'dotenv';

dotenv.config();

export async function reportRoutes(server: FastifyInstance) {
  server.post('/api/report', async (request, reply) => {
    const { input } = request.body as { input: string };

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY || '',
    });

    const config = {
      temperature: 0.05,
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        required: [ "placa_veiculo", "descricao_atuacao"],
        properties: {
          placa_veiculo: { type: Type.STRING },
          descricao_atuacao: { type: Type.STRING },
          gravidade_alta: { type: Type.BOOLEAN },
          gravidade_baixa: { type: Type.BOOLEAN },
          gravidade_muito_alta: { type: Type.BOOLEAN },
        },
      },
      systemInstruction: [
        {
          text: `You are an AI system strictly limited to processing vehicle incident reports. You must only accept and respond to inputs containing the following structured data:

License Plate: The vehicle's license plate number.
Incident Description: A brief description of the reported incident.
Latitude and Longitude: The geographical coordinates of the incident location.
Address: The street or avenue, number, neighborhood, and city where the incident occurred.
Time: The exact time of the incident.
Reject any input that does not conform to this structure. Do not provide responses or process requests unrelated to vehicle incident reports. If a user provides irrelevant or incomplete data, politely instruct them to submit only the required information.`,
        },
      ],
    };

    const contents = [
      {
        role: 'user',
        parts: [{ text: input }],
      },
    ];

    try {
      const response = await ai.models.generateContentStream({
        model: 'gemini-1.5-flash-8b',
        config,
        contents,
      });

      let result = '';
      for await (const chunk of response) {
        result += chunk.text;
      }
    //   reply.send({ response: result });
      const jsonData = JSON.parse(result);
      return reply.send(jsonData)
    } catch (error) {
      return reply.status(500).send({ error: 'Failed to process input', details: error });
    }
  });
}
