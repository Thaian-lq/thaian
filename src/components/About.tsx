import { cvData } from '../data';
import { SectionTitle } from './ui/SectionTitle';
import { motion } from 'motion/react';
import { User, Terminal, LineChart } from 'lucide-react';

export function About() {
  return (
    <section className="py-16 bg-white" id="sobre">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle title="Sobre Mim" />
          <div className="text-lg text-brand-gray leading-relaxed mb-8">
            {cvData.summary.split('. ').map((sentence, index, array) => (
              <span key={index}>
                {sentence}{index < array.length - 1 ? '. ' : ''}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-brand-light rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                <Terminal className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="font-semibold text-brand-dark mb-2">Tecnologia</h3>
              <p className="text-sm text-brand-gray">Foco no desenvolvimento de soluções escaláveis e automação.</p>
            </div>
            
            <div className="p-6 bg-brand-light rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                <LineChart className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="font-semibold text-brand-dark mb-2">Melhoria de Processos</h3>
              <p className="text-sm text-brand-gray">Foco em otimização operacional através de tecnologia e automação.</p>
            </div>
            
            <div className="p-6 bg-brand-light rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                <User className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="font-semibold text-brand-dark mb-2">Perfil Analítico</h3>
              <p className="text-sm text-brand-gray">Orientado a resultados com olhar focado em melhoria contínua.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
