import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaLaptopCode, FaServer } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation'

const FloatingIcon = ({ icon: Icon, delay }) => {
  return (
    <motion.div
      className="absolute text-accent/30"
      initial={{ y: 0, x: 0, opacity: 0 }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Icon className="w-8 h-8" />
    </motion.div>
  )
}

const About = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <FloatingIcon 
            key={i} 
            icon={[FaCode, FaLaptopCode, FaServer][i % 3]} 
            delay={i * 0.2}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-64 h-64 mx-auto">
              <motion.div 
                className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  rotate: isHovered ? 180 : 0
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              <motion.img
                src="/profile.jpg"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-accent/30 shadow-xl"
                animate={{
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-accent/10 backdrop-blur-sm p-4 rounded-full"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1],
                  x: isHovered ? 10 : 0,
                  y: isHovered ? -10 : 0
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity },
                  x: { duration: 0.5 },
                  y: { duration: 0.5 }
                }}
              >
                <FaGithub className="w-8 h-8 text-accent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-white"
              animate={{
                textShadow: [
                  "0 0 7px #646cff",
                  "0 0 10px #646cff",
                  "0 0 21px #646cff",
                  "0 0 7px #646cff"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Hi, I'm <span className="text-accent">Your Name</span>
            </motion.h1>

            <div className="text-xl sm:text-2xl text-gray-300">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1000,
                  'React Developer',
                  1000,
                  'Node.js Developer',
                  1000,
                  'UI/UX Designer',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-accent"
              />
            </div>

            <motion.p 
              className="text-gray-400 text-lg leading-relaxed"
            >
              I'm a passionate developer with expertise in building modern web applications.
              I love creating beautiful and functional user interfaces while ensuring robust
              backend solutions. With a strong foundation in both frontend and backend
              technologies, I strive to deliver exceptional user experiences.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 7px #646cff",
                    "0 0 10px #646cff",
                    "0 0 21px #646cff",
                    "0 0 7px #646cff"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <HiDownload className="w-5 h-5" />
                Download CV
              </motion.a>

              <div className="flex gap-4">
                {[
                  { icon: FaGithub, href: "https://github.com/yourusername" },
                  { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername" },
                  { icon: FaTwitter, href: "https://twitter.com/yourusername" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1.1, 1]
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    <social.icon className="w-6 h-6 text-accent" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About 