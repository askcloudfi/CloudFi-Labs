'use client'

import { useState, useEffect } from 'react'

export default function TermsOfServicePage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-lg text-gray-600">Last Updated: {lastUpdated}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Welcome to CloudFi Labs. These Terms of Service ("Terms") govern your access to and use of our website, services, and applications (collectively, the "Services").
          </p>
          <p className="text-gray-700 mb-4">
            Please read these Terms carefully before accessing or using our Services. By accessing or using any part of our Services, you agree to be bound by these Terms. If you do not agree to all the terms and conditions of this agreement, you may not access the Services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services Description</h2>
          <p className="text-gray-700 mb-4">
            CloudFi Labs provides cloud financial management tools designed to help businesses optimize their cloud infrastructure costs and financial operations. Our Services include but are not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Cloud cost monitoring and analytics</li>
            <li>Budget management and forecasting</li>
            <li>Compliance and governance tools</li>
            <li>Collaboration features for teams</li>
            <li>Reporting and dashboard capabilities</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Account Registration</h2>
          <p className="text-gray-700 mb-4">
            To access certain features of our Services, you may be required to register for an account. You agree to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your account information</li>
            <li>Maintain the security of your password</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
          </ul>
          <p className="text-gray-700 mb-4">
            You are responsible for all activities that occur under your account.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptable Use</h2>
          <p className="text-gray-700 mb-4">
            You agree not to use the Services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our servers or networks. You agree not to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Attempt to gain unauthorized access to any part of the Services</li>
            <li>Use the Services to transmit any harmful, threatening, or abusive content</li>
            <li>Interfere with or disrupt the Services or servers</li>
            <li>Use any robot, spider, or other automatic device to access the Services</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            The Services and their entire contents, features, and functionality are owned by CloudFi Labs and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <p className="text-gray-700 mb-4">
            These Terms permit you to use the Services for your personal or business use. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services without our prior written consent.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Subscription and Payments</h2>
          <p className="text-gray-700 mb-4">
            Some features of our Services may require payment of fees. By purchasing a subscription, you agree to pay all fees and applicable taxes at the rates in effect at the time of purchase.
          </p>
          <p className="text-gray-700 mb-4">
            All fees are non-refundable except as required by law or as otherwise specified in writing by CloudFi Labs. We reserve the right to change our fees at any time with prior notice.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data and Privacy</h2>
          <p className="text-gray-700 mb-4">
            Your use of the Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy carefully for information relating to our collection, use, and disclosure of your personal information.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer of Warranties</h2>
          <p className="text-gray-700 mb-4">
            The Services are provided on an "as is" and "as available" basis. CloudFi Labs makes no warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            In no event shall CloudFi Labs be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Your access to or use of or inability to access or use the Services</li>
            <li>Any conduct or content of any third party on the Services</li>
            <li>Any content obtained from the Services</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
          <p className="text-gray-700 mb-4">
            We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p className="text-gray-700 mb-4">
            Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply discontinue using the Services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-2">Email: legal@cloudfi-labs.com</p>
            <p className="text-gray-700 mb-2">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-700">Address: 123 Cloud Street, San Francisco, CA 94105</p>
          </div>
        </section>
      </div>
    </div>
  )
}