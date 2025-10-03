"use client"

import { Heart, MessageCircle, MoreHorizontal, Grid, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileScreen() {
  const posts = [
    { id: 1, image: "/jiu-jitsu-training-mat-grappling.jpg", likes: 1234, comments: 89 },
    { id: 2, image: "/martial-arts-athlete.jpg", likes: 2341, comments: 156 },
    { id: 3, image: "/bjj-athlete.jpg", likes: 3456, comments: 234 },
    { id: 4, image: "/brazilian-jiu-jitsu-competition-fight.jpg", likes: 4567, comments: 312 },
    { id: 5, image: "/jiu-jitsu-training-mat-grappling.jpg", likes: 5678, comments: 445 },
    { id: 6, image: "/martial-arts-athlete.jpg", likes: 6789, comments: 567 },
    { id: 7, image: "/bjj-athlete.jpg", likes: 7890, comments: 678 },
    { id: 8, image: "/brazilian-jiu-jitsu-competition-fight.jpg", likes: 8901, comments: 789 },
    { id: 9, image: "/jiu-jitsu-training-mat-grappling.jpg", likes: 9012, comments: 890 },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-300 bg-white px-4 py-3">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <h1 className="text-lg font-semibold text-black">jiujitsu</h1>
          </div>
          <div className="flex items-center gap-5">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <MoreHorizontal className="h-6 w-6" />
          </div>
        </div>
      </header>

      {/* Profile Info */}
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex items-start gap-8 mb-8">
          <Avatar className="h-32 w-32 ring-2 ring-gray-200">
            <AvatarImage src="/martial-arts-athlete.jpg" alt="jiujitsu" />
            <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-4xl font-bold">
              JJ
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-5 mb-6">
              <h2 className="text-2xl font-light text-black">jiujitsu</h2>
              <Button
                variant="outline"
                size="sm"
                className="h-9 px-6 rounded-lg border-gray-300 text-sm font-semibold bg-transparent hover:bg-gray-50"
              >
                Seguir
              </Button>
              <MoreHorizontal className="h-6 w-6 cursor-pointer" />
            </div>
            <div className="flex gap-10 text-base mb-6">
              <span className="text-black">
                <strong className="font-semibold">156</strong> publicações
              </span>
              <span className="text-black">
                <strong className="font-semibold">12.5k</strong> seguidores
              </span>
              <span className="text-black">
                <strong className="font-semibold">342</strong> seguindo
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-black mb-2">Brazilian Jiu-Jitsu</h3>
              <p className="text-sm text-black leading-relaxed">
                🥋 Arte Suave | BJJ Lifestyle
                <br />🏆 Técnicas, treinos e competições
                <br />📍 Worldwide Jiu-Jitsu Community
              </p>
            </div>
          </div>
        </div>

        {/* Stories Highlights */}
        <div className="flex gap-6 mb-8 overflow-x-auto pb-2">
          {["Técnicas", "Treinos", "Competições", "Faixas"].map((highlight) => (
            <div key={highlight} className="flex flex-col items-center gap-2 min-w-[80px]">
              <div className="h-20 w-20 rounded-full border-2 border-gray-300 bg-gray-100 flex items-center justify-center">
                <span className="text-3xl">🥋</span>
              </div>
              <span className="text-xs text-black font-medium">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-300">
          <div className="flex">
            <button className="flex-1 flex items-center justify-center gap-2 py-4 border-t border-black -mt-px">
              <Grid className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-wide">Publicações</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-4 text-gray-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-wide">Vídeos</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-4 text-gray-400">
              <User className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-wide">Marcações</span>
            </button>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-1 mt-1">
          {posts.map((post) => (
            <div key={post.id} className="relative aspect-square group cursor-pointer">
              <img src={post.image || "/placeholder.svg"} alt="Post" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Heart className="h-6 w-6 fill-white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold">
                  <MessageCircle className="h-6 w-6 fill-white" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
