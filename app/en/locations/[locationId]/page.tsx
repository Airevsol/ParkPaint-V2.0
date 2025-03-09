import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getLocationById, locations, services } from "../../../../lib/data";

type Props = {
  params: { locationId: string }
};

export function generateMetadata({ params }: Props): Metadata {
  const location = getLocationById(params.locationId);
  
  if (!location) {
    return {
      title: "Location Not Found | Park Patch & Paint",
    };
  }
  
  return {
    title: `Interior Painting Services in ${location.title} | Park Patch & Paint`,
    description: `Professional interior painting services in ${location.title}, ${location.province}. Walls, ceilings, doors, window trim, and baseboards painting with premium Benjamin Moore paints.`,
    keywords: `interior painting, ${location.title}, ${location.province}, walls painting, ceiling painting, doors painting, window trim painting, baseboards painting, exclusive Benjamin Moore paints`,
  };
}

export function generateStaticParams() {
  return locations.map(location => ({
    locationId: location.id,
  }));
}

export default function LocationPage({ params }: Props) {
  const location = getLocationById(params.locationId);
  
  if (!location) {
    notFound();
  }
  
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-brand-blue mb-8 text-center">
          Interior Painting Services in {location.title}, {location.province}
        </h1>
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-lg mb-6">
                Looking for professional interior painting services in {location.title}? 
                Park Patch & Paint delivers exceptional quality with our expert team and we exclusively use premium Benjamin Moore paints.
              </p>
              <div className="bg-brand-blue text-white p-4 rounded-lg">
                <p className="font-semibold">Serving {location.title} and surrounding areas with premium interior painting services.</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-64">
                <Image 
                  src="/images/interiorpaint.jpg" 
                  alt={`Interior Painting in ${location.title}`} 
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* About Section */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-brand-blue mb-6 text-center">
            About Our {location.title} Painting Services
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-6">
              Park Patch & Paint is a premier interior painting company serving {location.title} and surrounding areas. 
              Our mission is to transform homes with precision, care, and premium materials. 
              "Ambition is the Mission" drives us to deliver top-tier results through expert preparation, 
              flawless execution, and exclusively using Benjamin Moore paints.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-brand-blue mb-3">Why Choose Us</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-brand-red mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Local {location.title} painting experts</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-brand-red mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Exclusively use premium Benjamin Moore paints</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-brand-red mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Meticulous attention to detail</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-brand-red mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>48-hour response guarantee</p>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-brand-blue mb-3">Our Commitment</h3>
                <p className="mb-4">
                  At Park Patch & Paint, "Ambition is the Mission" drives us to deliver top-tier results for every {location.title} client.
                </p>
                <p>
                  We understand the unique needs of {location.title} homes and businesses, providing customized solutions for lasting beauty.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Section */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-brand-blue mb-6 text-center">
            Our Services in {location.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-blue mb-3">{service.title}</h3>
                <p className="mb-4">{service.shortDescription}</p>
                <Link 
                  href={`/en/services/${service.id}`} 
                  className="text-brand-red font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* 48-Hour Policy Section */}
        <div className="mb-16 bg-brand-blue text-white p-6 rounded-lg max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">48-Hour Response Guarantee</h2>
          <p className="max-w-2xl mx-auto">
            We guarantee a response within 48 hours of your first contact—because "Ambition is the Mission" starts with respecting your time.
          </p>
        </div>
        
        {/* Other Locations Section */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-brand-blue mb-6 text-center">
            We Also Serve
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-center">
              In addition to {location.title}, we provide our professional painting services to these nearby communities:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {locations
                .filter(loc => loc.id !== location.id && !['leduc', 'beaumont', 'spruce-grove', 'stony-plain'].includes(loc.id))
                .map(loc => (
                  <Link 
                    key={loc.id}
                    href={`/en/locations/${loc.id}`} 
                    className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors shadow-sm hover:shadow-md enhanced-card"
                  >
                    <span className="font-semibold text-brand-blue text-lg">{loc.title}</span>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">Ready to Transform Your {location.title} Space?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today for a free quote on your interior painting project in {location.title}.
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