import type { BlogPost, ResearchPaper, YouTubeVideo } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Stealth Scrapping',
    date: 'June 16, 2025',
    slug: 'stealth-scrapping',
    description: 'Learn how to scrape Flipkart reviews stealthily by bypassing anti-bot detection with Python, using practical techniques to stay undetected and efficient.',
    link: 'https://medium.com/@mithilmaske/stealth-scraping-bypassing-anti-bot-detection-while-mining-flipkart-reviews-6c8b6b7a75cc',
    imageUrl: '/flipkartstealth.png',
  },
  {
    id: '2',
    title: 'Breaking Into the Shadow DOM with Selenium',
    date: 'Augest 05, 2025',
    slug: 'handling-shadow-dom-in-selenium',
    description: 'A step-by-step guide to handling Shadow DOM in Selenium and automating hidden elements like cookie consent popups.',
    link: 'https://medium.com/@mithilmaske/fighting-cookies-inside-the-shadow-realm-492be11f881b',
    imageUrl: '/shadowdomthumbnail.png',
  },
  {
    id: '3',
    title: 'ManTraNet and the Hunt for Digital Fakes',
    date: 'August 08, 2025',
    slug: 'image-forgery-detection-mantranet',
    description: 'A quick dive into how ManTraNet spots fake photos and exposes edits with sharp accuracy.',
    link : 'https://medium.com/@mithilmaske/image-forgery-detection-with-mantranet-676793fa3206',
    imageUrl: '/mantranetblog.png',
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
