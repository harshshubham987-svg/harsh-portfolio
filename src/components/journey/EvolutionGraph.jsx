import GraphNode from "./GraphNode";

const EvolutionGraph = ({
  journeyData,
  activeStage,
  setActiveStage,
}) => {

  return (

    <div
      className="
        relative
        w-full
        min-h-[620px]
      "
    >

      {/* BACKGROUND RINGS */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2

          w-[700px]
          h-[700px]

          rounded-full
          border
          border-cyan-300/5
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2

          w-[500px]
          h-[500px]

          rounded-full
          border
          border-cyan-300/5
        "
      />

      {/* MAIN GRAPH */}

      <div
        className="
          relative
          z-10

          flex
          justify-center
          gap-6
          items-start

          pt-10
        "
      >

        {journeyData.map((stage, index) => (

          <div
            key={stage.id}

            className="
              relative
              flex
              flex-col
              items-center
              w-full
            "
          >

            {/* CONNECTION */}

            {index !== journeyData.length - 1 && (

            <div
                className="
                absolute
                top-12
                left-[55%]

                w-full
                h-[2px]

                overflow-hidden

                z-0
                "
            >

                {/* BASE LINE */}

                <div
                className="
                    absolute
                    inset-0

                    bg-gradient-to-r
                    from-cyan-300/20
                    to-cyan-300/5
                "
                />

                {/* FLOW LIGHT */}

                <div
                className="
                    absolute
                    top-0
                    left-[-20%]

                    w-[20%]
                    h-full

                    bg-gradient-to-r
                    from-transparent
                    via-cyan-300
                    to-transparent

                    blur-[2px]

                    animate-[flow_3s_linear_infinite]
                "
                />

            </div>

            )}



            {/* NODE */}

            <GraphNode
              stage={stage}
              activeStage={activeStage}
              setActiveStage={setActiveStage}
            />

            {/* MINI CARD */}

            <div
              className={`
                mt-10

                w-full max-w-[210px]
                min-h-[210px]

                rounded-[28px]
                border

                backdrop-blur-2xl

                p-6

                transition-all
                duration-500

                ${activeStage === stage.id

                  ? "border-cyan-300/30 bg-cyan-400/[0.06] shadow-[0_0_40px_rgba(0,255,255,0.12)]"

                  : "border-white/5 bg-white/[0.02]"
                }
              `}
            >

              {/* TITLE */}

              <p
                className={`
                  text-sm
                  tracking-[3px]
                  mb-4
                  font-semibold

                  ${activeStage === stage.id

                    ? "text-cyan-300"

                    : "text-cyan-100/50"
                  }
                `}
              >

                {stage.title}

              </p>

              {/* DESCRIPTION */}

              <p
                className="
                  text-sm
                  text-gray-400
                  leading-relaxed
                "
              >

                {stage.description}

              </p>

              {/* SKILLS */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-3
                  mt-6
                "
              >

                {stage.skills.slice(0, 4).map((skill, i) => (

                  <div
                    key={i}

                    className="
                      rounded-2xl
                      border
                      border-cyan-300/10

                      bg-white/[0.03]

                      p-3

                      flex
                      flex-col
                      items-center
                      justify-center
                      gap-2
                    "
                  >

                    <div
                      className="
                        text-2xl
                        text-cyan-300
                      "
                    >

                      {skill.icon}

                    </div>

                    <p
                      className="
                        text-[10px]
                        tracking-[1px]
                        text-cyan-100
                        text-center
                      "
                    >

                      {skill.name}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
};

export default EvolutionGraph;
