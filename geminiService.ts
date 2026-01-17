
import { GoogleGenAI, Type } from "@google/genai";

// Always create a new GoogleGenAI instance right before making an API call to ensure it uses the latest API key.
// Guidelines: Use process.env.API_KEY directly in the named parameter.

export const optimizeSummary = async (summary: string, role: string) => {
  try {
    // Re-initialize for each call as per best practices to ensure fresh configuration.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert resume writer. Optimize the following executive summary for a ${role} position to be more ATS-friendly and professional. Keep it concise (3-4 sentences). 
      
      Current Summary: ${summary}`,
    });
    // Use .text property directly.
    return response.text;
  } catch (error) {
    console.error("Gemini optimization error:", error);
    return summary;
  }
};

export const suggestSkills = async (role: string) => {
  try {
    // Re-initialize for each call as per best practices.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a list of top 10 technical skills and top 5 soft skills for a ${role}.`,
      config: {
        responseMimeType: "application/json",
        // Using responseSchema to ensure the model returns data in the expected JSON format.
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            technical: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
              description: 'The top 10 technical skills relevant to the role.',
            },
            soft: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
              description: 'The top 5 soft skills relevant to the role.',
            },
          },
          propertyOrdering: ["technical", "soft"],
        },
      }
    });
    const text = response.text;
    return text ? JSON.parse(text) : { technical: [], soft: [] };
  } catch (error) {
    console.error("Gemini suggestion error:", error);
    return { technical: [], soft: [] };
  }
};
