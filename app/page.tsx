'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Globe, 
  Database, 
  Zap, 
  ArrowUp,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const projects = [
    {
      title: 'Fitcher',
      description: 'Red social desarrollada con MERN Stack. Integración de métodos de pago, suscripciones y APIs.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      image: '/api/placeholder/400/250',
      link: 'https://fitcher.com/',
      featured: true
    },
    {
      title: 'GYMJMR',
      description: 'Aplicación web para gestión de gimnasios con sistema de clientes y suscripciones automatizadas.',
      tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js'],
      image: '/api/placeholder/400/250',
      link: 'https://gym-jmr-lake.vercel.app',
      featured: true
    },
    {
      title: 'Suministros Romero',
      description: 'Sistema de gestión para ferreterías con inventario FIFO y procesador de ventas.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redux'],
      image: '/api/placeholder/400/250',
      link: 'https://suministros-frontend.vercel.app',
      featured: true
    },
    {
      title: 'RepuestosVladi',
      description: 'E-commerce para repuestos de autos con sistema de inventario avanzado.',
      tech: ['React', 'MongoDB Atlas', 'Node.js', 'Express'],
      image: '/api/placeholder/400/250',
      link: 'https://repuestos-theta.vercel.app/login',
      featured: false
    }
  ]

  const skills = [
    { name: 'React', icon: Code, level: 95, category: 'Frontend' },
    { name: 'Next.js', icon: Globe, level: 90, category: 'Frontend' },
    { name: 'TypeScript', icon: Code, level: 88, category: 'Frontend' },
    { name: 'Node.js', icon: Database, level: 92, category: 'Backend' },
    { name: 'Redux', icon: Zap, level: 90, category: 'State Management' },
    { name: 'MongoDB', icon: Database, level: 85, category: 'Database' },
    { name: 'PostgreSQL', icon: Database, level: 80, category: 'Database' },
    { name: 'Express', icon: Zap, level: 88, category: 'Backend' }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-secondary-200">
        <nav className="container-custom section-padding py-4">
                     <div className="flex items-center justify-center">
             <div className="hidden md:flex space-x-8">
               <a href="#sobre-mi" className="hover:text-primary-600 transition-colors">Sobre Mí</a>
               <a href="#experiencia" className="hover:text-primary-600 transition-colors">Experiencia</a>
               <a href="#proyectos" className="hover:text-primary-600 transition-colors">Proyectos</a>
               <a href="#habilidades" className="hover:text-primary-600 transition-colors">Habilidades</a>
               <a href="#contacto" className="hover:text-primary-600 transition-colors">Contacto</a>
             </div>
           </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary">
        <div className="container-custom section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
                         <h1 className="text-5xl md:text-6xl font-bold mb-4">
               <span className="text-gradient">Salvador Bermúdez</span>
             </h1>
             <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-secondary-700">
               Ingeniero en Computación | Desarrollador Full Stack
             </h2>
            <p className="text-xl md:text-2xl text-secondary-600 mb-8 leading-relaxed">
              Especializado en React, Next.js, TypeScript y Node.js. 
              Experto en arquitectura de estado (Redux) e integración de APIs (Axios), 
              optimizando tanto la experiencia de usuario como el rendimiento técnico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#proyectos" className="btn-primary">
                Ver Proyectos
              </a>
              <a href="#contacto" className="btn-secondary">
                Contactar
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sobre Mí */}
      <section id="sobre-mi" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Sobre Mí</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Ingeniero en Computación apasionado por crear soluciones digitales innovadoras. 
              Me especializo en el desarrollo de aplicaciones web modernas y escalables.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Mi Enfoque</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-3"></div>
                  <p className="text-secondary-700">Desarrollo de componentes críticos con React y Redux</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-3"></div>
                  <p className="text-secondary-700">Integración de métodos de pago y APIs con Axios</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-3"></div>
                  <p className="text-secondary-700">Construcción de APIs escalables con Node.js y Express</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-3"></div>
                  <p className="text-secondary-700">Optimización de rendimiento y experiencia de usuario</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-primary p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-6">Educación & Certificaciones</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-600">Ingeniero en Computación</h4>
                  <p className="text-secondary-600">Universidad Valle del Momboy (2024)</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-600">Certificaciones</h4>
                  <ul className="text-sm text-secondary-600 space-y-1">
                    <li>• Responsive Web Design (FreeCodeCamp)</li>
                    <li>• Complete Node.js (Udemy)</li>
                    <li>• Git/GitHub (Amigos Code)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiencia Laboral */}
      <section id="experiencia" className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Experiencia Laboral</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Experiencia en desarrollo de aplicaciones web críticas y sistemas empresariales
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Lucus Lab */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary-600">Lucus Lab</h3>
                  <p className="text-secondary-600">Remoto, Serbia (Europa) | Nov 2021 - Dic 2022</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    Full Stack Developer
                  </span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Fitcher - Social Media</h4>
                  <ul className="space-y-2 text-secondary-700">
                    <li>• Desarrollo de componentes críticos con React, Redux y Next.js</li>
                    <li>• Integración de métodos de pago, suscripciones y APIs (Axios)</li>
                    <li>• Tech Stack: TypeScript, Sass, MongoDB</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Backend Developer</h4>
                  <ul className="space-y-2 text-secondary-700">
                    <li>• Construcción de API escalable con Node.js, Express y MongoDB</li>
                    <li>• Optimización de rendimiento y arquitectura de base de datos</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Freelance */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary-600">Desarrollador Full Stack Freelance</h3>
                  <p className="text-secondary-600">Enero 2023 - Junio 2025</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm font-medium">
                    Freelance
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-secondary-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-600 mb-2">Taller Mecánico "TOYORUSO"</h4>
                  <p className="text-sm text-secondary-700 mb-2">Sistema administrativo que redujo 90% el tiempo de gestión</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs">React</span>
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs">Node.js</span>
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs">PostgreSQL</span>
                  </div>
                </div>

                <div className="bg-secondary-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-600 mb-2">Gimnasio "MUSCLE"</h4>
                  <p className="text-sm text-secondary-700 mb-2">App web para gestión de clientes y suscripciones automatizadas</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs">Next.js</span>
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs">Tailwind CSS</span>
                  </div>
                </div>

                <div className="bg-secondary-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-600 mb-2">Consultorio "Dr. Luis Araujo"</h4>
                  <p className="text-sm text-secondary-700 mb-2">Plataforma de historiales médicos y agendamiento de citas</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs">React</span>
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs">Firebase</span>
                  </div>
                </div>

                <div className="bg-secondary-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-600 mb-2">Ferretería "DSR"</h4>
                  <p className="text-sm text-secondary-700 mb-2">Sistema de inventario FIFO, procesador de ventas y módulo de deudas</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs">MERN Stack</span>
                  </div>
                </div>

                <div className="bg-secondary-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-600 mb-2">Repuestos "Vladi"</h4>
                  <p className="text-sm text-secondary-700 mb-2">Aplicación web para inventario de repuestos de autos</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs">React</span>
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs">MongoDB Atlas</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Aplicaciones web modernas y escalables que demuestran mis habilidades técnicas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center">
                  <Code className="w-16 h-16 text-primary-600" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary-600">{project.title}</h3>
                    {project.featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                        Destacado
                      </span>
                    )}
                  </div>
                  <p className="text-secondary-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    <span>Ver Proyecto</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Habilidades Técnicas</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones digitales excepcionales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                <p className="text-sm text-secondary-600 mb-4">{skill.category}</p>
                <div className="w-full bg-secondary-200 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-primary-600 mt-2 font-medium">{skill.level}%</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Lenguajes</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>JavaScript (ES6+)</span>
                  <span className="text-primary-600 font-medium">95%</span>
                </div>
                <div className="flex justify-between">
                  <span>TypeScript</span>
                  <span className="text-primary-600 font-medium">88%</span>
                </div>
                <div className="flex justify-between">
                  <span>PHP</span>
                  <span className="text-primary-600 font-medium">75%</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Herramientas</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Git</span>
                  <span className="text-primary-600 font-medium">90%</span>
                </div>
                <div className="flex justify-between">
                  <span>Jira</span>
                  <span className="text-primary-600 font-medium">85%</span>
                </div>
                <div className="flex justify-between">
                  <span>Testing</span>
                  <span className="text-primary-600 font-medium">80%</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Idiomas</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Español</span>
                  <span className="text-primary-600 font-medium">Nativo</span>
                </div>
                <div className="flex justify-between">
                  <span>Inglés</span>
                  <span className="text-primary-600 font-medium">Intermedio</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">¿Trabajamos Juntos?</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Estoy disponible para nuevos proyectos y oportunidades. ¡Hablemos sobre cómo puedo ayudarte!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <span className="text-secondary-700">contacto@salva.dev</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <span className="text-secondary-700">+58 XXX XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span className="text-secondary-700">Venezuela</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Sígueme en:</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-primary p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-6">Envíame un Mensaje</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Nombre
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Mensaje
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-12">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ing. Salvador Bermudez</h3>
            <p className="text-secondary-400 mb-6">
              Desarrollador Web apasionado por crear soluciones digitales excepcionales
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-secondary-500 text-sm">
              © 2024 Salva. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  )
}
