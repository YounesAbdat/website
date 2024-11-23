import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Video, Play } from 'lucide-react';

const toolIcons = [
  { name: 'Premiere Pro', src: '/icons/premierepro.svg' },
  { name: 'After Effects', src: '/icons/aftereffect.svg' },
  { name: 'Audition', src: '/icons/audition.svg' },
 

];


export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-blue-950 to-purple-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(255,255,255,0)_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
           Your Vision,
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"> My Craft</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
             Expert voice-over and video editing, designed to bring your stories to life!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-8"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
                <Mic className="w-8 h-8 text-blue-400" />
              </div>
              <span className="text-gray-300">Voice-Over</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
                <Video className="w-8 h-8 text-purple-400" />
              </div>
              <span className="text-gray-300">Video Editing</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mb-2">
                <Play className="w-8 h-8 text-pink-400" />
              </div>
              <span className="text-gray-300">Production</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated tool icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {toolIcons.map((tool, index) => (
          <motion.img
            key={index}
            src={tool.src}
            alt={tool.name}
            className="absolute w-12 h-12"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))',
            }}
          />
        ))}
      </div>
    </section>
  );
}
