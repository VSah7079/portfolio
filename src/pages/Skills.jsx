import { motion } from 'framer-motion'
import { Suspense } from 'react'
import Skills3D from '../components/Skills3D'
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaPython, 
  FaPhp, 
  FaDatabase, 
  FaGitAlt, 
  FaDocker, 
  FaAws, 
  FaLinux,
  FaCode,
  FaServer,
  FaTools
} from 'react-icons/fa'
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      width: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }

  const skills = [
    {
      category: 'Frontend Development',
      icon: <FaCode className="text-3xl text-accent" />,
      skills: [
        { name: 'React', level: 90, icon: <FaReact className="text-2xl text-[#61DAFB]" /> },
        { name: 'JavaScript', level: 85, icon: <FaJs className="text-2xl text-[#F7DF1E]" /> },
        { name: 'HTML/CSS', level: 90, icon: <FaHtml5 className="text-2xl text-[#E34F26]" /> },
        { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss className="text-2xl text-[#06B6D4]" /> },
      ],
    },
    {
      category: 'Backend Development',
      icon: <FaServer className="text-3xl text-accent" />,
      skills: [
        { name: 'Node.js', level: 80, icon: <FaNodeJs className="text-2xl text-[#339933]" /> },
        { name: 'Express.js', level: 75, icon: <SiExpress className="text-2xl text-[#000000]" /> },
        { name: 'Python', level: 70, icon: <FaPython className="text-2xl text-[#3776AB]" /> },
        { name: 'PHP', level: 65, icon: <FaPhp className="text-2xl text-[#777BB4]" /> },
      ],
    },
    {
      category: 'Databases',
      icon: <FaDatabase className="text-3xl text-accent" />,
      skills: [
        { name: 'MongoDB', level: 80, icon: <SiMongodb className="text-2xl text-[#47A248]" /> },
        { name: 'MySQL', level: 75, icon: <SiMysql className="text-2xl text-[#4479A1]" /> },
        { name: 'PostgreSQL', level: 70, icon: <SiPostgresql className="text-2xl text-[#336791]" /> },
        { name: 'Redis', level: 65, icon: <SiRedis className="text-2xl text-[#DC382D]" /> },
      ],
    },
    {
      category: 'Tools & Others',
      icon: <FaTools className="text-3xl text-accent" />,
      skills: [
        { name: 'Git', level: 85, icon: <FaGitAlt className="text-2xl text-[#F05032]" /> },
        { name: 'Docker', level: 70, icon: <FaDocker className="text-2xl text-[#2496ED]" /> },
        { name: 'AWS', level: 65, icon: <FaAws className="text-2xl text-[#FF9900]" /> },
        { name: 'Linux', level: 75, icon: <FaLinux className="text-2xl text-[#FCC624]" /> },
      ],
    },
  ]

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="min-h-screen pt-16 bg-gradient-to-b from-primary to-secondary"
    >
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            My Skills
          </h1>
          <p className="text-xl text-textSecondary">
            Here's what I bring to the table
          </p>
        </motion.div>

        {/* 3D Skills Visualization */}
        <div className="mb-20 bg-tertiary/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <Suspense fallback={<div>Loading 3D Skills...</div>}>
            <Skills3D />
          </Suspense>
        </div>

        {/* 2D Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              variants={skillVariants}
              whileHover="hover"
              className="bg-tertiary/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                {category.icon}
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl font-bold text-secondary"
                >
                  {category.category}
                </motion.h2>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {skill.icon}
                        <span className="text-textPrimary font-medium group-hover:text-accent transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-textSecondary group-hover:text-accent transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent to-secondary"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={progressVariants}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="#contact"
              className="btn btn-primary text-lg px-8 py-4 rounded-full hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
            >
              Let's Work Together
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Skills 