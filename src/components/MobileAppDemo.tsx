import { motion, AnimatePresence } from 'framer-motion';
import { useState, memo } from 'react';
import {
  BellIcon,
  HeartIcon,
  HomeIcon,
  UserCircleIcon,
  PlusCircleIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

const screens = {
  home: {
    title: 'الرئيسية',
    content: (
      <div className="space-y-4" dir="rtl">
        <div className="p-4 bg-salem-teal/10 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-salem-teal">الدواء التالي</span>
            <span className="text-xs text-gray-500">خلال ساعتين</span>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="p-2 bg-white rounded-lg">
              <PlusCircleIcon className="w-6 h-6 text-salem-teal" />
            </div>
            <div>
              <h4 className="font-medium">ليسينوبريل</h4>
              <p className="text-sm text-gray-600">10mg - 2 حبة</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-salem-teal/50 transition-colors">
            <ArrowPathIcon className="w-6 h-6 mb-2 text-salem-indigo" />
            <h4 className="text-sm font-medium">مزامنة NFC</h4>
          </button>
          <button className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-salem-teal/50 transition-colors">
            <HeartIcon className="w-6 h-6 mb-2 text-salem-red" />
            <h4 className="text-sm font-medium">العلامات الحيوية</h4>
          </button>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-medium mb-2">جدول اليوم</h4>
          <div className="space-y-2">
            {[
              { time: '9:00 ص', event: 'فحص ضغط الدم' },
              { time: '1:00 م', event: 'تناول ميتفورمين' },
              { time: '4:00 م', event: 'موعد الطبيب' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{item.time}</span>
                <span>{item.event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  profile: {
    title: 'الملف الشخصي',
    content: (
      <div className="space-y-4" dir="rtl">
        <div className="flex items-center space-x-4 space-x-reverse p-4 bg-white rounded-lg shadow-sm">
          <div className="w-16 h-16 bg-gradient-to-br from-salem-teal to-salem-indigo rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">مس</span>
          </div>
          <div>
            <h4 className="font-medium">محمد سالم</h4>
            <p className="text-sm text-gray-600">رقم المريض: #12345</p>
          </div>
        </div>

        {['المعلومات الشخصية', 'السجل الطبي', 'جهات اتصال الطوارئ', 'الإعدادات'].map((item) => (
          <button
            key={item}
            className="w-full p-4 bg-white rounded-lg shadow-sm border border-gray-100 text-right hover:border-salem-teal/50 transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
    ),
  },
  notifications: {
    title: 'الإشعارات',
    content: (
      <div className="space-y-4" dir="rtl">
        {[
          {
            title: 'تذكير بالدواء',
            message: 'حان وقت تناول ليسينوبريل',
            time: 'قبل 5 دقائق',
            type: 'reminder'
          },
          {
            title: 'ملاحظة الطبيب',
            message: 'نتائج الاختبار الأخيرة جاهزة',
            time: 'قبل ساعتين',
            type: 'update'
          },
          {
            title: 'موعد',
            message: 'موعد قادم غدًا الساعة 2 مساءً',
            time: 'قبل 5 ساعات',
            type: 'appointment'
          }
        ].map((notification) => (
          <div
            key={notification.title}
            className="p-4 bg-white rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-medium">{notification.title}</h4>
              <span className="text-xs text-gray-500">{notification.time}</span>
            </div>
            <p className="text-sm text-gray-600">{notification.message}</p>
          </div>
        ))}
      </div>
    )
  },
};

const MobileAppDemo = memo(() => {
  const [activeScreen, setActiveScreen] = useState<keyof typeof screens>('home');
  const [isRotated, setIsRotated] = useState(false);

  return (
    <section id="mobile-app" className="py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden" dir="rtl">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            جرب تطبيق سالم للجوال
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            تحكم في معلوماتك الطبية مع تطبيقنا سهل الاستخدام
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Phone Frame */}
          <motion.div
            className="relative w-[300px] h-[600px]"
            animate={{ rotateY: isRotated ? 180 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl overflow-hidden">
              {/* Screen */}
              <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="h-12 bg-salem-indigo flex items-center justify-between px-6">
                  <span className="text-white text-sm">9:41</span>
                  <div className="w-32 h-6 bg-black rounded-full" /> {/* Notch */}
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-white rounded-full opacity-75" />
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScreen}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="h-[calc(100%-4rem)]"
                    >
                      <h3 className="text-xl font-bold mb-4 text-right">{screens[activeScreen].title}</h3>
                      {screens[activeScreen].content}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Bar */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-white border-t border-gray-200">
                  <div className="grid h-full grid-cols-3">
                    <button
                      onClick={() => setActiveScreen('home')}
                      className={`flex flex-col items-center justify-center ${
                        activeScreen === 'home' ? 'text-salem-teal' : 'text-gray-400'
                      }`}
                    >
                      <HomeIcon className="w-6 h-6" />
                      <span className="text-xs mt-1">الرئيسية</span>
                    </button>
                    <button
                      onClick={() => setActiveScreen('notifications')}
                      className={`flex flex-col items-center justify-center ${
                        activeScreen === 'notifications' ? 'text-salem-teal' : 'text-gray-400'
                      }`}
                    >
                      <BellIcon className="w-6 h-6" />
                      <span className="text-xs mt-1">التنبيهات</span>
                    </button>
                    <button
                      onClick={() => setActiveScreen('profile')}
                      className={`flex flex-col items-center justify-center ${
                        activeScreen === 'profile' ? 'text-salem-teal' : 'text-gray-400'
                      }`}
                    >
                      <UserCircleIcon className="w-6 h-6" />
                      <span className="text-xs mt-1">الملف</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <div className="max-w-md space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-right">الميزات الرئيسية</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1 order-2">
                    <div className="w-2 h-2 bg-salem-teal rounded-full mt-2" />
                  </div>
                  <div className="mr-4 order-1 text-right">
                    <h4 className="font-medium">المراقبة في الوقت الفعلي</h4>
                    <p className="text-gray-600">تتبع العلامات الحيوية وجداول الأدوية فوريًا</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1 order-2">
                    <div className="w-2 h-2 bg-salem-teal rounded-full mt-2" />
                  </div>
                  <div className="mr-4 order-1 text-right">
                    <h4 className="font-medium">إشعارات ذكية</h4>
                    <p className="text-gray-600">احصل على تذكيرات في الوقت المناسب للأدوية والمواعيد</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1 order-2">
                    <div className="w-2 h-2 bg-salem-teal rounded-full mt-2" />
                  </div>
                  <div className="mr-4 order-1 text-right">
                    <h4 className="font-medium">تكامل NFC</h4>
                    <p className="text-gray-600">مزامنة سلسة مع الأجهزة الطبية وبطاقات الهوية</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <div className="flex justify-center">
              <motion.button
                onClick={() => setIsRotated(!isRotated)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-salem-indigo text-white rounded-lg shadow-lg hover:bg-opacity-90 transition-colors"
              >
                تدوير الجهاز
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default MobileAppDemo; 