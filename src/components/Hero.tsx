import { motion } from 'framer-motion';
import { PlayCircleIcon } from '@heroicons/react/24/solid';

const FloatingMedicalIcons = () => {
  const icons = [
    { icon: '💊', initialX: 10, initialY: 20, size: 'text-4xl md:text-5xl', opacity: 'opacity-20 md:opacity-80' },
    { icon: '🏥', initialX: 30, initialY: 40, size: 'text-5xl md:text-7xl', opacity: 'opacity-20 md:opacity-30' },
    { icon: '⚕️', initialX: 50, initialY: 15, size: 'text-5xl md:text-7xl', opacity: 'opacity-20 md:opacity-100' },
    { icon: '🩺', initialX: 70, initialY: 60, size: 'text-5xl md:text-7xl', opacity: 'opacity-20 md:opacity-40' },
    { icon: '💉', initialX: 85, initialY: 30, size: 'text-5xl md:text-7xl', opacity: 'opacity-20 md:opacity-90' },
    { icon: '🧬', initialX: 20, initialY: 70, size: 'text-5xl md:text-7xl', opacity: 'opacity-20 md:opacity-70' },
    { icon: '🫀', initialX: 60, initialY: 80, size: 'text-5xl md:text-7xl', opacity: 'opacity-20 md:opacity-90' },
    { icon: '🧪', initialX: 40, initialY: 50, size: 'text-5xl md:text-7xl', opacity: 'opacity-20 md:opacity-50' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${item.initialX}%`,
            top: `${item.initialY}%`,
          }}
          animate={{
            y: ["0%", "-20%", "0%"],
            x: ["0%", "10%", "0%"],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        >
          <span className={`${item.size} ${item.opacity} select-none`}>
            {item.icon}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-tr from-salem-indigo via-salem-teal to-salem-white bg-[length:200%_200%] animate-gradient overflow-hidden" dir="rtl">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-20 -z-10"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, #2DD4BF 0%, transparent 50%)',
            'radial-gradient(circle at 60% 40%, #6366F1 0%, transparent 50%)',
            'radial-gradient(circle at 40% 60%, #2DD4BF 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Floating Medical Icons */}
      <FloatingMedicalIcons />

      {/* Content */}
      <div className="container relative flex flex-col items-center justify-center min-h-screen py-32 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-8 text-4xl font-bold text-white sm:text-5xl lg:text-6xl text-center"
        >
          أوقف الأخطاء الطبية قبل حدوثها
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mb-12 text-lg text-white/90 sm:text-xl lg:text-2xl text-center"
        >
          ثورة في الرعاية الصحية باستخدام تقنية NFC المدعومة بالذكاء الاصطناعي لرعاية مرضى أكثر أمانًا وذكاءً.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:space-x-reverse"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-secondary"
            href='#video'
          >
            <PlayCircleIcon className="w-5 h-5 ml-2" />
            شاهد العرض التوضيحي
          </motion.a>
        </motion.div>
      </div>
      <div className='w-[200%] h-[100px] bg-salem-teal absolute left-1/2 -translate-x-1/2 -bottom-12 opacity blur-lg'>
      </div>
    </section>
  );
};

export default Hero;