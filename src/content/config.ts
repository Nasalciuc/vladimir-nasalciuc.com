import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    longDescription: z.string().optional(),
    image: z.string(),
    technologies: z.array(z.string()),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['completed', 'in-progress', 'concept']).default('completed'),
    startDate: z.date(),
    endDate: z.date().optional(),
    category: z.enum(['ai-ml', 'web-dev', 'data-science', 'automation', 'research']),
    achievements: z.array(z.string()).optional(),
    metrics: z.object({
      performance: z.string().optional(),
      users: z.string().optional(),
      impact: z.string().optional(),
    }).optional(),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updateDate: z.date().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    category: z.enum(['ai-ml', 'tutorials', 'insights', 'research', 'career']),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readTime: z.number().optional(),
    author: z.string().default('Vladimir Nasalciuc'),
  }),
});

export const collections = {
  projects,
  articles,
};