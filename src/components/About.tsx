import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
 

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-950 to-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <img
              src="https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385183/oxp97rszjtvume9qpsib.jpg"
              alt="Professional headshot"
              className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6 text-lg">
            I am Younes Abdat, a passionate video editor and voice-over artist with a keen eye for storytelling and creativity. 
            I bring visuals to life with engaging edits and deliver captivating voice performances in Arabic.
             With experience collaborating with diverse organizations and projects, 
             I strive to combine technical expertise with artistic flair to produce impactful content. 
             </p>
            
            <div className="grùid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-gray-400">5+ Years</p>
              </div>
             
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">Projects</h3>
                <p className="text-gray-400">60+</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">Clients</h3>
                <p className="text-gray-400">35+</p>
              </div>
              </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Expertise</h3>
              <div className="space-y-2">
                {['Commercial Voice-Over', 'Narrative', 'Character Voice', 'Video Editing', 'Sound Design', 'Motion Graphics','videography','photography'].map((skill, index) => (
                  <div key={index} className="bg-white/5 rounded-full px-4 py-2 inline-block mr-2 mb-2">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
