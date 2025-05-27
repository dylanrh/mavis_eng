// src/ai/flows/theme-recommendation.ts
'use server';

/**
 * @fileOverview AI flow to recommend an accent color based on uploaded wedding theme images.
 *
 * - recommendThemeAccentColor - A function that handles the theme accent color recommendation process.
 * - ThemeAccentColorInput - The input type for the recommendThemeAccentColor function.
 * - ThemeAccentColorOutput - The return type for the recommendThemeAccentColor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ThemeAccentColorInputSchema = z.object({
  image1DataUri: z
    .string()
    .describe(
      "A photo of a wedding theme, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  image2DataUri: z
    .string()
    .describe(
      "A photo of a wedding theme, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  image3DataUri: z
    .string()
    .describe(
      "A photo of a wedding theme, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  description: z.string().describe('A description of the wedding theme.'),
});
export type ThemeAccentColorInput = z.infer<typeof ThemeAccentColorInputSchema>;

const ThemeAccentColorOutputSchema = z.object({
  accentColor: z
    .string()
    .describe(
      'The recommended accent color for the wedding theme, in hex format (e.g., #RRGGBB).'
    ),
  reason: z
    .string()
    .describe(
      'A brief explanation of why this accent color is recommended for the wedding theme.'
    ),
});
export type ThemeAccentColorOutput = z.infer<typeof ThemeAccentColorOutputSchema>;

export async function recommendThemeAccentColor(
  input: ThemeAccentColorInput
): Promise<ThemeAccentColorOutput> {
  return recommendThemeAccentColorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'themeAccentColorPrompt',
  input: {schema: ThemeAccentColorInputSchema},
  output: {schema: ThemeAccentColorOutputSchema},
  prompt: `You are an AI Style Advisor specializing in wedding themes.

  Based on the images and description of the wedding theme provided, you will recommend a complementary accent color in hex format (e.g., #RRGGBB) and explain why it is a good fit.

  Description: {{{description}}}
  Image 1: {{media url=image1DataUri}}
  Image 2: {{media url=image2DataUri}}
  Image 3: {{media url=image3DataUri}}

  Give the hex code first, and then explain why it complements the theme.
  `,
});

const recommendThemeAccentColorFlow = ai.defineFlow(
  {
    name: 'recommendThemeAccentColorFlow',
    inputSchema: ThemeAccentColorInputSchema,
    outputSchema: ThemeAccentColorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
