import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import WhatsAppButton from "@/components/ai-chatbot";

const components = [
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
];

export default function ComponentsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#e6f7f4] to-[#b2e5db]">
      <Header />
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center bg-gradient-to-r from-[#04A790] via-[#0cc9a3] to-[#0e7c6b] shadow-lg mb-8">
        <div className="absolute inset-0 opacity-60 bg-black"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 drop-shadow-lg tracking-tight">
            Components We Serve
          </h1>
          <p className="text-lg sm:text-2xl font-medium drop-shadow">
            Trusted Manufacturing Partner Across Multiple Sectors
          </p>
        </div>
      </section>
      {/* Industries Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 pb-16">
          {components.map((component, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="h-40 sm:h-56 w-full relative mb-3 sm:mb-4 flex items-center justify-center">
                <Image
                  src={component.image}
                  alt={component.title}
                  fill
                  className="object-cover rounded-lg shadow"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm text-[#047c6b]">
                {component.title}
              </h3>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
