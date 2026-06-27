import { motion } from "framer-motion";

const GraphNode = ({
  stage,
  activeStage,
  setActiveStage,
}) => {

  const isActive = activeStage === stage.id;

  return (

    <motion.div

      whileHover={{
        scale: 1.08,
      }}

      onClick={() => setActiveStage(stage.id)}

      className="
        relative
        flex
        flex-col
        items-center
        cursor-pointer
      "
    >

      {/* NODE */}

      <div
        className={`
          relative
          w-24
          h-24
          rounded-full
          border

          flex
          items-center
          justify-center

          transition-all
          duration-500

          ${isActive

            ? "border-cyan-300 shadow-[0_0_40px_rgba(0,255,255,0.5)]"

            : "border-cyan-300/10"
          }
        `}
      >

        {/* INNER GLOW */}

        <div
          className={`
            absolute
            inset-3
            rounded-full
            transition-all
            duration-500

            ${isActive

              ? "bg-cyan-400/20"

              : "bg-white/[0.03]"
            }
          `}
        />

        {/* ICON */}

        <div
          className={`
            relative
            z-10
            text-5xl

            ${isActive

              ? "text-cyan-300"

              : "text-cyan-100/40"
            }
          `}
        >

          {stage.icon}

        </div>

      </div>

      {/* TITLE */}

      <p
        className={`
          mt-5
          tracking-[3px]
          text-sm
          whitespace-nowrap
          font-semibold

          ${isActive

            ? "text-cyan-300"

            : "text-cyan-100/50"
          }
        `}
      >

        {stage.title}

      </p>

    </motion.div>

  );
};

export default GraphNode;

