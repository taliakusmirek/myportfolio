'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function UGCPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f4f2] font-Inter">
      {/* Navigation Bar */}
      <nav className={`bg-white border-b border-gray-200 py-4 transition-all duration-1000 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-center space-x-8 text-sm font-medium">
            <Link href="/" className="text-black hover:text-gray-600 transition-colors">HOME</Link>
            <Link href="/guides" className="text-black hover:text-gray-600 transition-colors">GUIDES</Link>
            <Link href="/ugc" className="text-black hover:text-gray-600 transition-colors">UGC</Link>
            <Link href="/about" className="text-black hover:text-gray-600 transition-colors">ABOUT</Link>
            <Link href="/contact" className="text-black hover:text-gray-600 transition-colors">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className={`relative py-12 px-8 lg:px-12 bg-gradient-to-br from-[#ee9cb3] via-[#f5f4f2] to-[#ee9cb3] transition-all duration-1000 ease-out delay-200 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className={`font-Gascogne text-6xl lg:text-8xl text-slate-700 mb-4 transition-all duration-1000 ease-out delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              talia kusmirek
            </h1>
            <p className={`font-Inter text-xl text-black font-medium transition-all duration-1000 ease-out delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              GEN Z FOUNDER & CONTENT CREATOR
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Profile */}
            <div className={`transition-all duration-1000 ease-out delay-800 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="bg-white rounded-3xl p-8 shadow-lg max-w-md mx-auto lg:mx-0">
                <div className="w-64 h-64 mx-auto mb-6 relative">
                  <Image 
                    src="/images/top.jpeg" 
                    alt="Talia Kusmirek" 
                    width={256} 
                    height={256} 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-gray-600 text-sm">
                    <span className="mr-2">📍</span>
                    <span>BOSTON</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Value Prop */}
            <div className={`transition-all duration-1000 ease-out delay-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="font-Gascogne text-3xl lg:text-4xl text-slate-700 mb-4">
                  helping founders build & launch in public!
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Creating authentic content that helps founders, college students, and female entrepreneurs share their journey, build their audience, and grow their businesses through strategic storytelling.
                </p>
                
                {/* Your Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#ee9cb3] mb-1">8.9K</div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#ee9cb3] mb-1">507K</div>
                    <div className="text-sm text-gray-600">Views/Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#ee9cb3] mb-1">6.9%</div>
                    <div className="text-sm text-gray-600">Engagement</div>
                  </div>
                </div>

                {/* Email Contact */}
                <div className="text-center">
                  <div className="text-lg text-gray-700 font-medium">kusmire@bc.edu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Portfolio Section */}
      <div className={`py-16 px-8 lg:px-12 transition-all duration-1000 ease-out delay-600 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-6xl mx-auto">
          {/* Networking & Landing Internships Section */}
          <div className="mb-16">
            <h2 className="font-Gascogne text-3xl text-slate-700 mb-2">networking & landing internships</h2>
            <p className="text-gray-600 text-sm mb-8">SHORT FORM UGC VIDEOS</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
              {[
                { 
                  title: "Networking & Career Growth", 
                  embed: "DOGwKTxDV0z"
                },
                { 
                  title: "Professional Development Tips", 
                  embed: "DNoY-Fdv1r1"
                },
                { 
                  title: "Building Industry Connections", 
                  embed: "DNBOHXpvg5E"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="w-full h-[28rem] rounded-xl mb-4 overflow-hidden">
                    <iframe
                      src={`https://www.instagram.com/p/${item.embed}/embed/`}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <p className="text-sm text-gray-700 text-center">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Startup Life Section */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="font-Gascogne text-3xl text-slate-700 mb-2">startup life</h2>
                <p className="text-gray-600 text-sm">SHORT FORM UGC VIDEOS</p>
              </div>
              <button 
                className="border-2 border-[#ee9cb3] text-[#ee9cb3] bg-transparent text-xs font-medium px-4 py-2 rounded-full hover:bg-[#ee9cb3] hover:text-white transition-colors"
                onClick={() => setShowPopup(true)}
              >
                4-6 day turnaround learn more
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
              {[
                { 
                  title: "Startup Life & Entrepreneurship", 
                  embed: "DOEL7F_Dfc9"
                },
                { 
                  title: "Building & Growing Startups", 
                  embed: "DN36WIQ3HjE"
                },
                { 
                  title: "Startup Challenges & Solutions", 
                  embed: "DNZFW6XNPXa"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="w-full h-[28rem] rounded-xl mb-4 overflow-hidden">
                    <iframe
                      src={`https://www.instagram.com/p/${item.embed}/embed/`}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <p className="text-sm text-gray-700 text-center">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Student Advice & Real Talk Section */}
          <div className="mb-16">
            <h2 className="font-Gascogne text-3xl text-slate-700 mb-2">student advice & real talk</h2>
            <p className="text-gray-600 text-sm mb-8">SHORT FORM UGC VIDEOS</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
              {[
                { 
                  title: "Student Life & College Tips", 
                  embed: "DN8cdj_DWhd"
                },
                { 
                  title: "Real Talk & Student Advice", 
                  embed: "DNyydDmXM5m"
                },
                { 
                  title: "College Life & Growth", 
                  embed: "DMvJGKpPAvs"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="w-full h-[28rem] rounded-xl mb-4 overflow-hidden">
                    <iframe
                      src={`https://www.instagram.com/p/${item.embed}/embed/`}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <p className="text-sm text-gray-700 text-center">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brands & Testimonials Section */}
      <div className={`py-16 px-8 lg:px-12 bg-white transition-all duration-1000 ease-out delay-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-Gascogne text-4xl text-black text-center mb-12">brands</h2>
          
          {/* Brand Logos */}
          <div className="flex justify-center gap-12 mb-16">
            <div className="bg-white rounded-lg p-6 h-20 flex items-center justify-center shadow-sm border border-gray-100">
              <Image 
                src="/images/medici.png" 
                alt="Medici.ac" 
                width={120} 
                height={40} 
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="bg-white rounded-lg p-6 h-20 flex items-center justify-center shadow-sm border border-gray-100">
              <Image 
                src="/images/plaud.png" 
                alt="Plaud" 
                width={120} 
                height={40} 
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>

          <h2 className="font-Gascogne text-4xl text-black text-center mb-12">+ MANY MORE testimonials</h2>
          
          {/* Testimonials */}
          <div className="flex justify-center gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex-1">
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">&ldquo;Always fast turnaround and quick to reply, making the process so fast to deliver final versions. Talia&apos;s efficiency and communication made our collaboration seamless.&rdquo;</p>
              <p className="text-gray-500 text-xs font-medium">- Medici.ac</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex-1">
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">&ldquo;Very organized, made sure a contract was in place so both parties were transparent and accountable. Professional approach that made us feel confident throughout the entire process.&rdquo;</p>
              <p className="text-gray-500 text-xs font-medium">- Plaud</p>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <div className={`py-16 px-8 lg:px-12 transition-all duration-1000 ease-out delay-1200 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-Gascogne text-4xl text-slate-700">workflow</h2>
            <div className="bg-slate-700 text-white text-sm font-medium px-4 py-2 rounded-full">
              bundles & rates available upon request
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* UGC Videos */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-Gascogne text-2xl text-black mb-6">UGC VIDEOS</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-2xl text-[#ee9cb3] mr-4">↓</div>
                  <span className="text-sm text-gray-700"><strong>STRATEGY:</strong> 15 min free brand call (discuss ideas & logistics)</span>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl text-slate-700 mr-4">↓</div>
                  <span className="text-sm text-gray-700"><strong>VISION:</strong> Scripting for brand approval</span>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl text-[#9cc2ee] mr-4">↓</div>
                  <span className="text-sm text-gray-700"><strong>DRAFT:</strong> Draft video for review</span>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl text-[#ee9cb3] mr-4">↓</div>
                  <span className="text-sm text-gray-700"><strong>EDITS:</strong> Feedback incorporated (add text, subtitles, CTA)</span>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl text-slate-700 mr-4">↓</div>
                  <span className="text-sm text-gray-700"><strong>DELIVERY:</strong> Receive final content</span>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl text-[#9cc2ee] mr-4">↓</div>
                  <span className="text-sm text-gray-700"><strong>POST:</strong> Receive follow up email on video performance & analytics</span>
                </div>
              </div>
              <div className="mt-6">
                <span className="bg-slate-700 text-white text-xs font-medium px-3 py-1 rounded-full">5-7 days</span>
              </div>
            </div>

            {/* UGC Photos */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-Gascogne text-2xl text-black mb-6">UGC PHOTOS</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-2xl text-[#ee9cb3] mr-4">↓</div>
                  <span className="text-sm text-gray-700"><strong>STRATEGY:</strong> 15 min free brand call (discuss ideas & logistics)</span>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl text-slate-700 mr-4">↓</div>
                  <span className="text-sm text-gray-700"><strong>DRAFT:</strong> Choose from raw images</span>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl text-[#9cc2ee] mr-4">↓</div>
                  <span className="text-sm text-gray-700"><strong>DELIVERY:</strong> Receive final edited images</span>
                </div>
              </div>
              <div className="mt-6">
                <span className="bg-slate-700 text-white text-xs font-medium px-3 py-1 rounded-full">2-3 days</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#ee9cb3] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d88aa0] transition-colors">
              EMAIL ME
            </button>
          </div>
        </div>
      </div>

      {/* Let's Work Together Section */}
      <div className={`py-20 px-8 lg:px-12 bg-gradient-to-b from-[#ee9cb3] via-[#ee9cb3] to-[#f5f4f2] transition-all duration-1000 ease-out delay-1400 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-Gascogne text-5xl text-white mb-8">Let&apos;s work together!</h2>
            <p className="text-white text-lg font-medium">kusmire@bc.edu</p>
          </div>
          
          <div className="relative">

            
            {/* Emoji Decorations */}
            <div className="absolute -top-8 left-8 text-5xl transform -rotate-6">
              📱
            </div>
            
            <div className="absolute -top-4 left-4 text-4xl transform rotate-8">
              🌱
            </div>
            
            <div className="absolute -top-6 right-6 text-6xl transform rotate-12">
              📱
            </div>
            
            <div className="absolute -top-2 right-8 text-5xl transform -rotate-8">
              🌿
            </div>
            
            <div className="absolute -top-6 left-1/4 text-4xl transform rotate-6">
              🌱
            </div>
            
            <div className="absolute top-2 right-1/4 text-5xl transform -rotate-12">
              📱
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`bg-slate-700 text-white py-12 px-8 lg:px-12 transition-all duration-1000 ease-out delay-3800 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <h3 className="font-Gascogne text-2xl text-white mb-4">Talia Kusmirek</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Creating authentic UGC content that connects with audiences and drives real results for brands and startups.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-Gascogne text-lg text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/guides" className="hover:text-white transition-colors">Guides</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            {/* Connect */}
            <div>
              <h4 className="font-Gascogne text-lg text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="https://github.com/taliakusmirek" className="hover:text-white transition-colors inline-flex items-center gap-2">
                    {/* GitHub icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M12 .5A11.5 11.5 0 0 0 .5 12 11.5 11.5 0 0 0 8 23.2c.4.1.6-.2.6-.4v-2c-2.5.5-3.1-1.1-3.1-1.1-.4-1-.9-1.3-.9-1.3-.8-.6.1-.6.1-.6.9.1 1.3 1 1.3 1 .8 1.3 2.1.9 2.6.7.1-.6.3-1 .6-1.2-2-.2-4.1-1-4.1-4.5 0-1 .4-1.9 1-2.5-.1-.3-.4-1.2.1-2.5 0 0 .8-.3 2.6 1a9 9 0 0 1 4.6 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.2.1 2.5.6.6 1 1.5 1 2.5 0 3.5-2.1 4.2-4.1 4.5.3.2.6.8.6 1.6v2.3c0 .2.2.5.6.4A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/>
                    </svg>
                    GitHub
                  </a>
                </li>
                <li><a href="https://twitter.com/taliadoux" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="https://linkedin.com/in/taliakusmirek" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://instagram.com/taliadoux" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="mailto:kusmire@bc.edu" className="hover:text-white transition-colors">kusmire@bc.edu</a></li>
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

      {/* Custom Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md mx-4 shadow-2xl">
            <div className="text-center">
              <h3 className="font-Gascogne text-2xl text-slate-700 mb-4">4-6 Day Turnaround</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Quick delivery for all UGC content with professional editing and brand alignment. 
                We ensure your content is delivered on time with high quality standards.
              </p>
              <button 
                className="bg-[#ee9cb3] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d88aa0] transition-colors"
                onClick={() => setShowPopup(false)}
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
