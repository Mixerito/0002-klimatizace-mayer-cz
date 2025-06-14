"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetTime = new Date(targetDate).getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetTime - now

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      <div className="flex flex-col items-center">
        <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-zinc-800 text-5xl font-bold text-white sm:h-40 sm:w-40 sm:text-7xl">
          {String(timeLeft.days).padStart(2, "0")}
        </div>
        <span className="mt-2 text-xl text-zinc-400">Dnů</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-zinc-800 text-5xl font-bold text-white sm:h-40 sm:w-40 sm:text-7xl">
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
        <span className="mt-2 text-xl text-zinc-400">Hodin</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-zinc-800 text-5xl font-bold text-white sm:h-40 sm:w-40 sm:text-7xl">
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        <span className="mt-2 text-xl text-zinc-400">Minut</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-zinc-800 text-5xl font-bold text-white sm:h-40 sm:w-40 sm:text-7xl">
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
        <span className="mt-2 text-xl text-zinc-400">Seškund</span>
      </div>
    </div>
  )
}
