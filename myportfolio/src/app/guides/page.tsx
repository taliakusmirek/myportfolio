'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GuidesPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const openPdfInNewTab = (pdfPath: string) => {
    window.open(pdfPath, '_blank');
  };



  return (
    <div className="min-h-screen bg-[#f5f4f2] font-Inter">
      {/* Top Band - Three Columns */}
      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-12 transition-all duration-1000 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Left Column - Branding & Products */}
        <div className={`space-y-8 transition-all duration-1000 ease-out delay-200 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          {/* Branding Text */}
          <div className="space-y-2">
            <h1 className={`font-Gascogne text-4xl lg:text-6xl text-black leading-tight transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              To Help You Build, Grow & Launch in Public
            </h1>
            <h2 className={`font-Gascogne text-2xl lg:text-3xl text-[#ee9cb3] italic leading-tight transition-all duration-1000 ease-out delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Curated by Talia Kusmirek
            </h2>
          </div>

          {/* Product Displays */}
          <div className="space-y-6">
            {/* Builder Guide */}
            <div className={`bg-white rounded-3xl p-6 shadow-sm border border-gray-100 transition-all duration-1000 ease-out delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <Image 
                  src="/images/builder.png" 
                  alt="Builder Guide" 
                  width={128} 
                  height={128} 
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-Gascogne text-xl text-black text-center mb-2">Builder Guide</h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                Comprehensive guide to building successful products and businesses
              </p>
              <button 
                onClick={() => openPdfInNewTab('/builder cheat sheet.pdf')}
                className="w-full py-2 px-4 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                VIEW PRODUCT →
              </button>
            </div>

            {/* Startup, Outreach, and Growth Guide */}
            <div className={`bg-white rounded-3xl p-6 shadow-sm border border-gray-100 transition-all duration-1000 ease-out delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <Image 
                  src="/images/startup.png" 
                  alt="Startup Guide" 
                  width={96} 
                  height={96} 
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-Gascogne text-xl text-black text-center mb-2">Startup, Outreach, and Growth Guide</h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                Essential strategies for startup growth and market outreach
              </p>
              <button 
                onClick={() => openPdfInNewTab('/startup guide.pdf')}
                className="w-full py-2 px-4 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                VIEW PRODUCT →
              </button>
            </div>
          </div>
        </div>

        {/* Middle Column - Landing Image */}
        <div className={`relative transition-all duration-1000 ease-out delay-400 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative rounded-[50px] h-full overflow-hidden">
            <Image 
              src="/images/landing.jpg" 
              alt="Landing Image" 
              width={400} 
              height={600} 
              className="w-full h-full object-cover"
            />

          </div>
        </div>

        {/* Right Column - Bootcamp & Community */}
        <div className={`space-y-6 transition-all duration-1000 ease-out delay-600 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}>
          {/* Social Presence Bootcamp */}
          <div className={`bg-white rounded-3xl p-6 shadow-sm border border-gray-100 transition-all duration-1000 ease-out delay-800 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <div className="w-full mb-4 relative">
              <Image 
                src="/images/bootcamp.png" 
                alt="Social Presence Bootcamp" 
                width={300} 
                height={150} 
                className="w-full h-auto object-contain rounded-lg max-h-32"
              />
            </div>
            <h3 className="font-Gascogne text-xl text-black text-center mb-2">Social Presence Bootcamp</h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              4-week roadmap, worksheets, and strategy sessions. Includes video trainings + Notion dashboard.
            </p>
            <button className="w-full py-2 px-4 bg-gray-200 text-gray-600 rounded-lg font-medium">
              Coming Soon
            </button>
          </div>

          {/* Community & Workshops */}
          <div className={`bg-white rounded-3xl p-6 shadow-sm border border-gray-100 transition-all duration-1000 ease-out delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <h3 className="font-Gascogne text-xl text-black text-center mb-4">Community & Workshops</h3>
            <div className="space-y-3">
              <div className="text-center">
                <h4 className="font-Gascogne text-lg text-black mb-2">Founder Circle Membership</h4>
                <p className="text-sm text-gray-600 mb-3">Monthly community for founders to connect, share wins, and get support</p>
                <a 
                  href="https://joinhumn.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 bg-[#ee9cb3] text-white rounded-lg hover:bg-[#d88aa0] transition-colors inline-block text-center"
                >
                  JOIN THE CIRCLE
                </a>
              </div>
              <div className="text-center pt-4 border-t border-gray-100">
                <h4 className="font-Gascogne text-lg text-black mb-2">Workshops & Retreats</h4>
                <p className="text-sm text-gray-600 mb-3">In-person and virtual events for deeper learning and networking</p>
                <a 
                  href="https://luma.com/humn?k=c&period=past" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 bg-[#ee9cb3] text-white rounded-lg hover:bg-[#d88aa0] transition-colors inline-block text-center"
                >
                  GET ON WAITLIST
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Band - Three Digital Products */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 p-8 lg:px-12 transition-all duration-1000 ease-out delay-1100 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Digital Product 1 */}
        <div className={`bg-white rounded-[50px] p-6 h-64 flex flex-col items-center justify-center shadow-sm border border-gray-100 transition-all duration-1000 ease-out delay-1200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h3 className="font-Gascogne text-xl text-black text-center mb-2">Outreach Mastery Kit</h3>
          <p className="text-sm text-gray-600 text-center mb-4">Notion templates + scripts for effective outreach</p>
          <div className="text-2xl font-bold text-black mb-4">$27</div>
          <button className="px-6 py-2 bg-gray-200 text-gray-600 rounded-lg font-medium">
            Coming Soon
          </button>
        </div>

        {/* Digital Product 2 */}
        <div className={`bg-white rounded-[50px] p-6 h-64 flex flex-col items-center justify-center shadow-sm border border-gray-100 transition-all duration-1000 ease-out delay-1300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h3 className="font-Gascogne text-xl text-black text-center mb-2">Pitch Deck Templates</h3>
          <p className="text-sm text-gray-600 text-center mb-4">Editable Canva/Notion versions for fundraising</p>
          <div className="text-2xl font-bold text-black mb-4">$49</div>
          <button className="px-6 py-2 bg-gray-200 text-gray-600 rounded-lg font-medium">
            Coming Soon
          </button>
        </div>

        {/* Digital Product 3 */}
        <div className={`bg-white rounded-[50px] p-6 h-64 flex flex-col items-center justify-center shadow-sm border border-gray-100 transition-all duration-1000 ease-out delay-1400 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h3 className="font-Gascogne text-xl text-black text-center mb-2">Capsule Wardrobe for Founders</h3>
          <p className="text-sm text-gray-600 text-center mb-4">PDF/Notion resource for professional styling</p>
          <div className="text-2xl font-bold text-black mb-4">$29</div>
          <button className="px-6 py-2 bg-gray-200 text-gray-600 rounded-lg font-medium">
            Coming Soon
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className={`bg-black text-white py-12 px-8 lg:px-12 transition-all duration-1000 ease-out delay-1500 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <h3 className="font-Gascogne text-2xl text-white mb-4">Talia Kusmirek</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Helping founders build, grow, and launch in public with practical frameworks and actionable strategies.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-Gascogne text-lg text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/works" className="hover:text-white transition-colors">Works</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            {/* Connect */}
            <div>
              <h4 className="font-Gascogne text-lg text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="https://twitter.com/taliadoux" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="https://linkedin.com/in/taliakusmirek" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://instagram.com/taliadoux" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="mailto:hello@taliakusmirek.com" className="hover:text-white transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Talia Kusmirek. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
