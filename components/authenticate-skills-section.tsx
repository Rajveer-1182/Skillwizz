import Image from "next/image";

export default function AuthenticateSkillsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="">
        <div className="flex flex-col md:flex-row items-center justify-between gap-20">

          {/* LEFT IMAGE GROUP */}
          <div className="w-full md:w-[30%] flex justify-center">
            <div className="relative w-[280px] h-[400px] group">

              {/* Image 2 - Behind */}
              <div
                className="
                  absolute
                  inset-0
                  transition-all
                  duration-700
                  ease-out
                  z-10
                  group-hover:translate-x-[180px]
                "
              >
                <Image
                  src="/images/homepage/skills_2.png"
                  alt="Professional in tech environment"
                  fill
                />
              </div>

              {/* Image 1 - Front */}
              <div
                className="
                  absolute
                  inset-0
                  transition-all
                  duration-700
                  ease-out
                  z-20
                  group-hover:-translate-x-[40px]
                "
              >
                <Image
                  src="/images/homepage/skills_1.png"
                  alt="Professional working at night"
                  fill
                />
              </div>

            </div>
          </div>


          {/* CENTER CONTENT */}
          <div className="w-full md:w-[34%] text-center z-30">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00418d] mb-5">
              Authenticate Skills,
              <br />
              Simplify Hiring
            </h2>

            <p className="text-gray-700 leading-7">
              SkillKwiz ensures professionals are evaluated accurately in
              their chosen fields. Our secure testing centers provide
              authenticated skill assessments, giving you instant access to
              verified reports—eliminating the need for lengthy technical
              interviews.
            </p>
          </div>


          {/* RIGHT IMAGE GROUP */}
          <div className="w-full md:w-[30%] flex justify-center">
            <div className="relative w-[280px] h-[400px] group">

              {/* Image 4 - Behind */}
              <div
                className="
                  absolute
                  inset-0
                  transition-all
                  duration-700
                  ease-out
                  z-20
                  group-hover:-translate-x-[180px]
                "
              >
                <Image
                  src="/images/homepage/skills_4.png"
                  alt="Business professional looking at digital interface"
                  fill
                />
              </div>

              {/* Image 3 - Front */}
              <div
                className="
                  absolute
                  inset-0
                  transition-all
                  duration-700
                  ease-out
                  z-20
                  group-hover:translate-x-[40px]"
              >
                <Image
                  src="/images/homepage/skills_3.png"
                  alt="Professional at workstation"
                  fill
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}