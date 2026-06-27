import { motion } from "framer-motion";

const JourneyPanel = ({ stage }) => {

  return (

    <motion.div

      key={stage.id}

      initial={{
        opacity: 0,
        x: 40,
      }}

      animate={{
        opacity: 1,
        x: 0,
      }}

      transition={{
        duration: 0.5,
      }}

      className="
        relative
        rounded-[40px]
        border
        border-cyan-300/10
        bg-[#050505]/80
        backdrop-blur-2xl
        p-8
        overflow-hidden
      "
    >

      {/* AMBIENT GLOW */}

      <div
        className="
          absolute
          top-0
          right-0
          w-40
          h-40
          rounded-full
          bg-cyan-400/10
          blur-[100px]
        "
      />

      <div className="relative z-10">

        {/* TOP */}

        <p
          className="
            text-cyan-400
            tracking-[4px]
            text-sm
            mb-5
          "
        >

          CURRENT STAGE

        </p>

        <h2
          className="
            mt-5
            text-4xl
            font-bold
            leading-tight
          "
        >

          0{stage.id + 1}.

          <span className="text-cyan-300">

            {" "}{stage.title}

          </span>

        </h2>

        {/* LINE */}

        <div
          className="
            w-full
            h-[1px]
            bg-cyan-300/10
            my-8
          "
        />

        {/* DESCRIPTION */}

        <p
          className="
            text-gray-400
            text-lg
            leading-relaxed
          "
        >

          {stage.description}

        </p>

        {/* SKILLS */}

        <div className="mt-8">

          <p
            className="
              text-cyan-400
              tracking-[3px]
              text-sm
              mb-6
            "
          >

            KEY SKILLS

          </p>

          <div
            className="
              grid
              grid-cols-2
              gap-5
            "
          >

            {stage.skills.map((skill, index) => (

              <motion.div

                key={index}

                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}

                className="
                  relative
                  rounded-[24px]
                  border
                  border-cyan-300/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-5

                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-4

                  overflow-hidden
                "
              >

                {/* GLOW */}

                <div
                  className="
                    absolute
                    top-0
                    right-0
                    w-20
                    h-20
                    rounded-full
                    bg-cyan-400/10
                    blur-3xl
                  "
                />

                {/* ICON */}

                <div
                  className="
                    relative
                    z-10
                    text-4xl
                    text-cyan-300
                  "
                >

                  {skill.icon}

                </div>

                {/* NAME */}

                <p
                  className="
                    relative
                    z-10
                    text-sm
                    tracking-[2px]
                    text-cyan-100
                  "
                >

                  {skill.name}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

        {/* QUOTE */}

        <div
          className="
            mt-12
            rounded-[28px]
            border
            border-cyan-300/10
            bg-white/[0.03]
            p-6
          "
        >

          <p
            className="
              text-cyan-200
              italic
              leading-relaxed
            "
          >

            “{stage.quote}”

          </p>

        </div>

      </div>

    </motion.div>

  );
};

export default JourneyPanel;

