import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 flex flex-col justify-center items-center text-center px-4"
      id="hero"
    >
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-blue-900"
      >
        Hi, I'm <span className="text-blue-600">Swati</span> 👋
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-xl text-gray-700 max-w-2xl"
      >
        I’m a Web Developer passionate about building beautiful and functional websites with modern technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-8"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
