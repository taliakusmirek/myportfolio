import Nav from '../../components/Navigation';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Nav />

      <main className="p-4">
        <h1 className="text-h1-mobile md:text-h2-desktop mt-16 mb-16 text-brand-Bold-Red flex justify-center">i've been pretty busy...</h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-10">
          <div className="relative border-2 border-brand-Bold-Red rounded-lg p-6">
            <div className="absolute top-[-20px] left-1/2 -translate-x-1/ -translate-y-5 px-2.5 flex items-center z-20">
              <h2 className="text-xl font-Script text-brand-Bold-Red">advocating AI ethics</h2>
              <Image src="/cutout/blackbag.png" className=" ml-3 mr-2 -translate-y-3" alt="about" width={60} height={100} />
            </div>
            <p className="text-sm">
              As a Core Member of Innovate For Everyone, I dedicate time to promoting responsible AI practices. On the IFE Guide Campaign, I help write our AI guide for small communities like schools and clubs. These efforts emphasize fostering authenticity and responsibility in AI development and use, ensuring that AI systems align with ethical guidelines and societal values. By translating complex data science concepts into accessible resources, I empower organizations to understand the impact of AI and the importance of ethical frameworks.
              <br></br>
              <br></br>
              My contributions extend to the United Nations's AI For Good initiative, where I analyzed AI use cases for Sustainable Development Goals in fashion and healthcare. I collaborated on the creation of model pipeline diagrams and co-authored the AI For Good Use Case Report published by the UN. These experiences showcase my commitment to advocating for AI that benefits humanity while upholding privacy, fairness, and transparency.
            </p>
          </div>

          <div className="relative border-2 border-brand-Bold-Red rounded-lg p-6">
            <div className="absolute top-[-20px] left-1/2 -translate-x-1/ -translate-y-6 px-2.5 flex items-center z-20">
              <h2 className="text-xl font-Script text-brand-Bold-Red">building Ophelia</h2>
              <Image src="/cutout/missdior.png" className=" ml-1 mr-2 -translate-y-5" alt="about" width={80} height={100} />
            </div>
            <p className="text-sm">
            At Ophelia, I contribute as a Software Engineer, focusing on the development and optimization of a dating web app. My work involves implementing key features like user authentication, onboarding, and preference settings, all while addressing critical issues such as deployment challenges and error resolution. By leveraging tools like Next.js, Supabase, and Vercel, I ensure a seamless user experience while maintaining robust backend operations.
              <br></br>
              <br></br>
              Beyond feature development, I focus on enhancing app performance through data cleaning and debugging. My contributions enable Ophelia to deliver a polished, production-ready application that meets the needs of its users. This role highlights my ability to tackle real-world software engineering challenges and deliver impactful solutions that scale effectively.
            </p>
          </div>

          <div className="relative border-2 border-brand-Bold-Red rounded-lg p-6">
            <div className="absolute top-[-20px] left-1/2 -translate-x-1/ -translate-y-11 px-2.5 flex items-center z-20">
              <h2 className="text-xl font-Script text-brand-Bold-Red">growing my brand</h2>
              <Image src="/cutout/scarf.png" className=" ml-1 mr-2 -translate-y-2" alt="about" width={80} height={100} />
            </div>
            <p className="text-sm">
            Building a personal brand has been an exciting journey, blending creativity, technical skill, and entrepreneurial vision. Through my platform, I create educational and inspirational content tailored to young women, combining fashion, data-driven insights, and accessible luxury tips. My approach resonates with audiences by offering practical advice on developing personal style while embracing sustainability and affordability.
              <br></br>
              <br></br>
              To expand my reach, I leverage social media strategies, producing engaging reels and carousel posts. I also developed countless projects that are accessible to followers, providing efficient solutions for simplifying and enhancing wardrobes. My efforts demonstrate a strong commitment to connecting with my audience while refining my ability to blend technical, creative, and business acumen.            </p>
          </div>

          <div className="relative border-2 border-brand-Bold-Red rounded-lg p-6">
            <div className="absolute top-[-20px] left-1/2 -translate-x-1/ -translate-y-11 px-2.5 flex items-center z-20">
              <h2 className="text-xl font-Script text-brand-Bold-Red">studying in Boston</h2>
              <Image src="/cutout/dior.png" className=" ml-1 mr-2 -translate-y-2" alt="about" width={80} height={100} />
            </div>
            <p className="text-sm">
            Pursuing a dual concentration in Computer Science and Business Analytics at Boston College has equipped me with a strong foundation in technical and analytical skills. With a 3.8 GPA, I have excelled in rigorous coursework, including Calculus, Algorithms, and Linear Algebra, alongside practical studies in statistical analysis and microeconomics. These experiences have honed my problem-solving abilities and prepared me to tackle complex challenges across disciplines.
              <br></br>
              <br></br>
              Boston’s vibrant tech and innovation ecosystem has provided unparalleled opportunities for learning and growth. Through internships, collaborative projects, and exposure to leading technology companies, I have cultivated a deep understanding of how to apply cutting-edge skills to real-world applications. This academic and professional environment has solidified my passion for creating impactful solutions at the intersection of technology and business.
              </p>
          </div>




        </div>




      </main>
    </div>
  );
}