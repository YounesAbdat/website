import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/younes.abdt/", label: "Instagram" },
  { icon: Facebook, href: "https://web.facebook.com/sisi.azer.14", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/younes-abdat-5618162b9/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:younesabdat2@gmail.com", label: "Email" }
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-black to-blue-950 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's create something amazing together!
          </p>

          <div className="flex justify-center space-x-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="group relative"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Icon className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                  <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-sm text-gray-400">
                    {social.label}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Copyright Section */}
        <div className="text-center mt-16 text-gray-500 text-sm">
          © 2024 Younes Abdat. All rights reserved.
        </div>
      </div>
    </section>
  );
}
