import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="-mt-12 -mb-16 flex justify-center items-center">
      <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={220} 
            height={220} 
          />
      </Link>
    </div>
    
    <div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ul className="flex justify-center space-x-20">
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





  </div>
  );
}
