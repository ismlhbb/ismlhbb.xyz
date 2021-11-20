import * as React from 'react';

interface FadeInSectionProps {
  delay?: string;
  children: React.ReactNode;
}

const FadeInSection = ({ delay, children }: FadeInSectionProps) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        //  add this to make this run only once
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}` }}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
