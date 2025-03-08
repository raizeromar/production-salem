import { memo } from 'react';
import { HeartIcon, ClockIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { Tab, VitalSign, EmptyState } from './NfcDemo';

// Types
interface EmergencyUIContentProps {
  activeTab: 'vitals' | 'meds' | 'allergies';
  onTabChange: (tab: 'vitals' | 'meds' | 'allergies') => void;
  onClose: () => void;
}

const mockEmergencyData = {
  vitalSigns: [
    { icon: HeartIcon, label: 'معدل ضربات القلب', value: '72 BPM', color: 'text-salem-red' },
    { icon: HeartIcon, label: 'ضغط الدم', value: '120/80' },
    { icon: HeartIcon, label: 'درجة الحرارة', value: '98.6°F' },
    { icon: HeartIcon, label: 'تشبع الأكسجين', value: '98%' }
  ],
  medications: [
    { name: 'ليسينوبريل', dosage: '10mg', frequency: 'يوميًا', lastTaken: 'قبل ساعتين' },
    { name: 'ميتفورمين', dosage: '500mg', frequency: 'مرتين يوميًا', lastTaken: 'قبل 6 ساعات' },
    { name: 'أسبرين', dosage: '81mg', frequency: 'يوميًا', lastTaken: 'قبل 12 ساعة' }
  ],
  allergies: ['البنسلين', 'اللاتكس', 'الفول السوداني']
};

const EmergencyUIContent = memo(({ activeTab, onTabChange, onClose }: EmergencyUIContentProps) => {
  return (
    <div className="h-full bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden animate-fadeIn" dir="rtl">
      {/* Header */}
      <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-r from-salem-indigo to-salem-teal">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center space-x-2 sm:space-x-3 space-x-reverse">
            <HeartIcon className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold">معلومات الطوارئ</h3>
              <p className="text-xs sm:text-sm opacity-80">آخر تحديث: قبل ساعتين</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b">
        <Tab
          active={activeTab === 'vitals'}
          label="العلامات الحيوية"
          onClick={() => onTabChange('vitals')}
        />
        <Tab
          active={activeTab === 'meds'}
          label="الأدوية"
          onClick={() => onTabChange('meds')}
        />
        <Tab
          active={activeTab === 'allergies'}
          label="الحساسية"
          onClick={() => onTabChange('allergies')}
        />
      </div>

      {/* Content with Fixed Height */}
      <div className="p-3 sm:p-4 md:p-6 h-[calc(100%-110px)] overflow-y-auto">
        {activeTab === 'vitals' && (
          mockEmergencyData.vitalSigns.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {mockEmergencyData.vitalSigns.map((vital) => (
                <VitalSign key={vital.label} {...vital} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="لا توجد علامات حيوية"
              description="لا تتوفر حاليًا قراءات للعلامات الحيوية."
            />
          )
        )}

        {activeTab === 'meds' && (
          mockEmergencyData.medications.length > 0 ? (
            <div className="space-y-3 sm:space-y-4">
              {mockEmergencyData.medications.map((med) => (
                <div
                  key={med.name}
                  className="p-3 sm:p-4 bg-white rounded-lg shadow border border-gray-100 animate-slideIn"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900">{med.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {med.dosage} - {med.frequency}
                      </p>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <ClockIcon className="w-3 sm:w-4 h-3 sm:h-4 ml-1" />
                      {med.lastTaken}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="لا توجد أدوية"
              description="لا توجد أدوية موصوفة حاليًا."
            />
          )
        )}

        {activeTab === 'allergies' && (
          mockEmergencyData.allergies.length > 0 ? (
            <div className="space-y-3 sm:space-y-4">
              {mockEmergencyData.allergies.map((allergy) => (
                <div
                  key={allergy}
                  className="p-3 sm:p-4 bg-red-50 rounded-lg border border-red-100 animate-slideIn"
                >
                  <div className="flex items-center gap-2">
                    <ExclamationTriangleIcon className="w-4 sm:w-5 h-4 sm:h-5 text-red-500" />
                    <span className="text-sm sm:text-base font-medium text-red-700">{allergy}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="لا توجد حساسية"
              description="لا توجد حساسية معروفة مسجلة."
            />
          )
        )}
      </div>
    </div>
  );
});

export default EmergencyUIContent; 