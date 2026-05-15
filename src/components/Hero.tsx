import { cvData } from '../data';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';
import bgImage from '../img/backgroung.png'

export function Hero() {
  return (
    <section 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      id="home"
    >
      <div className="absolute inset-0 bg-black/75" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center md:text-left text-white"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          {cvData.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-brand-blue mb-8">
          {cvData.role}
        </h2>
        
        <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 justify-center md:justify-start text-gray-200">
          <a href={`mailto:${cvData.contacts.email}`} className="flex items-center gap-2 hover:text-brand-blue transition-colors">
            <Mail className="w-5 h-5" />
            <span>{cvData.contacts.email}</span>
          </a>
          <a href={`tel:${cvData.contacts.phone.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-brand-blue transition-colors">
            <Phone className="w-5 h-5" />
            <span>{cvData.contacts.phone}</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>{cvData.contacts.location}</span>
          </div>
        </div>

        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <a 
            href={cvData.contacts.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-full hover:bg-brand-blue transition-colors shadow-sm hover:shadow-md"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a 
            href={cvData.contacts.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-brand-dark border border-gray-300 px-6 py-3 rounded-full hover:border-brand-dark transition-colors shadow-sm hover:shadow-md"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}