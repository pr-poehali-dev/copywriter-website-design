import { useEffect, useRef } from "react";

const GoldenPath = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!pathRef.current) return;
      
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const pathLength = pathRef.current.getTotalLength();
      const drawLength = pathLength * scrollPercentage;
      
      pathRef.current.style.strokeDashoffset = (pathLength - drawLength).toString();
    };

    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = pathLength.toString();
      pathRef.current.style.strokeDashoffset = pathLength.toString();
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <svg
      className="fixed left-8 md:left-16 top-0 h-full w-24 pointer-events-none z-20 hidden lg:block"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "hsl(43, 74%, 49%)", stopOpacity: 0.8 }} />
          <stop offset="50%" style={{ stopColor: "hsl(199, 89%, 48%)", stopOpacity: 0.6 }} />
          <stop offset="100%" style={{ stopColor: "hsl(262, 83%, 58%)", stopOpacity: 0.8 }} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      <path
        ref={pathRef}
        d="M 30 100 Q 50 250, 30 400 Q 10 550, 30 700 Q 50 850, 30 1000 Q 10 1150, 30 1300 Q 50 1450, 30 1600 Q 10 1750, 30 1900 Q 50 2050, 30 2200 Q 10 2350, 30 2500"
        fill="none"
        stroke="url(#goldGradient)"
        strokeWidth="3"
        filter="url(#glow)"
        style={{
          transition: "stroke-dashoffset 0.1s linear"
        }}
      />

      <circle cx="30" cy="100" r="8" fill="hsl(43, 74%, 49%)" className="animate-pulse-gold" filter="url(#glow)" />
      <circle cx="30" cy="400" r="8" fill="hsl(43, 74%, 49%)" className="animate-pulse-gold" filter="url(#glow)" style={{ animationDelay: "0.3s" }} />
      <circle cx="30" cy="700" r="8" fill="hsl(199, 89%, 48%)" className="animate-pulse-gold" filter="url(#glow)" style={{ animationDelay: "0.6s" }} />
      <circle cx="30" cy="1000" r="8" fill="hsl(199, 89%, 48%)" className="animate-pulse-gold" filter="url(#glow)" style={{ animationDelay: "0.9s" }} />
      <circle cx="30" cy="1300" r="8" fill="hsl(262, 83%, 58%)" className="animate-pulse-gold" filter="url(#glow)" style={{ animationDelay: "1.2s" }} />
      <circle cx="30" cy="1600" r="8" fill="hsl(262, 83%, 58%)" className="animate-pulse-gold" filter="url(#glow)" style={{ animationDelay: "1.5s" }} />
      <circle cx="30" cy="1900" r="8" fill="hsl(43, 74%, 49%)" className="animate-pulse-gold" filter="url(#glow)" style={{ animationDelay: "1.8s" }} />
    </svg>
  );
};

export default GoldenPath;
