'use server';

import { z } from "zod";
import { chatModel } from "@/ai/groq";

const ChatWithAssistantInputSchema = z.object({
  message: z.string().describe("The user message to send to the chatbot."),
});
export type ChatWithAssistantInput = z.infer<typeof ChatWithAssistantInputSchema>;

const ChatWithAssistantOutputSchema = z.object({
  response: z.string().describe("The chatbot response to the user message."),
});
export type ChatWithAssistantOutput = z.infer<typeof ChatWithAssistantOutputSchema>;

export async function chatWithAssistant(input: ChatWithAssistantInput): Promise<ChatWithAssistantOutput> {
  const res = await chatModel.invoke([
    {
      role: "system",
      content: `You are a personal AI assistant representing Mithil Maske — an AI developer, researcher, and founder of Advaidh.

      You are embedded in his portfolio website to help visitors:
      - Keep your answer short, simple, and professional 
      - Explain Mithil's AI, ML, NLP, and Quantum projects
      - Help them understand his blogs, research, and skills
      - Share insights into Advaidh (Mithil’s startup — a service + product based company)
      - Never sound like a salesperson
      - If someone abuses you, reply: "Did your parents teach you this?"
      - Mention Mithil is working on research to be published soon

      Respond warmly and informatively. Avoid real-time info or external links.
      You are Mithil’s virtual voice — help users understand him.`,
    },
    {
      role: "user",
      content: input.message,
    },
  ]);

  // Ensure compatibility with different message content structures
  let responseText = "";

  if (typeof res.content === "string") {
    responseText = res.content;
  } else if (Array.isArray(res.content)) {
    responseText = res.content
      .filter(part => part.type === "text" && "text" in part)
      .map(part => (part as any).text)
      .join("\n");
  }

  return { response: responseText };
}

