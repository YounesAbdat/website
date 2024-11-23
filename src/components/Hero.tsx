import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mic, Video, Play } from "lucide-react";

const toolIcons = [
  {
    name: "Premiere Pro",
    src: "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385395/tcmrakfeykxbpwn8zavs.svg",
  },
  {
    name: "After Effects",
    src: "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385394/kjhnzukgjhg2zw3zaro4.svg",
  },
  {
    name: "Audition",
    src: "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385395/zj17nmjrrh4w19ogobg8.svg",
  },
];

export default function Hero() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-blue-950 to-purple-950"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(255,255,255,0)_50%)]" />

      {/* Content */}
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              My Craft
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Expert voice-over and video editing, designed to bring your stories
            to life!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-8"
          >
            {[
              { label: "Voice-Over", icon: <Mic className="w-8 h-8 text-blue-400" />, bg: "bg-blue-500/20" },
              { label: "Video Editing", icon: <Video className="w-8 h-8 text-purple-400" />, bg: "bg-purple-500/20" },
              { label: "Production", icon: <Play className="w-8 h-8 text-pink-400" />, bg: "bg-pink-500/20" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full ${item.bg} flex items-center justify-center mb-2`}>
                  {item.icon}
                </div>
                <span className="text-gray-300">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Tool Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {toolIcons.map((tool, index) => (
          <motion.img
            key={index}
            src={tool.src}
            alt={tool.name}
            className="absolute w-12 h-12"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              opacity: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [Math.random() * windowSize.width, Math.random() * windowSize.width],
              y: [Math.random() * windowSize.height, Math.random() * windowSize.height],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))",
            }}
          />
        ))}
      </div>
    </section>
  );
}
