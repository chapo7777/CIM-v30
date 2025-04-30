import { NextResponse } from "next/server"

export interface FacebookPost {
  id: string
  message?: string
  created_time: string
  full_picture?: string
  permalink_url?: string
}

export async function GET() {
  try {
    // Return mock data directly for now
    return NextResponse.json({ data: getMockPosts() })
  } catch (error) {
    console.error("Error fetching posts:", error)
    return NextResponse.json({
      data: getMockPosts(),
      error: "Using mock data due to error",
    })
  }
}

// Mock data function
function getMockPosts(): FacebookPost[] {
  return [
    {
      id: "mock_1",
      message: "تم إطلاق خدمة الجيل الخامس في المناطق الشمالية من البلاد.",
      created_time: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
      full_picture: "/placeholder2.jpg",
      permalink_url: "#",
    },
    {
      id: "mock_2",
      message: "The Authority announces the completion of the fiber optic network expansion.",
      created_time: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
      full_picture: "/ly-top-view.jpg",
      permalink_url: "#",
    },
    // Add more mock posts if needed
  ]
}
