import { GoogleGenAI } from '@google/genai';
import { chemistryData } from '../data/chemistryData';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function askChemistryQuestion(question: string, contextTopicId?: string): Promise<string> {
  try {
    let context = "Bạn là một gia sư Hóa học thông minh, nhiệt tình và thân thiện. Hãy trả lời câu hỏi của học sinh dựa trên kiến thức Hóa học cấp THCS/THPT.\n\n";
    
    if (contextTopicId) {
      const topic = chemistryData.find(t => t.id === contextTopicId);
      if (topic) {
        context += `Dưới đây là kiến thức tham khảo từ sách giáo khoa cho chủ đề "${topic.title}":\n`;
        topic.knowledge.forEach(k => {
          context += `${k.section}:\n`;
          k.points.forEach(p => context += `- ${p}\n`);
        });
        context += "\n";
      }
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: `${context}\nCâu hỏi của học sinh: ${question}`,
    });

    return response.text || "Xin lỗi, tôi không thể trả lời câu hỏi này lúc này.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đã có lỗi xảy ra khi kết nối với AI. Vui lòng thử lại sau.";
  }
}
