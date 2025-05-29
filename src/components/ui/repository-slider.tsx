'use client'

import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Repository {
    id: string;
    name: string;
    author: string;
    description: string;
    stars: number;
    forks: number;
    watchers: number;
    language: string;
    languageColor: string;
    iconName?: string;
    updated: string;
}

interface RepositorySliderProps {
    repositories: Repository[];
    cardWidth?: number;
    autoScrollInterval?: number;
    showNavigationDots?: boolean;
    showNavigationArrows?: boolean;
}

// Map of icon names to actual icon components (dynamically imported)
const iconComponents: Record<string, IconType> = {
    // You would need to import these icons from react-icons
    // This is just an example - in a real app, you'd import all needed icons
};

export default function RepositorySlider({
    repositories,
    cardWidth = 350,
    autoScrollInterval = 3000,
    showNavigationDots = true,
    showNavigationArrows = true
}: RepositorySliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
    const sliderRef = useRef<HTMLDivElement>(null);
    const autoScrollRef = useRef<NodeJS.Timeout>(undefined);

    useEffect(() => {
        const handleResize = () => {
            if (sliderRef.current) {
                const containerWidth = sliderRef.current.clientWidth;
                const newVisibleCards = Math.floor(containerWidth / cardWidth);
                setVisibleCards(newVisibleCards > 0 ? newVisibleCards : 1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [cardWidth]);

    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    }, [currentIndex, autoScrollInterval]);

    const scrollToCard = (index: number) => {
        if (sliderRef.current) {
            sliderRef.current.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
            setCurrentIndex(index);
        }
    };

    const scrollLeft = () => {
        if (currentIndex > 0) {
            scrollToCard(currentIndex - 1);
        }
    };

    const scrollRight = () => {
        const maxIndex = repositories.length - visibleCards;
        if (currentIndex < maxIndex) {
            scrollToCard(currentIndex + 1);
        }
    };

    const startAutoScroll = () => {
        stopAutoScroll();
        autoScrollRef.current = setInterval(() => {
            const maxIndex = repositories.length - visibleCards;
            if (currentIndex >= maxIndex) {
                scrollToCard(0);
            } else {
                scrollToCard(currentIndex + 1);
            }
        }, autoScrollInterval);
    };

    const stopAutoScroll = () => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
        }
    };

    const handleMouseEnter = () => {
        stopAutoScroll();
    };

    const handleMouseLeave = () => {
        startAutoScroll();
    };

    // Get the appropriate icon component
    const getIconComponent = (iconName?: string) => {
        if (!iconName) return null;
        const IconComponent = iconComponents[iconName];
        return IconComponent ? <IconComponent /> : null;
    };

    return (
        <div className="relative w-full max-w-7xl px-4 py-8">
            {/* Navigation Arrows */}
            {showNavigationArrows && (
                <>
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                        aria-label="Scroll left"
                    >
                        <FaChevronLeft />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                        aria-label="Scroll right"
                    >
                        <FaChevronRight />
                    </button>
                </>
            )}

            {/* Slider */}
            <div
                ref={sliderRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex gap-6 overflow-x-auto scroll-snap-x-mandatory scroll-smooth no-scrollbar py-4 px-2"
            >
                {repositories.map((repo) => (
                    <div
                        key={repo.id}
                        className="flex-shrink-0 scroll-snap-align-start bg-white/15 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/18 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden"
                        style={{ width: `${cardWidth}px` }}
                    >
                        {/* Glassy effect overlay */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-white/30 to-white/0 opacity-30 rotate-30"></div>
                        </div>

                        {/* Repository Content */}
                        <div className="relative z-10">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 text-white text-xl">
                                    {repo.iconName ? getIconComponent(repo.iconName) : null}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
                                    <p className="text-sm text-white/70">{repo.author}</p>
                                </div>
                            </div>

                            <p className="text-white/80 text-sm line-clamp-3 mb-5 h-[60px]">
                                {repo.description}
                            </p>

                            <div className="flex gap-4 mb-5">
                                <div className="flex items-center text-white/80 text-xs">
                                    <FaStar className="mr-1 text-xs" />
                                    {repo.stars >= 1000 ? `${(repo.stars / 1000).toFixed(1)}k` : repo.stars}
                                </div>
                                <div className="flex items-center text-white/80 text-xs">
                                    <FaCodeBranch className="mr-1 text-xs" />
                                    {repo.forks}
                                </div>
                                <div className="flex items-center text-white/80 text-xs">
                                    <FaEye className="mr-1 text-xs" />
                                    {repo.watchers >= 1000 ? `${(repo.watchers / 1000).toFixed(1)}k` : repo.watchers}
                                </div>
                            </div>

                            <div className="flex justify-between items-center pt-4 border-t border-white/10">
                                <div className="flex items-center">
                                    <div
                                        className="w-3 h-3 rounded-full mr-2"
                                        style={{ backgroundColor: repo.languageColor }}
                                    />
                                    <span className="text-white/80 text-xs">{repo.language}</span>
                                </div>
                                <span className="text-white/60 text-xs">{repo.updated}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots Navigation */}
            {showNavigationDots && (
                <div className="flex justify-center gap-2 mt-8">
                    {repositories.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToCard(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/30'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Custom CSS */}
            <style jsx>{`
        .scroll-snap-x-mandatory {
          scroll-snap-type: x mandatory;
        }
        .scroll-snap-align-start {
          scroll-snap-align: start;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    );
}