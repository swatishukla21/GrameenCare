'use server';

/**
 * @fileOverview Provides AI-powered health guidance based on a user's prompt.
 *
 * - aiHealthGuidanceFromPrompt - A function that takes a health-related prompt and returns relevant health information.
 * - AIHealthGuidanceFromPromptInput - The input type for the aiHealthGuidanceFromPrompt function.
 * - AIHealthGuidanceFromPromptOutput - The return type for the aiHealthGuidanceFromPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIHealthGuidanceFromPromptInputSchema = z.object({
  prompt: z.string().describe('The health-related question or request from the user.'),
  language: z.string().describe('The preferred language for the response (e.g., en, es, fr).'),
  location: z.string().optional().describe('The user location to provide best advice.'),
});
export type AIHealthGuidanceFromPromptInput = z.infer<typeof AIHealthGuidanceFromPromptInputSchema>;

const AIHealthGuidanceFromPromptOutputSchema = z.object({
  healthInformation: z.string().describe('Accurate, verified first-aid and basic health information in the requested language.'),
});
export type AIHealthGuidanceFromPromptOutput = z.infer<typeof AIHealthGuidanceFromPromptOutputSchema>;

export async function aiHealthGuidanceFromPrompt(input: AIHealthGuidanceFromPromptInput): Promise<AIHealthGuidanceFromPromptOutput> {
  return aiHealthGuidanceFromPromptFlow(input);
}

const aiHealthGuidanceFromPromptPrompt = ai.definePrompt({
  name: 'aiHealthGuidanceFromPromptPrompt',
  input: {schema: AIHealthGuidanceFromPromptInputSchema},
  output: {schema: AIHealthGuidanceFromPromptOutputSchema},
  prompt: `You are a helpful AI assistant providing first-aid and basic health information.  Please answer the user's question in {{{language}}} and provide information that is verified and accurate. If a location is provided, tailor the advice for that location.

Question: {{{prompt}}}
`,
});

const aiHealthGuidanceFromPromptFlow = ai.defineFlow(
  {
    name: 'aiHealthGuidanceFromPromptFlow',
    inputSchema: AIHealthGuidanceFromPromptInputSchema,
    outputSchema: AIHealthGuidanceFromPromptOutputSchema,
  },
  async input => {
    const {output} = await aiHealthGuidanceFromPromptPrompt(input);
    return output!;
  }
);
