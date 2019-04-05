import { useState, useEffect } from "react";

const useReadingProgress = (): number => {
  const [progress, setProgress] = useState(0);

  const calculatePercentageScrolled = (): void => {
    const fullHeight =
      document.body.clientHeight -
      ((document.documentElement && document.documentElement.clientHeight) ||
        0);

    const total = (window.scrollY / fullHeight) * 100;

    setProgress(total);
  };

  useEffect(() => {
    window.addEventListener("scroll", calculatePercentageScrolled);

    return () =>
      window.removeEventListener("scroll", calculatePercentageScrolled);
  });

  return progress;
};

export default useReadingProgress;
