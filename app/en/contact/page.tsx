'use client';

import { useState } from 'react';
import Link from "next/link";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: data.message || 'Your quote request has been submitted. We will contact you within 48 hours.',
        });
        // Reset the form on success
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || 'There was an error submitting your request. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-blue relative z-10">Contact Us</h1>
            <div className="h-1 w-24 bg-brand-red mx-auto mt-6 mb-2"></div>
            <div className="h-0.5 w-48 bg-brand-blue mx-auto mb-8 opacity-50"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for a free quote on your painting project
          </p>
        </header>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-brand-blue mb-4">Get In Touch</h2>
              <p className="mb-6">
                We're here to help with your interior painting needs. Contact us for a free quote or to learn more about our services.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-brand-blue mb-2">Contact Information</h3>
                <p className="mb-2">
                  <strong>Email:</strong> info@parkpatchandpaint.ca
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> (780)-819-2990
                </p>
                <p className="mb-4">
                  <strong>Service Areas:</strong> Sherwood Park, Edmonton, St. Albert, Fort Saskatchewan
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-brand-blue mb-2">48-Hour Response Guarantee</h3>
                <p>
                  We guarantee a response within 48 hours of your first contact—because "Ambition is the Mission" starts with respecting your time.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-brand-blue mb-4">Request a Quote</h2>
              
              {submitStatus.success && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  <p>{submitStatus.message}</p>
                </div>
              )}
              
              {submitStatus.success === false && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                  <p>{submitStatus.message}</p>
                </div>
              )}
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type (Select all that apply)
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="ceiling"
                        name="projectType"
                        value="ceiling"
                        className="h-4 w-4 text-brand-red focus:ring-brand-red border-gray-300 rounded"
                      />
                      <label htmlFor="ceiling" className="ml-2 text-sm text-gray-700">
                        Ceiling Painting
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="walls"
                        name="projectType"
                        value="walls"
                        className="h-4 w-4 text-brand-red focus:ring-brand-red border-gray-300 rounded"
                      />
                      <label htmlFor="walls" className="ml-2 text-sm text-gray-700">
                        Walls Painting
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="doors"
                        name="projectType"
                        value="doors"
                        className="h-4 w-4 text-brand-red focus:ring-brand-red border-gray-300 rounded"
                      />
                      <label htmlFor="doors" className="ml-2 text-sm text-gray-700">
                        Doors Painting
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="windows"
                        name="projectType"
                        value="windows"
                        className="h-4 w-4 text-brand-red focus:ring-brand-red border-gray-300 rounded"
                      />
                      <label htmlFor="windows" className="ml-2 text-sm text-gray-700">
                        Window Trim
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="baseboards"
                        name="projectType"
                        value="baseboards"
                        className="h-4 w-4 text-brand-red focus:ring-brand-red border-gray-300 rounded"
                      />
                      <label htmlFor="baseboards" className="ml-2 text-sm text-gray-700">
                        Baseboards Painting
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get Quote
                    </>
                  )}
                </button>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  By submitting this form, you'll receive a response within 48 hours as part of our guarantee.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 