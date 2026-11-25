"use client";

import { useState, useEffect } from 'react';
import {
  Code,
  Database,
  Cloud,
  Shield,
  Cpu,
  Users,
  Brain,
  Smartphone,
  BarChart,
  Workflow,
  Globe,
  Settings,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ConsultationForm } from "@/components/consultation-form";
import { IMAGES } from "@/lib/constants/images";

type Software = {
  title: string;
  description: string;
  image: string;
  features: string[];
};

const softwareImages = [
  {
    title: "ERP",
    description: "Comprehensive enterprise software solutions",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Scalable Architecture", "Enterprise Integration", "Advanced Security", "24/7 Support"],
  },
  {
    title: "E-commerce",
    description: "Scalable E-commerce infrastructure",
    image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Cloud Migration", "Hybrid Cloud", "Auto Scaling", "Disaster Recovery"],
  },
  {
    title: "AR-VR Real Estate",
    description: "Transform data into actionable insights",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Real-time Analytics", "Predictive Modeling", "Data Visualization", "Custom Reports"],
  },
  {
    title: "Supply Chain",
    description: "Comprehensive enterprise software solutions",
    image: "https://images.unsplash.com/photo-1634638026221-4c1c4cf9f881?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Scalable Architecture", "Enterprise Integration", "Advanced Security", "24/7 Support"],
  },
  {
    title: "CRM",
    description: "Secure and scalable cloud infrastructure",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Cloud Migration", "Hybrid Cloud", "Auto Scaling", "Disaster Recovery"],
  },
  {
    title: "CMS",
    description: "Transform data into actionable insights",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Real-time Analytics", "Predictive Modeling", "Data Visualization", "Custom Reports"],
  },
  {
    title: " Health ERP",
    description: "Comprehensive enterprise software solutions",
    image: "https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Scalable Architecture", "Enterprise Integration", "Advanced Security", "24/7 Support"],
  },
  {
    title: "Financial System",
    description: "Secure and scalable cloud infrastructure",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Cloud Migration", "Hybrid Cloud", "Auto Scaling", "Disaster Recovery"],
  },
  {
    title: "AI",
    description: "Transform data into actionable insights",
    image: "https://images.unsplash.com/photo-1717501218661-0322e4bc4c81?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Real-time Analytics", "Predictive Modeling", "Data Visualization", "Custom Reports"],
  },
  {
    title: "Enterprise Solutions",
    description: "Comprehensive enterprise software solutions",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Scalable Architecture", "Enterprise Integration", "Advanced Security", "24/7 Support"],
  }
];

const floatingIcons = [
  { icon: <Database className="h-6 w-6 md:h-8 md:w-8" />, delay: "0s" },
  { icon: <Cloud className="h-6 w-6 md:h-8 md:w-8" />, delay: "1s" },
  { icon: <Shield className="h-6 w-6 md:h-8 md:w-8" />, delay: "2s" },
  { icon: <Cpu className="h-6 w-6 md:h-8 md:w-8" />, delay: "3s" },
  { icon: <Globe className="h-6 w-6 md:h-8 md:w-8" />, delay: "4s" }
];

export default function ServicesPage() {
  const [selectedSoftware, setSelectedSoftware] = useState<Software | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [consultationOpen, setConsultationOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === softwareImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen mt-8 md:mt-8">
      {/* Hero Section */}
      <section className="relative min-h-[30vh] md:min-h-[40vh] py-16 flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 bg-[length:400%_400%] animate-[gradientFlow_15s_ease-in-out_infinite]">
          {/* Network Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path className="network-line" d="M0 20h40M20 0v40" stroke="white" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
          </svg>

          {/* Floating Icons */}
          <div className="absolute inset-0 overflow-hidden">
            {floatingIcons.map((item, index) => (
              <div
                key={index}
                className="absolute text-white/20 floating-icon"
                style={{
                  left: `${15 + index * 20}%`,
                  top: `${20 + index * 10}%`,
                  animationDelay: item.delay
                }}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="container relative mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Enterprise Solutions & Services
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-8 md:mb-12">
              Comprehensive technology solutions tailored to transform your business and drive innovation.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent hover:bg-white/30 text-sm md:text-base"
              onClick={() => setConsultationOpen(true)}
            >
              Schedule a Consultation
              <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Software Gallery */}
      <section className="py-12 md:py-20 bg-gray-50" style={{
        backgroundImage: `url(${IMAGES.backgrounds.contact})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4">
          {/* Desktop Rhombus Gallery */}
          <div className="hidden md:block relative">
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-3 gap-6 transform -rotate-45">
                {softwareImages.slice(0, 9).map((software, index) => (
                  <div
                    key={index}
                    className={`
                      aspect-square rounded w-52 cursor-pointer transform rotate-0 overflow-hidden 
                      transition-all duration-300 hover:shadow-2xl
                      ${index === 4
                        ? "ring-4 ring-blue-600 ring-offset-4 scale-110"
                        : "hover:scale-105"
                      }
                    `}
                    onClick={() => setSelectedSoftware(software)}
                  >
                    <div className="w-full h-full transform -rotate-45 scale-150">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={software.image}
                        alt={software.title}
                        className="w-full h-full rounded object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                          <p className="text-sm transform rotate-45 text-center">
                            {software.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Carousel */}
          <div className="md:hidden">
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {softwareImages.map((software, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div
                        className="aspect-[4/3] relative rounded-xl overflow-hidden cursor-pointer shadow-lg"
                        onClick={() => setSelectedSoftware(software)}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={software.image}
                          alt={software.title}
                          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h3 className="text-lg md:text-xl font-semibold mb-2">{software.title}</h3>
                            <p className="text-sm text-gray-200">{software.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {software.features.slice(0, 2).map((feature, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs px-2 py-1 bg-white/20 rounded-full backdrop-blur-sm"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? softwareImages.length - 1 : prev - 1))}
              >
                <ChevronLeft className="h-4 w-4 text-gray-800" />
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                onClick={() => setCurrentSlide((prev) => (prev === softwareImages.length - 1 ? 0 : prev + 1))}
              >
                <ChevronRight className="h-4 w-4 text-gray-800" />
              </button>

              {/* Progress Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {softwareImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? "bg-blue-600 w-4" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Solutions Section */}
      <section className="py-12 md:py-20 bg-fixed" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {softwareSolutions.map((solution) => (
              <Card key={solution.title} className="hover:shadow-lg transition-shadow bg-white/90 dark:bg-gray-900/90">
                <CardHeader>
                  <div className="mb-4 text-blue-600">{solution.icon}</div>
                  <CardTitle className="text-lg md:text-xl mb-2">{solution.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <ArrowRight className="h-4 w-4 md:h-5 md:w-5 mr-2 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-12 md:py-20 bg-gray-0" style={{
        backgroundImage: `url(${IMAGES.backgrounds.professional})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Professional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {professionalServices.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 text-blue-600">{service.icon}</div>
                  <CardTitle className="text-lg md:text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.offerings.map((offering) => (
                      <li key={offering} className="flex items-start">
                        <ArrowRight className="h-4 w-4 md:h-5 md:w-5 mr-2 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-gray-600">{offering}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Details Modal */}
      <Dialog open={!!selectedSoftware} onOpenChange={() => setSelectedSoftware(null)}>
        <DialogContent className="sm:max-w-2xl w-[95%] p-4 sm:p-6 rounded-lg backdrop-blur-xl bg-white/90 dark:bg-gray-900/90">
          {selectedSoftware && (
            <>
              <DialogHeader className="space-y-3">
                <DialogTitle className="text-xl md:text-2xl font-heading">
                  {selectedSoftware.title}
                </DialogTitle>
                <DialogDescription className="text-sm md:text-base">
                  {selectedSoftware.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 md:mt-6 space-y-4 md:space-y-6">
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedSoftware.image}
                    alt={selectedSoftware.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold font-heading">Key Features:</h3>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {selectedSoftware.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 p-2 md:p-3 rounded-lg">
                        <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-blue-600 shrink-0" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end pt-4">
                  <Button
                    onClick={() => setSelectedSoftware(null)}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <ConsultationForm open={consultationOpen} onOpenChange={setConsultationOpen} />
    </main>
  );
}

const softwareSolutions = [
  {
    icon: <Code className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Custom Software Development",
    description: "Tailored software solutions built to address your unique business challenges",
    features: [
      "Enterprise Applications",
      "Web & Mobile Solutions",
      "API Development & Integration",
      "Legacy System Modernization",
    ],
  },
  {
    icon: <Database className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Data & Analytics Solutions",
    description: "Transform your data into actionable insights",
    features: [
      "Business Intelligence",
      "Data Warehousing",
      "Predictive Analytics",
      "Real-time Analytics Dashboards",
    ],
  },
  {
    icon: <Cloud className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure and applications",
    features: [
      "Cloud Migration",
      "Cloud-Native Development",
      "Hybrid Cloud Solutions",
      "Cloud Optimization",
    ],
  },
  {
    icon: <Smartphone className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Mobile Solutions",
    description: "Enterprise-grade mobile applications for iOS and Android",
    features: [
      "Native App Development",
      "Cross-platform Solutions",
      "Mobile Enterprise Apps",
      "App Modernization",
    ],
  },
  {
    icon: <Brain className="h-6 w-6 md:h-8 md:w-8" />,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by advanced AI technologies",
    features: [
      "Predictive Modeling",
      "Natural Language Processing",
      "Computer Vision",
      "AI-powered Automation",
    ],
  },
  {
    icon: <Shield className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Security Solutions",
    description: "Comprehensive cybersecurity solutions for enterprise protection",
    features: [
      "Security Assessment",
      "Threat Detection",
      "Identity Management",
      "Compliance Solutions",
    ],
  },
];

const professionalServices = [
  {
    icon: <Workflow className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Digital Transformation",
    description: "Strategic guidance for your digital evolution",
    offerings: [
      "Digital Strategy Consulting",
      "Process Optimization",
      "Technology Roadmap",
      "Change Management",
    ],
  },
  {
    icon: <Settings className="h-6 w-6 md:h-8 md:w-8" />,
    title: "IT Consulting",
    description: "Expert guidance for technology decisions",
    offerings: [
      "Technology Assessment",
      "Architecture Design",
      "Vendor Selection",
      "IT Strategy Development",
    ],
  },
  {
    icon: <Cpu className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Infrastructure Services",
    description: "Robust and reliable IT infrastructure solutions",
    offerings: [
      "Infrastructure Design",
      "Network Solutions",
      "System Integration",
      "24/7 Support",
    ],
  },
  {
    icon: <Globe className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Enterprise Integration",
    description: "Seamless integration of enterprise systems",
    offerings: [
      "API Strategy",
      "System Integration",
      "Middleware Solutions",
      "Integration Architecture",
    ],
  },
  {
    icon: <Users className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Managed Services",
    description: "Comprehensive IT management and support",
    offerings: [
      "Application Management",
      "Infrastructure Management",
      "Security Operations",
      "Help Desk Support",
    ],
  },
  {
    icon: <BarChart className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Business Analytics",
    description: "Data-driven insights for better decisions",
    offerings: [
      "Data Strategy",
      "Analytics Implementation",
      "Performance Monitoring",
      "Reporting Solutions",
    ],
  },
];