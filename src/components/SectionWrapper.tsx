import { ReactNode } from "react";

interface SectionWrapperProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const SectionWrapper = ({ title, subtitle, children }: SectionWrapperProps) => (
  <section className="py-8 md:py-12">
    <div className="text-center mb-6 md:mb-8">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
    {children}
  </section>
);

export default SectionWrapper;
