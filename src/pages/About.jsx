import { motion } from 'framer-motion'

const About = () => {
  const skills = {
    'Programming Languages': [
      'JavaScript',
      'TypeScript',
      'Python',
      'Java',
      'C++',
    ],
    'Frontend Development': [
      'React',
      'Next.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Material-UI',
    ],
    'Backend Development': [
      'Node.js',
      'Express.js',
      'Django',
      'Spring Boot',
      'REST APIs',
    ],
    'Databases': [
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'Redis',
    ],
    'Tools & Others': [
      'Git',
      'Docker',
      'AWS',
      'CI/CD',
      'Agile',
      'JIRA',
    ],
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Profile Section */}
            <div>
              <h1 className="text-4xl font-bold mb-6">About Me</h1>
              <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden">
                <img
                  src="/Vivek.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-textSecondary mb-6">
                I am a passionate Full Stack Developer with a strong foundation in web development
                and a keen eye for creating elegant solutions to complex problems. With expertise
                in both frontend and backend technologies, I strive to build applications that
                are not only functional but also provide an exceptional user experience.
              </p>
              <p className="text-textSecondary">
                My journey in software development began with a curiosity about how things work
                on the web, which led me to dive deep into various technologies and frameworks.
                I enjoy staying up-to-date with the latest trends in web development and
                continuously learning new skills to enhance my capabilities.
              </p>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-secondary">Education</h2>
              <div className="space-y-6">
                <div className="bg-tertiary p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Bachelor of Technology in Computer Science</h3>
                  <p className="text-textSecondary mb-2">RK University Rajkot, Gujarat</p>
                  <p className="text-textSecondary mb-2">Current CGPA: 6.95</p>
                  <p className="text-textSecondary">2022 - 2026</p>
                </div>
                <div className="bg-tertiary p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">12th Science(PCM)</h3>
                  <p className="text-textSecondary mb-2">B.P.S College Bhore,Gopalganj,Bihar</p>
                  <p className="text-textSecondary mb-2">Percentage : 65.2%</p>
                  <p className="text-textSecondary">2022</p>
                </div>
                <div className="bg-tertiary p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">10th Secondary School Of Examination</h3>
                  <p className="text-textSecondary mb-2">Sarvodya High School Kalopatti Gopalganj,Bihar</p>
                  <p className="text-textSecondary mb-2">Percentage : 60.8%</p>
                  <p className="text-textSecondary">2020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-secondary">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-tertiary p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold mb-4 text-secondary">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary text-secondary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Hire Me Section */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-secondary">Why Hire Me?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-tertiary p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Problem Solver</h3>
                <p className="text-textSecondary">
                  I approach challenges with a systematic mindset, breaking down complex
                  problems into manageable solutions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-tertiary p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Team Player</h3>
                <p className="text-textSecondary">
                  I thrive in collaborative environments and believe in the power of
                  effective communication and teamwork.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-tertiary p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Continuous Learner</h3>
                <p className="text-textSecondary">
                  I am committed to staying current with industry trends and constantly
                  expanding my skill set.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About 