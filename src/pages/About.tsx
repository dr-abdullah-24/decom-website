import { Link } from 'react-router-dom';
import {
  FiUsers,
  FiAward,
  FiMessageSquare,
  FiTarget,
  FiTrendingUp,
  FiShield,
  FiLinkedin,
  FiTwitter,
  FiGithub,
  FiZap,
  FiRepeat
} from 'react-icons/fi';

import aliIkramImg from '../assets/attemp2.png';
import ijazHaiderImg from '../assets/ijaz.png';
import { motion } from "framer-motion";

type SocialLinks = {
  linkedin?: string;
  twitter?: string;
  github?: string;
};

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  social: SocialLinks;
  image: string;
}

const About = () => {
  const teamMembers = [
  {
    id: 1,
    name: 'Ali Ikram',
    role: 'Founder & Chief Executive Officer',
    bio: 'Ali Ikram is an AI and robotics engineer specializing in computer vision, autonomous systems, and real-time AI deployment. He leads the technical vision at Decom Robotics, focusing on system architecture, intelligent automation, and bringing research-driven robotics solutions into production-grade deployments.',
    social: {
      linkedin: 'https://www.linkedin.com/in/ali-i-5306b597/',
      twitter: 'https://x.com/57f588061640421',
      github: '#',
    },
    image: aliIkramImg,
  },
  {
    id: 2,
    name: 'Ijaz Haider',
    role: 'Chairman',
    bio: 'Ijaz Haider is a seasoned technology executive and entrepreneur with extensive experience serving in CEO, CRO, and Managing Partner roles across technology, AI, and sustainability-focused organizations. He brings deep expertise in corporate leadership, revenue strategy, and organizational scaling. As Chairman of Decom Robotics, he provides strategic oversight, governance, and long-term direction to support sustainable growth and commercialization.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
    image: ijazHaiderImg, // add image asset for Ijaz Haider
  },
];



const values = [
  {
    title: 'Applied Innovation',
    description: 'Advancing intelligent automation through practical, real-world engineering and research.',
    icon: <FiZap />
  },
  {
    title: 'Engineering Excellence',
    description: 'Building robust, production-ready systems designed for reliability and long-term deployment.',
    icon: <FiAward />
  },
  {
    title: 'Integrity by Design',
    description: 'Upholding responsible engineering, transparency, and trust across all technology we develop.',
    icon: <FiShield />
  },
  {
    title: 'Systems Collaboration',
    description: 'Working across disciplines to integrate mechanical, embedded, and intelligent systems seamlessly.',
    icon: <FiUsers />
  },
  {
    title: 'Scalable Thinking',
    description: 'Designing adaptable platforms that evolve with industrial needs and future applications.',
    icon: <FiRepeat />
  }
];


  return (
    <div className="pt-0"> {/* Add padding-top to account for fixed header */}
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-[#161616] to-[#0a0a0a] text-white py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-72 h-72 bg-[#01313F] opacity-20 rounded-full"></div>
          <div className="absolute left-1/4 -bottom-20 w-96 h-96 bg-blue-400 opacity-10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block p-3 bg-[#01313F] bg-opacity-50 rounded-lg mb-6">
            <FiUsers className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Decom Robotics</h1>
          <p className="text-lg max-w-3xl mx-auto text-blue-100">
            Learn more about Decom Robotics L.L.C., a robotics and artificial intelligence company building advanced automation solutions for industrial and commercial applications.
          </p>
        </div>
      </section>

      {/* Stats Section
      <section className="bg-[#702626] py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCard number="10+" label="Years Experience" />
            <StatCard number="200+" label="Projects Completed" />
            <StatCard number="50+" label="Team Members" />
            <StatCard number="98%" label="Client Satisfaction" />
          </div>
        </div>
      </section> */}

 



<section className="py-20 bg-[#000000]">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4 animate-pulse">
        OUR MISSION & VALUES
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F9FAFB]">
        What Drives Decom Robotics
      </h2>
      <p className="text-lg text-gray-300">
        Advancing intelligent automation through robotics, AI, and systems engineering
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      {/* Mission Statement */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative p-8 bg-[#702626] bg-opacity-90 border rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
      >
        <div className="absolute top-[-24px] left-6 w-14 h-14 flex items-center justify-center bg-blue-500 rounded-full shadow-lg">
          <FiTarget className="text-white w-8 h-8" />
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4 text-[#F9FAFB]">Mission Statement</h3>
          <p className="text-[#F9FAFB] text-md leading-relaxed">
            At Decom Robotics L.L.C., our mission is to develop intelligent robotic systems that automate complex physical processes traditionally dependent on manual labor. By combining robotics, embedded systems, and artificial intelligence, we aim to enable scalable, reliable automation solutions that improve efficiency, accuracy, and operational consistency across industrial environments.
          </p>
        </div>
      </motion.div>

      {/* Vision */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative p-8 bg-[#702626] bg-opacity-90 border rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div className="absolute top-[-24px] left-6 w-14 h-14 flex items-center justify-center bg-blue-500 rounded-full shadow-lg">
          <FiTrendingUp className="text-white w-8 h-8" />
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4 text-[#F9FAFB]">Our Vision</h3>
          <p className="text-[#F9FAFB] text-md leading-relaxed mb-4">
           We envision a future where intelligent machines seamlessly handle high-precision, repetitive, and labor-intensive tasks, allowing industries to operate more efficiently and sustainably.
          </p>
          <ol className="list-decimal pl-6 text-[#F9FAFB] space-y-3 text-md">
            <li className="pl-1">Driving the adoption of autonomous robotic systems in real-world industrial workflows.</li>
            <li className="pl-1">Enabling smarter, more resilient automation through AI-powered perception and decision-making.</li>
            <li className="pl-1">Building adaptable robotic platforms capable of evolving with future industrial needs.</li>
          </ol>
        </div>
      </motion.div>
    </div>
  </div>
</section>


{/* Values */}
<section className="py-20 bg-[#110C11]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h3 className="text-2xl font-bold mb-12 text-center text-[#F9FAFB]">Our Core Values</h3>

    <div className="flex flex-wrap justify-center gap-6">
      {values.map((value, index) => (
        <div
          key={index}
          className="w-72 bg-[#702626] rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105 duration-300"
        >
          <div className="mb-4 text-[#F9FAFB] text-3xl mx-auto">
            {value.icon}
          </div>
          <h4 className="text-lg font-bold text-[#F9FAFB] mb-2">
            {value.title}
          </h4>
          <p className="text-sm text-[#F9FAFB]">
            {value.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>



      <section className="py-20 bg-[#211A23]">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1 bg-blue-800 text-white rounded-full text-sm font-medium mb-4">
        OUR LEADERSHIP
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F9FAFB]">Meet the Leadership</h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        The team guiding Decom Robotics in building next-generation automation technologies
      </p>
    </div>

    {/* Center grid with max 2 columns */}
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            bio={member.bio}
            social={member.social} image={member.image}          />
        ))}
      </div>
    </div>
  </div>
</section>




      {/* Call to Action */}
      <section className="relative bg-gradient-to-r from-[#161616] to-[#0a0a0a] text-white py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 -top-10 w-72 h-72 bg-[#01313F] opacity-20 rounded-full"></div>
          <div className="absolute right-1/4 -bottom-20 w-96 h-96 bg-blue-400 opacity-10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Building Intelligent Automation</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-100">
            Decom Robotics is assembling a team of engineers, researchers, and collaborators passionate about robotics, AI, and industrial automation. If you’re interested in shaping the future of intelligent systems, we’d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
            <Link
              to="/contact"
              className="bg-transparent hover:bg-[#702626]/20 text-white font-bold py-3 px-8 rounded-lg border-2 border-white transition-all duration-300 flex items-center justify-center"
            >
              Contact Us <FiMessageSquare className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



const TeamMemberCard = ({ name, role, bio, social, image }: TeamMemberCardProps) => {
  return (
    <div className="bg-[#702626] rounded-2xl overflow-hidden shadow-md transition hover:shadow-xl flex flex-col items-center text-center p-6 max-w-xs mx-auto">
      
      {/* Profile Image */}
      <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-4 border-2 border-blue-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name & Role */}
      <h3 className="text-xl font-semibold text-[#F9FAFB]">{name}</h3>
      <p className="text-blue-300 text-sm font-medium mb-2">{role}</p>

      {/* Bio */}
      <p className="text-[#F9FAFB] text-sm px-4 mb-4">{bio}</p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4">
        {social.linkedin && (
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-400">
            <FiLinkedin size={20} />
          </a>
        )}
        {social.twitter && social.twitter !== '#' && (
          <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-400">
            <FiTwitter size={20} />
          </a>
        )}
        {social.github && social.github !== '#' && (
          <a href={social.github} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-400">
            <FiGithub size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default About;