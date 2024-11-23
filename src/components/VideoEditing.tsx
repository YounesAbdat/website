import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Film, Award } from 'lucide-react';

const projects = [
  {
    title: "The Documentary of DevFest 2024 - Algiers",
    description: "GDG Algiers",
    thumbnailUrl: "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732381541/retp4qjuz7uqty8l3ugw.webp", // Replace with your thumbnail URL
    videoUrl: "https://www.instagram.com/reel/DCHugpMorsx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // Replace with your video link
    duration: "4:49",
    category: "Documentary"
  },
  {
    title: "Recap (DevFest24)",
    description: "GDG Algiers",
    thumbnailUrl: "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732381727/ms7wbsjojctz0br67jx5.webp", // Replace with your thumbnail URL
    videoUrl: "https://www.instagram.com/reel/DBrge5EiKe4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    duration: "3:30",
    category: "Commercial"
  },
  {
    title: "CSE Podcast",
    description: "EP3 | Coding Passion to Entrepreneurial Career",
    thumbnailUrl: "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732381050/hsloczomp6wshi3o6yeu.jpg",
    videoUrl: "https://www.youtube.com/watch?v=zZ2Un22tZI0&t=1s",
    duration: "54:37",
    category: "Podcast"
  },
  {
    title: "CSE poscast",
    description: "EP1 CSE Podcasts 2 | All about Post-BAC Life",
    thumbnailUrl: "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732381143/eidunimftap1vhd12rd8.jpg",
    videoUrl: "https://www.youtube.com/watch?v=mqw7Rjl8mCI&t=13s", // Replace with your video URL
    duration: "1:17:57",
    category: "Podcast"
  },

  {
    title: "Recap (Devfest24) .",
    description: "GDG Algiers ",
    thumbnailUrl: "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732381727/ms7wbsjojctz0br67jx5.webp",
    videoUrl: "https://www.instagram.com/reel/DBigoSWCaBt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // Replace with your video URL
    duration: "1:02",
    category: "Commercial"
  },
  {
    title: "Recap (Devfest24) .",
    description: "GDG Algiers.",
    thumbnailUrl: "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732381541/retp4qjuz7uqty8l3ugw.webp",
    videoUrl: "https://www.instagram.com/reel/DBmBMeGNTas/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // Replace with your video URL
    duration: "0:48",
    category: "Commercial"
  },
 
  {
    title: "The closing ceremony of the NBQ's event",
    description: "NBQ foundation",
    thumbnailUrl: "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732381409/mwnffbzzmvtfxlcaq1kn.png",
    videoUrl: "https://www.facebook.com/NBQuran.02/videos/1474942173140585", // Replace with your video URL
    duration: "3:34",
    category: "Commercial"
  }

];

export default function VideoEditing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="video-editing" className="min-h-screen bg-gradient-to-br from-purple-950 via-blue-950 to-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Video Editing</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => window.open(project.videoUrl, "_blank")} // Open link in new tab
              >
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-400">{project.duration}</span>
                        </div>
                        <span className="text-sm text-gray-400">{project.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
