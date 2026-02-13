import { Link } from 'react-router-dom';
import { 
  FiMapPin, 
  FiMail, 
  FiPhone, 
  FiClock,
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiArrowRight,
} from 'react-icons/fi';

import DecomLogo from '../../assets/irflogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-4">

          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src={DecomLogo}
                alt="Decom Robotics Logo"
                className="w-8 h-8 mr-2 object-contain"
              />
              <h3 className="text-xl font-bold">Decom Robotics L.L.C.</h3>
            </div>

            <p className="text-blue-200 mb-2">
              Advancing intelligent automation through robotics and AI to enable scalable,
              efficient, and future-ready industrial systems.
            </p>

            <div className="mt-6 space-y-2">
              <div className="flex items-center text-sm font-semibold text-blue-100 mb-3">
                <FiClock className="mr-2" />
                Business Hours
              </div>
              <div className="text-sm text-blue-200 space-y-1.5 ml-6">
                <div>
                  <span className="font-medium text-blue-100">United States:</span> Mon–Fri, 9:00 AM – 5:00 PM (CST)
                </div>
                <div>
                  <span className="font-medium text-blue-100">Dubai, UAE:</span> Sun–Thu, 9:00 AM – 6:00 PM (GST)
                </div>
                <div>
                  <span className="font-medium text-blue-100">Pakistan:</span> Mon–Fri, 9:00 AM – 6:00 PM (PKT)
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative after:absolute after:left-0 after:w-12 after:h-0.5 after:bg-blue-500 pb-3 after:bottom-0">
              Company
            </h3>
            <ul className="space-y-4">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/careers', label: 'Careers' },
                { path: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center text-blue-200 hover:text-white transition group"
                  >
                    <FiArrowRight className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative after:absolute after:left-0 after:w-12 after:h-0.5 after:bg-blue-500 pb-3 after:bottom-0">
              Contact
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                <div className="text-blue-200 space-y-3">
                  <div>
                    <div className="font-semibold text-blue-100 mb-1">United States</div>
                    <div>2817 Eagandale Blvd, Eagan, MN 55121</div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-100 mb-1">Dubai, UAE</div>
                    <div>6th Floor, Business Center, The Meydan Hotel GrandStand, Meydan Road, Nad Al Sheba, Dubai</div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-100 mb-1">Pakistan</div>
                    <div>5th Floor, Plaza 1, Paradise Commercial, Bahria Town, Islamabad</div>
                  </div>
                </div>
              </li>

              <li className="flex items-center">
                <FiMail className="w-5 h-5 mr-3 text-blue-400" />
                <a
                  href="mailto:info@decomrobotics.com"
                  className="text-blue-200 hover:text-white transition"
                >
                  info@decomrobotics.com
                </a>
              </li>

              <li className="flex items-center">
                <FiPhone className="w-5 h-5 mr-3 text-blue-400" />
                <a
                  href="tel:+923030595669"
                  className="text-blue-200 hover:text-white transition"
                >
                  +92 303 0595669
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-blue-900/40 text-center flex flex-col items-center">
          <div className="flex justify-center space-x-6 mb-6">
            <SocialIcon Icon={FiLinkedin} label="LinkedIn" />
            <SocialIcon Icon={FiTwitter} label="Twitter" />
            <SocialIcon Icon={FiGithub} label="GitHub" />
          </div>

          <div className="flex justify-center space-x-6 text-sm text-blue-300 mb-4">
            <Link to="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link to="/terms-of-service" className="hover:text-white">Terms</Link>
          </div>

          <p className="text-sm text-blue-400">
            © {currentYear} Decom Robotics L.L.C. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon, label }: { Icon: any; label: string }) => (
  <a
    href="#"
    aria-label={label}
    className="text-blue-300 hover:text-white transition transform hover:scale-110"
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default Footer;