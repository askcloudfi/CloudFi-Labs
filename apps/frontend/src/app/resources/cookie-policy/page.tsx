'use client'

import { useState, useEffect } from 'react'

export default function CookiePolicyPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
        <p className="text-lg text-gray-600">Last Updated: {lastUpdated}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            This Cookie Policy explains how CloudFi Labs ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website at cloudfi-labs.com ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What are Cookies?</h2>
          <p className="text-gray-700 mb-4">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p className="text-gray-700 mb-4">
            Cookies set by the website owner (in this case, CloudFi Labs) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why do we use Cookies?</h2>
          <p className="text-gray-700 mb-4">
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for advertising, analytics, and other purposes.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-medium text-gray-900 mb-3">Essential Website Cookies</h3>
          <p className="text-gray-700 mb-4">
            These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
          </p>
          
          <h3 className="text-xl font-medium text-gray-900 mb-3">Performance and Functionality Cookies</h3>
          <p className="text-gray-700 mb-4">
            These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
          </p>
          
          <h3 className="text-xl font-medium text-gray-900 mb-3">Analytics and Customization Cookies</h3>
          <p className="text-gray-700 mb-4">
            These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.
          </p>
          
          <h3 className="text-xl font-medium text-gray-900 mb-3">Advertising Cookies</h3>
          <p className="text-gray-700 mb-4">
            These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How Often Will You Update This Cookie Policy?</h2>
          <p className="text-gray-700 mb-4">
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p className="text-gray-700 mb-4">
            The date at the top of this Cookie Policy indicates when it was last updated.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Where Can I Get Further Information?</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about our use of cookies or other technologies, please email us at:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <p className="text-gray-700 mb-2">Email: privacy@cloudfi-labs.com</p>
            <p className="text-gray-700 mb-2">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-700">Address: 123 Cloud Street, San Francisco, CA 94105</p>
          </div>
          <p className="text-gray-700 mb-4">
            For more information about cookies and how to manage them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">www.allaboutcookies.org</a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Table</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">sessionid</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Maintains user session</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">CloudFi Labs</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">First-party</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Session</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">preferences</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Stores user preferences</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">CloudFi Labs</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">First-party</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1 year</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">_ga</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Google Analytics</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Google</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Third-party</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}