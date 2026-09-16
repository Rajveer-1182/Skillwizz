"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { useRef, useState } from "react";

export default function LoginSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // ==========================================
  // PLAY VIDEO
  // ==========================================
  const handlePlayVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      await video.play();
    } catch (error) {
      console.error("Video playback failed:", error);
    }
  };

  // ==========================================
  // VIDEO PLAY
  // ==========================================
  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  // ==========================================
  // VIDEO PAUSE
  // ==========================================
  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  // ==========================================
  // VIDEO ENDED
  // ==========================================
  const handleVideoEnded = () => {
    setIsPlaying(false);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="min-h-screen bg-[#000c2a] py-8 md:py-12 flex items-center">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">

        {/* ==========================================
            MAIN LOGIN CARD
        ========================================== */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            overflow-hidden
            rounded-2xl
            bg-white
            shadow-2xl
          "
        >
       
          {/* ==========================================
              LEFT SIDE
          ========================================== */}
          <div
            className="
              w-full
              md:w-1/2
              bg-white
              p-5
              sm:p-6
              md:p-8
            "
          >
   
            {/* ======================================
                LIGHT IMAGE
                OLD SKILL ASSESSMENT IMAGE REMOVED
            ====================================== */}
            <div
              className="
                relative
                w-full
                h-56
                sm:h-64
                md:h-72
                overflow-hidden
                rounded-xl
                bg-[#f5f9ff]
              "
            >
         
              <Image
                src="/images/homepage/banner_image.jpg"
                alt="Skill Kwiz learning platform"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
           

            {/* ======================================
                VIDEO
            ====================================== */}
            <div
              className="
                relative
                mt-5
                w-full
                aspect-video
                overflow-hidden
                rounded-xl
                bg-black
                shadow-lg
              "
            >

              <video
                ref={videoRef}
                src="/images/homepage/banner_video.mp4"
                poster="/homepage/video-thumbnail.jpg"
                className="absolute inset-0 w-full h-full object-cover"
                preload="metadata"
                playsInline
                controls={isPlaying}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                onEnded={handleVideoEnded}
              />

              {/* ====================================
                  PLAY BUTTON
              ==================================== */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={handlePlayVideo}
                  aria-label="Play video"
                  className="
                    absolute
                    inset-0
                    z-10
                    flex
                    items-center
                    justify-center
                    bg-black/10
                    hover:bg-black/20
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-16
                      h-16
                      md:w-20
                      md:h-20
                      rounded-full
                      bg-white
                      shadow-2xl
                      transition-transform
                      duration-300
                      hover:scale-110
                    "
                  >
                    <Play
                      size={34}
                      className="ml-1 text-[#00418d]"
                      fill="currentColor"
                    />
                  </span>
                </button>
              )}

            </div>
          </div>


          {/* ==========================================
              RIGHT SIDE - LOGIN
          ========================================== */}
          <div
            className="
              w-full
              md:w-1/2
              bg-[#00418d]
              p-6
              sm:p-8
              md:p-10
              flex
              items-center
            "
          >
            <div className="w-full">

              {/* ======================================
                  TITLE
              ====================================== */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Sign in to Skill Kwiz
              </h2>


              {/* ======================================
                  FORM
              ====================================== */}
              <form className="space-y-4">

                {/* EMAIL */}
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="
                    w-full
                    h-12
                    px-4
                    rounded-md
                    bg-white
                    text-gray-800
                    placeholder:text-gray-400
                    border
                    border-transparent
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#00a8e8]
                  "
                />


                {/* PASSWORD */}
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="
                    w-full
                    h-12
                    px-4
                    rounded-md
                    bg-white
                    text-gray-800
                    placeholder:text-gray-400
                    border
                    border-transparent
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#00a8e8]
                  "
                />


                {/* ====================================
                    REMEMBER + FORGOT PASSWORD
                ==================================== */}
                <div className="flex items-center justify-between">

                  <label
                    className="
                      flex
                      items-center
                      text-sm
                      text-white
                      cursor-pointer
                    "
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 mr-2 cursor-pointer"
                    />

                    Remember me
                  </label>

                  <Link
                    href="/forgot-password"
                    className="
                      text-sm
                      text-white
                      hover:underline
                      whitespace-nowrap
                    "
                  >
                    Forgot Password?
                  </Link>

                </div>


                {/* ====================================
                    SIGN IN
                ==================================== */}
                <button
                  type="submit"
                  className="
                    w-full
                    h-12
                    rounded-md
                    bg-[#f73e5d]
                    text-white
                    font-semibold
                    hover:bg-[#e92f4f]
                    transition-all
                    duration-300
                    hover:shadow-lg
                    cursor-pointer
                  "
                >
                  Sign In
                </button>


                {/* ====================================
                    SIGN UP
                ==================================== */}
                <div className="text-center text-white text-sm pt-1">

                  <span>
                    Don't have an account?{" "}
                  </span>

                  <Link
                    href="/signup"
                    className="
                      font-semibold
                      text-[#f6c648]
                      hover:text-white
                      hover:underline
                      transition-colors
                      duration-200
                    "
                  >
                    Sign Up
                  </Link>

                </div>


                {/* ====================================
                    OR LOGIN
                ==================================== */}
                <div className="pt-3">

                  <div className="flex items-center gap-3">

                    <div className="flex-1 h-px bg-white/30" />

                    <span className="text-sm text-white whitespace-nowrap">
                      Or Login with
                    </span>

                    <div className="flex-1 h-px bg-white/30" />

                  </div>


                  {/* ==================================
                      SOCIAL LOGIN
                  ================================== */}
                  <div className="flex justify-center gap-4 mt-4">

                    {/* GOOGLE */}
                    <button
                      type="button"
                      aria-label="Login with Google"
                      className="
                        w-11
                        h-11
                        bg-white
                        rounded-full
                        flex
                        items-center
                        justify-center
                        shadow-md
                        transition-transform
                        duration-300
                        hover:scale-110
                        cursor-pointer
                      "
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.35 12.27c0-.78-.07-1.53-.2-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42Z"
                          fill="#4285F4"
                        />

                        <path
                          d="M12 21.5c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.75 9.75 0 0 0 12 21.5Z"
                          fill="#34A853"
                        />

                        <path
                          d="M6.54 13.58A5.86 5.86 0 0 1 6.23 12c0-.55.1-1.09.31-1.58V7.89H3.3A9.5 9.5 0 0 0 2.5 12c0 1.53.37 2.98.8 4.11l3.24-2.53Z"
                          fill="#FBBC05"
                        />

                        <path
                          d="M12 6.39c1.43 0 2.72.49 3.73 1.45l2.79-2.79C16.84 3.46 14.63 2.5 12 2.5a9.75 9.75 0 0 0-8.7 5.39l3.24 2.53C7.31 8.11 9.46 6.39 12 6.39Z"
                          fill="#EA4335"
                        />
                      </svg>
                    </button>


                    {/* APPLE */}
                    <button
                      type="button"
                      aria-label="Login with Apple"
                      className="
                        w-11
                        h-11
                        bg-white
                        rounded-full
                        flex
                        items-center
                        justify-center
                        shadow-md
                        transition-transform
                        duration-300
                        hover:scale-110
                        cursor-pointer
                      "
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.05 12.53c-.02-2.09 1.7-3.1 1.78-3.15a3.84 3.84 0 0 0-3.02-1.63c-1.27-.13-2.48.75-3.13.75-.65 0-1.66-.73-2.73-.71a4.02 4.02 0 0 0-3.38 2.06c-1.45 2.51-.37 6.21 1.02 8.24.68.99 1.48 2.1 2.55 2.06 1.02-.04 1.4-.66 2.63-.66 1.23 0 1.57.66 2.64.64 1.1-.02 1.8-1 2.47-2 .78-1.13 1.1-2.22 1.12-2.28-.02-.01-1.93-.74-1.95-3.32ZM15 6.48a3.55 3.55 0 0 0 .81-2.55 3.64 3.64 0 0 0-2.34 1.21 3.39 3.39 0 0 0-.83 2.45A3.01 3.01 0 0 0 15 6.48Z"
                        />
                      </svg>
                    </button>

                  </div>

                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}