'use client'
import Nav from '../../components/Navigation';
import Image from 'next/image';
import { useState } from 'react';
      
export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 

    // Here, you would send the form data to your backend/email service

    setIsSubmitted(true);
  };

  return (
    <div>
      <Nav />

      <main className="p-4">
        <h1 className="text-h1-mobile sm:text-h1-desktop flex justify-center mt-14 mb-6 text-brand-Bold-Red">let's chat.</h1>
        <div className="flex justify-center items-center">
          <Image
            src="/cutout/flat.png"
            alt="flat"
            width={250}
            height={250}
            className="ml-2"
          />
        </div>

        {!isSubmitted ? (
        <div className="max-w-2xl mx-auto p-6">
          <form action="#" method="POST">
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder=""
                className="mt-1 block w-full p-3  border-brand-Bold-Red border-2 rounded-md "
              />
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder=""
                className="mt-1 block w-full p-3  border-brand-Bold-Red border-2 rounded-md"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder=""
                className="mt-1 block w-full p-3  border-brand-Bold-Red border-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto py-2 px-6 text-brand-Bold-Red font-bold rounded-md hover:bg-brand-Bold-Red-dark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                send
              </button>
            </div>
          </form>
        </div>
        ) : (
          // Show the thank you message after form submission
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-xl font-medium text-brand-Bold-Red ">Thank you!</h1>
            <p className="mt-5">We have received your message and will get back to you soon.</p>
          </div>
        )}
      </main>
    </div>
  );
}
