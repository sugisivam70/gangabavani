import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/ai-chatbot";
import GoogleMap from "@/components/google-map";
import Image from "next/image";
import { Mail, Phone, MessageCircle, Wifi, AtSign } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Contact Hero Section */}
      <section className="pt-16 w-full">
        <div className="mx-4 sm:mx-6 lg:mx-8 xl:mx-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* Left Side - Contact Image */}
            <div className="relative bg-gray-900 order-2 lg:order-1 w-full h-48 sm:h-64 md:h-80 lg:h-[22rem] mt-12 flex items-center justify-center">
              <Image
                src="/Assets/ContactUs-gVIwueZL.jpg"
                alt="Contact us - hands on laptop with communication icons"
                fill
                className="object-cover object-center w-full h-full opacity-90"
                sizes="100vw"
                priority
              />
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
              <div className="max-w-lg mx-auto w-full">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Contact Us
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-700">
                    Call us or book an Appointment
                  </h3>
                </div>

                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04A790] focus:border-transparent text-base bg-gray-50"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04A790] focus:border-transparent text-base bg-gray-50"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04A790] focus:border-transparent text-base bg-gray-50"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      placeholder="How can we help?"
                      className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04A790] focus:border-transparent resize-none text-base bg-gray-50"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#04A790] hover:bg-[#048272] text-white py-4 rounded-lg font-semibold transition-colors text-base shadow-lg hover:shadow-xl"
                  >
                    Submit
                  </button>
                </form>

                {/* Contact Information */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <span className="text-base font-medium">
                      gangabhavani7india@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <span className="text-base font-medium">
                      Raju K - +91 7204891239
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="h-96 lg:h-[500px] relative w-full">
        <div className="mx-4 sm:mx-6 lg:mx-8 xl:mx-12 h-full">
          <GoogleMap className="w-full h-full" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
