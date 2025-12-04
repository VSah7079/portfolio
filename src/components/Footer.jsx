import React from 'react'

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
          <div className="max-w-lg">
            <h4 className="text-lg font-semibold">Vivek Kumar Sah</h4>
            <p className="text-sm text-gray-300 mt-1">Frontend developer focused on building accessible, performant web experiences. Learn more about my background and projects.</p>
            <div className="mt-3 flex items-center space-x-3">
              <a href="/about" className="text-sm underline hover:text-gray-200">About Me</a>
              <a href="mailto:your-email@example.com" className="text-sm hover:text-gray-200">Email</a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm">© {new Date().getFullYear()} Vivek Kumar Sah. All rights reserved.</p>
            <div className="flex space-x-4 mt-2">
              <a href="https://github.com/VSah7079" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/vivek-kumar-sah-921460257/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                LinkedIn
              </a>
            </div>
            <button onClick={scrollToTop} className="mt-3 text-sm px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">Back to top</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer