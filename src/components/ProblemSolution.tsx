import { motion } from 'framer-motion';
import { ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const ProblemSolution = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section id="features" className="relative py-24 overflow-hidden bg-white" dir="rtl">
      <div className="container grid gap-8 md:grid-cols-2">
        {/* Problem Side */}
        <motion.div
          className="relative p-8 overflow-hidden bg-gray-900 rounded-2xl"
          {...fadeInUp}
        >
          <div 
            className="absolute inset-0 opacity-20 -z-10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900/90 -z-10" />
          <div className="relative z-10">
            <ExclamationTriangleIcon className="w-12 h-12 mb-6 text-salem-red" />
            <h2 className="mb-6 text-3xl font-bold text-white">المشكلة</h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="p-4 bg-white/10 backdrop-blur rounded-lg">
                <h3 className="mb-2 text-xl font-semibold text-salem-red">غياب السجلات الصحية الرقمية</h3>
                <p className="text-white/90">الاعتماد على السجلات الورقية يؤدي إلى فقدان المعلومات وضعف كفاءة الرعاية الصحية.</p>
              </div>
              
              <div className="p-4 bg-white/10 backdrop-blur rounded-lg">
                <h3 className="mb-2 text-xl font-semibold text-salem-red">35-50% من الأخطاء الطبية سببها فقدان السجلات الصحية</h3>
                <p className="text-white/90">عدم توفر بيانات موثوقة يزيد من مخاطر التشخيص الخاطئ والأدوية غير المناسبة.</p>
              </div>
              
              <div className="p-4 bg-white/10 backdrop-blur rounded-lg">
                <h3 className="mb-2 text-xl font-semibold text-salem-red">عدم وجود نظام ذكي لتحليل البيانات الصحية</h3>
                <p className="text-white/90">غياب التحليلات الرقمية يمنع التنبؤ بالأوبئة وتحسين إدارة الرعاية الصحية.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Solution Side */}
        <motion.div
          className="relative p-8 overflow-hidden bg-gradient-to-br from-salem-teal/10 to-salem-indigo/10 rounded-2xl"
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10" />
          <div className="relative z-10">
            <CheckCircleIcon className="w-12 h-12 mb-6 text-salem-teal" />
            <h2 className="mb-6 text-3xl font-bold text-gray-900">الحل</h2>

            <div className="relative">
              {/* Animated Pills */}
              <motion.div
                className="absolute left-0 top-0 w-32 h-32 -z-10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-8 h-16 bg-salem-teal/20 rounded-full"
                    style={{
                      transform: `rotate(${i * 120}deg) translateY(-20px)`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.6,
                    }}
                  />
                ))}
              </motion.div>

              <div className="space-y-4">
                <motion.div
                  className="p-4 bg-white rounded-lg shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="mb-2 text-xl font-semibold text-salem-indigo">السجلات الصحية الرقمية الموحدة</h3>
                  <p className="text-gray-600">منصة Salem توفر ملفًا صحيًا رقميًا لكل مريض، مما يضمن وصولًا سريعًا وآمنًا للبيانات الطبية.</p>
                </motion.div>

                <motion.div
                  className="p-4 bg-white rounded-lg shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="mb-2 text-xl font-semibold text-salem-indigo">بطاقات NFC للمرضى</h3>
                  <p className="text-gray-600">إمكانية الوصول السريع للسجلات الطبية عبر بطاقة ذكية.</p>
                </motion.div>

                <motion.div
                  className="p-4 bg-white rounded-lg shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="mb-2 text-xl font-semibold text-salem-indigo">التحليلات المتقدمة والتنبؤ الصحي</h3>
                  <p className="text-gray-600">يستخدم Salem البيانات الصحية مع الذكاء الصنعي لتوقع الأوبئة وتحسين استراتيجيات الرعاية الصحية.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution; 