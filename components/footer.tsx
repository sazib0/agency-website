"use client";

import Link from 'next/link';
import { Globe, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { GalaxyGenerator } from '@/components/galaxy-generator';
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
        >
          <source src="https://cdn.coverr.co/videos/coverr-abstract-digital-network-connections-2584/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-indigo-900/95" />
      </div>

      {/* Galaxy Effect Overlay */}
      <div className="absolute inset-0">
        <GalaxyGenerator className="opacity-30" />
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-sm text-gray-200">
              Leading the digital transformation journey for enterprises worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <span className="text-sm text-gray-200">+8801XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <span className="text-sm text-gray-200">gikra.info@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Solutions', 'Case Studies', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-sm text-gray-200 hover:text-blue-300 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {[
                'Digital Transformation',
                'Cloud Solutions',
                'Cybersecurity',
                'IT Infrastructure',
                'Software Development'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-sm text-gray-200 hover:text-blue-300 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Stay Updated</h3>
            <p className="text-sm text-gray-200 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/10 text-white placeholder-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-200">
              © {currentYear} Gikra. All rights reserved.
            </div>
<div className="flex space-x-6">
  {[
    { icon: <Facebook className="h-5 w-5 hidden" />, label: 'Facebook', link: 'https://www.facebook.com/yourprofile' },
    { icon: <Twitter className="h-5 w-5 hidden" />, label: 'Twitter', link: 'https://twitter.com/yourprofile' },
    { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn', link: 'https://www.linkedin.com/company/gikra' },
    { icon: <Instagram className="h-5 w-5" />, label: 'Instagram', link: 'https://www.instagram.com/gikraofficial' }
  ].map((social) => (
    <Link
      key={social.label}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-200 hover:text-blue-300 transition-colors"
      aria-label={social.label}
    >
      {social.icon}
    </Link>
  ))}
</div>
          </div>
        </div>
      </div>
    </footer>
  );
}