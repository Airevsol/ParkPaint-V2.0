import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getServiceAndLocationFromSlug, generateServiceLocationSlugs } from "../../../../lib/data";

type Props = {
  params: { slug: string[] }
};

export function generateMetadata({ params }: Props): Metadata {
  const slugString = params.slug.join('-');
  const data = getServiceAndLocationFromSlug(slugString);
  
  if (!data) {
    return {
      title: "Service Not Found | Park Patch & Paint",
    };
  }
  
  const { service, location } = data;
  
  return {
    title: `${service.title} in ${location.title} | Park Patch & Paint`,
    description: `Professional ${service.title.toLowerCase()} services in ${location.title}, ${location.province}. ${service.shortDescription} Serving ${location.title} and surrounding areas.`,
    keywords: `${service.title.toLowerCase()}, ${location.title}, ${location.province}, interior painting, Benjamin Moore paints, exclusive painting services`,
  };
}

export function generateStaticParams() {
  const paths = generateServiceLocationSlugs()
    .filter(path => path.startsWith('/en/services/') && path.split('/').length === 4 && path.split('/')[3].includes('-'))
    .map(path => {
      const slug = path.split('/')[3];
      return { slug: [slug] };
    });
  
  return paths;
}

export default function ServiceLocationPage({ params }: Props) {
  const slugString = params.slug.join('-');
  const data = getServiceAndLocationFromSlug(slugString);
  
  if (!data) {
    notFound();
  }
  
  const { service, location } = data;
  
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-brand-blue mb-8 text-center">
          {service.title} in {location.title}, {location.province}
        </h1>
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-lg mb-6">
                Looking for professional {service.title.toLowerCase()} services in {location.title}? 
                Park Patch & Paint delivers exceptional quality with our expert team and we exclusively use premium Benjamin Moore paints.
              </p>
              <div className="bg-brand-blue text-white p-4 rounded-lg">
                <p className="font-semibold">Serving {location.title} and surrounding areas with premium interior painting services.</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-64">
                <Image 
                  src={service.image} 
                  alt={`${service.title} in ${location.title}`} 
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Overview */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-brand-blue mb-6 text-center">
            {service.title} Services in {location.title}
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-6">
              Our {service.title.toLowerCase()} services in {location.title} are designed to transform your space with precision and care. 
              {service.longDescription} We serve residential and commercial clients throughout {location.title} with our premium painting services.
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
        
        {/* Process Section */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-brand-blue mb-6 text-center">Our Process</h2>
          <div className="max-w-3xl mx-auto">
            <ol className="space-y-4">
              {service.process.map((step, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-brand-red text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-brand-blue mb-6 text-center">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="text-brand-red mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>{benefit}</p>
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
        
        {/* Local Service Section */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-brand-blue mb-6 text-center">
            Serving {location.title} and Surrounding Areas
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-6 text-center">
              We're proud to provide professional {service.title.toLowerCase()} services to {location.title} and nearby communities.
              Our local expertise ensures we understand the specific needs of homes and businesses in the area.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {location.id !== 'sherwood-park' && (
                <Link href="/en/locations/sherwood-park" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-semibold text-brand-blue">Sherwood Park</span>
                </Link>
              )}
              {location.id !== 'edmonton' && (
                <Link href="/en/locations/edmonton" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-semibold text-brand-blue">Edmonton</span>
                </Link>
              )}
              {location.id !== 'st-albert' && (
                <Link href="/en/locations/st-albert" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-semibold text-brand-blue">St. Albert</span>
                </Link>
              )}
              {location.id !== 'fort-saskatchewan' && (
                <Link href="/en/locations/fort-saskatchewan" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-semibold text-brand-blue">Fort Saskatchewan</span>
                </Link>
              )}
              {location.id !== 'leduc' && (
                <Link href="/en/locations/leduc" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-semibold text-brand-blue">Leduc</span>
                </Link>
              )}
              {location.id !== 'beaumont' && (
                <Link href="/en/locations/beaumont" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-semibold text-brand-blue">Beaumont</span>
                </Link>
              )}
              {location.id !== 'spruce-grove' && (
                <Link href="/en/locations/spruce-grove" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-semibold text-brand-blue">Spruce Grove</span>
                </Link>
              )}
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">Ready to Transform Your {location.title} Space?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today for a free quote on your {service.title.toLowerCase()} project in {location.title}. 
            We exclusively use premium Benjamin Moore paints for lasting results.
          </p>
          <Link href="/en/contact" className="btn-primary inline-block">
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
} 