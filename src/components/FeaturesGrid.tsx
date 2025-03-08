import { memo } from 'react';
import {
  BoltIcon,
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'تنبيهات الأدوية',
    description: 'مراقبة الذكاء الاصطناعي في الوقت الفعلي للتفاعلات الدوائية المحتملة والحساسية',
    icon: BoltIcon,
    bgClass: 'bg-gradient-to-br from-red-500/20 to-orange-500/20'
  },
  {
    title: 'الوصفات الإلكترونية',
    description: 'وصفات طبية رقمية آمنة مع التحقق التلقائي',
    icon: DocumentTextIcon,
    bgClass: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
  },
  {
    title: 'مركز التواصل',
    description: 'تواصل مع مقدمي الرعاية الصحية في الوقت الفعلي',
    icon: ChatBubbleBottomCenterTextIcon,
    bgClass: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20'
  },
  {
    title: 'اكتشاف تفشي الأمراض',
    description: 'نظام إنذار مبكر مدعوم بالذكاء الاصطناعي لتفشي الأمراض',
    icon: GlobeAltIcon,
    bgClass: 'bg-gradient-to-br from-purple-500/20 to-indigo-500/20'
  }
];

const FeaturesGrid = memo(() => {
  return (
    <section className="py-24 bg-white" dir="rtl">
      <div className="container">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">ميزات مدعومة بالذكاء الاصطناعي</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            تقنية متطورة تعمل معًا لمنع الأخطاء الطبية
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`relative overflow-hidden rounded-2xl transition-transform hover:scale-105 ${feature.bgClass}`}
            >              
              <div className="relative p-6">
                <feature.icon className="w-12 h-12 mb-4 text-salem-indigo" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>

                {/* Static decorative dots */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                  <div className="absolute w-1 h-1 bg-salem-indigo rounded-full" style={{ top: '25%', left: '25%' }} />
                  <div className="absolute w-1 h-1 bg-salem-indigo rounded-full" style={{ top: '75%', left: '25%' }} />
                  <div className="absolute w-1 h-1 bg-salem-indigo rounded-full" style={{ top: '25%', left: '75%' }} />
                  <div className="absolute w-1 h-1 bg-salem-indigo rounded-full" style={{ top: '75%', left: '75%' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default FeaturesGrid; 