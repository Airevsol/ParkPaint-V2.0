import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getServiceById, services } from "../../../../lib/data";

type Props = {
  params: { serviceId: string }
};

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceById(params.serviceId);
  
  if (!service) {
    return {
      title: "Service Not Found | Park Patch & Paint",
    };
  }
  
  return {
    title: `${service.title} | Park Patch & Paint`,
    description: `Professional ${service.title.toLowerCase()} services in Sherwood Park and surrounding areas. ${service.shortDescription}`,
    keywords: `${service.title.toLowerCase()}, interior painting, Sherwood Park, Edmonton, Benjamin Moore paints, exclusive painting services`,
  };
}

export function generateStaticParams() {
  return services.map(service => ({
    serviceId: service.id,
  }));
}

export default function ServicePage({ params }: Props) {
  const service = getServiceById(params.serviceId);
  
  if (!service) {
    notFound();
  }
  
  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-blue relative z-10">{service.title}</h1>
            <div className="h-1 w-24 bg-brand-red mx-auto mt-6 mb-2"></div>
            <div className="h-0.5 w-48 bg-brand-blue mx-auto mb-8 opacity-50"></div>
          </div>
        </header>
        
        {/* 48-Hour Policy Section */}
        <div className="mb-16 bg-brand-blue p-6 rounded-lg max-w-4xl mx-auto text-center shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-black">48-Hour Response Guarantee</h2>
          <p className="max-w-2xl mx-auto text-black">
            We guarantee a response within 48 hours of your first contact—because "Ambition is the Mission" starts with respecting your time.
          </p>
        </div>
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-lg shadow-md enhanced-card">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-lg mb-6 text-gray-700">{service.longDescription}</p>
              <div className="bg-brand-blue p-4 rounded-lg">
                <p className="font-semibold text-black">We exclusively use Benjamin Moore paints for superior quality and durability.</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-64">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Process Section */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-md enhanced-card">
          <h2 className="text-3xl font-bold text-brand-blue mb-6 text-center relative inline-block">
            Our Process
            <div className="h-1 w-16 bg-brand-red absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <div className="max-w-3xl mx-auto mt-10">
            <ol className="space-y-8">
              {service.process.map((step, index) => (
                <li key={index} className="flex items-start">
                  <div className="relative mr-6 flex-shrink-0">
                    <div className="absolute inset-0 bg-white rounded-full transform scale-110 shadow-md"></div>
                    <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-brand-red" style={{ boxShadow: '0 0 0 2px #003756' }}>
                      <span className="text-brand-blue font-bold text-lg">{index + 1}</span>
                    </div>
                    {index < service.process.length - 1 && (
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-brand-red via-brand-blue to-transparent"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-700 text-lg">{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-md enhanced-card">
          <h2 className="text-3xl font-bold text-brand-blue mb-6 text-center relative inline-block">
            Benefits
            <div className="h-1 w-16 bg-brand-red absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-10">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start group">
                <div className="relative mr-4 flex-shrink-0">
                  <div className="absolute inset-0 bg-white rounded-full transform scale-110 shadow-sm group-hover:shadow-md transition-all duration-300"></div>
                  <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-brand-red group-hover:border-brand-red transition-all duration-300" style={{ boxShadow: '0 0 0 2px #003756' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 text-lg pt-1.5">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Locations Section */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-md enhanced-card">
          <h2 className="text-3xl font-bold text-brand-blue mb-6 text-center relative inline-block">
            Service Locations
            <div className="h-1 w-16 bg-brand-red absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <p className="text-center mb-8 mt-10 text-gray-700">We provide {service.title.toLowerCase()} services in the following locations:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
            <Link href={`/en/locations/sherwood-park`} className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors shadow-sm hover:shadow-md enhanced-card">
              <span className="font-semibold text-brand-blue text-lg">Sherwood Park</span>
            </Link>
            <Link href={`/en/locations/edmonton`} className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors shadow-sm hover:shadow-md enhanced-card">
              <span className="font-semibold text-brand-blue text-lg">Edmonton</span>
            </Link>
            <Link href={`/en/locations/st-albert`} className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors shadow-sm hover:shadow-md enhanced-card">
              <span className="font-semibold text-brand-blue text-lg">St. Albert</span>
            </Link>
            <Link href={`/en/locations/fort-saskatchewan`} className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors shadow-sm hover:shadow-md enhanced-card">
              <span className="font-semibold text-brand-blue text-lg">Fort Saskatchewan</span>
            </Link>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-12 mb-8">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">Ready to Transform Your Space?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700">
            Contact us today for a free quote on your {service.title.toLowerCase()} project.
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