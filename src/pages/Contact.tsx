import { JSX } from 'react';
import { 
    FiMail, 
    FiPhone, 
    FiMapPin, 
    FiMessageSquare, 
    FiHelpCircle,
    FiClock,
    FiNavigation,
    FiUsers
} from 'react-icons/fi';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Contact = () => {
        const officeLocations = [
                {
                        id: 1,
                        city: 'Islamabad',
                        address: '5th Floor, Plaza 1, Paradise Commercial, Bahria Town, Islamabad, Pakistan',
                        phone: '+92 (303) 0595669',
                        email: 'info@decomrobotics.com',
                        hours: 'Mon-Fri: 9am – 6pm (PKT)',
                        coords: [33.5461, 73.1350] as [number, number],
                },
                {
                        id: 2,
                        city: 'Eagan, MN',
                        address: '2817 Eagandale Blvd, Eagan, MN 55121, USA',
                        phone: '+1 (555) 000-0000',
                        email: 'us@decomrobotics.com',
                        hours: 'Mon-Fri: 8am – 5pm (CST)',
                        coords: [44.8539, -93.2320] as [number, number],
                },
        ];

        return (
                <div className="pt-0">
                        {/* Page Header */}
                        <section className="relative bg-gradient-to-r from-[#161616] to-[#0a0a0a] text-white py-20 overflow-hidden">
                                <div className="absolute inset-0 overflow-hidden">
                                        <div className="absolute -right-10 -top-10 w-72 h-72 bg-[#01313F] opacity-20 rounded-full"></div>
                                        <div className="absolute left-1/4 -bottom-20 w-96 h-96 bg-blue-400 opacity-10 rounded-full"></div>
                                </div>
                                
                                <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
                                        <div className="inline-block p-3 bg-[#01313F] bg-opacity-50 rounded-lg mb-6">
                                                <FiMessageSquare className="w-8 h-8" />
                                        </div>
                                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                                        <p className="text-lg max-w-3xl mx-auto text-blue-100">
                                                We'd love to hear from you. Whether you're exploring a partnership, seeking a demo, or have questions about our technology — we're here to help.
                                        </p>
                                </div>
                        </section>

                        {/* Quick Contact Cards */}
                        <section className="py-12 bg-[#000000] text-amber-50">
                                <div className="container mx-auto px-4 sm:px-6">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-16 relative z-20">
                                                <ContactCard 
                                                        icon={<FiPhone />}
                                                        title="Call Us"
                                                        content="+92 (303) 0595669"
                                                        text="Mon-Fri from 9am to 6pm (PKT)"
                                                        action="Call Now"
                                                        link="tel:+923030595669"
                                                />
                                                <ContactCard 
                                                        icon={<FiMail />}
                                                        title="Email Us"
                                                        content="info@decomrobotics.com"
                                                        text="We'll respond within 24 hours"
                                                        action="Send Email"
                                                        link="mailto:info@decomrobotics.com"
                                                        featured={true}
                                                />
                                                <ContactCard 
                                                        icon={<FiMapPin />}
                                                        title="Visit Us"
                                                        content="Offices in Islamabad & Eagan, MN"
                                                        text="Find directions to our nearest office"
                                                        action="Get Directions"
                                                        link="#map-section"
                                                />
                                        </div>
                                </div>
                        </section>

                        {/* Office Locations */}
                        <section className="min-h-screen flex items-center justify-center bg-[#110C11] px-4">
                                <div className="max-w-4xl w-full">
                                        <div className="text-center mb-10">
                                                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                                                        OUR LOCATIONS
                                                </span>
                                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
                                                        Visit Our Offices
                                                </h2>
                                                <p className="text-lg text-gray-100">
                                                        We're present globally stop by for a face-to-face conversation
                                                </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                {officeLocations.map((office) => (
                                                        <div
                                                                key={office.id}
                                                                className="bg-[#702626] rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:scale-[1.02]"
                                                        >
                                                               <div className="bg-gradient-to-r from-[#702626] to-[#5A1F1F] p-6 text-white rounded-t-3xl">
                                                                        <h3 className="text-xl font-bold">{office.city}</h3>
                                                                </div>
                                                                <div className="p-6 space-y-4">
                                                                        <InfoItem icon={<FiMapPin />} text={office.address} />
                                                                        <InfoItem
                                                                                icon={<FiPhone />}
                                                                                text={office.phone}
                                                                                link={`tel:${office.phone.replace(/\D/g, '')}`}
                                                                        />
                                                                        <InfoItem
                                                                                icon={<FiMail />}
                                                                                text={office.email}
                                                                                link={`mailto:${office.email}`}
                                                                        />
                                                                        <InfoItem icon={<FiClock />} text={office.hours} />

                                                                        <a
                                                                                href="#map-section"
                                                                                className="mt-4 inline-flex items-center text-blue-100 hover:text-blue-300 font-medium group transition-colors duration-200"
                                                                        >
                                                                                <FiNavigation className="mr-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                                                                Get Directions
                                                                        </a>
                                                                </div>
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                        </section>

                        {/* Map Section */}
                        <section id="map-section" className="py-20 bg-[#211A23]">
                                <div className="container mx-auto px-4 sm:px-6">
                                        <div className="text-center mb-16">
                                                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">FIND US</span>
                                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">Our Global Presence</h2>
                                        </div>

                                        <div className="bg-white p-4 rounded-lg shadow-xl max-w-6xl mx-auto">
                                                <div className="rounded-lg overflow-hidden" style={{ height: '500px', width: '100%' }}>
                                                        <MapContainer 
                                                                center={[39.0, 0.0] as [number, number]} 
                                                                zoom={2} 
                                                                scrollWheelZoom={true}
                                                                style={{ height: '100%', width: '100%' }}
                                                                className="z-0"
                                                        >
                                                                <TileLayer
                                                                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                                                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                                />
                                                                {officeLocations.map((office) => (
                                                                        <Marker key={office.id} position={office.coords}>
                                                                                <Popup>
                                                                                        <div className="p-2">
                                                                                                <strong className="text-lg">Decom Robotics L.L.C</strong><br />
                                                                                                <strong className="text-blue-600">{office.city}</strong><br />
                                                                                                <span className="text-sm">{office.address}</span><br />
                                                                                                <span className="text-sm text-gray-600">{office.phone}</span>
                                                                                        </div>
                                                                                </Popup>
                                                                        </Marker>
                                                                ))}
                                                        </MapContainer>
                                                </div>
                                        </div>
                                </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="py-20 bg-[#211A23]">
                                <div className="container mx-auto px-4 sm:px-6">
                                        <div className="text-center mb-16">
                                                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">FAQs</span>
                                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">Frequently Asked Questions</h2>
                                                <p className="text-lg text-gray-100 max-w-3xl mx-auto">
                                                        Find answers to common questions about working with Decom Robotics
                                                </p>
                                        </div>

                                        <div className="max-w-4xl mx-auto">
                                                <div className="space-y-6">
                                                        <FAQItem 
                                                                question="What industries do you serve?"
                                                                answer="Decom Robotics develops AI-powered autonomous systems designed for industrial, laboratory, and commercial environments. Our solutions are built to scale across manufacturing, recycling, logistics, and other sectors that demand precision and efficiency."
                                                        />
                                                        <FAQItem 
                                                                question="How long does deployment typically take?"
                                                                answer="Timelines vary depending on the scale of deployment and integration requirements. Our team works closely with you from initial consultation through to full operational setup, prioritizing speed without compromising quality."
                                                        />
                                                        <FAQItem 
                                                                question="Do you offer ongoing support after deployment?"
                                                                answer="Yes. We provide comprehensive maintenance and support packages to ensure your systems remain optimized, secure, and performing at peak capacity well beyond initial launch."
                                                        />
                                                        <FAQItem 
                                                                question="What does your pricing look like?"
                                                                answer="We offer flexible engagement models — including project-based, retainer, and licensing options — tailored to your specific needs. We'd love to discuss the best fit during a consultation."
                                                        />
                                                        <FAQItem 
                                                                question="Can your systems integrate with existing operations?"
                                                                answer="Absolutely. Our robotic and AI systems are engineered for seamless integration with existing industrial workflows and infrastructure, minimizing disruption and maximizing ROI."
                                                        />
                                                </div>
                                        </div>
                                </div>
                        </section>

                        {/* Call to Action */}
                        <section className="py-20 bg-gradient-to-r from-[#1d232b] to-[#35383a] text-white">
                                <div className="container mx-auto px-4 sm:px-6 text-center">
                                        <div className="max-w-4xl mx-auto">
                                                <div className="inline-block p-3 bg-[#18202A]/20 rounded-full mb-6">
                                                        <FiUsers className="w-10 h-10" />
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate the Future?</h2>
                                                <p className="text-lg mb-8 text-blue-100">
                                                        Let's work together to bring intelligent automation to your operations. Reach out today and let's start the conversation.
                                                </p>
                                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                                        <a
                                                                href="mailto:info@decomrobotics.com"
                                                                className="bg-[#18202A] text-white hover:bg-blue-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                                                        >
                                                                Get in Touch <FiMail className="ml-2" />
                                                        </a>
                                                        <a
                                                                href="tel:+920000000000"
                                                                className="bg-transparent hover:bg-[#18202A]/20 text-white font-bold py-3 px-8 rounded-lg border-2 border-white transition-all duration-300 flex items-center justify-center"
                                                        >
                                                                Call Us Now <FiPhone className="ml-2" />
                                                        </a>
                                                </div>
                                        </div>
                                </div>
                        </section>
                </div>
        );
}

// Helper Components
const ContactCard = ({ icon, title, content, text, action, link = '', featured = false }: { icon: JSX.Element; title: string; content: string; text: string; action: string; link?: string; featured?: boolean }) => (
        <div className={`bg-[#702626] rounded-lg shadow-lg p-6 flex flex-col ${featured ? 'transform -translate-y-2  relative z-10 shadow-xl' : ''}`}>
                <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center ${featured ? 'bg-[#01313F] text-white' : 'bg-blue-100 text-blue-300'}`}>
                        <span className="text-2xl">{icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-200">{title}</h3>
                <p className="text-lg font-medium mb-1 text-white">{content}</p>
                <p className="text-gray-400 mb-6 flex-grow">{text}</p>
                <a 
                        href={link} 
                        className={`inline-flex items-center font-medium ${featured ? 'text-blue-400 hover:text-blue-300' : 'text-blue-400 hover:text-blue-300'} group`}
                >
                        {action}
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                </a>
        </div>
);

const InfoItem = ({ icon, text, link }: { icon: JSX.Element; text: string; link?: string }) => {
        const content = (
                <div className="flex items-start mb-4">
                        <span className="text-blue-400 mt-1 mr-3">{icon}</span>
                        <span className="text-gray-100">{text}</span>
                </div>
        );

        return link ? (
                <a href={link} className="hover:text-blue-600 transition-colors duration-300">
                        {content}
                </a>
        ) : content;
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
        <div className="bg-[#702626] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold mb-3 text-gray-100 flex items-start">
                        <FiHelpCircle className="text-gray-100 mr-2 flex-shrink-0 mt-1" />
                        {question}
                </h3>
                <p className="text-gray-100 pl-7">{answer}</p>
        </div>
);

export default Contact;