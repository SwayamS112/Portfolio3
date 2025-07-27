import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full text-white overflow-hidden flex items-center justify-center"
    >
      {/* 🔹 Background Coding Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
      >
        <source src="/assets/coding.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Soft Transparent Overlay */}
      <div className="absolute inset-0 bg-[#0b0b0b]/70 backdrop-blur-sm z-10" />

      {/* 🔹 Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 max-w-7xl px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
      >
        {/* LEFT TEXT */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <p className="text-[#64ffda] text-base font-mono">01.</p>
            <div className="h-0.5 w-12 bg-[#64ffda]/40 rounded" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8f43ff] via-pink-400 to-[#ff5e62]">
              Swayam Sood
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl">
            I'm a passionate Full Stack Developer specializing in building exceptional digital experiences and beautiful user interfaces.
          </p>
          {/* About Me Content */}
          <div className="mt-2 space-y-2 text-gray-300 text-base max-w-xl">
            <p>
              I'm a final-year Computer Science student and Full Stack Developer with experience in building responsive, user-centric applications. I'm passionate about solving real-world problems using clean, scalable code.
            </p>
            <p>
              Currently, I'm building an AI-powered expense categorization system and exploring innovative ways to simplify financial management.
            </p>
          </div>
          {/* Code Snippet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-[#0f172a]/90 p-4 rounded-lg text-sm font-mono border border-gray-700 w-fit shadow-lg"
          >
            <code className="text-green-400">const</code>{" "}
            <span className="text-blue-400">developer</span> = {"{"}
            <br />
            &nbsp;&nbsp;<span className="text-yellow-300">role</span>: {" "}
            <span className="text-orange-400">"Full Stack Developer"</span>,
            <br />
            &nbsp;&nbsp;<span className="text-yellow-300">passion</span>: {" "}
            <span className="text-pink-400">"Building Great UIs"</span>
            <br />
            {"}"}
          </motion.div>

          {/* Info Cards */}
          <div className="flex gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-lg text-center w-[140px] shadow-md">
              <h2 className="text-2xl font-bold text-white">15+</h2>
              <p className="text-sm text-gray-300">Technologies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-lg text-center w-[140px] shadow-md">
              <h2 className="text-2xl font-bold text-white">3+</h2>
              <p className="text-sm text-gray-300">Projects</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex justify-center relative"
        >
          <div className="bg-gray-800/80 rounded-xl shadow-2xl border border-gray-700 w-[320px]">
            <div className="bg-gray-700 px-4 py-2 rounded-t-xl flex items-center justify-between">
              <span className="text-sm text-white font-mono">
                swayam-profile.tsx
              </span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <img
              src="/assets/profile.png"
              alt="Swayam Sood"
              className="rounded-b-xl w-full h-[340px] object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
