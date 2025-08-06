"use client";

import React, { useState, useEffect, ReactNode } from "react";

interface CardSwapProps {
  width?: number;
  height?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (index: number) => void;
  children: ReactNode[];
}

const CardSwapSimple: React.FC<CardSwapProps> = ({
  width = 480,
  height = 340,
  delay = 1000,
  pauseOnHover = true,
  onCardClick,
  children,
}) => {
  const childArr = React.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || childArr.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % childArr.length);
    }, delay);

    return () => clearInterval(interval);
  }, [isPaused, delay, childArr.length]);

  const handleCardClick = (index: number) => {
    if (onCardClick) {
      onCardClick(index);
    }
  };

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width, height }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {childArr.map((child, i) => {
        const isActive = i === currentIndex;
        const isNext = i === (currentIndex + 1) % childArr.length;
        const isPrev = i === (currentIndex - 1 + childArr.length) % childArr.length;
        
        let zIndex = 1;
        let scale = 0.85;
        let translateX = 0;
        let translateY = 0;
        let rotateY = 0;
        let opacity = 0.6;

        if (isActive) {
          zIndex = 30;
          scale = 1;
          translateX = 0;
          translateY = 0;
          rotateY = 0;
          opacity = 1;
        } else if (isNext) {
          zIndex = 20;
          scale = 0.9;
          translateX = -20;
          translateY = 10;
          rotateY = -2;
          opacity = 0.8;
        } else if (isPrev) {
          zIndex = 10;
          scale = 0.85;
          translateX = -40;
          translateY = 20;
          rotateY = -4;
          opacity = 0.6;
        } else {
          zIndex = 5;
          scale = 0.8;
          translateX = -60;
          translateY = 30;
          rotateY = -6;
          opacity = 0.4;
        }

        return (
          <div
            key={i}
            className="absolute cursor-pointer transition-all duration-500 ease-out hover:brightness-110"
            style={{
              width: width * 0.75,
              height: height * 0.85,
              zIndex,
              transform: `
                translateX(${translateX}px) 
                translateY(${translateY}px) 
                scale(${scale}) 
                rotateY(${rotateY}deg)
              `,
              opacity,
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
            onClick={() => handleCardClick(i)}
          >
            <div 
              className="w-full h-full rounded-xl border shadow-2xl overflow-hidden transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, rgba(31, 41, 55, 0.9) 0%, rgba(17, 24, 39, 0.9) 100%)",
                backdropFilter: "blur(16px)",
                borderColor: isActive 
                  ? "rgba(255, 255, 255, 0.2)" 
                  : "rgba(255, 255, 255, 0.1)",
                boxShadow: isActive 
                  ? "0 30px 80px rgba(139, 92, 246, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15)" 
                  : "0 15px 40px rgba(0, 0, 0, 0.4)",
              }}
            >
              {child}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardSwapSimple;
