import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold tracking-tight text-brand-dark flex items-center gap-4">
        {title}
        <div className="h-px bg-gray-300 flex-1 mt-2"></div>
      </h2>
      {subtitle && <p className="text-brand-gray mt-2">{subtitle}</p>}
    </div>
  );
}
