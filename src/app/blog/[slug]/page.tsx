// import { blogPosts } from '@/lib/data';
// import { notFound } from 'next/navigation';

// export default function BlogPostPage({ params }: { params: { slug: string } }) {
//   const post = blogPosts.find((p) => p.slug === params.slug);

//   if (!post) return notFound();

//   return (
//     <div className="container mx-auto py-10 px-4">
//       <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
//       <p className="text-muted-foreground mb-2">{post.date}</p>
//       <img
//         src={post.imageUrl}
//         alt={post.title}
//         className="rounded mb-6 w-full"
//       />
//       <p>{post.description}</p>
//     </div>
//   );
// }

// src/app/blog/[slug]/page.tsx
import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <article>{post.description}</article>
      <img src = {post.imageUrl}/>
    </div>
  );
}
