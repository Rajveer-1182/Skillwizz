import Link from "next/link";

export default function WhyChooseSection() {
  return (
    <section className="relative py-16 text-white overflow-visible">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Top Blue Background */}
        <div className="absolute top-0 left-0 w-full h-[45%]">
          <img
            src="/images/homepage/why_choose_banner_2.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>

        {/* Bottom Blue Background */}
        <div className="absolute bottom-0 left-0 w-full h-[45%]">
          <img
            src="/images/homepage/why_choose_banner_2.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />

          {/* Globe */}
          <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none">
            <img
              src="/images/homepage/home_globe.gif"
              alt=""
              className="w-full max-w-2xl"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Why Choose{" "}
          <span className="text-white">
            Skill<span className="text-[#f73e5d]">Kwiz</span>
          </span>{" "}
          ?
        </h2>

        <p className="text-center max-w-3xl mx-auto mb-12 text-sm leading-6">
          Discover our unique value propositions designed to enhance your
          recruitment strategy.
          <br />
          Experience the difference SkillKwiz can make in your organization.
        </p>


        {/* ================= CARDS ================= */}
        <div
          className="
            relative
            flex
            flex-col
            md:flex-row
            justify-center
            items-center
            gap-8
            md:gap-0
            min-h-[500px]
            md:min-h-[430px]
          "
        >

          {/* ================= LEFT CARD ================= */}
          <div
            className="
              group
              relative
              w-full
              max-w-xs
              md:w-64
              md:h-[350px]
              bg-white
              rounded-xl
              p-6
              text-black
              shadow-xl

              md:absolute
              md:left-[calc(50%-280px)]
              md:top-8

              md:-rotate-12

              transition-all
              duration-700
              ease-out

              hover:-translate-y-8
              hover:rotate-0
              hover:scale-105
              hover:z-40
              hover:shadow-2xl

              cursor-pointer
            "
          >

            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                rounded-xl
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-700
                pointer-events-none
                ring-2
                ring-[#00418d]/20
              "
            />

            {/* Icon */}
            <div className="flex justify-center mb-5">
              <div
                className="
                  w-16
                  h-16
                  bg-[#c3dfff]
                  rounded-full
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                <img
                  src="/images/homepage/books.gif"
                  alt=""
                  className="w-20 h-20 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-[#00418d] text-xl font-bold text-center mb-3">
              Skill Library
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-center text-sm leading-6">
              Access our extensive library of skill assessments covering
              technical, professional, and soft skills for comprehensive
              candidate evaluation.
            </p>
          </div>


          {/* ================= CENTER CARD ================= */}
          <div
            className="
              group
              relative
              w-full
              max-w-xs
              md:w-64
              md:h-[350px]
              bg-white
              rounded-xl
              p-6
              text-black
              shadow-2xl

              md:absolute
              md:left-1/2
              md:-translate-x-1/2
              md:top-0

              z-30

              transition-all
              duration-700
              ease-out

              hover:-translate-y-8
              hover:scale-105
              hover:z-50
              hover:shadow-2xl

              cursor-pointer
            "
          >

            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                rounded-xl
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-700
                pointer-events-none
                ring-2
                ring-[#00418d]/20
              "
            />

            {/* Icon */}
            <div className="flex justify-center mb-5">
              <div
                className="
                  w-16
                  h-16
                  bg-[#c3dfff]
                  rounded-full
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  group-hover:-rotate-6
                "
              >
                <img
                  src="/images/homepage/guard.gif"
                  alt=""
                  className="w-20 h-20 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-[#00418d] text-xl font-bold text-center mb-3">
              Secure Testing
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-center text-sm leading-6">
              Our testing is done in secure content-aware environments.
              Candidates are authenticated through multiple identification
              layers including biometric verification such as facial
              recognition, security numbers, which are then periodically
              validated throughout the test.
            </p>
          </div>


          {/* ================= RIGHT CARD ================= */}
          <div
            className="
              group
              relative
              w-full
              max-w-xs
              md:w-64
              md:h-[350px]
              bg-white
              rounded-xl
              p-6
              text-black
              shadow-xl

              md:absolute
              md:right-[calc(50%-280px)]
              md:top-8

              md:rotate-12

              transition-all
              duration-700
              ease-out

              hover:-translate-y-8
              hover:rotate-0
              hover:scale-105
              hover:z-40
              hover:shadow-2xl

              cursor-pointer
            "
          >

            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                rounded-xl
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-700
                pointer-events-none
                ring-2
                ring-[#00418d]/20
              "
            />

            {/* Icon */}
            <div className="flex justify-center mb-5">
              <div
                className="
                  w-16
                  h-16
                  bg-[#c3dfff]
                  rounded-full
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                <img
                  src="/images/homepage/dollar.gif"
                  alt=""
                  className="w-20 h-20 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-[#00418d] text-xl font-bold text-center mb-3">
              Flexible Pricing
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-center text-sm leading-6">
              Our pricing model is designed to scale with your needs. Pay only
              for what you use with our credit-based system. Larger
              organizations can benefit from our Enterprise plan with unlimited
              testing and custom features.
            </p>
          </div>
        </div>


        {/* ================= CTA ================= */}
        <div className="text-center mt-16 md:mt-8 relative z-50">

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join the Talent Revolution
          </h3>

          <p className="max-w-2xl mx-auto mb-8 text-sm leading-6">
            Take the first step towards transforming your hiring process.
            Make selections in line with our tried and tested platform.
          </p>

          <Link
            href="/services"
            className="
              inline-flex
              items-center
              justify-center
              bg-[#f7d03e]
              text-black
              px-8
              py-3
              rounded-md
              font-medium

              transition-all
              duration-300
              hover:scale-105
              hover:shadow-lg
              hover:bg-[#f5ca22]

              active:scale-95
            "
          >
            Get Started
          </Link>
        </div>

      </div>
    </section>
  );
}