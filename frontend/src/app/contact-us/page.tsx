import React from 'react';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-muted-foreground text-lg mb-8">Get in touch with us for inquiries and support.</p>
        
        <div className="mt-12 bg-secondary/10 p-8 rounded-2xl border border-border">
          <h2 className="text-2xl font-semibold mb-4">Careers</h2>
          <p className="mb-4">Want to join our team? We are always looking for talented individuals.</p>
          <Link href="/contact-us/careers" className="text-primary hover:underline font-medium">
            View Job Openings
          </Link>
        </div>
      </div>
    </div>
  );
}
