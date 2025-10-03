"use client"

import { useState } from "react"
import { LoginScreen } from "@/components/login-screen"
import { FeedScreen } from "@/components/feed-screen"
import { ProfileScreen } from "@/components/profile-screen"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <main className="min-h-screen bg-background">
      {!isLoggedIn ? (
        <div className="relative min-h-screen">
          <div className="absolute inset-0 blur-lg scale-110 brightness-90">
            <ProfileScreen />
          </div>
          <div className="absolute inset-0 bg-black/70" />
          {/* Login card on top */}
          <div className="relative z-10">
            <LoginScreen onLogin={handleLogin} />
          </div>
        </div>
      ) : (
        <FeedScreen />
      )}
    </main>
  )
}
