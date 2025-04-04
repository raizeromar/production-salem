import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import {
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
} from './Icons';

import './footer.css'

const footerLinks = [
  {
    title: 'المنتج',
    links: [
      { name: 'المميزات', href: '#features' },
      { name: 'الأمان', href: '#' },
      { name: 'خطط الفريق', href: '#' },
      { name: 'الشركات', href: '#' },
      { name: 'قصص العملاء', href: '#' },
    ],
  },
  {
    title: 'الشركة',
    links: [
      { name: 'من نحن', href: '#' },
      { name: 'الوظائف', href: '#' },
      { name: 'الصحافة', href: '#' },
      { name: 'الأخبار', href: '#' },
      { name: 'اتصل بنا', href: '#' },
    ],
  },
  {
    title: 'الموارد',
    links: [
      { name: 'الفعاليات', href: '#' },
      { name: 'مركز المساعدة', href: '#' },
    ],
  },
  {
    title: 'قانوني',
    links: [
      { name: 'الشروط', href: '#' },
      { name: 'الخصوصية', href: '#' },
      { name: 'التراخيص', href: '#' },
    ],
  },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Show the loader in the popup
    setPopupContent(`
      <div class="banter-loader">
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
      </div>
    `);
    setShowPopup(true);

    try {
      const url = `https://script.google.com/macros/s/AKfycbxkmRA0q9RMT-VVVNSwOEXjII-6B0Iy4uLW38ezr_tS_-eKO3VlREV_36a-elEqkW7HOg/exec?email=${encodeURIComponent(email)}`;
      const response = await fetch(url, {
        method: 'GET',
      });

      if (response.ok) {
        // Show success message
        setPopupContent(`
          <div class="success-message">
            <p>شكرًا على الاشتراك!<br>سنبقيك على اطلاع...</p>
          </div>
        `);
        setTimeout(() => {
          setShowPopup(false);
          setEmail('');
        }, 3000); // Close the popup after 3 seconds
      } else {
        // Show error message
        setPopupContent(`
          <div class="error-message">
            <p>حدث خطأ.<br>يرجى المحاولة مرة أخرى.</p>
          </div>
        `);
        setTimeout(() => {
          setShowPopup(false);
        }, 3000); // Close the popup after 3 seconds
      }
    } catch (error) {
      console.error('Error:', error);
      // Show error message
      setPopupContent(`
        <div class="error-message">
          <p>فشل إرسال النموذج.<br>يرجى المحاولة مرة أخرى.</p>
        </div>
      `);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Close the popup after 3 seconds
    }
  };

  return (
    <footer className="bg-gray-900 text-white" dir="rtl">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Right Side (was Left Side) */}
          <div className="space-y-8">
            <div>
              <motion.a
                href="#"
                className="flex items-center space-x-2 space-x-reverse"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-8 h-8 bg-salem-teal rounded-lg"
                  whileHover={{ rotate: 180 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <h5 className="text-xl font-bold">ســالـــم</h5>
              </motion.a>
              <p className="mt-4 text-gray-400 max-w-md">
                ثورة في سلامة الرعاية الصحية من خلال تقنية NFC المدعومة بالذكاء الاصطناعي.
                انضم إلينا في خلق مستقبل خالٍ من الأخطاء الطبية.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPinIcon className="w-5 h-5 text-salem-teal" />
                <span className="text-gray-400">سوريا - دمشق</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <PhoneIcon className="w-5 h-5 text-salem-teal" />
                <span dir='ltr' className="text-gray-400">+963 939676801</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <EnvelopeIcon className="w-5 h-5 text-salem-teal" />
                <span className="text-gray-400">salem@gatara.org</span>
              </div>
            </div>

            <div className="flex space-x-4 space-x-reverse">
              {[
                { Icon: FacebookIcon, href: "https://www.facebook.com/share/1A9HUspytw/" },
                { Icon: TwitterIcon, href: "#" }, // Add your Twitter link here
                { Icon: LinkedInIcon, href: "https://www.linkedin.com/company/salem-%D8%B3%D8%A7%D9%84%D9%85" },
                { Icon: InstagramIcon, href: "https://www.instagram.com/salem.health" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // Recommended for security with target="_blank"
                  className="p-2 rounded-full bg-gray-800 hover:bg-salem-teal/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-salem-teal" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Left Side (was Right Side) */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-gray-400 hover:text-salem-teal"
                        whileHover={{ x: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <form className="sm:flex sm:max-w-md" onSubmit={handleSubmit}>
            <label htmlFor="email-address" className="sr-only">
              عنوان البريد الإلكتروني
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-transparent rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-salem-teal focus:border-transparent"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-3 sm:mt-0 sm:mr-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary w-full"
              >
                اشترك
              </motion.button>
            </div>
          </form>
          <p className="mt-3 text-sm text-gray-400">
            احصل على آخر التحديثات والأخبار من سالم للرعاية الصحية.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} سالم للرعاية الصحية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="card">
            <div className="card-content">
              <div className="card-top"></div>
              <div className="card-bottom"></div>
            </div>
            <div className="card-image" dangerouslySetInnerHTML={{ __html: popupContent }}></div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
