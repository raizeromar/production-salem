import { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images from assets
import qamarImg from '/src/assets/team-pics/qamar-min.webp';
import muhammadBImg from '/src/assets/team-pics/muhammad-bayazid-min.webp';
import tasneemImg from '/src/assets/team-pics/tasneem-min.webp';
import muhammadFImg from '/src/assets/team-pics/muhammad-flutter-min.webp';
import obadaImg from '/src/assets/team-pics/obada-min.webp';
import tawfiqImg from '/src/assets/team-pics/tawfik-min.webp';
import bilalImg from '/src/assets/team-pics/bilal-min.webp';
import joudyImg from '/src/assets/team-pics/joudy-min.webp';
import olaImg from '/src/assets/team-pics/ola-min.webp';
import OmarImg from '/src/assets/team-pics/Omar-Gatara-min.webp'

// Define team member categories
const categories = [
  { id: 'all', name: 'الجميع' },
  { id: 'technical', name: 'الفريق التقني' },
  { id: 'medical', name: 'الفريق الطبي' },
  { id: 'business', name: 'إدارة الأعمال' },
  { id: 'design', name: 'التصميم والتجربة' }
];

// Updated team members array with imported images
const teamMembers = [
  {
    id: 1,
    name: 'Qamar',
    role: 'Pharmacist',
    bio: 'متخصصة في الصيدلة مع خبرة في الأدوية والتفاعلات الدوائية',
    expertise: ['Pharmacy', 'Medications', 'Healthcare'],
    category: ['medical'],
    image: qamarImg
  },
  {
    id: 2,
    name: 'Muhammad',
    role: 'Business',
    bio: 'خبير في إدارة الأعمال والاستراتيجيات التجارية للشركات الناشئة في مجال التكنولوجيا الصحية',
    expertise: ['Business Management', 'Strategy', 'Business Development'],
    category: ['business', 'leadership'],
    image: muhammadBImg
  },
  {
    id: 3,
    name: 'Tasneem',
    role: 'Backend',
    bio: 'مطورة برمجيات متخصصة في تطوير الواجهات الخلفية وقواعد البيانات',
    expertise: ['Web Development', 'Databases', 'API'],
    category: ['technical'],
    image: tasneemImg
  },
  {
    id: 4,
    name: 'Omar',
    role: 'Product Owner, Ph',
    bio: 'طالب في كلية الصيدلة، AI & Backend Developer, دمج الذكاء الصنعي و التكنولوجيا بتطبيقات الرعاية الصحية هو شغفي',
    expertise: ['Pharmacy', 'Product Management', 'Healthcare Strategy'],
    category: ['medical', 'business'],
    image: OmarImg
  },
  {
    id: 5,
    name: 'Muhammad',
    role: 'Flutter',
    bio: 'مطور تطبيقات متخصص في إطار عمل فلاتر لتطوير تطبيقات الجوال',
    expertise: ['Flutter', 'Mobile Development', 'UI'],
    category: ['technical'],
    image: muhammadFImg
  },
  {
    id: 6,
    name: 'Obada',
    role: 'Frontend',
    bio: 'مطور واجهات أمامية متخصص في إنشاء تجارب مستخدم تفاعلية وجذابة',
    expertise: ['JavaScript', 'React', 'Web Development'],
    category: ['technical'],
    image: obadaImg
  },
  {
    id: 7,
    name: 'Tawfiq',
    role: 'AI',
    bio: 'متخصص في الذكاء الاصطناعي وتعلم الآلة مع التركيز على تطبيقات الرعاية الصحية',
    expertise: ['Artificial Intelligence', 'Machine Learning', 'Data Processing'],
    category: ['technical'],
    image: tawfiqImg
  },
  {
    id: 8,
    name: 'Bilal',
    role: 'Pharmacist',
    bio: 'صيدلاني متخصص في الأدوية والتفاعلات الدوائية مع خبرة في أنظمة إدارة الأدوية',
    expertise: ['Pharmacy', 'Medication Management', 'Drug Safety'],
    category: ['medical'],
    image: bilalImg
  },
  {
    id: 9,
    name: 'Joudy',
    role: 'UIUX',
    bio: 'مصممة تجربة مستخدم متخصصة في إنشاء تجارب سلسة وسهلة الاستخدام للأنظمة الطبية',
    expertise: ['UX Design', 'UI Design', 'User Research'],
    category: ['design'],
    image: joudyImg
  },
  {
    id: 10,
    name: 'Ola',
    role: 'Frontend',
    bio: 'مطورة واجهات أمامية متخصصة في تطوير تجارب مستخدم تفاعلية وجذابة',
    expertise: ['JavaScript', 'React', 'CSS'],
    category: ['technical'],
    image: olaImg
  }
];

const TeamSection = memo(() => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredMembers, setFilteredMembers] = useState(teamMembers);
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredMembers(teamMembers);
    } else {
      setFilteredMembers(
        teamMembers.filter(member => member.category.includes(activeCategory))
      );
    }
  }, [activeCategory]);

  const handleMemberClick = (id: number) => {
    setSelectedMember(id);
    setIsModalOpen(true);
  };

  return (
    <section id="team" className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      <div className="container relative max-w-7xl mx-auto px-4">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-600/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            تعرف على فريقنا
          </h2>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
            فريق من المتخصصين المتفانين الملتزمين بإحداث ثورة في سلامة الرعاية الصحية
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Team Members Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer"
                onClick={() => handleMemberClick(member.id)}
              >
                <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="aspect-[3/4] overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-white mb-1" dir="ltr">
                        {member.name}
                      </h3>
                      <p className="text-sm text-green-400 font-medium mb-2" dir="ltr">
                        {member.role}
                      </p>
                      <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {member.expertise.slice(0, 2).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-xs font-medium text-white bg-white/20 rounded-full"
                            dir="ltr"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Member Detail Modal */}
        <AnimatePresence>
          {isModalOpen && selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                
                
                {(() => {
                  const member = teamMembers.find(m => m.id === selectedMember);
                  if (!member) return null;
                  
                  return (
                    <div className="flex flex-col md:flex-row">
                      {/* Image Section */}
                      <div className="md:w-2/5">
                        <div 
                          className="w-full h-64 md:h-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${member.image})` }}
                        />
                      </div>
                      
                      {/* Content Section */}
                      <div className="md:w-3/5 p-6 md:p-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" dir="ltr">
                          {member.name}
                        </h3>
                        <p className="text-lg font-medium text-green-600 mb-4" dir="ltr">{member.role}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-2">نبذة</h4>
                          <p className="text-gray-700">{member.bio}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-2">التخصصات</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-full"
                                dir="ltr"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

export default TeamSection; 