import { cvData } from '../data';
import { SectionTitle } from './ui/SectionTitle';
import { motion } from 'motion/react';
import { FolderGit2, Award } from 'lucide-react';

export function Projects() {
  return (
    <section className="py-16" id="projetos">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle title="Projetos Relevantes" subtitle="Iniciativas que geraram impacto real nos negócios." />
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {cvData.projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-blue hover:shadow-md transition-all flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-brand-light text-brand-dark rounded-xl group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <FolderGit2 className="w-8 h-8" />
                  </div>
                  {project.description.includes("2º lugar") && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100">
                      <Award className="w-4 h-4" />
                      <span>Premiação</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-brand-dark mb-4">{project.name}</h3>
                
                <p className="text-brand-gray flex-1 leading-relaxed">
                  {project.description.split('Projeto reconhecido em 2º lugar').map((part, index) => {
                    if (index === 1) {
                      return <span key={index} className="font-medium text-brand-dark">Projeto reconhecido em 2º lugar{part}</span>;
                    }
                    return part;
                  })}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
