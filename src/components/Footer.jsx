import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white/30 backdrop-blur-md border-t border-white/20 py-6 text-center text-sm text-gray-700 mt-12 shadow-inner">
      <p>
        © {new Date().getFullYear()} <span className="font-semibold">Swati Negi</span>. All rights reserved.
      </p>

      <p className="mt-2 flex justify-center items-center gap-6 text-gray-700">
        <a
          href="swatinegi91058@gmail.com"
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
          aria-label="Email"
          target="_blank" rel="noopener noreferrer"
        >
          <FaEnvelope />
          <span>Contact Me</span>
        </a>

        <a
          href="https://www.linkedin.com/in/swati-negi-xyz"  // replace with your LinkedIn URL
          className="flex items-center gap-1 text-blue-700 hover:text-blue-900"
          aria-label="LinkedIn"
          target="_blank" rel="noopener noreferrer"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://www.instagram.com/swati_negi"  // replace with your Instagram URL
          className="flex items-center gap-1 text-pink-600 hover:text-pink-800"
          aria-label="Instagram"
          target="_blank" rel="noopener noreferrer"
        >
          <FaInstagram />
          <span>Instagram</span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
