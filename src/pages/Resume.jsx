import { motion } from 'framer-motion'
import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa'

const Resume = () => {
  const experiences = [
    {
      title: 'Website Builder ',
      company: 'Yatharth Group Of Institutions',
      duration: 'June 2023 - Present',
      description: [
        'Developed and maintained web applications using React, Node.js, and MongoDB',
        'Implemented RESTful APIs and integrated third-party services',
        'Collaborated with the team to deliver features on time',
        'Participated in code reviews and improved code quality',
      ],
    },

  ]

  const education = [
    {
      degree: 'B.Tech in Computer Engineering',
      school: '[RK University Rajkot Gujarat ]',
      duration: '2022 - 2026',
      description: [
        'Relevant Coursework: Data Structures, Algorithms, Database Management, Web Development',
        'CGPA: [6.95]',
        'Participated in various hackathons and coding competitions',
      ],
    },
  ]

  const certifications = [
    {
      name: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: '2023',
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
    },
    {
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
    },
  ]

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-primary to-secondary">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 bg-tertiary p-8 rounded-2xl shadow-lg">
            <div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Resume
              </h1>
              <p className="text-textSecondary text-lg">
                Professional Experience & Qualifications
              </p>
            </div>
            <motion.a
              href="/vivek_resume (2).pdf"
              download
              className="btn btn-primary mt-4 md:mt-0 flex items-center gap-2 px-6 py-3 rounded-full hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download Resume
            </motion.a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Experience Section */}
            <section className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <FaBriefcase className="text-3xl text-accent" />
                <h2 className="text-3xl font-bold text-secondary">Experience</h2>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-tertiary p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-secondary mb-2">{exp.title}</h3>
                        <p className="text-accent font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-textSecondary bg-primary/20 px-4 py-2 rounded-full text-sm">
                        {exp.duration}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-textSecondary flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Education & Certifications Sidebar */}
            <div className="space-y-8">
              {/* Education Section */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <FaGraduationCap className="text-2xl text-accent" />
                  <h2 className="text-2xl font-bold text-secondary">Education</h2>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-tertiary p-6 rounded-xl shadow-lg"
                    >
                      <h3 className="text-xl font-bold text-secondary mb-2">{edu.degree}</h3>
                      <p className="text-accent font-semibold mb-2">{edu.school}</p>
                      <p className="text-textSecondary text-sm mb-4">{edu.duration}</p>
                      <ul className="space-y-2">
                        {edu.description.map((item, i) => (
                          <li key={i} className="text-textSecondary text-sm flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Certifications Section */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <FaCertificate className="text-2xl text-accent" />
                  <h2 className="text-2xl font-bold text-secondary">Certifications</h2>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-tertiary p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <h3 className="text-lg font-bold text-secondary mb-2">{cert.name}</h3>
                      <p className="text-accent font-semibold mb-1">{cert.issuer}</p>
                      <p className="text-textSecondary text-sm">{cert.date}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume 