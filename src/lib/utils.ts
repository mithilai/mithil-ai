import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { blogPosts } from './data';

 export function getBlogPostBySlug(slug: string) {
  return blogPosts.find(
    (post) =>
      post.title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '') === slug
  );
}
