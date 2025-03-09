import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full translate-x-20 translate-y-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold mb-6 relative inline-block text-black">
              Park Patch & Paint
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-brand-red"></span>
            </h3>
            <p className="mb-4 text-black">"Ambition is the Mission"</p>
            <p className="text-sm text-black mb-6">Professional interior painting services in Sherwood Park and surrounding areas.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61560191889559&mibextid=wwXIfr&rdid=kIaEzu7eqF0Phi4h&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18UaLteLrA%2F%3Fmibextid%3DwwXIfr#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-brand-red transition-colors duration-300 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="animate-fadeIn delay-100">
            <h3 className="text-xl font-bold mb-6 relative inline-block text-black">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-red"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/en/services/walls-painting" className="text-black hover:text-brand-red transition-colors duration-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Walls Painting
                </Link>
              </li>
              <li>
                <Link href="/en/services/ceiling-painting" className="text-black hover:text-brand-red transition-colors duration-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Ceiling Painting
                </Link>
              </li>
              <li>
                <Link href="/en/services/doors-painting" className="text-black hover:text-brand-red transition-colors duration-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Doors Painting
                </Link>
              </li>
              <li>
                <Link href="/en/services/windows-painting" className="text-black hover:text-brand-red transition-colors duration-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Windows Painting
                </Link>
              </li>
              <li>
                <Link href="/en/services/baseboards-painting" className="text-black hover:text-brand-red transition-colors duration-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Baseboards Painting
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="animate-fadeIn delay-200">
            <h3 className="text-xl font-bold mb-6 relative inline-block text-black">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-red"></span>
            </h3>
            <p className="mb-4 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-brand-red flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-black">info@parkpatchandpaint.ca</span>
            </p>
            <p className="mb-6 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-brand-red flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-black">Serving Sherwood Park and surrounding areas</span>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm">
          <p className="text-black">&copy; {new Date().getFullYear()} Park Patch & Paint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 