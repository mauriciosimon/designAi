'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon, PaintBrushIcon, CubeIcon, ShareIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

// Define types for our state
type TextContent = {
  heading: string;
  subheading: string;
  cta?: string;
  features?: string[];
  testimonials?: Array<{ text: string; author: string; }>;
}

type DesignState = {
  colors: string[];
  speed: number;
  scale: number;
  opacity: number;
  layout: 'hero' | 'features' | 'testimonials' | 'cta';
  textContent: TextContent;
}

export default function Home() {
  const [designIdea, setDesignIdea] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showDesign, setShowDesign] = useState(false);
  const [isDemoPlaying, setIsDemoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [currentDesignState, setCurrentDesignState] = useState<DesignState>({
    colors: ['from-primary to-secondary', 'from-blue-400 to-purple-600'],
    speed: 2,
    scale: 1,
    opacity: 0.8,
    layout: 'hero',
    textContent: {
      heading: 'Welcome to the Future',
      subheading: 'Discover amazing possibilities',
      cta: 'Get Started'
    }
  });
  const [activeExample, setActiveExample] = useState<string | null>(null);

  // Showcase items that demonstrate AI capabilities
  const showcaseItems = [
    {
      type: 'website',
      elements: [
        { type: 'header', color: 'from-blue-400 to-purple-600' },
        { type: 'content', color: 'from-purple-600 to-pink-500' },
        { type: 'footer', color: 'from-pink-500 to-orange-400' },
      ]
    },
    {
      type: 'mobile',
      elements: [
        { type: 'nav', color: 'from-green-400 to-blue-500' },
        { type: 'cards', color: 'from-blue-500 to-indigo-500' },
        { type: 'menu', color: 'from-indigo-500 to-purple-500' },
      ]
    },
    {
      type: 'branding',
      elements: [
        { type: 'logo', color: 'from-yellow-400 to-orange-500' },
        { type: 'palette', color: 'from-orange-500 to-red-500' },
        { type: 'typography', color: 'from-red-500 to-pink-500' },
      ]
    }
  ];

  // Demo prompts sequence
  const demoPrompts: Array<{text: string, designChanges: DesignState}> = [
    {
      text: "Create a modern landing page with a hero section",
      designChanges: {
        colors: ['from-blue-500 to-purple-500', 'from-blue-400 to-purple-600'],
        speed: 2,
        scale: 1,
        opacity: 0.8,
        layout: 'hero',
        textContent: {
          heading: 'Welcome to the Future',
          subheading: 'Discover amazing possibilities',
          cta: 'Get Started'
        }
      }
    },
    {
      text: "Change it to a dark theme with black background",
      designChanges: {
        colors: ['from-gray-900 to-black', 'from-blue-600 to-purple-600'],
        speed: 2,
        scale: 1,
        opacity: 0.8,
        layout: 'hero',
        textContent: {
          heading: 'Welcome to the Future',
          subheading: 'Discover amazing possibilities',
          cta: 'Get Started'
        }
      }
    },
    {
      text: "Add gradient animations to the background",
      designChanges: {
        colors: ['from-gray-900 to-black', 'from-indigo-600 to-purple-800'],
        speed: 2.5,
        scale: 1,
        opacity: 0.9,
        layout: 'hero',
        textContent: {
          heading: 'Welcome to the Future',
          subheading: 'Discover amazing possibilities',
          cta: 'Get Started'
        }
      }
    },
    {
      text: "Add a features section with three columns below the hero",
      designChanges: {
        colors: ['from-gray-900 to-black', 'from-indigo-600 to-purple-800'],
        speed: 2.5,
        scale: 1,
        opacity: 0.9,
        layout: 'features',
        textContent: {
          heading: 'Our Features',
          subheading: 'What makes us different',
          features: ['Advanced Analytics', 'Smart Integration', 'Real-time Updates'],
          cta: 'Get Started'
        }
      }
    },
    {
      text: "Make the design more vibrant with orange to pink gradients",
      designChanges: {
        colors: ['from-gray-900 to-black', 'from-orange-500 to-pink-600'],
        speed: 2.5,
        scale: 1.05,
        opacity: 0.95,
        layout: 'features',
        textContent: {
          heading: 'Our Features',
          subheading: 'What makes us different',
          features: ['Advanced Analytics', 'Smart Integration', 'Real-time Updates'],
          cta: 'Get Started'
        }
      }
    }
  ];

  // Animation examples data
  const animationExamples = [
    {
      id: 'stagger',
      name: 'Staggered Effects',
      description: 'Elements appear in sequence with dynamic timing',
      preview: () => (
        <div className="relative h-full w-full overflow-hidden bg-black/20 rounded-lg backdrop-blur-sm">
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-6 h-24 bg-gradient-to-t from-primary to-secondary"
                style={{
                  rotate: i * 30,
                  originY: '150%',
                }}
                initial={{ scaleY: 0.2, opacity: 0.2 }}
                animate={{ 
                  scaleY: [0.2, 1, 0.2], 
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2, 
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'particles',
      name: 'Particle System',
      description: 'Dynamic particle animations for vibrant backgrounds and effects',
      preview: () => {
        const [isBrowser, setIsBrowser] = useState(false);
        const [cycle, setCycle] = useState(0);
        
        useEffect(() => {
          setIsBrowser(true);
        }, []);

        useEffect(() => {
          if (!isBrowser) return;
          
          const interval = setInterval(() => {
            setCycle((prev) => (prev + 1) % 2);
          }, 4000);
          
          return () => clearInterval(interval);
        }, [isBrowser]);

        if (!isBrowser) return null;
        
        return (
          <div className="relative h-full w-full overflow-hidden bg-black/20 rounded-lg backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(30)].map((_, i) => {
                const size = Math.random() * 6 + 4;
                const redValue = Math.random() * 55 + 200;
                const angle = (i / 30) * Math.PI * 2;
                const distance = cycle === 0 ? 120 : 20;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    initial={{ 
                      x: 0, 
                      y: 0,
                      scale: 0 
                    }}
                    animate={{ 
                      x: Math.cos(angle) * distance,
                      y: Math.sin(angle) * distance,
                      scale: 1
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      opacity: { 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }
                    }}
                    style={{
                      width: size,
                      height: size,
                      background: `rgba(${redValue}, ${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 50)}, 0.7)`,
                      boxShadow: `0 0 ${size * 2}px ${size}px rgba(${redValue}, 0, 0, 0.5)`,
                      filter: 'blur(0.5px)'
                    }}
                  />
                );
              })}
            </div>
          </div>
        );
      }
    },
    {
      id: 'svg-path',
      name: 'SVG Path Drawing',
      description: 'Animated line drawing effects for logos and illustrations',
      preview: () => (
        <div className="relative h-full w-full overflow-hidden bg-black/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
          <svg viewBox="0 0 100 100" width="180" height="180">
            <motion.path
              d="M20,50 C20,30 50,10 80,50 C50,90 20,70 20,50 Z"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, strokeWidth: 0 }}
              animate={{ 
                pathLength: [0, 1, 1], 
                strokeWidth: [0, 2, 6],
                fillOpacity: [0, 0, 0.2]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                times: [0, 0.6, 1],
                ease: "easeInOut"
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )
    },
    {
      id: 'keyframes',
      name: 'Keyframe Animations',
      description: 'Complex multi-stage animations with precise control',
      preview: () => (
        <div className="relative h-full w-full overflow-hidden bg-black/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
          <motion.div
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary"
            animate={{
              scale: [1, 1.2, 0.8, 1.5, 1],
              rotate: [0, 90, 180, 270, 360],
              borderRadius: ["10%", "50%", "10%", "50%", "10%"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      )
    },
    {
      id: 'text-effects',
      name: 'Text Animations',
      description: 'Dynamic text effects for engaging typography',
      preview: () => (
        <div className="relative h-full w-full overflow-hidden bg-black/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <motion.div
              className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              DESIGN AI
            </motion.div>
            <div className="flex justify-center mt-3">
              {['T', 'Y', 'P', 'E', 'F', 'X'].map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block text-sm font-medium mx-0.5 text-white"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 1, 0.4],
                    scale: [0.9, 1.1, 0.9]
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: '3d-card',
      name: '3D Hover Effects',
      description: 'Realistic 3D transformations for immersive interactions',
      preview: () => {
        const [rotateX, setRotateX] = useState(0);
        const [rotateY, setRotateY] = useState(0);
        
        useEffect(() => {
          const interval = setInterval(() => {
            setRotateX(Math.sin(Date.now() / 1000) * 10);
            setRotateY(Math.cos(Date.now() / 1000) * 10);
          }, 50);
          
          return () => clearInterval(interval);
        }, []);
        
        return (
          <div className="relative h-full w-full overflow-hidden bg-black/20 rounded-lg backdrop-blur-sm flex items-center justify-center perspective-500">
            <motion.div
              className="w-5/6 h-5/6 rounded-xl bg-gradient-to-br from-blue-500 to-purple-700 shadow-xl relative p-4 flex flex-col justify-between"
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d"
              }}
            >
              <div className="absolute inset-0 w-full h-full rounded-xl bg-blue-500 opacity-20 z-0 transform translate-z-[-20px]" />
              <div className="z-10 relative">
                <div className="w-8 h-8 rounded-full bg-white/20 mb-2" />
                <div className="w-16 h-2 bg-white/30 rounded" />
              </div>
              <div className="z-10 relative">
                <div className="w-24 h-3 bg-white/30 rounded mb-2" />
                <div className="w-16 h-3 bg-white/50 rounded-xl" />
              </div>
            </motion.div>
          </div>
        );
      }
    }
  ];

  // Demo animation sequence
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let promptIndex = 0;
    
    const demoSequence = async () => {
      if (!isDemoPlaying) return;

      const currentPrompt = demoPrompts[promptIndex];
      let currentText = '';
      
      // Only clear input if this is the first prompt
      if (promptIndex === 0) {
        setDesignIdea('');
        setShowDesign(false);
      }
      setIsGenerating(false);

      // Typing animation with consistent speed
      for (let i = 0; i < currentPrompt.text.length; i++) {
        if (!isDemoPlaying) break;
        currentText += currentPrompt.text[i];
        setDesignIdea(currentText);
        await new Promise(resolve => setTimeout(resolve, 50)); // Consistent typing speed
      }

      if (!isDemoPlaying) return;

      // Brief pause after typing
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Show generating state
      setIsGenerating(true);

      // Smooth transition to new design
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (!isDemoPlaying) return;

      // Update design with new changes and ensure it's visible
      setCurrentDesignState(prev => ({
        ...prev,
        ...currentPrompt.designChanges,
        // Ensure smooth transition of properties
        speed: prev.speed * 0.8 + currentPrompt.designChanges.speed * 0.2,
        scale: prev.scale * 0.8 + currentPrompt.designChanges.scale * 0.2,
        opacity: prev.opacity * 0.8 + currentPrompt.designChanges.opacity * 0.2,
      }));
      setShowDesign(true);
      setIsGenerating(false);

      // Longer pause to show the result
      await new Promise(resolve => setTimeout(resolve, 3500));
      
      if (isDemoPlaying) {
        promptIndex = (promptIndex + 1) % demoPrompts.length;
        timeoutId = setTimeout(demoSequence, 500); // Shorter gap between sequences
      }
    };

    if (isDemoPlaying) {
      demoSequence();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isDemoPlaying]);

  const handleInputFocus = () => {
    setIsDemoPlaying(false);
    setShowDesign(false);
    setIsGenerating(false);
  };

  const handleSubmit = () => {
    if (!designIdea.trim()) return;
    
    setIsGenerating(true);
    // Simulate design generation
    setTimeout(() => {
      setShowDesign(true);
      setIsGenerating(false);
    }, 2000);
  };

  // Background animation elements
  const animationElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40,
    duration: Math.random() * 15 + 15,
    delay: Math.random() * 5,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
  }));

  const renderDesignPreview = () => {
    const { layout, textContent, colors, opacity } = currentDesignState;

    return (
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${colors[0]} backdrop-blur-sm overflow-hidden`}
        initial={false}
        animate={{
          opacity: showDesign ? 1 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
      >
        {/* Gradient overlay with smooth transition */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-r ${colors[1]}`}
          initial={false}
          animate={{
            opacity: 0.1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
        />

        {/* Content based on layout */}
        <div className="relative z-10 h-full">
          {/* Hero section (always shown) */}
          <motion.div 
            className="p-8 h-full flex flex-col items-center justify-center text-center"
            initial={false}
            animate={{ 
              opacity: 1,
              y: 0 
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={false}
              animate={{ 
                opacity: 1,
                y: 0,
                scale: 1
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.1
              }}
            >
              {textContent.heading}
            </motion.h2>
            <motion.p 
              className="text-lg text-white/80 mb-6"
              initial={false}
              animate={{ 
                opacity: 0.8,
                y: 0 
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2
              }}
            >
              {textContent.subheading}
            </motion.p>
            <motion.button 
              className={`px-6 py-2 rounded-lg bg-gradient-to-r ${colors[1]} text-white`}
              initial={false}
              animate={{ 
                opacity: 1,
                scale: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.3
              }}
            >
              {textContent.cta}
            </motion.button>

            {/* Features section with smooth transitions */}
            <AnimatePresence mode="wait">
              {layout === 'features' && textContent.features && (
                <motion.div 
                  className="mt-16 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                >
                  <h3 className="text-2xl font-semibold mb-8">
                    {textContent.heading}
                  </h3>
                  <div className="grid grid-cols-3 gap-6">
                    {textContent.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className={`p-4 rounded-lg backdrop-blur-sm bg-gradient-to-br ${colors[1]} bg-opacity-10 border border-white/10`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: i * 0.1,
                          ease: "easeOut"
                        }}
                      >
                        <motion.div 
                          className="h-8 w-8 rounded-full bg-white/20 mb-3"
                          animate={{
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: i * 0.5
                          }}
                        />
                        <h3 className="font-medium mb-2">{feature}</h3>
                        <div className="h-2 w-16 bg-white/20 rounded" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {animationElements.map((el) => (
          <motion.div
            key={el.id}
            className="absolute opacity-20"
            initial={{ 
              x: `${el.initialX}%`, 
              y: `${el.initialY}%`,
              scale: 0,
              rotate: 0 
            }}
            animate={{ 
              x: [`${el.initialX}%`, `${(el.initialX + 30) % 100}%`],
              y: [`${el.initialY}%`, `${(el.initialY + 30) % 100}%`],
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: el.duration,
              delay: el.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {el.id % 3 === 0 ? (
              <div 
                className="bg-gradient-to-r from-primary to-secondary rounded-full blur-xl"
                style={{ width: el.size, height: el.size }}
              />
            ) : el.id % 3 === 1 ? (
              <div 
                className="border-4 border-primary/40 rounded-xl blur-sm"
                style={{ width: el.size, height: el.size }}
              />
            ) : (
              <div 
                className="bg-secondary/30 rounded-full blur-lg"
                style={{ width: el.size, height: el.size }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <PaintBrushIcon className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">DesignAI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-primary transition-colors flex items-center space-x-2">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-primary"
              >
                Home
              </motion.span>
            </a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#animations" className="hover:text-primary transition-colors">Animations</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-all">
              Sign in
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all">
              Sign up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Interactive Input */}
      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-relaxed tracking-tight pb-4">
              Idea to design in seconds.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
              DesignAI is your superhuman design partner. Transform your ideas into stunning visuals instantly.
            </p>

            {/* Interactive Input */}
            <div className="max-w-3xl mx-auto mb-16 relative">
              <div className="relative mb-8">
                <input
                  type="text"
                  value={designIdea}
                  onChange={(e) => setDesignIdea(e.target.value)}
                  onFocus={handleInputFocus}
                  placeholder="Describe your design idea..."
                  className={`w-full px-6 py-4 rounded-xl bg-gray-900/50 border border-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-lg backdrop-blur-xl ${isDemoPlaying ? 'text-gray-400' : 'text-white'}`}
                />
                <motion.button 
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary text-white transition-all"
                  onClick={handleSubmit}
                  animate={{
                    backgroundColor: isGenerating ? '#FF6B6B' : '#FF6B6B',
                    scale: isGenerating ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    scale: {
                      repeat: Infinity,
                      duration: 1,
                    },
                  }}
                >
                  <PaperAirplaneIcon className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Generated Design Preview */}
              <AnimatePresence mode="wait">
                {isGenerating && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-primary text-lg"
                  >
                    Generating your design...
                  </motion.div>
                )}
                {showDesign && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
                  >
                    {renderDesignPreview()}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-20 px-6 bg-gray-900/30 backdrop-blur-xl">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Create stunning designs with AI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <SparklesIcon className="h-8 w-8 text-primary" />,
                title: "AI-Powered Design",
                description: "Let our AI understand your vision and create pixel-perfect designs in seconds."
              },
              {
                icon: <CubeIcon className="h-8 w-8 text-primary" />,
                title: "Smart Components",
                description: "Access a library of intelligent design components that adapt to your needs."
              },
              {
                icon: <ShareIcon className="h-8 w-8 text-primary" />,
                title: "Easy Export",
                description: "Export your designs in multiple formats ready for development or sharing."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animation Examples Section */}
      <section id="animations" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Animation Examples</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-white/70">
            Explore the various animation styles and effects you can create with our design AI
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animationExamples.map((example) => (
              <motion.div
                key={example.id}
                className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(255,255,255,0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48 overflow-hidden">
                  {example.preview()}
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{example.name}</h3>
                  <p className="text-white/70 mb-4">{example.description}</p>
                  <button 
                    className="text-primary hover:text-white transition-colors"
                    onClick={() => window.open(`/documentation/examples/${example.id}.html`, '_blank')}
                  >
                    View Full Example →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 