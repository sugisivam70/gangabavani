import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import WhatsAppButton from "@/components/ai-chatbot";

const machinery = [
  {
    name: "Make-LMW - CNC Turning Machine",
    image: "/Assets/machines/make-lmw.jpg",
    specs: ["Capacity: D - 160 MM"],
  },
  {
    name: "Make-ACE - CNC Turning Machine",
    image: "/Assets/machines/make-ace.jpg",
    specs: ["Capacity: D - 200 MM"],
  },
  {
    name: "Make-BHAGAWANSON - Centerless Grinding Machine",
    image: "/Assets/machines/make-bhagawanson.jpg",
    specs: ["Capacity: DIA - 2 TO 100 MM"],
  },
  {
    name: "TAPPING MACHINE, Make-TMT",
    image: "/Assets/machines/tapping-machine.jpg",
    specs: ["Capacity: M2 TO M14"],
  },
  {
    name: "SINGLE SPINDLE AUTOMATS (TRAUB MACHINE), Make-PMT",
    image: "/Assets/machines/traub-machine.jpg",
    specs: ["Capacity: A25"],
  },
  {
    name: "SINGLE SPINDLE AUTOMATS (TRAUB MACHINE), Make-SGS",
    image: "/Assets/machines/traub-machine2.jpg",
    specs: ["Capacity: A25"],
  },
  {
    name: "SINGLE SPINDLE AUTOMATS (TRAUB MACHINE), Make-PMT",
    image: "/Assets/machines/traub-machine3.jpg",
    specs: ["Capacity: A25"],
  },
  {
    name: "COLD FORGING MACHINE",
    image: "/Assets/machines/cold-forging-machine.jpg",
    specs: ["High-precision cold forging capabilities"],
  },
  {
    name: "THREAD ROLLING MACHINE",
    image: "/Assets/machines/thread-rolling-machine.jpg",
    specs: ["Precision thread rolling operations"],
  },
];

export default function MachinaryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#e6f7f4] to-[#b2e5db]">
      <Header />
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center bg-gradient-to-r from-[#04A790] via-[#0cc9a3] to-[#0e7c6b] shadow-lg mb-8">
        <div className="absolute inset-0 opacity-60 bg-black"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 drop-shadow-lg tracking-tight">
            Our Machinery
          </h1>
          <p className="text-lg sm:text-2xl font-medium drop-shadow">
            Explore our advanced manufacturing equipment
          </p>
        </div>
      </section>
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {machinery.map((machine, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden border border-[#04A790]/20 hover:border-[#04A790]"
            >
              <div className="relative w-full h-56 sm:h-64 bg-[#e6f7f4]">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-cover object-center transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx < 2}
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-[#047c6b] mb-2 text-center">
                  {machine.name}
                </h2>
                <ul className="mb-4 flex flex-col gap-2 text-[#0e7c6b] text-sm text-center">
                  {machine.specs.map((spec, i) => (
                    <li
                      key={i}
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <span className="w-2 h-2 bg-[#04A790] rounded-full inline-block"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex justify-center">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#04A790] to-[#0e7c6b] text-white text-xs font-semibold rounded-full shadow">
                    Advanced
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
