import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(), // emoji or image path
    metric: z.string().optional(), // e.g., "$2.4M"
    metricLabel: z.string().optional(), // e.g., "ingresos"
    url: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
