import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav className="text-brand-Dark">
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
            <ul className="flex justify-center space-x-12">
                <li>
                    <a href="#about" className="text-base-mobile sm:text-base-desktop">about</a>
                </li>
                <li>
                    <a href="#projects" className="text-base-mobile sm:text-base-desktop">projects</a>
                </li>
                <li>
                    <a href="#contact" className="text-base-mobile sm:text-base-desktop">contact</a>
                </li>
                <li>
                    <a href="#resume" className="text-base-mobile sm:text-base-desktop">résumé</a>
                </li>
            </ul>
        </nav>
    );
}