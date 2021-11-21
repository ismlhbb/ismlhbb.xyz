import clsx from 'clsx';
import * as React from 'react';

interface FadeInSectionProps {
  delay?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const FadeInSection = ({
  delay,
  children,
  disabled = false,
}: FadeInSectionProps) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const { current } = domRef;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        //  add this to make this run only once
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      className={clsx({
        'fade-in-section': disabled === false,
        'is-visible': isVisible && disabled === false,
      })}
      style={{ transitionDelay: !disabled ? `${delay ?? ''}` : '' }}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
