'use client'

import { useState, useEffect } from 'react'

export default function PrivacyPolicyPage() {
  const [lastUpdated, setLastUpdated] = useState('')

  useEffect(() => {
    // Set last updated date to current date
    const today = new Date()
    const formattedDate = today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    setLastUpdated(formattedDate)
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600">Last Updated: {lastUpdated}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            At CloudFi Labs, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          <p className="text-gray-700 mb-4">
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          <h3 className="text-xl font-medium text-gray-900 mb-3">Personal Information</h3>
          <p className="text-gray-700 mb-4">
            We may collect personally identifiable information, such as your name, email address, phone number, and company information when you:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Register for an account</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us through our website</li>
            <li>Participate in surveys or promotions</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mb-3">Usage Data</h3>
          <p className="text-gray-700 mb-4">
            We may automatically collect information about your device and usage of our services, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited</li>
            <li>Time and date of visit</li>
            <li>Referring website</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We may use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To allow you to participate in interactive features</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information to improve our services</li>
            <li>To monitor the usage of our services</li>
            <li>To detect, prevent, and address technical issues</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to track activity on our services and store certain information. For more information about our cookie policy, please see our <a href="/resources/cookie-policy" className="text-primary-600 hover:underline">Cookie Policy</a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
          <p className="text-gray-700 mb-4">
            We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, perform service-related services, or assist us in analyzing how our services are used. These third parties may have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organizational security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
          <p className="text-gray-700 mb-4">
            We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your personal information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-4">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>The right to access, update, or delete your information</li>
            <li>The right to rectification</li>
            <li>The right to object</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-2">Email: privacy@cloudfi-labs.com</p>
            <p className="text-gray-700 mb-2">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-700">Address: 123 Cloud Street, San Francisco, CA 94105</p>
          </div>
        </section>
      </div>
    </div>
  )
}