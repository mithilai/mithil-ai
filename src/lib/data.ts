import type { BlogPost, ResearchPaper, YouTubeVideo } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Generative AI',
    date: 'October 26, 2023',
    slug: 'future-of-generative-ai',
    description: 'Exploring the next wave of generative models and their potential impact on various industries.',
    link: '/blogs/future-of-generative-ai',
    imageUrl: 'https://picsum.photos/seed/blog1/600/400',
  },
  {
    id: '2',
    title: 'Ethical Considerations in AI Development',
    date: 'September 15, 2023',
    slug: 'ethical-considerations-ai',
    description: 'A deep dive into the ethical challenges and responsibilities that come with building AI systems.',
    link: '/blogs/ethical-considerations-ai',
    imageUrl: 'https://picsum.photos/seed/blog2/600/400',
  },
  {
    id: '3',
    title: 'Getting Started with Reinforcement Learning',
    date: 'August 02, 2023',
    slug: 'reinforcement-learning-basics',
    description: 'A beginner-friendly guide to understanding the core concepts of reinforcement learning.',
    link : '/blogs/reinforcement-learning-basics',
    imageUrl: 'https://picsum.photos/seed/blog3/600/400',
  },
];

export const researchPapers: ResearchPaper[] = [
  {
    id: '1',
    title: 'Attention Is All You Need',
    summary: 'The Transformer is a simple yet powerful architecture based solely on attention mechanisms that outperforms complex recurrent and convolutional models in translation tasks while being faster to train and highly parallelizable.',
    link: 'https://doi.org/10.48550/arXiv.1706.03762',
    imageUrl: '/paper.jpeg',
  },
  {
    id: '2',
    title: 'Graph neural networks: A review of methods and applications',
    summary: 'Graph Neural Networks (GNNs) enable powerful reasoning over structured and unstructured data by modeling node dependencies through message passing, with variants like GCN, GAT, and GRN showing state-of-the-art results across diverse applications.',
    link: 'https://doi.org/10.1016/j.aiopen.2021.01.001',
    imageUrl: '/paper2.jpeg',
  },
];

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: '1',
    title: 'Multi agent AI system for current top 10 news summarization',
    thumbnailUrl: 'https://img.youtube.com/vi/U8fX-cOJ0yU/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/U8fX-cOJ0yU',
  },
  {
    id: '2',
    title: 'Agentic AI application for research paper recommendation',
    thumbnailUrl: 'https://img.youtube.com/vi/9HJ6sxXkMII/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/9HJ6sxXkMII',
  },
  {
    id: '3',
    title: 'Build an Agentic AI App in Just a Few Lines of Code',
    thumbnailUrl: 'https://img.youtube.com/vi/hs-avkSwGa0/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/hs-avkSwGa0',
  },
];
