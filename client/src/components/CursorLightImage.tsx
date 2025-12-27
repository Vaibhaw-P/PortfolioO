import { useRef, useState, useEffect } from "react";

interface CursorLightImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function CursorLightImage({ src, alt, className = "" }: CursorLightImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`aspect-[4/5] w-full overflow-hidden bg-background relative mb-12 lg:mb-0 ${className}`}
    >
      {/* Base image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />

      {/* Background overlay - matches page background */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          backgroundColor: "hsl(0 0% 5%)",
          opacity: 1,
          maskImage: isHovering
            ? `radial-gradient(circle 180px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, black 60%)`
            : "radial-gradient(circle 0px at 0px 0px, transparent 0%, black 100%)",
          WebkitMaskImage: isHovering
            ? `radial-gradient(circle 180px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, black 60%)`
            : "radial-gradient(circle 0px at 0px 0px, transparent 0%, black 100%)",
        }}
      />
    </div>
  );
}
