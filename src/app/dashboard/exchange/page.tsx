'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Rocket, Star, CircleDollarSign } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const Particle = ({ index }: { index: number }) => {
  const randomDelay = Math.random() * 5
  return (
    <motion.div
      className="absolute w-1 h-1 bg-gray-400 rounded-full"
      initial={{
        opacity: 0,
        y: '100%',
        x: `${Math.random() * 100}%`,
      }}
      animate={{
        opacity: [0, 0.5, 0],
        y: '-100%',
        transition: {
          repeat: Infinity,
          duration: 5 + Math.random() * 5,
          delay: randomDelay,
        },
      }}
    />
  )
}

export default function Exchange() {
  const [particles, setParticles] = useState<number[]>([])

  useEffect(() => {
    setParticles(Array.from({ length: 50 }, (_, i) => i))
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br overflow-hidden relative">
      {particles.map((index) => (
        <Particle key={index} index={index} />
      ))}
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-none shadow-2xl">
        <CardContent className="p-6 flex flex-col items-center space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <Rocket className="w-16 h-16 " />
          </motion.div>
          <motion.h1
            className="text-3xl font-bold  text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Incoming Feature
          </motion.h1>
          <motion.p
            className="text-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Get ready for something amazing! Our team is working hard to bring you an exciting new feature.
          </motion.p>
          <div className="flex justify-center space-x-4">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <CircleDollarSign className="w-8 h-8 text-gray-800" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}