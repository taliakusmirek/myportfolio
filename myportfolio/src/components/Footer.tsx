import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex space-x-4 pl-4 pr-4">
        <a href="https://www.linkedin.com/in/talia-kusmirek-b0421b289/" target="_blank" className="text-base-mobile sm:text-base-desktop" rel="noopener noreferrer" aria-label="LinkedIn">
          <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} className="w-5 h-5 sm:w-5 sm:h-5" />
        </a>
        <a href="https://github.com/taliakusmirek" target="_blank" className="text-base-mobile sm:text-base-desktop" rel="noopener noreferrer" aria-label="GitHub">
          <Image src="/github.svg" alt="GitHub" width={20} height={20} className="w-5 h-5 sm:w-5 sm:h-5" />
        </a>
      </div>
      <h4 className="mt-4">made by talia kusmirek</h4>
      <p className="text-xs mb-4">last updated December 2024</p>
    </div>
  );
}
