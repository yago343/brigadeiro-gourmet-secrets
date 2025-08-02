import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import carousel1 from "@/assets/carousel-1.png";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";

const ImageCarousel = () => {
  const images = [
    { src: carousel1, alt: "Brigadeiros Gourmet 1" },
    { src: carousel2, alt: "Brigadeiros Gourmet 2" },
    { src: carousel3, alt: "Brigadeiros Gourmet 3" },
    { src: carousel4, alt: "Brigadeiros Gourmet 4" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-card/20 backdrop-blur-sm">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="lg"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 rounded-full p-3"
          onClick={goToPrevious}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          size="lg"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 rounded-full p-3"
          onClick={goToNext}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gold-elegant shadow-lg scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4 w-full bg-card/30 rounded-full h-1 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-gold-elegant to-success-sweet transition-all duration-100 rounded-full"
          style={{ 
            width: isAutoPlaying ? `${((currentIndex + 1) / images.length) * 100}%` : '100%',
            animation: isAutoPlaying ? 'none' : undefined
          }}
        />
      </div>

      {/* Image counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-muted-foreground font-medium">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
};

export default ImageCarousel;