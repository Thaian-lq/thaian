import React from 'react';
import { cvData } from '../data';
import { SectionTitle } from './ui/SectionTitle';
import { motion } from 'motion/react';
import { Database, BarChart3, Settings, TrendingUp, MonitorCog, Monitor } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "Banco de Dados": <Database className="w-6 h-6 text-brand-blue" />,
  "Business Intelligence": <BarChart3 className="w-6 h-6 text-brand-blue" />,
  "Automação": <Settings className="w-6 h-6 text-brand-blue" />,
  "Sistemas Corporativos": <MonitorCog className="w-6 h-6 text-brand-blue" />
};

export function Skills() {
  return (
    <section className="py-16" id="habilidades">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle title="Habilidades Técnicas" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(cvData.skills).map(([category, items], idx) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 w-100 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-brand-light rounded-xl">
                    {iconMap[category]}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((skill, index) => (
                    <li key={index} className="flex items-start gap-2 text-brand-gray">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5"></div>
                      <span>{skill}</span>
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
