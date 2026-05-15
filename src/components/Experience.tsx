import { cvData } from '../data';
import { SectionTitle } from './ui/SectionTitle';
import { motion } from 'motion/react';

export function Experience() {
  return (
    <section className="py-16 bg-white" id="experiencia">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle title="Experiência Profissional" />
          
          <div className="space-y-10 border-l border-brand-light ml-3 md:ml-4 py-2">
            {cvData.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-10"
              >
                {/* Timeline dot */}
                <div className="absolute w-4 h-4 rounded-full bg-brand-blue left-[-8.5px] top-1.5 border-4 border-white shadow-sm"></div>
                
                <div className="mb-1 flex flex-col md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-xl font-bold text-brand-dark">{exp.role}</h3>
                  <span className="text-sm font-medium text-brand-blue bg-blue-50 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg text-brand-gray font-medium mb-4">{exp.company}</h4>
                
                <ul className="space-y-2 text-brand-gray">
                  {exp.duties.map((duty, jdx) => (
                    <li key={jdx} className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
