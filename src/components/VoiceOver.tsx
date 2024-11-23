import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2 } from "lucide-react";

type Project = {
  title: string;
  description: string;
  audioUrl: string;
  category: string;
  duration: string;
};

const projects: Project[] = [
  {
    title: "Who I'm I? | من أكون؟",
    description: "Introductory Recording for My Voice Services – Younes Voice",
    audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379764/jfaqqsd1a1wd2vocabxl.mp3",
    category: "Descriptive",
    duration: "1:19",
  },
 
  {
    title: "Hear My Voice in Various Fields | استمع إلى صوتي في مختلف المجالات",
    description: "Seven Diverse Voice-Over Scripts.",
    audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379759/itxnxsltk6eamqpely5l.mp3",
    category: "Commercial",
    duration: "5:13",
  },

  {
    title: "Almaali association for science and education | جمعية المعالي للعلوم والتربية",
    description: "An audio for a descriptif video for Almaali association for science and education",
    audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379761/wgmhgcp0pyeissu34l8n.mp3",
    category: "Commercial",
    duration: "1:30",
  },
  
  {
    title: "NBQ foundaction|مؤسسة النهضة بالقران الكريم ",
    description: "The Annual Report of the Revival with the Holy Quran Foundation.",
    audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379765/gak3ouogasumyufjx78e.wav",
    category: "Commercial",
    duration: "1:26",
  },

  {
    title: "Completing 7 Voice-Over Scripts in One Hour | انجاز سبع نصوص تعليق صوتي في ساعة",
    description: "The Challenge of Completing Seven Voice-Over Scripts in One Hour",
    audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379762/q6d3yqcexcxj5brtwrts.mp3",
    category: "Podcast",
    duration: "9:18",
  },

  {
    title: "The dark-web | الأنترنت المظلم ",
    description: "Nature documentary narration showcasing wildlife in their natural habitat.",
    audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379764/slht8rayxnttm3jnljpi.mp3",
    category: "Podcast",
    duration: "6:41",
  },


  {
    title: "بعيدًّا عن النوافذ والشرف ",
    description: "A Voice Recording Praising the Role of Doctors, Especially During the Time of the Coronavirus Pandemic",
    audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379760/xrqcvwcoa9wnp3vxijhz.mp3",
    category: "Podcast",
    duration: "1:11",
  },

 
  {
    title: "قالوا!",
    description: "Motivational Voice Recording.",
    audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379770/aipoumeanlc0xxwxwmlj.wav",
    category: "Podcast",
    duration: "1:10",
  },

  {
    title: "Save Gaza| أنقذوا غزة",
    description: "A Voice Recording for Our Brothers in Gaza.",
    audioUrl: "https://res.cloudinary.com/dh2n9wz7a/video/upload/v1732379761/wl4mz51u5wxgknrg6sn3.mp3",
    category: "Podcast",
    duration: "1:19",
  },


];

const VoiceOver: React.FC = () => {
  const [audioStates, setAudioStates] = useState<{
    [key: string]: { audio: HTMLAudioElement; playing: boolean; volume: number };
  }>({});

  const handlePlayPause = (project: Project) => {
    const { audioUrl } = project;

    if (audioStates[audioUrl]) {
      const { audio, playing } = audioStates[audioUrl];
      playing ? audio.pause() : audio.play();
      setAudioStates((prev) => ({
        ...prev,
        [audioUrl]: { ...prev[audioUrl], playing: !playing },
      }));
    } else {
      const newAudio = new Audio(audioUrl);
      newAudio.volume = 1;
      newAudio.onended = () =>
        setAudioStates((prev) => ({
          ...prev,
          [audioUrl]: { ...prev[audioUrl], playing: false },
        }));
      newAudio.play();
      setAudioStates((prev) => ({
        ...prev,
        [audioUrl]: { audio: newAudio, playing: true, volume: 1 },
      }));
    }
  };

  const handleVolumeChange = (project: Project, newVolume: number) => {
    const { audioUrl } = project;
    if (audioStates[audioUrl]) {
      const { audio } = audioStates[audioUrl];
      audio.volume = newVolume;
      setAudioStates((prev) => ({
        ...prev,
        [audioUrl]: { ...prev[audioUrl], volume: newVolume },
      }));
    }
  };

  return (
    <section
      id="voice-over"
      className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-purple-950 py-20"
    >
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Voice-Over Work
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="text-sm text-gray-400">{project.category}</span>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <motion.button
                    onClick={() => handlePlayPause(project)}
                    className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center hover:bg-blue-500/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {audioStates[project.audioUrl]?.playing ? (
                      <Pause className="w-5 h-5 text-blue-400" />
                    ) : (
                      <Play className="w-5 h-5 text-blue-400" />
                    )}
                  </motion.button>
                  <Volume2 className="w-5 h-5 text-gray-400" />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={audioStates[project.audioUrl]?.volume || 1}
                    onChange={(e) => handleVolumeChange(project, parseFloat(e.target.value))}
                    className="w-32"
                  />
                </div>
                <span className="text-sm text-gray-400">{project.duration}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VoiceOver;
