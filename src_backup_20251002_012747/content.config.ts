import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    image: z.string().optional(),
    musicUrl: z.string().optional(),
  }),
});

const dialogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    // Удаляем content: z.string() — MDX рендерится автоматически
  }),
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    link: z.string().optional(),
  }),
});

const presentationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    embed: z.string(),
    description: z.string().optional(),
  }),
});

const galleryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    images: z.array(z.object({
      image: z.string(),
      alt: z.string(),
    })),
  }),
});

const learningCollection = defineCollection({
  type: 'content',
  schema: z.object({
    chapter: z.string(),
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  dialogs: dialogCollection,
  portfolio: portfolioCollection,
  presentations: presentationsCollection,
  gallery: galleryCollection,
  learning: learningCollection,
};