import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-[#F9F9F9] px-5 py-12 md:px-20 text-[#2C2C2C] mt-16">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-8 md:p-14 transition-all duration-300">
        <h1 className="text-4xl font-extrabold mb-8 text-[#FF3B3F] tracking-wide text-center">
          Privacy Policy
        </h1>

        <p className="mb-6 text-[#444] leading-relaxed text-lg">
          At <strong className="text-[#FF3B3F]">Mehr-e-Aman – Women Safety App</strong>, your privacy is a top priority. This policy explains the types of data we collect, how we use it, and the safeguards in place to protect it.
        </p>

        {/* Section 1 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#2C2C2C]">1. Information We Collect</h2>
          <ul className="list-disc list-inside text-[#555] space-y-2 pl-2">
            <li><span className="font-medium text-[#2C2C2C]">Personal Info:</span> Name, phone number, email, etc.</li>
            <li><span className="font-medium text-[#2C2C2C]">Location Data:</span> Real-time location for emergency alerts.</li>
            <li><span className="font-medium text-[#2C2C2C]">Usage Data:</span> App usage stats to enhance performance.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#2C2C2C]">2. How We Use Your Data</h2>
          <ul className="list-disc list-inside text-[#555] space-y-2 pl-2">
            <li>To provide timely emergency assistance</li>
            <li>To alert your trusted contacts</li>
            <li>To improve the app’s safety and features</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#2C2C2C]">3. Sharing of Data</h2>
          <p className="text-[#444] leading-relaxed">
            We don’t share your personal information with third parties — unless it’s for delivering emergency help or fulfilling legal obligations.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#2C2C2C]">4. Data Security</h2>
          <p className="text-[#444] leading-relaxed">
            Your data is secured with encryption and industry-grade protocols. Location sharing is limited to emergencies only.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#2C2C2C]">5. Your Choices</h2>
          <ul className="list-disc list-inside text-[#555] space-y-2 pl-2">
            <li>You can update or delete your account anytime</li>
            <li>You can disable location access in device settings</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#2C2C2C]">6. Contact Us</h2>
          <p className="text-[#444] leading-relaxed">
            Have any questions or concerns? Reach out to us at:
            <span className="text-[#FF3B3F] font-semibold ml-1">support@mehreaman.com</span>
          </p>
        </div>

        {/* Footer */}
        <p className="text-sm text-[#888] text-center mt-10">Last updated: May 20, 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
