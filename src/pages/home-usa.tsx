import { Link } from 'react-router-dom';
import {
  FiArrowRight,
  FiCpu,
  FiZap,
  FiLayers,
  FiTool,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiChevronRight,
  FiMessageSquare
} from 'react-icons/fi';
import BgVideo from "../assets/Vidoes/heroSection.mp4";
import CompanyImage from "../assets/irf-companypage.png";
import CompanyImageMobile from '../assets/irf-companypage.png';



const Home = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative min-h-screen text-white py-20 md:py-28 overflow-hidden flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          {/* Video for desktop */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={BgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-100 leading-tight">
              Intelligent Robotics
              <span className="block text-blue-300 mt-2">Built for Tomorrow</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Pioneering AI-powered robotics solutions that transform how we work, create, and innovate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="bg-blue-300 text-gray-900 hover:bg-blue-200 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Learn Our Story <FiChevronRight className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent hover:bg-white/20 text-gray-100 font-bold py-4 px-8 rounded-lg border-2 border-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                Get in Touch <FiMessageSquare className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#110C11]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block px-4 py-1 bg-blue-300/20 text-blue-300 rounded-full text-sm font-medium mb-4 uppercase tracking-wide">
                About Decom Robotics
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
                Where Innovation Meets Intelligence
              </h2>
              <p className="text-gray-100 mb-4 text-lg leading-relaxed">
                Decom Robotics is at the forefront of AI-driven robotics innovation. We design and build 
                intelligent robotic systems that amplify human potential, streamline complex workflows, 
                and unlock new possibilities across industries.
              </p>
              <p className="text-gray-100 mb-6 text-lg leading-relaxed">
                Our products integrate cutting-edge AI, advanced sensors, and precision engineering to 
                deliver solutions that are not just smart they're transformative. From industrial automation 
                to intelligent assistants, we're building the future of robotics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#702626] rounded-full flex items-center justify-center mr-4">
                    <FiCpu className="text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-100">AI-Powered</h4>
                    <p className="text-sm text-gray-100/70">Intelligent systems</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#702626] rounded-full flex items-center justify-center mr-4">
                    <FiTrendingUp className="text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-100">Innovation First</h4>
                    <p className="text-sm text-gray-100/70">Cutting-edge tech</p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="inline-flex items-center mt-8 text-blue-300 hover:text-blue-200 font-medium group">
                Learn More About Us
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <div className="bg-gradient-to-br from-[#702626] to-[#501818] h-96 flex items-center justify-center rounded-lg">
                  {/* Desktop image */}
                  <img 
                    src={CompanyImage} 
                    alt="Decom Robotics Innovation" 
                    className="hidden md:block w-full h-full object-cover" 
                  />
                  {/* Mobile image */}
                  <img 
                    src={CompanyImageMobile} 
                    alt="Decom Robotics Innovation" 
                    className="block md:hidden w-full h-full object-cover" 
                  />
                </div>
              </div>
              <div className="absolute w-full h-full top-4 left-4 border-2 border-blue-300/30 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-[#211A23]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-300/20 text-blue-300 rounded-full text-sm font-medium mb-4 uppercase tracking-wide">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Building the Future of Robotics</h2>
            <p className="text-lg text-gray-100/80 max-w-3xl mx-auto leading-relaxed">
              We're in the early stages of developing groundbreaking robotics solutions that will redefine 
              how AI and automation integrate into everyday life. Our team is working on innovative products 
              that combine advanced AI, precision engineering, and intuitive design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-[#702626] p-8 rounded-lg text-center border-2 border-transparent hover:border-blue-300/30 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-300/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCpu className="text-blue-300 text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">AI-Driven Innovation</h3>
              <p className="text-gray-100/80">
                Leveraging cutting-edge artificial intelligence to create robotics that learn, adapt, and evolve.
              </p>
            </div>

            <div className="bg-[#702626] p-8 rounded-lg text-center border-2 border-transparent hover:border-blue-300/30 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-300/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiZap className="text-blue-300 text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Real-World Impact</h3>
              <p className="text-gray-100/80">
                Designing solutions that solve actual problems and make a tangible difference in people's lives.
              </p>
            </div>

            <div className="bg-[#702626] p-8 rounded-lg text-center border-2 border-transparent hover:border-blue-300/30 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-300/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-blue-300 text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Human-Centric Design</h3>
              <p className="text-gray-100/80">
                Building technology that enhances human capabilities rather than replacing them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Capabilities */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-300/20 text-blue-300 rounded-full text-sm font-medium mb-4 uppercase tracking-wide">
              Our Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">Advanced Robotics Technology</h2>
            <p className="text-lg text-gray-100/80 max-w-3xl mx-auto">
              Powered by next-generation AI and precision engineering, our robotics solutions 
              deliver unmatched performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FiCpu className="w-12 h-12" />}
              title="AI Integration"
              description="Deep learning algorithms and neural networks enable our robots to learn, adapt, and make intelligent decisions in real-time environments."
            />

            <ServiceCard
              icon={<FiZap className="w-12 h-12" />}
              title="Autonomous Systems"
              description="Self-navigating, self-optimizing robotic systems that operate independently while maintaining precision and safety in complex scenarios."
              featured={true}
            />

            <ServiceCard
              icon={<FiLayers className="w-12 h-12" />}
              title="Modular Design"
              description="Flexible, scalable robotics platforms that adapt to diverse applications from industrial automation to intelligent consumer products."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#110C11]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-300/20 text-blue-300 rounded-full text-sm font-medium mb-4 uppercase tracking-wide">
              The Decom Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">Why Partner With Us</h2>
            <p className="text-lg text-gray-100/80 max-w-3xl mx-auto">
              What sets our robotics solutions apart in a rapidly evolving landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<FiCpu />}
              title="AI-First Approach"
              description="Every product is built with artificial intelligence at its core, enabling adaptive, intelligent behavior."
            />
            <FeatureCard
              icon={<FiShield />}
              title="Reliable & Secure"
              description="Enterprise-grade security and reliability standards ensure your operations run smoothly and safely."
            />
            <FeatureCard
              icon={<FiTool />}
              title="Continuous Innovation"
              description="Regular updates and improvements keep your robotics systems at the cutting edge of technology."
            />
            <FeatureCard
              icon={<FiUsers />}
              title="Expert Support"
              description="Dedicated technical support and consultation to maximize the value of your robotics investment."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#1d232b] to-[#35383a] text-white">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 -top-10 w-72 h-72 bg-blue-300 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute right-1/4 -bottom-20 w-96 h-96 bg-blue-300 opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
            Join Us on Our Journey
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-100/90">
            We're building the future of intelligent robotics. Be part of our story as we develop 
            innovative solutions that will transform industries and enhance lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-300 text-gray-900 hover:bg-blue-200 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Get in Touch <FiMessageSquare className="ml-2" />
            </Link>
            <Link
              to="/about"
              className="bg-transparent hover:bg-white/20 text-gray-100 font-bold py-3 px-8 rounded-lg border-2 border-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              Learn More <FiChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  featured?: boolean;
}

const ServiceCard = ({ icon, title, description, featured = false }: ServiceCardProps) => (
  <div className={`bg-[#702626] p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${featured ? 'border-t-4 border-blue-300 -mt-2 mb-2 shadow-blue-300/20' : ''}`}>
    <div className={`${featured ? 'bg-blue-300/20' : 'bg-blue-300/10'} p-4 rounded-lg inline-block mb-4`}>
      <span className="text-blue-300 text-2xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-100">{title}</h3>
    <p className="mb-4 text-gray-100/80">{description}</p>
    <Link
      to="/about"
      className="text-blue-300 hover:text-blue-200 font-medium inline-flex items-center group"
    >
      Learn More
      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-[#702626] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:border-blue-300/30 border-2 border-transparent">
    <div className="w-16 h-16 bg-blue-300/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-300/20 transition-colors">
      <span className="text-blue-300 text-2xl">{icon}</span>
    </div>
    <h3 className="text-lg font-bold mb-2 text-gray-100">{title}</h3>
    <p className="text-gray-100/80">{description}</p>
  </div>
);

export default Home;