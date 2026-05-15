import { cvData } from '../data';
import { SectionTitle } from './ui/SectionTitle';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section className="py-16 bg-white" id="formacao">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle title="Formação Acadêmica" />
          
          <div className="space-y-6">
            {cvData.education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 bg-brand-light/50 rounded-2xl border border-gray-100"
              >
                <div className="p-3 bg-white shadow-sm rounded-xl text-brand-blue shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-1">{edu.course}</h3>
                  <p className="text-brand-gray text-lg mb-2">{edu.institution}</p>
                  <span className="inline-block text-sm font-medium text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
                    {edu.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
