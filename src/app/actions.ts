'use server';

import { aiHealthGuidanceFromPrompt } from '@/ai/flows/ai-health-guidance-from-prompt';

export async function getAIResponse(prompt: string, language: string, location?: string) {
  try {
    const result = await aiHealthGuidanceFromPrompt({ prompt, language, location });
    return { success: true, message: result.healthInformation };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Sorry, I encountered an error. Please try again.' };
  }
}
