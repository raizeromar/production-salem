import { motion } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeVideoId = 'YO1XWwB0HAA';

  return (
    <section id='video' className="relative py-24 bg-gradient-to-b from-salem-indigo/5 to-transparent overflow-hidden" dir="rtl">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-2xl"
          >
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0">
                  <img 
                    className="w-full h-full object-cover"
                    src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                    alt="Video thumbnail"
                  />
                  <div className="absolute inset-0 bg-gray-900/40" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-salem-teal text-white shadow-lg"
                >
                  <PlayIcon className="w-10 h-10" />
                </motion.button>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              شاهد سالم قيد العمل
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              شاهد كيف تحدث تقنية NFC المدعومة بالذكاء الاصطناعي من سالم ثورة في سلامة المرضى والوقاية من الأخطاء الطبية.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;