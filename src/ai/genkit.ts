// import {genkit} from 'genkit';
// import {googleAI} from '@genkit-ai/googleai';

// export const ai = genkit({
//   plugins: [googleAI()],
//   model: 'googleai/gemini-2.0-flash',
// });

// lib/groq.ts
import { ChatGroq } from "@langchain/groq";

export const chatModel = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile", // Or mixtral-8x7b-32768
});

