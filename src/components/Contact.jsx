import React, { useState } from "react";

const MailIcon = () => (
  <svg className="inline-block w-6 h-6 mr-2 text-[#64ffda]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const GitHubIcon = () => (
  <svg className="inline-block w-6 h-6 mr-2 text-[#64ffda]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
);
const LinkedInIcon = () => (
  <svg className="inline-block w-6 h-6 mr-2 text-[#64ffda]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    const whatsappUrl = `https://wa.me/919418473400?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  const isFormValid = name && email && message;

  return (
    <section id="contact" className="py-24 px-4 text-white rounded-2xl my-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-14 items-center md:items-start">
        {/* LEFT: Contact Info */}
        <div className="flex-1 text-center md:text-left space-y-8 md:self-start">
          <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
            <p className="text-[#64ffda] text-lg font-mono">04.</p>
            <div className="h-0.5 w-12 bg-[#64ffda]/40 rounded" />
          </div>
          <h2 className="text-5xl font-bold mb-2">Get In Touch</h2>
          <p className="text-gray-200 mb-4 max-w-lg text-xl">
            I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="space-y-3 text-xl text-gray-100">
            <p><MailIcon />Email: <a href="mailto:soodswayam41@gmail.com" className="text-[#64ffda] hover:underline">soodswayam41@gmail.com</a></p>
            <p><LinkedInIcon />LinkedIn: <a href="https://www.linkedin.com/in/swayam-sood-b76855252/" className="text-[#64ffda] hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/swayamsood</a></p>
            <p><GitHubIcon />GitHub: <a href="https://github.com/SwayamS112" className="text-[#64ffda] hover:underline" target="_blank" rel="noopener noreferrer">github.com/SwayamS112</a></p>
          </div>
        </div>
        {/* RIGHT: Contact Form */}
        <form onSubmit={handleSubmit} className="flex-1 p-0 md:p-0 flex flex-col gap-8 w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="bg-white/10 border border-white/20 rounded-lg px-5 py-4 text-white text-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="bg-white/10 border border-white/20 rounded-lg px-5 py-4 text-white text-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
          />
          <textarea
            placeholder="Message"
            rows={4}
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="bg-white/10 border border-white/20 rounded-lg px-5 py-4 text-white text-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
          />
          <button
            type="submit"
            className="bg-[#64ffda]/20 border border-[#64ffda] text-[#64ffda] px-8 py-4 rounded-full font-semibold text-xl shadow hover:bg-[#64ffda]/40 transition disabled:opacity-50"
            disabled={!isFormValid}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
