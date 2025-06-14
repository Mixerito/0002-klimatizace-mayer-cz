"use client"
import { ThemeProvider } from "@/components/theme-provider"
import CountdownTimer from "@/components/countdown-timer"

export default function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Už jenom:</h1>
          <div className="mt-8">
            <CountdownTimer targetDate="2025-07-01T00:00:00+02:00" />
          </div>
          {/* <p className="text-2xl font-semibold text-zinc-200 sm:text-3xl">July 1st, 2025 - 00:00 (Prague Time)</p> */}
        </div>
      </main>
    </ThemeProvider>
  )
}
