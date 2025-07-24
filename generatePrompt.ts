import {
  GoogleGenAI,
  type GenerateContentResponse,
} from "@google/genai";

import { geminiAPIKey } from "./env.config";


export async function generateGeminiResponse(userQuery:string,systemPrompt:string=""): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: geminiAPIKey });
  const modelName = "gemini-2.0-flash-001";

  try {
    const response:GenerateContentResponse = await ai.models.generateContent({
      model: modelName,
      contents: userQuery,
      config:{
        systemInstruction: systemPrompt,
      }
    }) ;
    if (!response || !response.text) {
      throw new Error("No response text received from the model.");
    } 
    return response.text ?? ''
  } catch (error) {
    console.error("Error generating content ", error);
    return '';
  }
}