// src/app/blog/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import BlogHeader from '@/components/BlogHeader';

const Blog = () => {
  const posts = [
    {
      slug: 'ai-innovations-2025',
      title: 'The Future of Technology: What to Expect in 2025',
      description: 'Stay at the forefront of artificial intelligence with expert insights, innovative strategies, and essential practices to shape the future of AI development.',
      imageUrl: '/9.jpg',
    },
    {
      slug: 'ai-healthcare-innovation',
      title: 'Revolutionizing Healthcare with AI: The Future of Medicine',
      description: 'Imagine a world where AI bridges the gap between dreams and reality.',
      imageUrl: '/10.jpg',
    },
    {
      slug: 'nvidia-robotics-2026',
      title: 'NVIDIA-Powered Robotics: Transforming Innovation in 2026',
      description: `Discover how NVIDIA is revolutionizing robotics with cutting-edge AI, advanced GPUs.`,
      imageUrl: '/8.jpg',
    },
  ];

  return (
    <>
     
        <BlogHeader/>
        <title>Blog Posts</title>
        
        <meta name="description" content="Latest blog posts on technology, lifestyle, and more!" />
     
      <main className="relative flex flex-col items-center justify-center min-h-screen  text-white p-6">
        {/* Background tech icons */}
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none">
          <div className="absolute w-40 h-40 bg-blue-500 opacity-10 rounded-full blur-3xl top-1/3 left-1/4 animate-pulse" />
          <div className="absolute w-32 h-32 bg-purple-500 opacity-20 rounded-full blur-3xl top-1/4 right-1/3 animate-pulse" />
          <div className="absolute w-20 h-20 bg-green-500 opacity-30 rounded-full blur-2xl bottom-1/4 left-1/3 animate-pulse" />
        </div>

        <h1 className="text-4xl font-bold text-center mb-10">Blog Posts</h1>
        <div className="max-w-6xl mx-auto p-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {posts.map((post) => (
              <div key={post.slug} className="bg-white text-black rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 shadow-md overflow-hidden">
                <Link href={`/blog/${post.slug}`}>
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="object-cover z-111 w-full h-52"
                  />
                  <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                    <p className=" ">{post.description} ...</p>
                    
                    <Button buttonText='Read More'/>

                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
