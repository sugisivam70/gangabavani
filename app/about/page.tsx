import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/ai-chatbot";
import Image from "next/image";
import {
  Globe,
  Shield,
  Leaf,
  Award,
  Cpu,
  Clock,
  ArrowRight,
} from "lucide-react";
import { ContactNavButton } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-12 text-left">
            <span className="text-[#04A790]">GANGA BHAVANI AUTOMATES</span> 
            <br />
            <span className="text-4xl">An ISO 9001-2015 Certified Company</span>
          </h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12">
            Our Story
          </h2>
          <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
            <p>
              GANGA BHAVANI AUTOMATES was established in 2018, has been at the forefront of revolutionizing the manufacturing industry with its state-of-the-art facility at NO. 177, GROUND FLOOR, VINAYAKA LAYOUT 17TH CROSS, ANDRAHALLI MAIN ROAD, NEAR CHETAN CIRCLE, VISHWANEEDAM POST, BENGALURU – 560091, KARNATAKA, INDIA. Our company is dedicated to advancing traditional manufacturing processes by utilizing advanced machining, elevating components as they strive.
            </p>
            <p>
              Our specializations include CNC turning parts, injection molding parts, sheet metal fabrication parts, tooling parts, Jigs & fixtures, and sub-assembly parts. These extensive manufacturing machinery cover a wide spectrum of components and applications, including aerospace, defense, automobile, healthcare sectors. GBA's strength lies in our robust manufacturing capabilities. Equipped with the latest technology and advanced machinery, we ensure exceptional precision and efficiency in every product we create.
            </p>
            <p>
              We pride ourselves on being a comprehensive one-stop solution for manufacturing needs. Whether it's prototyping, low-volume production, or high-volume manufacturing, we offer an extensive range of services that cater to diverse requirements. With a team of skilled Engineers, Technical SMEs, Architects, Designers, and State-of-the-art facilities, GBA ensures a seamless transition from concept to final product, saving time, effort, and resources for our clients. At GBA, innovation and excellence are our driving forces. We deliver top-quality products, making us a trusted partner across multiple sectors.
            </p>
          </div>
        </div>
      </section>

      <div>
        <section className="grid grid-cols-1 lg:grid-cols-2 md:grid">
          {/* The Spark Behind GBA */}
          <div className="flex flex-col grid-cols-2 md:grid">
            <div className="col-span-1 order-1 md:order-1 lg:order-1">
              <img
                className="w-full h-60 md:h-full object-cover"
                src="/Assets/Overview-D-UNOjCS.jpg"
                alt="The Spark Behind GBA"
              />
            </div>
            <div className="px-6 pt-4 pb-10 col-span-1 flex flex-col items-start justify-center gap-6 w-full p-0 order-2 lg:order-2">
              <h3 className="text-lg 2xl:text-2xl font-semibold mb-2 text-[#04A790]">
                The Spark Behind GBA
              </h3>
              <div>
                <p className="text-sm 2xl:text-md text-gray-700 text-justify">
                  GBA was founded to revolutionize manufacturing by seamlessly
                  bridging the gap between customer demands and available
                  resources through our international expertise. Driven by a
                  commitment to better governance and environmental
                  responsibility, we focus on sustainable manufacturing practices
                  and supporting our customers' operational excellence goals.
                </p>
              </div>
            </div>
          </div>

          {/* Our Purpose and Goals */}
          <div className="flex flex-col grid-cols-2 md:grid">
            <div className="col-span-1 order-1 md:order-2 lg:order-1">
              <img
                className="w-full h-60 md:h-full object-cover"
                src="/Assets/MissionAndVision-BvebSdk5.jpg"
                alt="Our Purpose and Goals"
              />
            </div>
            <div className="px-6 pt-4 pb-10 col-span-1 flex flex-col items-start justify-center gap-6 w-full p-0 order-2 md:order-1">
              <h3 className="text-lg 2xl:text-2xl font-semibold mb-2 text-[#04A790]">
                Our Purpose and Goals
              </h3>
              <div className="flex flex-col gap-2">
                <p className="text-sm 2xl:text-md text-justify">
                  • Transform manufacturing with innovative, sustainable
                  solutions.
                </p>
                <p className="text-sm 2xl:text-md text-justify">
                  • Meet evolving customer demands using advanced technology and
                  international expertise.
                </p>
                <p className="text-sm 2xl:text-md text-justify">
                  • Commit to strong environmental and governance standards,
                  promoting sustainable manufacturing practices and supporting clients' 
                  operational excellence goals.
                </p>
                <p className="text-sm 2xl:text-md text-justify">
                  • Set new benchmarks in quality and efficiency to lead the
                  industry towards a more responsible and sustainable future.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid-cols-1 lg:grid-cols-2 md:grid">
          <div className="flex flex-col grid-cols-2 md:grid">
            <div className="col-span-1 order-1 md:order-1 lg:order-2">
              {/* Our Driving Force */}
              <img
                src="/Assets/Quality-BZ9P8X0R.jpg"
                alt="Our driving force"
                className="w-full h-60 md:h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="px-6 pt-4 pb-10 col-span-1 flex flex-col items-start justify-center gap-6 w-full p-0 order-2 md:order-2 lg:order-1">
              <h3 className="text-lg 2xl:text-2xl font-semibold mb-2 text-[#04A790]">
                Our driving force
              </h3>
              <div className="flex flex-col gap-2">
                <p className="text-sm 2xl:text-md text-justify">
                  • Global Insights, Local Excellence - Combining international
                  expertise with the precision of local experts
                </p>
                <p className="text-sm 2xl:text-md text-justify">
                  • Sustainability Leadership - Pioneering a sustainable
                  manufacturing industry and setting the standard
                </p>
                <p className="text-sm 2xl:text-md text-justify">
                  • Innovative Expertise - Leveraging international and industry
                  expertise to meet customer demands with innovative solutions
                </p>
                <p className="text-sm 2xl:text-md text-justify">
                  • Inclusive Work Environment - Fostering inclusivity and
                  empowering women in manufacturing
                </p>
              </div>
            </div>
          </div>
          {/* Global Excellence */}
          <div className="flex flex-col grid-cols-2 md:grid">
            {/* Image */}
            <div className="col-span-1 order-1 md:order-2 lg-order-2">
              <img
                src="/Assets/GlobalImpact-jywId4x3.jpg"
                alt="Digital brain and AI network"
                className="w-full h-60 md:h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="px-6 pt-4 pb-10 col-span-1 flex flex-col items-start justify-center gap-6 w-full p-0 order-2 md:order-1 lg:order-1">
              <h3 className="text-lg 2xl:text-2xl font-semibold mb-2 text-[#04A790]">
                Global Excellence in Manufacturing
              </h3>
              <div className="flex flex-col gap-2">
                <p className="text-sm 2xl:text-md text-justify">
                  GBA has empowered over 25+ businesses and innovators across
                  continents, including Asia and Europe. Delivering more than
                  5,000 parts, we showcase our commitment to innovation,
                  quality, and global reach. Our comprehensive manufacturing
                  solutions drive sustainability and excellence, making a
                  profound impact worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Team Section */}
      <section className="py-12 sm:py-16 bg-black text-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Team Members - Left Side */}
              <div className="lg:col-span-6 flex flex-col md:flex-row items-center justify-center gap-10">
                {/* Member 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden mb-4 bg-gray-300 border-4 border-gray-700">
                    <Image
                      src="/Assets/director.jpg"
                      alt="Founder"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">
                    Raju K
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-1">
                    Director,
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base mb-1">
                    India
                  </p>
                </div>
              </div>
              {/* Team Description - Right Side */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="lg:pl-8 xl:pl-12">
                  <p className="text-sm text-gray-400 mb-3">Our Team</p>
                  <h2 className="text-1xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 lg:mb-8 leading-tight">
                    Global Expertise, Precision Excellence: Delivering
                    Innovative Manufacturing Solutions with Passion and
                    Dedication.
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl text-justify">
                    Our leadership team, with extensive international
                    experience, guides a dedicated group of professionals in
                    precision manufacturing. Together, we bring diverse
                    expertise and a commitment to excellence, ensuring
                    top-quality results for our clients worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12">
              BENEFITS WITH GBA
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              

              <div className="text-center">
                <Shield className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-gray-700" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  Advanced Dual-Layer Quality Assurance
                </h3>
                <p className="text-gray-600 text-sm sm:text-base text-justify">
                  Achieve unmatched product reliability with our dual-tier QA
                  system, combining rigorous internal audits and expert external
                  validations.
                </p>
              </div>

              <div className="text-center">
                <Leaf className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-gray-700" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  Sustainable Manufacturing
                </h3>
                <p className="text-gray-600 text-sm sm:text-base text-justify">
                  Employing eco-friendly processes, energy-efficient
                  technologies, and sustainable materials to ensure superior
                  quality with minimal environmental impact.
                </p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-gray-700" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  ISO Compliance Guaranteed
                </h3>
                <p className="text-gray-600 text-sm sm:text-base text-justify">
                  Our ISO 27001, ISO 45001, ISO 14001, and ISO 9001
                  certifications reflect our commitment to the highest standards
                  of quality, security, safety, and environmental care.
                </p>
              </div>

              <div className="text-center">
                <Cpu className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-gray-700" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  Integrated DFM Analysis
                </h3>
                <p className="text-gray-600 text-sm sm:text-base text-justify">
                  Our Design for Manufacturing (DFM) analysis ensures your
                  designs are optimized for manufacturability, reducing
                  production costs and time.
                </p>
              </div>

              <div className="text-center">
                <Clock className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-gray-700" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  Rapid Turnaround Times
                </h3>
                <p className="text-gray-600 text-sm sm:text-base text-justify">
                  Efficient project management and advanced manufacturing
                  processes ensure quick turnaround without compromising
                  quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Certifications Section */}
      <section className="py-12 sm:py-16 bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
              Certifications
            </h2>
            <p className="text-center text-gray-700 mb-8 lg:mb-12 max-w-4xl mx-auto text-sm sm:text-base text-justify">
              We are officially certified according to{" "}
              <strong>ISO 27001, ISO 45001, ISO 14001, ISO 9001</strong>{" "}
              standards. This rigorous process demonstrates our commitment to
              delivering the highest quality products and services to our
              customers. By adhering to ISO guidelines, we ensure consistent
              performance, efficiency, and continuous improvement across all
              aspects of our operations.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
                <img src="/Assets/ISO-DxtW72cU.png"></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Love What We Do Section */}
      <section className="py-12 sm:py-16 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold uppercase mb-8 text-center">
              WE LOVE WHAT WE DO
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 rounded p-4 flex flex-col items-center justify-center">
                <img
                  src="/Assets/Precision-QSe2WjQr.gif"
                  alt="Precision Manufacturing Excellence"
                  className="max-w-full max-h-[100px] object-cover"
                />
                <p className="text-center font-bold text-sm 2xl:text-xl mt-2 min-h-12">
                  Precision Manufacturing Excellence
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded p-4 flex flex-col items-center justify-center">
                <img
                  src="/Assets/Prototyping-BcB0Pwfz.gif"
                  alt="Cutting-Edge Design and Prototyping"
                  className="max-w-full max-h-[100px] object-cover"
                />
                <p className="text-center font-bold text-sm 2xl:text-xl mt-2 min-h-12">
                  Cutting-Edge Design and Prototyping
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded p-4 flex flex-col items-center justify-center">
                <img
                  src="/Assets/RnD-CjChhzx7.gif"
                  alt="Research and Development"
                  className="max-w-full max-h-[100px] object-cover"
                />
                <p className="text-center font-bold text-sm 2xl:text-xl mt-2 min-h-12">
                  Research and Development
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded p-4 flex flex-col items-center justify-center">
                <img
                  src="/Assets/SecondaryOperations-BR5TMzxo.gif"
                  alt="Comprehensive Secondary Operations"
                  className="max-w-full max-h-[100px] object-cover"
                />
                <p className="text-center font-bold text-sm 2xl:text-xl mt-2 min-h-12">
                  Comprehensive Secondary Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talk to Us Section */}
      <section className="py-12 sm:py-16 bg-black text-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12">
              Talk to Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <ContactNavButton className="bg-[#18181b] border border-gray-700 rounded-xl p-8 flex flex-col items-center text-center hover:border-[#04A790] transition-colors group cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-[#232326] flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-podcast w-20 h-20"
                  >
                    <path d="M16.85 18.58a9 9 0 1 0-9.7 0"></path>
                    <path d="M8 14a5 5 0 1 1 8 0"></path>
                    <circle cx="12" cy="11" r="1"></circle>
                    <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"></path>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  Talk to an expert
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mt-4 text-gray-400 group-hover:text-[#04A790] transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </ContactNavButton>
              {/* Card 2 */}
              <ContactNavButton className="bg-[#18181b] border border-gray-700 rounded-xl p-8 flex flex-col items-center text-center hover:border-[#04A790] transition-colors group cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-[#232326] flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-codesandbox w-20 h-20"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                    <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                    <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" x2="12" y1="22.08" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  Book a meeting
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mt-4 text-gray-400 group-hover:text-[#04A790] transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </ContactNavButton>
              {/* Card 3 */}
              <ContactNavButton className="bg-[#18181b] border border-gray-700 rounded-xl p-8 flex flex-col items-center text-center hover:border-[#04A790] transition-colors group cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-[#232326] flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-app-window w-20 h-20"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="M10 4v4"></path>
                    <path d="M2 8h20"></path>
                    <path d="M6 4v4"></path>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Get Quote</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mt-4 text-gray-400 group-hover:text-[#04A790] transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </ContactNavButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}