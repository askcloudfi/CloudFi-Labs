import { Shield } from 'lucide-react'
import Link from 'next/link'

export default function RolesNotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <Shield className="h-12 w-12 text-gray-400" />
          </div>
          <div className="py-16">
            <div className="text-center">
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Roles page not found</h1>
              <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn't find the roles management page you're looking for.
              </p>
              <div className="mt-6">
                <Link href="/admin" className="text-base font-medium text-primary-600 hover:text-primary-500">
                  Go back to admin dashboard
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}