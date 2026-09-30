import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/ai-chatbot";
import Image from "next/image";
import { Package, Users, Truck } from "lucide-react";
import { ContactNavButton } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <br></br>

      {/* Hero Section */}
      <section className="relative banner min-h-[500px] bg-cover object-cover text-white flex items-center justify-center p-4 ">
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10 w-full"
          style={{ top: 0, left: 0, right: 0, height: "100%" }}
        ></div>
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-16 relative z-20">
          {" "}
          {/* Increased lg:px-16 for more width */}
          <div className="max-w-[1600px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
            {/* Left: Headings and Button */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full mt-8 lg:mt-20">
              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-light text-white mb-2 tracking-wide">
                ONE STEP AHEAD
              </h1>
              <h2 className="text-lg sm:text-2xl md:text-4xl xl:text-5xl font-extrabold text-[#04A790] mb-6 md:mb-8 uppercase leading-tight">
                TRANSFORMING INDUSTRIES WITH OUR PRECISION PARTS
              </h2>
              <ContactNavButton className="bg-[#04A790] hover:bg-[#048272] text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-bold rounded transition-colors">
                GET INSTANT QUOTE
              </ContactNavButton>
            </div>
            {/* Right: Engine Image */}
            <div className="flex justify-center lg:justify-end w-full">
              <img
                src="/Assets/Engine.png"
                alt="Precision turbine component"
                className="rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain animate-spin"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#04A790] py-12 sm:py-6 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-[50px] text-center font-bold mb-10">
              Non Stop Manufacturing Shop
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center">
              {/* Empty columns for centering */}
              <div className="hidden sm:block"></div>

              {/* Employees */}
              <div className="flex flex-col items-center text-black">
                <div className="flex items-center mb-2">
                  <Package className="w-10 h-10 sm:w-12 sm:h-12 mr-2" />
                  <div className="flex flex-col">
                    <span className="text-4xl font-semibold">
                      <span>40+</span>
                    </span>
                    <span className="text-lg font-medium">Employees</span>
                  </div>
                </div>
              </div>

              {/* Customers */}
              <div className="flex flex-col items-center text-black">
                <div className="flex items-center mb-2">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 mr-2" />
                  <div className="flex flex-col">
                    <span className="text-4xl font-semibold">
                      <span>25+</span>
                    </span>
                    <span className="text-lg font-medium">Customers</span>
                  </div>
                </div>
              </div>

              {/* Delivered */}
              <div className="flex flex-col items-center text-black">
                <div className="flex items-center mb-2">
                  <Truck className="w-10 h-10 sm:w-12 sm:h-12 mr-2" />
                  <div className="flex flex-col">
                    <span className="text-4xl font-semibold">
                      <span>5,000+</span>
                    </span>
                    <span className="text-lg font-medium">Delivered</span>
                  </div>
                </div>
              </div>

              {/* Empty columns for centering */}
              <div className="hidden sm:block"></div>
              <div className="hidden sm:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Section */}
      <section className="py-12 sm:py-16 bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black mb-8 lg:mb-12">
              Machinery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  title: "Traub Machining",
                  image: "/Assets/PrecisionMachining-eERjB3oq.jpg",
                },
                // {
                //   title: "Advanced Tooling Solutions",
                //   image: "/Assets/AdvancedTooling-DmhQBmQi.jpg",
                // },
                // {
                //   title: "Injection Molding",
                //   image: "/Assets/InjectionMolding-lDDHv9nx.jpg",
                // },
                // {
                //   title: "Sheet Metal Fabrication",
                //   image: "/Assets/SheetMetalFab-BPzymxoS.jpg",
                // },
                {
                  title: "Centerless Grinding",
                  image: "/Assets/AdditiveMfg-BH8cMsSX.jpg",
                },
                {
                  title: "CNC Turning",
                  image: "/Assets/cnc-turning.jpg",
                },
                // {
                //   title: "Design & Prototyping",
                //   image: "/Assets/DesignPrototyping-kybdd3Mb.jpg",
                // },
                {
                  title: "Our Products",
                  image: "/Assets/our-products.jpg",
                },
              ].map((capability, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="h-36 sm:h-48 relative">
                    <Image
                      src={capability.image}
                      alt={capability.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-semibold text-center text-gray-800 text-sm sm:text-base">
                      {capability.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-12 sm:py-16 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">
                Our Process
              </h2>
              <p className="text-gray-600">The GBA Way</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-[#04A790] text-white p-6 sm:p-8 rounded-lg text-center">
                <div className="w-full flex justify-center align-center p-6 undefined text-3xl sm:text-4xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-file-up w-7 h-7"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M12 12v6"></path>
                    <path d="m15 15-3-3-3 3"></path>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4">DESIGN</h3>
                <p className="text-xs sm:text-sm">
                  Upload your design files to the Hub-Quote Engine. Get a
                  minimum quote within seconds and the best price in one
                  business day.
                </p>
              </div>
              <div className="bg-gray-100 text-black p-6 sm:p-8 rounded-lg text-center">
                <div className="w-full flex justify-center align-center p-6 undefined text-3xl sm:text-4xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-file-up w-7 h-7"
                  >
                    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                    <path d="M17 18h1"></path>
                    <path d="M12 18h1"></path>
                    <path d="M7 18h1"></path>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4">
                  MANUFACTURE
                </h3>
                <p className="text-xs sm:text-sm">
                  Select the best quote for price, quality, and timeline. Our
                  trusted team will create high-quality mechanical parts for you
                  in just days!
                </p>
              </div>
              <div className="bg-[#04A790] text-white p-6 sm:p-8 rounded-lg text-center">
                <div className="w-full flex justify-center align-center p-6 undefined text-3xl sm:text-4xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-file-up w-7 h-7"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4">QUALITY</h3>
                <p className="text-xs sm:text-sm">
                  Our expert engineers perform rigorous quality control to
                  ensure accurate and reliable parts from the start.
                </p>
              </div>
              <div className="bg-gray-100 text-black p-6 sm:p-8 rounded-lg text-center">
                <div className="w-full flex justify-center align-center p-6 undefined text-3xl sm:text-4xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-file-up w-7 h-7"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                    <path d="M15 18H9"></path>
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle cx="17" cy="18" r="2"></circle>
                    <circle cx="7" cy="18" r="2"></circle>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4">DELIVERY</h3>
                <p className="text-xs sm:text-sm">
                  Our proprietary software ensures timely delivery and
                  continuous communication throughout the project lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components We Serve Section */}
      <section className="py-12 sm:py-16 bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black mb-8 lg:mb-12">
              Components We Serve
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
              {[
                {
                  title: "Aerospace Components",
                  image: "/Assets/machine-components/aerospace.jpg",
                },
                {
                  title: "Automotive Components",
                  image: "/Assets/machine-components/automotive.jpg",
                },
                {
                  title: "Defence Components",
                  image: "/Assets/machine-components/defence.jpg",
                },
                {
                  title: "Electronics Components",
                  image: "/Assets/machine-components/electronics.jpeg",
                },
                {
                  title: "Railways Components",
                  image: "/Assets/machine-components/railways.jpeg",
                },
                {
                  title: "Robotics Components",
                  image: "/Assets/machine-components/robotics.jpg",
                },
              ].map((industry, index) => (
                <div key={index} className="text-center">
                  <div className="h-24 sm:h-32 relative mb-3 sm:mb-4">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold text-xs sm:text-sm text-gray-800">
                    {industry.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dive Deeper Section */}
      <section className="bg-black text-white w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-64 lg:h-auto">
            <Image
              src="/Assets/DiveDeeper-Bj1J6FsE.jpg"
              alt="Team collaboration meeting"
              fill
              className="object-cover"
            />
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-[#04A790]"></div>
          </div>
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Dive Deeper
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              We're here to help! Contact us to collaborate on your next project
              and discover how our precision machining and manufacturing
              excellence can elevate your industry.
            </p>
            <ContactNavButton className="border border-white text-white px-6 sm:px-8 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors w-fit text-sm sm:text-base">
              GET QUOTE
            </ContactNavButton>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-16 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-2 sm:p-3 rounded-t-lg inline-block mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold px-4 sm:px-6">
                Vision
              </h2>
            </div>
            <div className="space-y-6 sm:space-y-8 max-w-6xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="text-2xl sm:text-3xl text-[#04A790] mt-1">▶</span>
                <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed">
                  Customer satisfaction and business growth through a combination of total quality and continuous improvement philosophy.
                </p>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="text-2xl sm:text-3xl text-[#04A790] mt-1">▶</span>
                <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed">
                  Continual improvement in product & process technology and improved/reduced cycle time of entire process from order entry to product shipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
