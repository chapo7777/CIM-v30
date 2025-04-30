"use client"

import { useState, useEffect } from "react"
import { Calendar, ExternalLink } from "lucide-react"

export function FacebookFeed() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/facebook-posts")

        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status}`)
        }

        const data = await response.json()
        setPosts(data.data || [])
        setError(null)
      } catch (err) {
        console.error("Error fetching Facebook posts:", err)
        setError("Error loading posts")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()

    // Refresh posts every 5 minutes (optional)
    const interval = setInterval(fetchPosts, 5 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p>Loading posts...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-center">
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-red-100 hover:bg-red-200 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
        <p>No posts available at the moment</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
      {posts.map((post: any) => (
        <div
          key={post.id}
          className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg h-full flex flex-col"
        >
          {post.full_picture && (
            <div className="relative h-48 w-full">
              <img src={post.full_picture || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
            </div>
          )}

          <div className="p-6 flex-grow flex flex-col">
            {post.message && (
              <p className="text-gray-800 mb-4 text-left flex-grow">{post.message}</p>
            )}

            <div className="mt-auto">
              <div className="flex items-center text-sm text-gray-500 justify-start">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{new Date(post.created_time).toLocaleString()}</span>
              </div>

              {post.permalink_url && (
                <a
                  href={post.permalink_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  View on Facebook
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
