export default function Footer() {
    return ( 
        <div className='flex flex-col items-center justify-center mt-20'>
            <div className='flex space-x-4 pl-4 pr-4'>
                <a href="https://www.linkedin.com/in/talia-kusmirek-b0421b289/" target="_blank" className="text-base-mobile sm:text-base-desktop">
                    <img src="linkedin.svg" alt="LinkedIn" className="w-5 h-5 sm:w-5 sm:h-5" />
                </a>
                <a href="https://github.com/taliakusmirek" target="_blank" className="text-base-mobile sm:text-base-desktop">
                    <img src="/github.svg" alt="GitHub" className="w-5 h-5 sm:w-5 sm:h-5" />
                </a>
            </div>
            <h4 className="mt-4">made by talia kusmirek</h4>
            <p className="text-xs mb-4">last updated November 2024</p>
        </div>
    );
}
