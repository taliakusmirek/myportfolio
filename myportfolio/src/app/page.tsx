import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-center items-center -mt-12 -mb-16"> {/* Keep the logo outside the main flex container */}
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={220} 
            height={220} 
          />
        </Link>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center items-center mt-8"> {/* Adjust space between the logo and content */}
          <ul className="flex flex-col items-center space-y-10 sm:flex-row sm:space-y-16 sm:space-x-20"> {/* Responsive layout */}
              <li className="flex flex-col items-center">
                <Link href="/about">
                  <Image src="/cutout/missdior.png" alt="about" width={100} height={100} />
                </Link>
                <a href="/about" className="text-base-mobile sm:text-base-desktop">about</a>
              </li>
              <li className="flex flex-col items-center">
                <Link href="/projects">
                  <Image src="/cutout/blazer.png" alt="projects" width={80} height={80} />
                </Link>
                <a href="/projects" className="text-base-mobile sm:text-base-desktop">projects</a>
              </li>
              <li className="flex flex-col items-center">
                <Link href="/contact">
                  <Image src="/cutout/flat.png" alt="contact" width={100} height={100} />
                </Link>
                <a href="/contact" className="text-base-mobile sm:text-base-desktop">contact</a>
              </li>
              <li className="flex flex-col items-center">
                <Link href="https://drive.google.com/file/d/1ZlXPqvFE0gs2E72TYkKF0d6iQtd9Fpte/view?usp=sharing">
                  <Image src="/cutout/scarf.png" alt="résumé" width={70} height={70} />
                </Link>
                <a href="https://drive.google.com/file/d/1ZlXPqvFE0gs2E72TYkKF0d6iQtd9Fpte/view?usp=sharing" target="_blank" className="text-base-mobile sm:text-base-desktop">résumé</a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
