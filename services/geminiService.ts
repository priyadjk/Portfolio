
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCES } from "../constants";

const getApiKey = () => process.env.API_KEY || '';

export const getGeminiChat = () => {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.error("API Key not found");
    return null;
  }
  
  const ai = new GoogleGenAI({ apiKey });
  
  const context = `
    You are Priyadarsni JK's professional AI assistant. 
    Priyadarsni's Info: ${JSON.stringify(PERSONAL_INFO)}
    Projects: ${JSON.stringify(PROJECTS)}
    Skills: ${JSON.stringify(SKILLS)}
    Experience: ${JSON.stringify(EXPERIENCES)}
    
    Instructions:
    1. Answer questions about Priyadarsni's research, ML projects, skills, and academic background professionally.
    2. Be concise but helpful. Mention that she is a final year AI & DS student.
    3. If asked about contact info, mention her email: ${PERSONAL_INFO.email}.
    4. Maintain a intelligent, professional, and friendly tone.
    5. Do not hallucinate facts not provided in the context.
  `;

  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: context,
    },
  });
};
