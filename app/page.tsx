"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Server, Shield, Users, Code, Cpu, Globe, Rocket, Award, ChevronRight, Database, Cloud } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { ConsultationForm } from "@/components/consultation-form";
import { AnimatedCounter } from "@/components/animated-counter";
import { IMAGES } from "@/lib/constants/images";

interface LanguageItem {
  country: string;
  flag: string;
  name: string;
}

const languages: LanguageItem[] = [
  { country: "Bangladesh", flag: "bd", name: "গিক্রা" },
  { country: "China", flag: "cn", name: "吉克拉" },
  { country: "Spain", flag: "es", name: "GIKRA" },
  { country: "Brazil", flag: "br", name: "GIKRA" },
  { country: "Russia", flag: "ru", name: "ГИКРА" },
  { country: "Japan", flag: "jp", name: "ギクラ" },
  { country: "Vietnam", flag: "vn", name: "GIKRA" },
  { country: "Turkey", flag: "tr", name: "GIKRA" },
  { country: "South Korea", flag: "kr", name: "기크라" },
  { country: "Germany", flag: "de", name: "GIKRA" },
  { country: "France", flag: "fr", name: "GIKRA" },
  { country: "Italy", flag: "it", name: "GIKRA" }
];

const doubledLanguages = [...languages, ...languages];

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: CardProps) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

function FeatureCard({ icon, title, description }: CardProps) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

function createStars(container: HTMLDivElement) {
  const starCount = 100;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty('--twinkle-duration', `${2 + Math.random() * 3}s`);
    container.appendChild(star);
  }
}

export default function Home() {
  const galaxyRef = useRef<HTMLDivElement>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [particles, setParticles] = useState<Array<{
    left: string;
    top: string;
    width: string;
    height: string;
    animationDelay: string;
    animationDuration: string;
  }>>([]);

  useEffect(() => {
    // Generate particles once on client-side
    const newParticles = Array(20).fill(null).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 4 + 2}px`,
      height: `${Math.random() * 4 + 2}px`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 10 + 5}s`
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 2)  // Toggle between 2 words
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if (galaxyRef.current) {
      createStars(galaxyRef.current);
    }
    return () => {
      if (galaxyRef.current) {
        galaxyRef.current.innerHTML = '';
      }
    };
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % languages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden ">
        {/* Galaxy Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B3B] via-[#1a1a5a] to-[#2b2b8a]">
          <div ref={galaxyRef} className="absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(29,78,216,0.15)_0%,_transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(120,119,198,0.3)_0%,_transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(29,78,216,0.2)_0%,_transparent_40%)]" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-blue-100">
              <span className="block text-3xl sm:text-4xl md:text-5xl mb-2 md:mb-3">INNOVATE</span>
              <span className="bg-clip-text text-3xl sm:text-4xl md:text-5xl text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                INTELLIGENCE
              </span>
            </h1> 
            <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 text-blue-100">
              Leading IT Infrastructure & Security Solutions.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={() => setConsultationOpen(true)}
                className="bg-white text-black hover:bg-blue-50 text-sm md:text-base"
              >
                Schedule a Consultation <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Our Services</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              icon={<Monitor className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />}
              title="Digital Transformation"
              description="Modernize your business with cutting-edge digital solutions and strategies."
            />
            <ServiceCard
              icon={<Server className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />}
              title="Cloud Solutions"
              description="Secure and scalable cloud infrastructure tailored to your needs."
            />
            <ServiceCard
              icon={<Shield className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />}
              title="Cybersecurity"
              description="Protect your assets with advanced security measures and monitoring."
            />
            <ServiceCard
              icon={<Code className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />}
              title="Custom Software"
              description="Bespoke software solutions designed for your specific business requirements."
            />
            <ServiceCard
              icon={<Cpu className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />}
              title="IT Infrastructure"
              description="Robust and reliable infrastructure solutions for modern enterprises."
            />
            <ServiceCard
              icon={<Users className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />}
              title="IT Consulting"
              description="Expert guidance to align technology with your business objectives."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="p-4 md:p-6 rounded-lg backdrop-blur-sm bg-white/10">
              <AnimatedCounter end={500} suffix="+" />
              <div className="text-sm md:text-base text-blue-100 mt-2">Clients Worldwide</div>
            </div>
            <div className="p-4 md:p-6 rounded-lg backdrop-blur-sm bg-white/10">
              <AnimatedCounter end={15} suffix="+" />
              <div className="text-sm md:text-base text-blue-100 mt-2">Industry Covers</div>
            </div>
            <div className="p-4 md:p-6 rounded-lg backdrop-blur-sm bg-white/10">
              <AnimatedCounter end={250} duration={1500} suffix="+" />
              <div className="text-sm md:text-base text-blue-100 mt-2">Own Solutions</div>
            </div>
            <div className="p-4 md:p-6 rounded-lg backdrop-blur-sm bg-white/10">
              <div className="flex items-center justify-center">
                <AnimatedCounter end={24} duration={1000} />
                <span className="text-2xl md:text-4xl font-bold">/</span>
                <AnimatedCounter end={7} duration={1000} />
              </div>
              <div className="text-sm md:text-base text-blue-100 mt-2">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Why Choose Us</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Experience excellence in IT services with our proven track record
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={<Rocket className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />}
              title="Industry Expertise"
              description="Years of experience delivering enterprise IT solutions across various industries."
            />
            <FeatureCard
              icon={<Globe className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />}
              title="Global Reach"
              description="Serving clients in over 30 countries with localized expertise and support."
            />
            <FeatureCard
              icon={<Award className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />}
              title="Certified Excellence"
              description="Certified processes and industry-leading security standards."
            />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50 mb-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-8"></p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {[
              {
                icon: <img src={IMAGES.company.client.cloudTech} alt="Cloud Tech" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />,
                name: "ReCT"
              },
              {
                icon: <img src={IMAGES.company.client.secureSystems} alt="Secure Systems" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />,
                name: "Ansible"
              },
              {
                icon: <img src={IMAGES.company.client.globalConnect} alt="Global Connect" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />,
                name: "Linux"
              },
              {
                icon: <img src={IMAGES.company.client.techSolutions} alt="Tech Solutions" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />,
                name: "OpenStack"
              },
              {
                icon: <img src={IMAGES.company.client.raspberryPi} alt="Cloud Tech" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />,
                name: "Raspberry Pi"
              },
              {
                icon: <img src={IMAGES.company.client.google} alt="Secure Systems" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />,
                name: "Google"
              },
            ].map((company, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                {company.icon}
                <span className="text-sm font-medium text-gray-500">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue max-w-2xl mx-auto">
            Let&#39;s discuss how our expertise can help you achieve your technology goals and drive innovation.
          </p>
        </div>
      </section>

      {/* Language/Region Section */}
      <section className="py-8 md:py-16 relative overflow-hidden">
        {/* Gradient Background with Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800">
          {/* Animated Flashlight Effect */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 animate-flashlight bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {particles.map((particle, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: particle.left,
                  top: particle.top,
                  width: particle.width,
                  height: particle.height,
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '50%',
                  animationDelay: particle.animationDelay,
                  animationDuration: particle.animationDuration
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <div className="text-center">
            {/* Mobile View - Single Item with Animation */}
            <div className="md:hidden">
              <div className="flex justify-center items-center min-h-[60px] transition-all duration-500">
                <div
                  key={currentIndex}
                  className="flex items-center animate-fadeIn"
                >
                  <img
                    src={`https://flagcdn.com/${languages[currentIndex].flag}.svg`}
                    alt={languages[currentIndex].country}
                    className="w-16 md:w-16 mr-3 rounded shadow-lg"
                  />
                  <span className="text-lg md:text-xl text-white font-medium">
                    {languages[currentIndex].name}
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop View - Horizontal Scroll */}
            <div className="hidden md:block overflow-hidden relative">
              <div className="flex animate-scroll">
                {doubledLanguages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center px-6 py-3 flex-shrink-0"
                  >
                    <img
                      src={`https://flagcdn.com/${lang.flag}.svg`}
                      alt={lang.country}
                      className="w-8 mr-3 rounded shadow-lg"
                    />
                    <span className="text-base text-white font-medium whitespace-nowrap">
                      {lang.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from organizations we&#39;ve helped transform through technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The team's expertise in digital transformation helped us modernize our entire infrastructure. Exceptional service!",
                author: "Sarah Chen",
                position: "CTO, TechGrowth Inc",
                image: "https://avatar.iran.liara.run/username?username=Sarah+Chen"
              },
              {
                quote: "Their cybersecurity solutions have given us peace of mind. They're proactive and always ahead of potential threats.",
                author: "Michael Rodriguez",
                position: "CEO, SecureFlow Systems",
                image: "https://avatar.iran.liara.run/username?username=Michael+Rodriguez"
              },
              {
                quote: "Outstanding cloud migration support. They made what seemed impossible happen smoothly and efficiently.",
                author: "Emily Thompson",
                position: "Director of IT, CloudScale",
                image: "https://avatar.iran.liara.run/username?username=Emily+Thompson"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <div className="mb-6">
                      {/* Quote Icon */}
                      <svg 
                        className="h-8 w-8 text-blue-600 mb-4" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationForm 
        open={consultationOpen} 
        onOpenChange={setConsultationOpen} 
      />
    </div>
  );
}