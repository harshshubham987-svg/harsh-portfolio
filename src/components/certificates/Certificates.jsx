// src/components/certificates/Certificates.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import CertificateCard from './CertificateCard';
import certificatesData from './certificatesData';

const Certificates = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section
      id="certificates"
      className="
        relative px-6 py-24
        bg-gradient-to-b from-black via-gray-900/50 to-black
        overflow-hidden
      "
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[80px]" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 tracking-[4px] text-sm font-mono mb-4">
            CERTIFICATION GALLERY
          </p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Professional <span className="text-cyan-400">Credentials</span>
          </h2>
          
          <div className="w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A curated collection of my technical certifications and professional achievements
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {certificatesData.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
              active={activeCard === index}
              onClick={() => setActiveCard(index)}
            />
          ))}
        </motion.div>

        {/* Selected Certificate Info */}
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          {activeCard !== null && (
            <>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-mono">
                  SELECTED CREDENTIAL
                </span>
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl font-bold text-white mt-6 mb-2"
              >
                {certificatesData[activeCard]?.title}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-cyan-400 text-lg"
              >
                Issued by: {certificatesData[activeCard]?.issuer}
              </motion.p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
