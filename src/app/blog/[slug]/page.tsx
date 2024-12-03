// src/app/blog/[slug]/page.tsx
"use client";
import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FC } from 'react';
import Image from 'next/image';
import CommentSection from '@/components/CommentSection';
import Button from '@/components/Button';
import Link from 'next/link';

interface Post {
  id : number;
  slug: string;
  imageUrl: string;
  title: string;
  content: string;
}

const BlogPost: FC = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  useEffect(() => {
    if (!slug) {
      router.push('/404'); // Redirect to a 404 page if slug is not found
    }
  }, [slug, router]);
  {/* To add blogs dynamically */ }

  const posts: Post[] = [
    {
      id : 1,
      slug: 'ai-innovations-2025',
      imageUrl: '/9.jpg',
      title: 'The Future of Technology: What to Expect in 2025',
      content: `
      <div class="max-w-4xl mx-auto px-4">

    <p class="text-lg leading-relaxed mb-6">
        Technology continues to evolve rapidly, influencing almost every aspect of our lives. From artificial intelligence (AI) and machine learning (ML) to 5G, blockchain, and quantum computing, the innovations of today will shape the future in extraordinary ways. In this article, we will explore the groundbreaking technological advancements expected to transform industries and redefine daily life in 2025.
    </p>

    <h2 class="text-3xl font-semibold mt-6 mb-3">Artificial Intelligence and Machine Learning: Expanding Horizons</h2>
    <p class="text-lg leading-relaxed mb-6">
        AI and ML will remain at the forefront of technological transformation. Businesses will increasingly rely on these technologies to automate processes, gain insights from data, and deliver personalized experiences. By 2025, we expect to see further integration of AI in various sectors.
    </p>

    <h3 class="text-2xl font-semibold mt-4 mb-2">1. Healthcare</h3>
    <p class="text-lg leading-relaxed mb-4">
        AI will play an even larger role in healthcare, from enhancing diagnostics to tailoring treatment plans. Machine learning will enable real-time analysis of patient data, improving disease prevention and treatment outcomes.
    </p>

    <h3 class="text-2xl font-semibold mt-4 mb-2">2. Finance</h3>
    <p class="text-lg leading-relaxed mb-4">
        In finance, AI will revolutionize areas like fraud detection and risk management. Predictive analytics and real-time monitoring will empower financial institutions to make more informed decisions and mitigate risks.
    </p>

    <h3 class="text-2xl font-semibold mt-4 mb-2">3. Transportation</h3>
    <p class="text-lg leading-relaxed mb-6">
        Autonomous vehicles will likely reach broader adoption by 2025, with AI-powered traffic systems optimizing urban mobility. These advancements promise safer and more efficient transportation solutions.
    </p>

    <h2 class="text-3xl font-semibold mt-6 mb-3">The Evolution of Connectivity: 5G and Beyond</h2>
    <p class="text-lg leading-relaxed mb-6">
        The expansion of 5G networks will redefine connectivity, enabling faster speeds, lower latency, and new applications. By 2025, we expect 5G to unlock unprecedented opportunities across various domains.
    </p>

    <h3 class="text-2xl font-semibold mt-4 mb-2">1. Smart Cities</h3>
    <p class="text-lg leading-relaxed mb-4">
        5G will support the growth of smart cities by enabling seamless communication between connected devices. Smart infrastructure, like intelligent traffic systems and energy-efficient buildings, will enhance urban living.
    </p>

    <h3 class="text-2xl font-semibold mt-4 mb-2">2. Internet of Things (IoT)</h3>
    <p class="text-lg leading-relaxed mb-4">
        The proliferation of IoT devices will accelerate with 5G, connecting everything from smart homes to industrial systems. This will improve user experiences and provide valuable data for businesses to analyze.
    </p>

    <h3 class="text-2xl font-semibold mt-4 mb-2">3. Remote Work and Learning</h3>
    <p class="text-lg leading-relaxed mb-6">
        Enhanced connectivity will drive innovations in remote work and learning. Virtual reality (VR) and augmented reality (AR) applications will become more common, creating immersive experiences for collaboration and education.
    </p>

    <h2 class="text-3xl font-semibold mt-6 mb-3">Blockchain Technology: Unlocking New Potential</h2>
    <p class="text-lg leading-relaxed mb-6">
        Blockchain will continue to gain traction beyond cryptocurrencies, finding applications in diverse industries. By 2025, it is poised to transform key areas like supply chain management and digital identity.
    </p>

    <h3 class="text-2xl font-semibold mt-4 mb-2">1. Supply Chain Management</h3>
    <p class="text-lg leading-relaxed mb-4">
        Blockchain will enhance transparency and accountability in supply chains, ensuring authenticity and reducing inefficiencies. Businesses will benefit from better traceability and fraud prevention.
    </p>

    <h3 class="text-2xl font-semibold mt-4 mb-2">2. Healthcare Data Management</h3>
    <p class="text-lg leading-relaxed mb-4">
        Secure and interoperable health records powered by blockchain will give patients more control over their data, fostering trust and improving collaboration between providers.
    </p>

    <h3 class="text-2xl font-semibold mt-4 mb-2">3. Digital Identity Verification</h3>
    <p class="text-lg leading-relaxed mb-6">
        As cybersecurity threats grow, blockchain will offer secure methods for identity verification, helping individuals protect their online identities and combat fraud.
    </p>

    <h2 class="text-3xl font-semibold mt-6 mb-3">Quantum Computing: The Revolution Ahead</h2>
    <p class="text-lg leading-relaxed mb-6">
        Quantum computing will advance rapidly by 2025, unlocking solutions to problems that are currently unsolvable by classical computers. Its applications will span industries, driving innovation and efficiency.
    </p>

    <h3 class="text-2xl font-semibold mt-4 mb-2">1. Drug Discovery</h3>
    <p class="text-lg leading-relaxed mb-4">
        In pharmaceuticals, quantum computing will accelerate the development of new drugs by simulating molecular interactions with unprecedented precision, leading to breakthroughs in medicine.
    </p>

    <h3 class="text-2xl font-semibold mt-4 mb-2">2. Cryptography</h3>
    <p class="text-lg leading-relaxed mb-4">
        Quantum computing will disrupt cybersecurity, rendering current encryption methods obsolete while paving the way for more robust cryptographic solutions.
    </p>

    <h3 class="text-2xl font-semibold mt-4 mb-2">3. Optimization Problems</h3>
    <p class="text-lg leading-relaxed mb-6">
        Industries like logistics and finance will harness quantum computing to solve complex optimization problems, achieving greater efficiency and cost savings.
    </p>

    <h2 class="text-3xl font-semibold mt-6 mb-3">Conclusion: Preparing for 2025 and Beyond</h2>
    <p class="text-lg leading-relaxed mb-6">
        As we look ahead to 2025, it is clear that technology will continue to drive significant change. From AI and 5G to blockchain and quantum computing, these innovations will reshape the world. Embracing these advancements will be crucial for individuals and businesses to thrive in a rapidly evolving landscape.
    </p>
</div>

      `
    }, 
    {
      id : 2,
      slug: "ai-healthcare-innovation",
      title: "Revolutionizing Healthcare with AI: The Future of Medicine",
      imageUrl: "/10.jpg",
      content: `
      <div class="max-w-4xl mx-auto px-4">
        
        <h2 class="text-3xl font-semibold mt-6 mb-3">AI is Changing the Future of Healthcare</h2>
        <p class="text-lg leading-relaxed mb-6">
            Artificial Intelligence (AI) is revolutionizing healthcare, opening new doors to innovation and improved patient care. Siemens Healthineers is at the forefront of this transformation, delivering groundbreaking solutions that redefine medical practices. Their advancements in AI-powered diagnostics, personalized treatments, and seamless digital integration are reshaping how care is delivered worldwide.
        </p>
        
        <h3 class="text-2xl font-semibold mt-4 mb-2">Faster Diagnoses</h3>
        <p class="text-lg leading-relaxed mb-4">
            With AI, diagnostic processes are becoming faster and more accurate. Advanced algorithms analyze medical imaging and patient data with remarkable precision, helping doctors detect diseases earlier and plan effective treatments. For instance, AI-driven imaging tools can identify subtle patterns in scans that might be missed by the human eye.
        </p>
        
        <h3 class="text-2xl font-semibold mt-4 mb-2">Personalized Treatments</h3>
        <p class="text-lg leading-relaxed mb-4">
            AI enables the creation of personalized treatment plans tailored to each patient's unique needs. By analyzing a patient's genetic makeup, lifestyle, and medical history, AI systems can recommend therapies that maximize effectiveness and minimize side effects, empowering patients with better outcomes.
        </p>
        
        <h3 class="text-2xl font-semibold mt-4 mb-2">Seamless Digital Integration</h3>
        <p class="text-lg leading-relaxed mb-6">
            Digital integration powered by AI ensures a more connected and efficient healthcare ecosystem. From telemedicine platforms to electronic health records (EHRs), AI bridges gaps between patients and providers, making healthcare more accessible and convenient for all.
        </p>
        
        <h3 class="text-2xl font-semibold mt-4 mb-2">Challenges and Ethical Considerations</h3>
        <p class="text-lg leading-relaxed mb-4">
            As we embrace AI in healthcare, it is crucial to address ethical challenges and ensure responsible innovation. Gradual adoption, transparency, and compliance with robust regulations will help build trust among stakeholders and create a sustainable framework for AI-driven advancements.
        </p>
        
        <h3 class="text-2xl font-semibold mt-4 mb-2">Looking Ahead</h3>
        <p class="text-lg leading-relaxed mb-6">
            The future of healthcare is bright with AI leading the way. Innovations like those from Siemens Healthineers are transforming medicine, making faster diagnoses, better outcomes, and more empowered patients a reality. By balancing progress with responsibility, we can create a healthcare system that benefits everyone.
        </p>
      </div>
`
    },
    {
      id : 3,
      slug: "nvidia-robotics-2026",
      title: "NVIDIA-Powered Robotics: Transforming Innovation in 2026",
      imageUrl: "/8.jpg",
      content: `
       <div class="max-w-4xl mx-auto px-4 mt-10">
    <h1 class="text-3xl font-bold mb-4">NVIDIA-Powered Robotics: Best Practices for 2026</h1>

    <p class="text-lg leading-relaxed mb-4">As robotics technology advances, NVIDIA continues to lead the way with groundbreaking innovations. In this post, we will explore essential best practices for developing NVIDIA-powered robots in 2026.</p>

    <h2 class="text-2xl font-semibold mt-6 mb-2">1. Leverage AI for Smarter Robots</h2>
    <p class="text-lg leading-relaxed mb-4">AI is the backbone of intelligent robotics. Utilize NVIDIAs AI frameworks like NVIDIA Isaac for training and deploying machine learning models to enable robots to perceive and act intelligently.</p>

    <h2 class="text-2xl font-semibold mt-6 mb-2">2. Optimize Performance with GPUs</h2>
    <p class="text-lg leading-relaxed mb-4">NVIDIA GPUs provide unmatched computational power for real-time processing. Optimize your robotics applications to take full advantage of CUDA cores and TensorRT for enhanced performance and efficiency.</p>

    <h2 class="text-2xl font-semibold mt-6 mb-2">3. Focus on Safety and Reliability</h2>
    <p class="text-lg leading-relaxed mb-4">Safety is paramount in robotics. Use NVIDIA simulation tools like Omniverse to test and refine robotic systems in virtual environments before deployment, ensuring they meet reliability standards.</p>

    <p class="text-lg leading-relaxed mb-4">By implementing these best practices, developers can harness NVIDIA cutting-edge technology to build robots that excel in performance, intelligence, and reliability, paving the way for a smarter and more automated future.</p>
</div>`
    }

  ];

  const post = posts.find((post) => post.slug === slug);


  if (!post) {
    return <p className="text-center mt-10">Post not found</p>;
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 mt-10">
        <p>Post not found. Please check the URL or go back to the homepage.</p>
      </div>
    );
  }

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen  text-white p-6 mt-32">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
        <h1 className="text-4xl font-bold mb-6 text-black">{post.title}</h1>
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={800}
          height={450}
          className="object-cover w-full h-96 mb-6 rounded-lg"
        />
        <div className="text-lg leading-relaxed text-black" dangerouslySetInnerHTML={{ __html: post.content }} />
        <CommentSection />        
        <Link href={"/blog"}>
        <Button  buttonText='Back to Post'/>
        </Link>
      </div>
    </main>
  );
};

export default BlogPost;

