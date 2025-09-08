'use client'

import { useRouter } from 'next/navigation'
import { Folder, ArrowLeft } from 'lucide-react'

export default function ProjectsNotFound() {
  const router = useRouter()
  
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-24">
      <div className="text-center">
        <Folder className="mx-auto h-12 w-12 text-gray-400" />
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Project not found
        </h1>
        <p className="mt-2 text-base text-gray-500">
          Sorry, we couldn't find the project you're looking for.
        </p>
        <div className="mt-6">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <ArrowLeft className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Go back
          </button>
          <a
            href="/projects"
            className="ml-4 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            View all projects
          </a>
        </div>
      </div>
    </div>
  )
}