import { motion } from 'motion/react';

export function Header() {
  const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Formação', href: '#formacao' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight text-brand-dark">
          TA<span className="text-brand-blue">.</span>
        </div>
        
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-sm font-medium text-brand-gray hover:text-brand-blue transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
