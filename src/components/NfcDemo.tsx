import { motion } from 'framer-motion';
import { useState, useCallback, memo, lazy, Suspense } from 'react';
import { 
  WifiIcon,
  ShieldCheckIcon, 
  InformationCircleIcon,
  CreditCardIcon
} from '@heroicons/react/24/solid';

// Lazy load EmergencyUIContent
const EmergencyUIContent = lazy(() => import('./EmergencyUIContent'));

// Types
interface VitalSign {
  icon: any;
  label: string;
  value: string | number;
  color?: string;
}



// Enhanced Empty State with animation
export const EmptyState = memo(({ title, description }: { title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center h-full p-3 sm:p-4 md:p-6 text-center bg-white/50 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl"
    dir="rtl"
  >
    <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <InformationCircleIcon className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 mb-3 sm:mb-4 md:mb-6 text-salem-teal" />
    </motion.div>
    <h3 className="mb-2 sm:mb-3 text-base sm:text-lg md:text-xl font-bold text-gray-800">{title}</h3>
    <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-[250px] sm:max-w-sm">{description}</p>
  </motion.div>
));

// Enhanced Tab with hover effects
export const Tab = memo(({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`flex-1 px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold rounded-t-lg transition-all duration-300 ${
      active 
        ? 'text-salem-teal border-b-2 sm:border-b-3 border-salem-teal bg-white shadow-lg' 
        : 'text-gray-500 hover:text-salem-teal hover:bg-white/50'
    }`}
    dir="rtl"
  >
    {label}
  </motion.button>
));

// Enhanced VitalSign with animations
export const VitalSign = memo(({ icon: Icon, label, value, color = 'text-salem-teal' }: VitalSign) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-3 sm:p-4 md:p-5 bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-shadow duration-300"
  >
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2"
    >
      <div className={`p-2 sm:p-3 rounded-full bg-opacity-10 ${color} bg-current`}>
        <Icon className={`w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 ${color}`} />
      </div>
      <div>
        <p className="text-xs sm:text-sm font-medium text-gray-500">{label}</p>
        <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800">{value}</p>
      </div>
    </motion.div>
  </motion.div>
));

// Enhanced ScanButton with better animations
const ScanButton = memo(({ onClick, isScanning }: { onClick: (e: React.MouseEvent) => void; isScanning: boolean }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    disabled={isScanning}
    className={`scan-button w-full py-2 sm:py-3 md:py-4 text-sm sm:text-base font-semibold text-white rounded-lg sm:rounded-xl relative overflow-hidden
      ${isScanning ? 'scanning bg-gradient-to-r from-green-600 to-black' : 'bg-green-600 hover:bg-green-700'}`}
    dir="rtl"
  >
    <motion.div 
      className="relative z-10 flex items-center justify-center"
      animate={isScanning ? { scale: [1, 1.02, 1] } : {}}
      transition={{ duration: 1, repeat: Infinity }}
    >
      {isScanning ? (
        <>
          <motion.svg
            className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 ml-2 sm:ml-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" />
            <path className="opacity-75" d="M12 2a10 10 0 0 1 10 10" />
          </motion.svg>
          <span className="text-sm sm:text-base md:text-lg">
            جاري المسح
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mr-1 sm:mr-2"
            >
              ...
            </motion.span>
          </span>
        </>
      ) : (
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 space-x-reverse">
          <WifiIcon className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
          <span className="text-sm sm:text-base md:text-lg">انقر للمسح</span>
        </div>
      )}
    </motion.div>
  </motion.button>
));

// Enhanced NFC Card with 3D effects
const NfcCard = memo(({ isFlipped, isScanning, onFlip, onScan, mousePosition, onMouseMove, onMouseLeave }: any) => {
  return (
    <motion.div
      className="relative perspective-1000 w-[280px] sm:w-[360px] md:w-[420px] h-[180px] sm:h-[230px] md:h-[260px] cursor-pointer"
      whileHover={{ scale: 1.02 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <motion.div 
        className="w-full h-full rounded-2xl shadow-2xl"
        initial={false}
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
          scale: isScanning ? 1.05 : 1,
          boxShadow: isScanning 
            ? '0 25px 50px -12px rgba(45, 212, 191, 0.5)'
            : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.6
        }}
        style={{ 
          transformStyle: 'preserve-3d',
          transform: `
            perspective(1000px)
            rotateX(${!isFlipped ? mousePosition.y : 0}deg)
            rotateY(${!isFlipped ? mousePosition.x : 180}deg)
          `
        }}
        onClick={onFlip}
      >
        {/* Front */}
        <motion.div 
          className="absolute inset-0 p-4 sm:p-6 md:p-8 rounded-2xl backface-hidden"
          style={{
            background: `linear-gradient(${135 + (mousePosition.x + mousePosition.y) / 2}deg, 
                        #10B981 0%, 
                        #000000 100%)`,
          }}
          animate={{
            scale: isScanning ? [1, 1.02, 1] : 1
          }}
          transition={{ duration: 1.5, repeat: isScanning ? Infinity : 0 }}
        >
          <div className="relative h-full flex flex-col justify-between">
            {/* Salem logo in the middle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.img 
                src="/sd.png" 
                alt="SALEM Logo" 
                className="w-24 sm:w-32 md:w-40 opacity-30"
                animate={{
                  opacity: isScanning ? [0.3, 0.5, 0.3] : 0.3
                }}
                transition={{ duration: 2, repeat: isScanning ? Infinity : 0 }}
              />
            </div>
            
            {/* Top section */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 mb-6 sm:mb-8 md:mb-12 z-10">
              <CreditCardIcon className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-white/80" />
              <div className="h-6 sm:h-7 md:h-8 w-[1px] sm:w-[2px] bg-white/30" />
              <div className="text-white/80 text-sm sm:text-base md:text-lg font-medium tracking-wider">NFC</div>
            </div>

            {/* Bottom section */}
            <div className="text-white space-y-2 sm:space-y-3 md:space-y-4 z-10">
              <motion.p 
                className="text-2xl sm:text-3xl md:text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                dir="rtl"
              >
                محمد سالم
              </motion.p>
              <motion.div 
                className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm opacity-80 space-x-reverse"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                dir="rtl"
              >
                <ShieldCheckIcon className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>انقر لعرض المعلومات الآمنة</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Back */}
        <motion.div 
          className="absolute inset-0 p-4 sm:p-6 md:p-8 bg-white rounded-2xl backface-hidden"
          style={{ 
            transform: 'rotateY(180deg)',
            backgroundImage: isScanning ? 
              'radial-gradient(circle at center, rgba(45, 212, 191, 0.1) 0%, transparent 70%)' : 
              'none'
          }}
          dir="rtl"
        >
          <div className="h-full flex flex-col justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 text-gray-700 space-x-reverse">
              <ShieldCheckIcon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-salem-teal" />
              <span className="text-sm sm:text-base font-medium">بيانات طبية مشفرة</span>
            </div>

            <div className="flex items-center justify-center flex-1">
              {isScanning ? (
                <motion.div 
                  className="relative w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotate: 360 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  <div className="absolute inset-0 rounded-full border-2 sm:border-3 md:border-4 border-salem-teal/20" />
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 sm:border-3 md:border-4 border-salem-teal border-t-transparent"
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  />
                </motion.div>
              ) : (
                <div className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-sm transform hover:scale-105 transition-transform">
                  <ScanButton onClick={(e) => { e.stopPropagation(); onScan(); }} isScanning={isScanning} />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
});

// Update NfcDemo component with more responsive layout
const NfcDemo = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [showEmergencyUI, setShowEmergencyUI] = useState(false);
  const [activeTab, setActiveTab] = useState<'vitals' | 'meds' | 'allergies'>('vitals');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    setMousePosition({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePosition({ x: 0, y: 0 });
  }, []);

  const handleScan = useCallback(() => {
    if (!isScanning) {
      setIsScanning(true);
      setTimeout(() => {
        setIsScanning(false);
        setShowEmergencyUI(true);
      }, 2000);
    }
  }, [isScanning]);

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white min-h-screen" dir="rtl">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">بطاقة NFC الطبية</h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600">
            وصول فوري إلى المعلومات الطبية الحرجة بمجرد نقرة واحدة
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center px-2 sm:px-4"
          >
            <NfcCard
              isFlipped={isFlipped}
              isScanning={isScanning}
              onFlip={() => !isScanning && setIsFlipped(!isFlipped)}
              onScan={handleScan}
              mousePosition={mousePosition}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-[400px] sm:h-[450px] md:h-[500px] bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 overflow-hidden"
          >
            <Suspense fallback={
              <div className="h-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 sm:w-10 sm:h-10 border-3 border-salem-teal border-t-transparent rounded-full"
                />
              </div>
            }>
              {showEmergencyUI ? (
                <EmergencyUIContent
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                  onClose={() => setShowEmergencyUI(false)}
                />
              ) : (
                <div className="h-full flex flex-col items-center justify-center space-y-4 sm:space-y-6">
                  <EmptyState
                    title="انقر للوصول إلى البيانات الطبية"
                    description="استخدم بطاقة NFC لعرض معلومات الطوارئ الطبية"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleScan}
                    className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-white 
                             bg-green-600 rounded-lg sm:rounded-xl shadow-xl hover:bg-green-700 transition-colors duration-300"
                  >
                    محاكاة الوصول في حالات الطوارئ
                  </motion.button>
                </div>
              )}
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(NfcDemo);