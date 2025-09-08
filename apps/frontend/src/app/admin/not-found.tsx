'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex items-center justify-center">
          <div className="h-12 w-12 rounded-full bg-primary-500"></div>
        </div>

        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Page not found
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <div className="text-center">
            <p className="text-base font-semibold text-primary-600">404</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/admin"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                <span className="flex items-center">
                  <ArrowLeft className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                  Go back home
                </span>
              </Link>
              <Link href="/admin/support" className="text-sm font-semibold text-gray-900">
                Contact support <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}