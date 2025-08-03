import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.png";
import testimonial6 from "@/assets/testimonial-6.png";
const TestimonialCarousel = () => {
  const testimonials = [{
    src: testimonial1,
    alt: "Depoimento 1"
  }, {
    src: testimonial2,
    alt: "Depoimento 2"
  }, {
    src: testimonial3,
    alt: "Depoimento 3"
  }, {
    src: testimonial4,
    alt: "Depoimento 4"
  }, {
    src: testimonial5,
    alt: "Depoimento 5"
  }, {
    src: testimonial6,
    alt: "Depoimento 6"
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isAutoPlaying, testimonials.length]);
  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };
  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };
  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };
  return <div className="relative w-full max-w-2xl mx-0 my-0 px-[17px] py-0">
      {/* Main carousel display */}
      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
        <div className="flex transition-transform duration-500 ease-in-out h-full" style={{
        transform: `translateX(-${currentIndex * 100}%)`
      }}>
          {testimonials.map((testimonial, index) => <div key={index} className="w-full h-full flex-shrink-0">
              <img src={testimonial.src} alt={testimonial.alt} className="w-full h-full object-contain bg-card" />
            </div>)}
        </div>

        {/* Navigation arrows */}
        <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm" aria-label="Depoimento anterior">
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm" aria-label="Próximo depoimento">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-gold-elegant scale-125' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`} aria-label={`Ir para depoimento ${index + 1}`} />)}
      </div>

      {/* Progress bar */}
      <div className="mt-4 w-full bg-muted-foreground/20 rounded-full h-1 overflow-hidden">
        <div className="h-full bg-gold-elegant transition-all duration-300 ease-out" style={{
        width: `${(currentIndex + 1) / testimonials.length * 100}%`
      }} />
      </div>
    </div>;
};
export default TestimonialCarousel;