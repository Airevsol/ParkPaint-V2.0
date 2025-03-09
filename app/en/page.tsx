import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Park Patch & Paint | Interior Painting Services in Sherwood Park",
  description: "Professional interior painting services in Sherwood Park and surrounding areas. Walls, ceilings, doors, window trim, and baseboards painting. We exclusively use premium Benjamin Moore paints.",
  keywords: "interior painting, Sherwood Park, Edmonton, walls painting, ceiling painting, doors painting, window trim painting, baseboards painting",
};

export default function EnHome() {
  // Define services with proper types
  const services = [
    // ... existing services ...
  ];

  // Define testimonials with proper types
  const testimonials = [
    {
      name: "Joel Holden",
      location: "Sherwood Park",
      text: "Park Patch & Paint transformed our living room with their exceptional painting service. The attention to detail and professionalism was outstanding!"
    },
    {
      name: "Sharon Morton",
      location: "Sherwood Park",
      text: "I was impressed by how quickly and efficiently they completed the job. The quality of work exceeded my expectations. Highly recommend!"
    },
    {
      name: "Emily Rodriguez",
      location: "St. Albert",
      text: "The team was punctual, respectful, and did an amazing job with our kitchen cabinets. They look brand new! Will definitely use their services again."
    }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden dot-grid">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-fadeIn">
              <div className="decorative-line"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-brand-blue mb-6">
                <span className="gradient-text">Ambition</span> in Every Stroke
              </h1>
              <p className="text-lg mb-8 text-gray-700 max-w-xl">
                At Park Patch & Paint, we believe in pushing the limits of quality and professionalism. 
                Our mission is to transform homes in Sherwood Park and surrounding areas with precision, 
                care, and premium materials.
              </p>
              <Link href="/en/contact" className="btn-primary inline-block">
                Get Your Free Quote
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fadeIn delay-200">
              <div className="relative w-full max-w-md flex items-center justify-center -translate-y-16">
                <div className="absolute w-72 h-72 bg-accent-light rounded-full opacity-20 -z-10"></div>
                <Image 
                  src="/images/Logo.png" 
                  alt="Park Patch & Paint Logo" 
                  width={400}
                  height={400}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 section-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <span className="text-brand-red font-semibold uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl font-bold text-brand-blue mt-2">Our Premium Services</h2>
            <div className="mx-auto decorative-line mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="enhanced-card p-8 animate-fadeIn delay-100">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Walls Painting</h3>
              <p className="mb-4 text-gray-600">Transform your living spaces with our expert wall painting services. We exclusively use premium Benjamin Moore paints for superior results.</p>
              <Link href="/en/services/walls-painting" className="btn-minimal inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="enhanced-card p-8 animate-fadeIn delay-200">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Ceiling Painting</h3>
              <p className="mb-4 text-gray-600">Refresh your ceilings with our professional painting services for a complete room transformation.</p>
              <Link href="/en/services/ceiling-painting" className="btn-minimal inline-flex items-center">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="enhanced-card p-8 animate-fadeIn delay-300">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 13a1 1 0 011-1h14a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Trim & Detail Work</h3>
              <p className="mb-4 text-gray-600">Enhance your home with our detailed painting for doors, window trim, and baseboards.</p>
              <Link href="/en/services" className="btn-minimal inline-flex items-center">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 48-Hour Policy Section */}
      <section className="py-16 md:py-24 bg-brand-blue relative diagonal-accent">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full translate-x-20 translate-y-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-4 text-black">48-Hour Response Guarantee</h2>
          <div className="decorative-line bg-black mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-black">
            We guarantee a response within 48 hours of your first contact—because "Ambition is the Mission" starts with respecting your time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-brand-red bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-blue">Quick Response</h3>
              <p className="text-gray-700">We'll get back to you within 48 hours of your initial inquiry.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-brand-red bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-blue">Detailed Quote</h3>
              <p className="text-gray-700">Receive a comprehensive and transparent quote for your project.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-brand-red bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-blue">Satisfaction Guaranteed</h3>
              <p className="text-gray-700">We're not satisfied until you're completely happy with our work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-white corner-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <span className="text-brand-red font-semibold uppercase tracking-wider">Where We Work</span>
            <h2 className="text-4xl font-bold text-brand-blue mt-2">Areas We Serve</h2>
            <div className="mx-auto decorative-line mt-4"></div>
          </div>
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 section-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <span className="text-brand-red font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl font-bold text-brand-blue mt-2">Don't Just Take Our Word For It</h2>
            <div className="mx-auto decorative-line mt-4"></div>
            <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
              Here's what our satisfied customers have to say about our painting services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="enhanced-card p-8 animate-fadeIn"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-red bg-opacity-20 flex items-center justify-center text-brand-red mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                <div className="flex text-brand-red">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subtle Divider */}
      <div className="subtle-divider"></div>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden dot-grid">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-brand-blue"></div>
        <div className="container mx-auto px-4 text-center animate-fadeIn">
          <h2 className="text-4xl font-bold text-brand-blue mb-6">Ready to Transform Your Space?</h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-700">
            Contact us today for a free quote on your interior painting project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
      </section>
    </div>
  );
} 