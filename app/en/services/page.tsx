import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Interior Painting Services | Park Patch & Paint",
  description: "Professional interior painting services in Sherwood Park and surrounding areas. Walls, ceilings, doors, window trim, and baseboards painting with premium Benjamin Moore paints.",
  keywords: "interior painting services, Sherwood Park, Edmonton, walls painting, ceiling painting, doors painting, window trim painting, baseboards painting",
};

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-blue relative z-10">Our Services</h1>
            <div className="h-1 w-24 bg-brand-red mx-auto mt-6 mb-2"></div>
            <div className="h-0.5 w-48 bg-brand-blue mx-auto mb-4 opacity-50"></div>
          </div>
        </header>
        
        {/* 48-Hour Guarantee Banner */}
        <div className="max-w-4xl mx-auto mb-16 bg-brand-blue text-white p-6 rounded-lg text-center shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-black">48-Hour Response Guarantee</h2>
          <p className="max-w-2xl mx-auto text-black">We guarantee a response within 48 hours of your first contact—because "Ambition is the Mission" starts with respecting your time.</p>
        </div>
        
        {/* Services Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Walls Painting */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden enhanced-card h-full flex flex-col">
              <div className="relative h-48">
                <Image 
                  src="/images/wallpainting.png" 
                  alt="Walls Painting" 
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div>
                  <h2 className="text-2xl font-bold text-brand-blue mb-3">Walls Painting</h2>
                  <p className="text-gray-600 mb-4">
                    Transform your living spaces with our expert wall painting services. We deliver flawless finishes that enhance your home's beauty.
                  </p>
                </div>
                <div className="mt-auto">
                  <Link href="/en/services/walls-painting" className="btn-minimal inline-flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Ceiling Painting */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden enhanced-card h-full flex flex-col">
              <div className="relative h-48">
                <Image 
                  src="/images/roofpainting.jpg" 
                  alt="Ceiling Painting" 
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div>
                  <h2 className="text-2xl font-bold text-brand-blue mb-3">Ceiling Painting</h2>
                  <p className="text-gray-600 mb-4">
                    Refresh your ceilings with our professional painting services for a complete room transformation.
                  </p>
                </div>
                <div className="mt-auto">
                  <Link href="/en/services/ceiling-painting" className="btn-minimal inline-flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Doors Painting */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden enhanced-card h-full flex flex-col">
              <div className="relative h-48">
                <Image 
                  src="/images/doorpainting.jpg" 
                  alt="Doors Painting" 
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div>
                  <h2 className="text-2xl font-bold text-brand-blue mb-3">Doors Painting</h2>
                  <p className="text-gray-600 mb-4">
                    Enhance the appearance of your interior doors with our professional painting services.
                  </p>
                </div>
                <div className="mt-auto">
                  <Link href="/en/services/doors-painting" className="btn-minimal inline-flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Windows Painting */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden enhanced-card h-full flex flex-col">
              <div className="relative h-48">
                <Image 
                  src="/images/trimpainting.jpg" 
                  alt="Windows Painting" 
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div>
                  <h2 className="text-2xl font-bold text-brand-blue mb-3">Windows Painting</h2>
                  <p className="text-gray-600 mb-4">
                    Revitalize your window trim with our expert painting services for beautiful framing.
                  </p>
                </div>
                <div className="mt-auto">
                  <Link href="/en/services/windows-painting" className="btn-minimal inline-flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Baseboards Painting */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden enhanced-card h-full flex flex-col">
              <div className="relative h-48">
                <Image 
                  src="/images/baseboardpainting.jpg" 
                  alt="Baseboards Painting" 
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div>
                  <h2 className="text-2xl font-bold text-brand-blue mb-3">Baseboards Painting</h2>
                  <p className="text-gray-600 mb-4">
                    Complete your room's transformation with freshly painted baseboards for a crisp finish.
                  </p>
                </div>
                <div className="mt-auto">
                  <Link href="/en/services/baseboards-painting" className="btn-minimal inline-flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Premium Materials */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden enhanced-card h-full flex flex-col">
              <div className="relative h-24 bg-gradient-to-r from-brand-blue to-brand-blue-light flex items-center justify-center">
                <div className="text-white text-center p-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="text-xl font-bold">Premium Materials</h3>
                </div>
              </div>
              <div className="p-6 text-center flex-grow flex flex-col justify-start pt-2">
                <div>
                  <h2 className="text-2xl font-bold text-brand-blue mb-4">Quality Guaranteed</h2>
                  <p className="text-gray-600 mb-5">
                    We exclusively use Benjamin Moore paints for superior coverage, vibrant colors, and long-lasting durability.
                  </p>
                  <div className="flex items-center text-brand-blue justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Superior Coverage</span>
                  </div>
                  <div className="flex items-center text-brand-blue mt-2 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vibrant, Lasting Colors</span>
                  </div>
                  <div className="flex items-center text-brand-blue mt-2 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exceptional Durability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-12 mb-8">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">Ready to Transform Your Space?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700">
            Contact us today for a free quote on your interior painting project.
          </p>
          <Link 
            href="/en/contact" 
            className="bg-brand-red text-black px-8 py-4 rounded-md shadow-lg transform hover:scale-105 transition-all inline-flex items-center justify-center text-lg font-bold border-2 border-brand-red hover:bg-red-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
} 