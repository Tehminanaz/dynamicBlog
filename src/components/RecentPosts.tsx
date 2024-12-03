import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const RecentPosts = () => {
  const posts = [
    {
      slug: 'exploring-latest-technology',
      title: 'The Future of Technology: What to Expect in 2024',
      description: 'Technology is evolving at a breakneck speed, influencing nearly every',
      imageUrl: '/post-1.jpg',
    },
    {
      slug: 'front-end-to-headless-cms',
      title: 'My Front-End Development Journey',
      description: 'Simple lifestyle changes that can make a big difference in your overall well-being',
      imageUrl: '/post-2.jpeg',
    },
    {
      slug: 'web-development-best-practices-2024',
      title: 'Web Development Best Practices for 2024',
      description: `As technology continues to evolve, it's crucial for web developers`,
      imageUrl: '/post-3.jpg',
    },
  ];

  return (
    <>
      <Head>
        <title>Recent Blog Posts</title>
        <meta name="description" content="Latest blog posts on technology, lifestyle, and more!" />
      </Head>
      <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-6">
        {/* Background tech icons */}
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none">
          <div className="absolute w-40 h-40 bg-blue-500 opacity-10 rounded-full blur-3xl top-1/3 left-1/4 animate-pulse" />
          <div className="absolute w-32 h-32 bg-purple-500 opacity-20 rounded-full blur-3xl top-1/4 right-1/3 animate-pulse" />
          <div className="absolute w-20 h-20 bg-green-500 opacity-30 rounded-full blur-2xl bottom-1/4 left-1/3 animate-pulse" />
        </div>

        <h1 className="text-4xl font-bold text-left mb-10">Recent Blog Posts</h1>
        <div className="max-w-6xl mx-auto p-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {posts.map((post) => (
              <div key={post.slug} className="bg-white text-black rounded-lg hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 shadow-md overflow-hidden">
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
                    <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
                      Read More
                    </button>
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

export default RecentPosts;