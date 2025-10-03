"use client"

import { useState } from "react"
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Home,
  Search,
  PlusSquare,
  Film,
  User,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const posts = [
  {
    id: 1,
    username: "jiujitsu_master",
    avatar: "/martial-arts-athlete.jpg",
    image: "/jiu-jitsu-training-mat-grappling.jpg",
    likes: 1234,
    caption: "Treino pesado hoje! 🥋 #jiujitsu #bjj #osss",
    timeAgo: "2h",
  },
  {
    id: 2,
    username: "bjj_lifestyle",
    avatar: "/bjj-athlete.jpg",
    image: "/brazilian-jiu-jitsu-competition-fight.jpg",
    likes: 892,
    caption: "Competição foi incrível! Muito aprendizado 💪 #bjjlifestyle #jiujiteiro",
    timeAgo: "5h",
  },
  {
    id: 3,
    username: "gracie_team",
    avatar: "/jiu-jitsu-instructor.jpg",
    image: "/jiu-jitsu-technique-demonstration.jpg",
    likes: 2156,
    caption: "Técnica do dia: passagem de guarda 🔥 #graciejiujitsu #technique",
    timeAgo: "8h",
  },
]

export function FeedScreen() {
  const [likedPosts, setLikedPosts] = useState<number[]>([])
  const [savedPosts, setSavedPosts] = useState<number[]>([])

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  const toggleSave = (postId: number) => {
    setSavedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-4">
          <h1 className="font-sans text-2xl font-bold text-foreground">JiuJitsuGram</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Heart className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground">
              <MessageCircle className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Stories */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-2xl overflow-x-auto px-4 py-4">
          <div className="flex gap-4">
            {["Seu story", "jiujitsu_master", "bjj_lifestyle", "gracie_team", "fighter_pro", "academy_bjj"].map(
              (story, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <div className="relative">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-0.5">
                      <div className="h-full w-full rounded-full border-2 border-background bg-muted">
                        <Avatar className="h-full w-full">
                          <AvatarImage
                            src={`/bjj-athlete-.jpg?height=64&width=64&query=bjj+athlete+${index}`}
                          />
                          <AvatarFallback>{story[0]}</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                    {index === 0 && (
                      <div className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-primary">
                        <span className="text-xs font-bold text-primary-foreground">+</span>
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-foreground line-clamp-1 w-16 text-center">{story.split("_")[0]}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="mx-auto w-full max-w-2xl flex-1 pb-16">
        {posts.map((post) => (
          <article key={post.id} className="border-b border-border bg-background">
            {/* Post Header */}
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{post.username[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-semibold text-foreground">{post.username}</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>

            {/* Post Image */}
            <div className="relative aspect-square w-full bg-muted">
              <img src={post.image || "/placeholder.svg"} alt="Post" className="h-full w-full object-cover" />
            </div>

            {/* Post Actions */}
            <div className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-foreground"
                    onClick={() => toggleLike(post.id)}
                  >
                    <Heart className={`h-6 w-6 ${likedPosts.includes(post.id) ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground">
                    <MessageCircle className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground">
                    <Send className="h-6 w-6" />
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-foreground"
                  onClick={() => toggleSave(post.id)}
                >
                  <Bookmark className={`h-6 w-6 ${savedPosts.includes(post.id) ? "fill-foreground" : ""}`} />
                </Button>
              </div>

              {/* Likes */}
              <div className="mt-2">
                <span className="text-sm font-semibold text-foreground">
                  {post.likes + (likedPosts.includes(post.id) ? 1 : 0)} curtidas
                </span>
              </div>

              {/* Caption */}
              <div className="mt-2">
                <span className="text-sm text-foreground">
                  <span className="font-semibold">{post.username}</span> {post.caption}
                </span>
              </div>

              {/* Time */}
              <div className="mt-2">
                <span className="text-xs text-muted-foreground">HÁ {post.timeAgo}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background">
        <div className="mx-auto flex h-14 max-w-2xl items-center justify-around px-4">
          <Button variant="ghost" size="icon" className="text-foreground">
            <Home className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <PlusSquare className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Film className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <User className="h-6 w-6" />
          </Button>
        </div>
      </nav>
    </div>
  )
}
