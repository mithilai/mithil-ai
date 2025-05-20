import { blogPosts } from '@/lib/data';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">All Blog Posts</h1>
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="block border-b pb-4">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-sm text-muted-foreground">{post.date}</p>
            <p className="mt-2">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
