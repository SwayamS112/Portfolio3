import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    const text = `Hello Swayam,%0A%0AName: ${form.name}%0AEmail: ${form.email}%0A%0AMessage:%0A${form.message}`;
    window.open(
      `https://wa.me/919418473400?text=${text}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-400">
          Contact Me
        </h2>
        <p className="mt-4 text-slate-400">
          Got a question? Send me a message and I’ll get back to you soon.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
        variants={{
          hidden: {},
          visible: {},
        }}
        className="max-w-xl mx-auto"
      >
        {/* MAIN CARD */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8
          backdrop-blur-xl bg-white/5 border border-white/10
          shadow-[0_0_60px_rgba(99,102,241,0.15)]"
        >
          {/* FORM */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">
              Get in Touch
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Have something to discuss? Send me a message and let’s talk.
            </p>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5
                border border-white/10 text-slate-200
                focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5
                border border-white/10 text-slate-200
                focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5
                border border-white/10 text-slate-200
                focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
              />
            </div>

            <button
              onClick={handleSend}
              className="mt-6 w-full flex items-center justify-center gap-2
              px-6 py-3 rounded-xl bg-gradient-to-r
              from-indigo-500 to-purple-500 text-black font-medium
              hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]
              hover:scale-[1.02] transition"
            >
              <FaPaperPlane /> Send Message
            </button>
          </motion.div>

          {/* CONNECT SECTION */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="mt-10 pt-6 border-t border-white/10 text-left"
          >
            <h4 className="text-sm font-semibold text-indigo-400 mb-4">
              Connect With Me
            </h4>

            <div className="space-y-3">
              <SocialButton
                icon={<FaLinkedin />}
                label="LinkedIn"
                link="https://www.linkedin.com/in/swayam-sood-b76855252/"
              />
              <SocialButton
                icon={<FaInstagram />}
                label="Instagram"
                link="https://www.instagram.com/swayam_sood__/"
              />
              <SocialButton
                icon={<FaEnvelope />}
                label="Email"
                link="mailto:soodswayam41@gmail.com"
              />
              <SocialButton
                icon={<FaGithub />}
                label="GitHub"
                link="https://github.com/SwayamS112"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* SOCIAL BUTTON */
function SocialButton({ icon, label, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center gap-3 px-4 py-3 rounded-xl
      bg-white/5 border border-white/10 text-slate-300
      hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]
      hover:scale-[1.02] transition"
    >
      <span className="text-lg text-indigo-400">{icon}</span>
      {label}
    </a>
  );
}
