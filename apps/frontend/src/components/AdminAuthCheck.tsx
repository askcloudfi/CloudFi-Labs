'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function AdminAuthCheck({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    // In a real application, you would check the user's authentication status and role here
    // This could involve checking a token, making an API call, or checking local storage
    const checkAuthStatus = async () => {
      // Simulate an API call
      setTimeout(() => {
        // For demo purposes, we'll assume the user is authorized
        // In a real app, you would check the user's role
        const userRole = 'admin' // This would come from your auth system
        
        if (userRole === 'admin') {
          setIsAuthorized(true)
        } else {
          // Redirect to login or home page if not authorized
          router.push('/login')
        }
        setIsLoading(false)
      }, 500)
    }

    checkAuthStatus()
  }, [pathname, router])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-primary-600"></div>
      </div>
    )
  }

  if (!isAuthorized) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Access Denied</h1>
          <p className="mt-2 text-gray-600">You do not have permission to view this page.</p>
          <button
            onClick={() => router.push('/')}
            className="mt-4 rounded-md bg-primary-600 px-4 py-2 text-white hover:bg-primary-700"
          >
            Go Home
          </button>
        </div>
      </div>
    )
  }

  return <>{children}</>
}