import logo from "../assets/logo.webp";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-tl   from-zinc-950 via-zinc-900 to-[#390749] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          {/* Brand */}
          <div>
            {/* <h2 className="text-2xl font-bold">Artifex</h2> */}
            <img  src={logo} className="w-24 bg-slate-50 rounded-full px-1 " alt="Artifex" />
            <p className="text-gray-400 mt-2">
              Custom portraits crafted with care.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-4 cursor-pointer z-20 text-gray-400">
            <a id="tnc" onClick={()=>navigate('/policies')} className="hover:text-white">
              Terms and Conditions
            </a>
            <a onClick={()=>navigate('/policies')} className="hover:text-white">
              Privacy Policy
            </a>
            <a onClick={()=>navigate('/policies')} className="hover:text-white">
              Refund & Cancellation
            </a>
            <a onClick={()=>navigate('/policies')} className="hover:text-white">
              Contact Us
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Contact Information */}
          <div className="text-gray-400">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:piyush@imartifex.live" className="hover:text-white">
              piyush@imartifex.live
              </a>
            </p>
            <p>
              <strong>Phone:</strong> +91 6392802689
            </p>
            <p>
              <strong>Address:</strong> Knowledge Park 2, Greater Noida, Uttar Pardesh 201310
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Artifex. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
