import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Park Patch & Paint",
  description: "Learn about Park Patch & Paint, founded by Theo Moyo in Sherwood Park, Alberta. Discover our story, our commitment to quality, and what makes us different.",
  keywords: "Park Patch & Paint, about us, Theo Moyo, Sherwood Park, interior painting, Benjamin Moore paints, professional painters Alberta",
};

export default function AboutPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-20 text-center">
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-6xl font-bold text-brand-blue relative z-10">About Us</h1>
              <div className="h-1 w-24 bg-brand-red mx-auto mt-6 mb-2"></div>
              <div className="h-0.5 w-48 bg-brand-blue mx-auto mb-8 opacity-50"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our story of transforming homes with precision, care, and premium materials
            </p>
          </header>
          
          <section className="mb-20 animate-fadeIn">
            <h2 className="text-3xl font-bold text-brand-blue mb-8 relative inline-block">
              Ambition in Every Stroke
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-red"></span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-10 items-center mb-8">
              <div className="md:w-2/3">
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  At Park Patch & Paint, we don't just paint homes—we transform them. Founded by Theo Moyo in Sherwood Park, Alberta, 
                  our company was born from a simple yet powerful belief: a fresh coat of paint can do more than cover a wall—it can inspire, 
                  elevate, and redefine a space.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Theo's vision was clear from the start: to bring ambition to every project, delivering 
                  unmatched quality and professionalism to every home we touch. That's why our motto, <strong>"Ambition is the Mission,"</strong> isn't 
                  just words—it's the heartbeat of everything we do.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-20 bg-gray-50 p-10 rounded-lg shadow-md animate-fadeIn delay-100 section-accent">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Our Story</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Theo Moyo started Park Patch & Paint with a paintbrush in one hand and a dream in the other. Having seen firsthand 
              how a well-painted room could breathe new life into a home, he set out to build a company that prioritizes precision, 
              care, and excellence.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Based in Sherwood Park, Theo grew the business from a one-man operation into a trusted name 
              across Alberta, serving families and homeowners with a commitment to durability, beauty, and seamless finishes. 
              Today, Park Patch & Paint stands as a testament to his relentless drive and dedication to craftsmanship.
            </p>
          </section>
          
          <section className="mb-20 animate-fadeIn delay-200">
            <h2 className="text-3xl font-bold text-brand-blue mb-8">What Sets Us Apart</h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-700">
              We believe that painting is an art—and we're the artists your home deserves. Specializing in walls, ceilings, doors, 
              window trim, and baseboards, we approach every surface with the same meticulous attention to detail. Here's what makes us different:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="enhanced-card p-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red bg-opacity-20 flex items-center justify-center text-brand-red mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-blue mb-3">48-Hour Response Guarantee</h3>
                    <p className="text-gray-700 leading-relaxed">We respect your time, responding to every inquiry within two business days with clear next steps.</p>
                  </div>
                </div>
              </div>
              
              <div className="enhanced-card p-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red bg-opacity-20 flex items-center justify-center text-brand-red mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-blue mb-3">Expert Preparation & Detailing</h3>
                    <p className="text-gray-700 leading-relaxed">No shortcuts—our process ensures smooth, long-lasting results, from sanding to priming.</p>
                  </div>
                </div>
              </div>
              
              <div className="enhanced-card p-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red bg-opacity-20 flex items-center justify-center text-brand-red mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-blue mb-3">Exclusively Using Benjamin Moore Paints</h3>
                    <p className="text-gray-700 leading-relaxed">We use the best, bringing you superior coverage, vibrant colors, and durability you can count on.</p>
                  </div>
                </div>
              </div>
              
              <div className="enhanced-card p-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red bg-opacity-20 flex items-center justify-center text-brand-red mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-blue mb-3">Flawless Execution</h3>
                    <p className="text-gray-700 leading-relaxed">Every stroke is intentional, every finish polished—because your home deserves nothing less.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-20 bg-gray-50 p-10 rounded-lg shadow-md animate-fadeIn delay-300 corner-accent">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Our Commitment to You</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              At Park Patch & Paint, ambition isn't just about the work we do—it's about the trust we build. Theo and our team are 
              driven by a passion for transforming spaces and a promise to deliver results that exceed expectations.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Whether it's a single room or an entire home, we bring the same energy and expertise to every job, ensuring your vision comes to life 
              with stunning, professional results.
            </p>
          </section>
          
          <section className="mb-20 animate-fadeIn delay-400">
            <h2 className="text-3xl font-bold text-brand-blue mb-8">Serving Sherwood Park and Beyond</h2>
            <p className="text-lg leading-relaxed mb-10 text-gray-700">
              From our roots in Sherwood Park, we've expanded to serve communities across Alberta, including Edmonton, St. Albert, 
              Fort Saskatchewan, and more. Wherever you are, we're ready to bring ambition to your doorstep—one stroke at a time.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto">
              <Link href="/en/locations/sherwood-park" className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors shadow-sm hover:shadow-md animate-fadeIn delay-100 enhanced-card">
                <span className="font-semibold text-brand-blue text-lg">Sherwood Park</span>
              </Link>
              <Link href="/en/locations/edmonton" className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors shadow-sm hover:shadow-md animate-fadeIn delay-150 enhanced-card">
                <span className="font-semibold text-brand-blue text-lg">Edmonton</span>
              </Link>
              <Link href="/en/locations/st-albert" className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors shadow-sm hover:shadow-md animate-fadeIn delay-200 enhanced-card">
                <span className="font-semibold text-brand-blue text-lg">St. Albert</span>
              </Link>
              <Link href="/en/locations/fort-saskatchewan" className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors shadow-sm hover:shadow-md animate-fadeIn delay-250 enhanced-card">
                <span className="font-semibold text-brand-blue text-lg">Fort Saskatchewan</span>
              </Link>
            </div>
          </section>
          
          <section className="mb-10 bg-brand-blue text-center p-12 rounded-lg shadow-lg relative overflow-hidden dot-grid animate-fadeIn delay-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full translate-x-20 translate-y-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-black mb-6">Let's Get Started</h2>
              <p className="text-lg mb-10 text-black max-w-2xl mx-auto leading-relaxed">
                Ready to transform your home with a team that lives by "Ambition is the Mission"? Reach out today and see why 
                Park Patch & Paint is the choice for homeowners who demand the best.
              </p>
              
              <Link 
                href="/en/contact" 
                className="bg-brand-red text-black px-8 py-4 rounded-md shadow-lg transform hover:scale-105 transition-all inline-flex items-center justify-center text-lg font-bold border-2 border-brand-red hover:bg-red-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 