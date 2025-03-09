export const services = [
  {
    id: 'walls-painting',
    title: 'Walls Painting',
    shortDescription: 'Transform your living spaces with our expert wall painting services. We exclusively use premium Benjamin Moore paints.',
    longDescription: 'Transform your living spaces with our expert wall painting services. We take pride in delivering flawless finishes that enhance the beauty of your home.',
    process: [
      'Thorough surface preparation including cleaning, patching, and sanding',
      'Exclusively using premium Benjamin Moore paints for superior coverage and durability',
      'Expert application techniques for a smooth, even finish',
      'Meticulous attention to detail around trim, outlets, and fixtures',
      'Final inspection to ensure perfect results'
    ],
    benefits: [
      'Enhanced aesthetic appeal of your living spaces',
      'Protection against wear and tear',
      'Improved indoor air quality with low-VOC paints',
      'Increased property value',
      'Long-lasting, washable finishes'
    ],
    image: '/images/wallpainting.png'
  },
  {
    id: 'ceiling-painting',
    title: 'Ceiling Painting',
    shortDescription: 'Refresh your ceilings with our professional painting services for a complete room transformation.',
    longDescription: 'Refresh your ceilings with our professional painting services. A newly painted ceiling can brighten your space and complete your room\'s transformation.',
    process: [
      'Proper protection of floors, furniture, and fixtures',
      'Surface preparation including repair of cracks and imperfections',
      'Application of premium ceiling paint from Benjamin Moore exclusively',
      'Special attention to corners and edges for clean lines',
      'Thorough cleanup after project completion'
    ],
    benefits: [
      'Brighter, more open-feeling rooms',
      'Concealment of stains and imperfections',
      'Improved lighting efficiency',
      'Enhanced overall room appearance',
      'Reduced dust and allergen buildup'
    ],
    image: '/images/roofpainting.jpg'
  },
  {
    id: 'doors-painting',
    title: 'Doors Painting',
    shortDescription: 'Enhance the appearance of your interior doors with our professional painting services.',
    longDescription: 'Enhance the appearance of your interior doors with our professional painting services. We deliver smooth, durable finishes that stand up to daily use.',
    process: [
      'Removal of hardware for a clean, professional finish',
      'Thorough sanding and preparation of door surfaces',
      'Exclusively using premium Benjamin Moore paints',
      'Careful attention to detail on panels and edges',
      'Proper reinstallation of hardware'
    ],
    benefits: [
      'Refreshed appearance of your interior',
      'Protection against fingerprints and smudges',
      'Increased durability for high-touch surfaces',
      'Consistent look throughout your home',
      'Enhanced architectural details'
    ],
    image: '/images/doorpainting.jpg'
  },
  {
    id: 'windows-painting',
    title: 'Windows Painting',
    shortDescription: 'Revitalize your window trim with our expert painting services for beautiful framing.',
    longDescription: 'Revitalize your window trim with our expert painting services. We provide precise, clean lines that frame your windows beautifully.',
    process: [
      'Careful masking and protection of glass and surrounding areas',
      'Thorough preparation including cleaning, sanding, and priming',
      'Exclusively using premium Benjamin Moore paints for lasting results',
      'Precise brush work for clean, sharp lines',
      'Final inspection to ensure perfect finish'
    ],
    benefits: [
      'Enhanced window appearance and curb appeal',
      'Protection against moisture and weather damage',
      'Improved energy efficiency with proper sealing',
      'Consistent look with other trim elements',
      'Extended lifespan of window frames'
    ],
    image: '/images/trimpainting.jpg'
  },
  {
    id: 'baseboards-painting',
    title: 'Baseboards Painting',
    shortDescription: 'Complete your room\'s transformation with freshly painted baseboards for a crisp, clean finish.',
    longDescription: 'Complete your room\'s transformation with freshly painted baseboards. Our attention to detail ensures a crisp, clean finish that enhances your space.',
    process: [
      'Thorough cleaning and preparation of baseboard surfaces',
      'Careful masking of floors and walls to prevent overspray',
      'Exclusively using premium Benjamin Moore paints',
      'Precise brush work for clean lines and edges',
      'Final inspection to ensure consistent finish throughout'
    ],
    benefits: [
      'Polished, finished look for your rooms',
      'Protection against scuffs and damage',
      'Easier cleaning and maintenance',
      'Seamless transition between walls and floors',
      'Enhanced architectural details'
    ],
    image: '/images/baseboardpainting.jpg'
  }
];

export const locations = [
  {
    id: 'sherwood-park',
    title: 'Sherwood Park',
    province: 'Alberta',
    description: 'Professional interior painting services in Sherwood Park, Alberta. We serve residential and commercial clients with premium quality painting.',
    isMainLocation: true
  },
  {
    id: 'edmonton',
    title: 'Edmonton',
    province: 'Alberta',
    description: 'Expert interior painting services in Edmonton, Alberta. Transform your home or business with our professional painting team.',
    isMainLocation: false
  },
  {
    id: 'st-albert',
    title: 'St. Albert',
    province: 'Alberta',
    description: 'Quality interior painting services in St. Albert, Alberta. Our team delivers exceptional results for homes and businesses.',
    isMainLocation: false
  },
  {
    id: 'fort-saskatchewan',
    title: 'Fort Saskatchewan',
    province: 'Alberta',
    description: 'Professional interior painting services in Fort Saskatchewan, Alberta. Enhance your space with our expert painting services.',
    isMainLocation: false
  }
];

export function generateServiceLocationSlugs() {
  const slugs = [];
  
  for (const service of services) {
    // Individual service pages
    slugs.push(`/en/services/${service.id}`);
    
    // Service + location pages
    for (const location of locations) {
      slugs.push(`/en/services/${service.id}-${location.id}`);
    }
  }
  
  // Individual location pages
  for (const location of locations) {
    slugs.push(`/en/locations/${location.id}`);
  }
  
  return slugs;
}

export function getServiceById(id: string) {
  return services.find(service => service.id === id);
}

export function getLocationById(id: string) {
  return locations.find(location => location.id === id);
}

export function getServiceAndLocationFromSlug(slug: string) {
  // For combined service-location pages like "walls-painting-edmonton"
  const parts = slug.split('-');
  
  if (parts.length < 2) {
    return null;
  }
  
  // The last part is the location
  const locationId = parts[parts.length - 1];
  // Everything before the last part is the service
  const serviceId = parts.slice(0, parts.length - 1).join('-');
  
  const service = getServiceById(serviceId);
  const location = getLocationById(locationId);
  
  if (!service || !location) {
    return null;
  }
  
  return { service, location };
} 