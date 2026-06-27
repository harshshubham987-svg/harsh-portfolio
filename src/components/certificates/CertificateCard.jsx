// src/components/certificates/CertificateCard.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const CertificateCard = ({ certificate, index, active, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group cursor-pointer transition-all duration-300 ease-out"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      onClick={onClick}
      whileHover={{
        y: -8,
        scale: 1.02
      }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className={`
        relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-md
        border border-white/10 transition-all duration-300
        ${active
          ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20 scale-105'
          : 'border-white/5 hover:border-cyan-400/30 hover:bg-white/10'
        }
      `}>

        {/* Certificate Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
          <img
            src={certificate.image}
            alt={certificate.title}
            className={`
              w-full h-full object-cover transition-all duration-500
              ${active ? 'scale-110' : 'group-hover:scale-105'}
            `}
          />

          {/* Hover Overlay */}
          <div className={`
            absolute inset-0 bg-black/60 transition-opacity duration-300
            ${active || isHovered ? 'opacity-0' : 'opacity-100'}
          `} />

          {/* Active Indicator */}
          <div className={`
            absolute top-3 right-3 w-3 h-3 rounded-full transition-all
            ${active ? 'bg-cyan-400 shadow-[0_0_10px_cyan(255,255,255,0.8)]' : 'bg-gray-600'}
          `} />
        </div>

        {/* Certificate Info */}
        <div className="p-4 space-y-2">
          {/* Title */}
          <h3 className={`
            text-lg font-semibold text-white transition-colors duration-300 line-clamp-1
            ${active ? 'text-cyan-300' : 'group-hover:text-cyan-300'}
          `}>
            {certificate.title}
          </h3>

          {/* Issuer */}
          <p className="text-sm text-gray-400 line-clamp-1">
            {certificate.issuer}
          </p>

          {/* Active Badge */}
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-2 border-t border-cyan-400/20"
            >
              <span className="inline-flex items-center gap-2 text-xs text-cyan-400 font-mono">
                <motion.div
                  className="w-2 h-2 rounded-full bg-cyan-400"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                ACTIVE SELECTION
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
