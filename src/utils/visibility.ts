import { useEffect, useState, RefObject } from 'react';

const useOnScreen = (
  ref: RefObject<HTMLElement>,
  rootMargin = '0px',
  threshold = 1.0
) => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  const currentRef = ref.current;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (currentRef) observer.observe(currentRef);

    return () => observer.unobserve(currentRef!);
  }, [isIntersecting]);

  return isIntersecting;
};

export default useOnScreen;
