import Image from 'next/image';
import Nav from '../../components/Navigation';

export default function About() {
  
  const content = [
    {
      title: "advocating AI ethics",
      image: { src: "/cutout/blackbag.png", width: 60, height: 100 },
      text: `As a Core Member of Innovate For Everyone and the first American scholar of the United Nations' 'AI For Good' Program, I dedicate time to promoting responsible AI practices...`,
    },
    {
      title: "building Ophelia",
      image: { src: "/cutout/missdior.png", width: 80, height: 100 },
      text: `At Ophelia, I contribute as a Software Engineer, focusing on the development and optimization of a dating web app...`,
    },
    {
      title: "growing my brand",
      image: { src: "/cutout/scarf.png", width: 60, height: 70 },
      text: `Building a personal brand has been an exciting journey, blending creativity, technical skill, and entrepreneurial vision...`,
    },
    {
      title: "studying in Boston",
      image: { src: "/cutout/dior.png", width: 80, height: 100 },
      text: `Pursuing a dual concentration in Computer Science and Business Analytics at Boston College...`,
    },
  ];

  return (
    <div>
      <Nav />
      <main className="p-4">
        <h1 className="text-h1-mobile md:text-h2-desktop mt-20 mb-16 text-brand-Bold-Red flex justify-center">
          i've been pretty busy...
        </h1>

        <div className="grid gap-8 p-10 auto-rows-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16">
          {content.map((item, index) => (
            <div
              key={index}
              className="relative border-2 border-brand-Bold-Red rounded-lg p-6"
              style={{ maxWidth: `${item.image.width + 300}px` }} // Adjust dynamically
            >
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 px-2.5 flex items-center z-20 w-full"
                style={{ height: `${item.image.height}px` }}
              >
                <h2
                  className="text-xl font-Script text-brand-Bold-Red text-center"
                  style={{
                    maxWidth: `${item.image.width + 150}px`,
                  }}
                >
                  {item.title}
                </h2>
                <Image
                  src={item.image.src}
                  alt={item.title}
                  width={item.image.width}
                  height={item.image.height}
                  className="ml-2"
                />
              </div>
              <p className="text-sm mt-10">{item.text}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
