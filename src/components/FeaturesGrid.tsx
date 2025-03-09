import { memo } from 'react';
import {
  BoltIcon,
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'مساعد طبي ذكي',
    description: 'مساعد ذكي يساعد الأطباء والصيادلة في التحقق السريع من التفاعلات الدوائية المحتملة، مما يوفّر الوقت ويقلل بعض الأخطاء المحتملة.',
    icon: BoltIcon,
    bgClass: 'bg-gradient-to-br from-red-500/20 to-orange-500/20'
  },
  {
    title: 'سجلات صحية رقمية',
    description: 'ملف طبي موحّد لكل مريض، يشمل الوصفات الإلكترونية وتقارير الفحوصات، لضمان دقة البيانات وسهولة الوصول إليها.',
    icon: DocumentTextIcon,
    bgClass: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
  },
  {
    title: 'بطاقات NFC للمرضى',
    description: 'تتيح للأطباء والمستشفيات الوصول الفوري إلى السجلات الطبية بلمسة واحدة، مما يقلل من فقدان المعلومات.',
    icon: ChatBubbleBottomCenterTextIcon,
    bgClass: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20'
  },
  {
    title: 'تحليلات ذكية للقطاع الصحي',
    description: 'توفير بيانات دقيقة لصنّاع القرار عبر تحليل الأنماط الصحية، مما يساعد في تحسين السياسات الطبية.',
    icon: GlobeAltIcon,
    bgClass: 'bg-gradient-to-br from-purple-500/20 to-indigo-500/20'
  }
];

const FeaturesGrid = memo(() => {
  return (
    <section className="py-24 bg-white" dir="rtl">
      <div className="container">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">ميزات سالم الرقمية</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            تقنيات متطورة تعمل معًا لتطوير الرعاية الصحية والمساعدة في تحسينها
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