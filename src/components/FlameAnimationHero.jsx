import { useState } from 'react';
import { motion } from 'framer-motion';

function FlameAnimationHero() {
  return (
    <div className="relative overflow-hidden h-screen bg-black font-poppins">
      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Layered Flame Animation */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          {/* Flame 1 - Base */}
          <motion.svg
            className="absolute bottom-0 left-0 w-full h-full z-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            animate={{ x: ["0%", "50%"], opacity: [1, 0.7, 1] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          >
            <defs>
              <linearGradient id="flameGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#ff7e5f", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#ff4500", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <motion.path
              fill="url(#flameGradient1)"
              animate={{
                d: [
                  "M0,320C120,240,240,180,400,140C560,100,720,80,900,120C1080,160,1260,240,1440,320V0H1320C1200,0,1080,0,960,40C840,80,720,160,600,180C480,200,360,150,240,120C120,90,60,60,0,40V320Z",
                  "M0,320C140,250,300,190,460,150C620,110,820,100,1000,140C1180,180,1360,250,1440,320V0H1300C1160,0,1040,0,900,40C780,80,640,160,520,180C400,200,280,150,160,120C80,90,40,60,0,40V320Z"
                ],
              }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
          </motion.svg>

          {/* Flame 2 - Highlight */}
          <motion.svg
            className="absolute bottom-0 left-0 w-full h-full z-10 opacity-70"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            animate={{ x: ["-50%", "0%"], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          >
            <defs>
              <linearGradient id="flameGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#f97316", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#d97706", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <motion.path
              fill="url(#flameGradient2)"
              animate={{
                d: [
                  "M0,320C150,270,350,210,500,170C650,130,800,110,1000,140C1200,170,1400,250,1440,320V0H1320C1200,0,1080,0,960,40C840,80,720,160,600,180C480,200,360,150,240,120C120,90,60,60,0,40V320Z",
                  "M0,320C150,220,300,180,500,130C700,80,900,110,1100,170C1300,230,1500,270,1440,320V0H1300C1150,0,1000,40,860,70C700,100,550,150,400,180C250,210,120,200,0,160V320Z"
                ],
              }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-white">
          <h1 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-6">
            Hi, I’m Gradi, a Frontend Engineer & Designer
          </h1>
          <p className="text-sm md:text-base mb-8 text-gray-200">
            I create stunning, user-friendly, and responsive websites that bring your ideas to life. Let’s build something extraordinary together.
          </p>
          <motion.button
            className="bg-orange-600 text-black py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:bg-yellow-400 hover:shadow-xl hover:rotate-3"
            whileHover={{
              scale: 1.2,
              rotate: 5,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <a href='https://calendly.com/tshiabutagradi/30min?back=1&month=2025-01' target="_blank" rel="noopener noreferrer">
            Get in touch with me
            </a>
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}

export default FlameAnimationHero;
