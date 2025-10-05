'use server';

/**
 * @fileOverview Summarizes health information from a long document, providing a short summary of potential issues.
 *
 * - summarizeHealthInformation - A function that handles the summarization of health information.
 * - SummarizeHealthInformationInput - The input type for the summarizeHealthInformation function.
 * - SummarizeHealthInformationOutput - The return type for the summarizeHealthInformation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeHealthInformationInputSchema = z.object({
  document: z
    .string()
    .describe('A long document describing symptoms and health information.'),
});
export type SummarizeHealthInformationInput = z.infer<
  typeof SummarizeHealthInformationInputSchema
>;

const SummarizeHealthInformationOutputSchema = z.object({
  summary: z
    .string()
    .describe('A short summary of potential health issues based on the document.'),
});
export type SummarizeHealthInformationOutput = z.infer<
  typeof SummarizeHealthInformationOutputSchema
>;

export async function summarizeHealthInformation(
  input: SummarizeHealthInformationInput
): Promise<SummarizeHealthInformationOutput> {
  return summarizeHealthInformationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeHealthInformationPrompt',
  input: {schema: SummarizeHealthInformationInputSchema},
  output: {schema: SummarizeHealthInformationOutputSchema},
  prompt: `You are a medical expert. Please summarize the following document and identify potential health issues in a short summary.

Document: {{{document}}}`,
});

const summarizeHealthInformationFlow = ai.defineFlow(
  {
    name: 'summarizeHealthInformationFlow',
    inputSchema: SummarizeHealthInformationInputSchema,
    outputSchema: SummarizeHealthInformationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
