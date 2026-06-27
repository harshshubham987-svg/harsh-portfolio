import { motion } from "framer-motion";

const ContactCard = ({
  title,
  value,
  icon,
  link,
}) => {

  return (

    <motion.a

      href={link}

      target="_blank"

      whileHover={{
        y: -4,
        scale: 1.015,
      }}



      transition={{
        duration: 0.3,
      }}

      className="relative
                 overflow-hidden
                 flex
                 items-center
                 gap-5
                 border border-cyan-300/10
                 bg-white/[0.03]
                 backdrop-blur-xl
                  rounded-[28px]
                  px-5
                  py-4
                 hover:border-cyan-300/30
                 transition-all
                 duration-500"
    >

      {/* GLOW */}

      <div className="absolute
                      top-0
                      right-0
                      w-24
                      h-24
                      bg-cyan-300/10
                      blur-3xl
                      rounded-full" />

      {/* ICON */}

      <div className="relative z-10
                      text-3xl
                      text-cyan-300">

        {icon}

      </div>

      {/* CONTENT */}

      <div className="relative z-10">

        <p className="text-xs
                      tracking-[3px]
                      text-cyan-300
                      mb-2">

          {title}

        </p>

        <h3 className="text-white
                       text-lg
                       font-medium">

          {value}

        </h3>

      </div>

    </motion.a>

  );
};

export default ContactCard;

