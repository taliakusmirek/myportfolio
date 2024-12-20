'use client'
import Nav from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function Privacy() {
  return (
    <div>
      <Nav />

      <main className="p-4">
        <h1 className="text-h1-mobile sm:text-h1-desktop flex justify-center mt-14 mb-6 text-brand-Bold-Red">
          Privacy Policy
        </h1>

        <div className="flex justify-center items-center">
          <div className="max-w-4xl text-base sm:text-lg text-gray-700">

            <p>At <strong>talialabs</strong>, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains the types of data we collect, how it is used, and the measures we take to safeguard your information.</p>

            <p>By accessing or using our website, you agree to the collection and use of information in accordance with this policy.</p>

            <h2 className="mt-6 text-xl font-semibold">1. Information We Collect</h2>
            <p>When you visit our portfolio website, we may collect the following types of information:</p>
            <ul className="list-disc pl-6">
              <li><strong>Personal Information:</strong> If you contact me via the website (e.g., through a contact form or email), you may provide personal information such as your name, email address, and any additional details you choose to share.</li>
              <li><strong>Usage Data:</strong> I may collect non-personal information about how visitors interact with the site. This includes data such as IP addresses, browser type, device information, and pages visited. This information helps me improve the user experience and analyze site performance.</li>
              <li><strong>Pinterest API Data:</strong> To provide trend insights for fashion and outfit recommendations, I use Pinterest&apos;s API to gather data related to trending keywords and other relevant trend metrics. This information may include trending keywords, percentages of growth, and time series data for fashion-related trends. Pinterest API data is used solely for the purpose of enhancing the trend analysis feature on this site. Pinterest&apos;s API access is provided under their terms and conditions, and the data received is treated with the utmost care and responsibility.</li>
              <li><strong>Cookies:</strong> My website may use cookies and similar technologies to collect and store information when you visit. Cookies help me enhance your browsing experience by remembering preferences and ensuring the site functions as expected. You can control the use of cookies through your browser settings.</li>
            </ul>

            <h2 className="mt-6 text-xl font-semibold">2. How I Use Your Information</h2>
            <p>The information I collect is used for the following purposes:</p>
            <ul className="list-disc pl-6">
              <li>To respond to inquiries or requests you make through the contact form or other communication channels.</li>
              <li>To improve the performance, usability, and design of my website.</li>
              <li>To analyze how users interact with my site and improve the overall user experience.</li>
              <li>To provide trend-based outfit recommendations and fashion insights by utilizing data collected from Pinterest&apos;s API.</li>
              <li>To maintain security, troubleshoot issues, and protect the integrity of the site.</li>
            </ul>

            <h2 className="mt-6 text-xl font-semibold">3. Third-Party Services</h2>
            <p>I may use third-party services to analyze website traffic or improve functionality. These third-party services may collect information about your activity on my site. This includes:</p>
            <ul className="list-disc pl-6">
              <li><strong>Google Analytics:</strong> To monitor website traffic and usage patterns.</li>
              <li><strong>Pinterest API:</strong> To access real-time trend data on fashion-related keywords and topics for personalized recommendations. By using Pinterest&apos;s API, I can collect data on popular trends and seasonal fashion styles to improve the outfit recommendation system. Pinterest&apos;s data is collected in accordance with Pinterest’s privacy policies and terms of service.</li>
            </ul>

            <h2 className="mt-6 text-xl font-semibold">4. Data Retention</h2>
            <p>I retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. If you contact me or leave a message through my site, your information may be stored for a reasonable period for communication or project reference purposes.</p>
            <p>For Pinterest API data, I retain trend-related information only as long as it is needed for analysis or until trends are no longer relevant for the purposes of recommendation generation.</p>

            <h2 className="mt-6 text-xl font-semibold">5. Security of Your Information</h2>
            <p>I implement reasonable and appropriate measures to protect your personal information from unauthorized access, alteration, or destruction. However, no data transmission over the internet or electronic storage system is 100% secure, and I cannot guarantee absolute security.</p>

            <h2 className="mt-6 text-xl font-semibold">6. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6">
              <li><strong>Access and correct</strong> any personal information you have shared.</li>
              <li><strong>Opt-out</strong> of marketing communications, if applicable, by contacting me directly.</li>
              <li><strong>Request deletion</strong> of personal data, though I may need to retain some data for legal or record-keeping purposes.</li>
            </ul>
            <p>If you wish to exercise any of these rights, please contact me at [insert contact details].</p>

            <h2 className="mt-6 text-xl font-semibold">7. Changes to This Privacy Policy</h2>
            <p>I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Effective Date.” I encourage you to review this page periodically to stay informed about how I am protecting your information.</p>

            <h2 className="mt-6 text-xl font-semibold">8. Contact Me</h2>
            <p>If you have any questions or concerns about this Privacy Policy, or if you wish to exercise your rights regarding your personal information, please contact me at:</p>
            <br></br>
            <p><strong>Talia Kusmirek</strong><br />
               Email: kusmire@bc.edu<br />
               Website: talialabs.org</p>
               <p><strong>Effective Date:</strong> December 20, 2024</p>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
