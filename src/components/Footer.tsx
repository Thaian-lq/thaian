import { cvData } from '../data';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-dark py-12 text-center text-brand-light">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Thaian Alves de Souza</h2>
        
        <div className="flex justify-center gap-6 mb-8 text-gray-400">
          <a href={`mailto:${cvData.contacts.email}`} className="hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
            <span className="sr-only">E-mail</span>
          </a>
          <a href={cvData.contacts.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={cvData.contacts.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
        
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Desenvolvido com React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
