"use client";

import { Award, Users, Briefcase, GraduationCap, Building2, Database, Cloud, Shield, Cpu, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const floatingIcons = [
  { icon: <Database className="h-6 w-6 md:h-8 md:w-8" />, delay: "0s" },
  { icon: <Cloud className="h-6 w-6 md:h-8 md:w-8" />, delay: "1s" },
  { icon: <Shield className="h-6 w-6 md:h-8 md:w-8" />, delay: "2s" },
  { icon: <Cpu className="h-6 w-6 md:h-8 md:w-8" />, delay: "3s" },
  { icon: <Globe className="h-6 w-6 md:h-8 md:w-8" />, delay: "4s" }
];

export default function AboutPage() {
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
                <path
                  className="network-line"
                  d="M0 20h40M20 0v40"
                  stroke="white"
                  strokeWidth="0.5"
                  fill="none"
                />
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
                  left: `${15 + (index * 20)}%`,
                  top: `${20 + (index * 10)}%`,
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 mt-4 text-white">About TechCorp</h1>
          <p className="text-base md:text-lg lg:text-xl text-blue-100 max-w-2xl">
            Leading the digital transformation journey for enterprises worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Mission</h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                To empower businesses through innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="h-8 w-8 md:h-12 md:w-12 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-lg md:text-xl">Excellence in Service</h3>
                  <p className="text-sm md:text-base text-gray-600">Committed to delivering exceptional results</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <Card>
                <CardContent className="p-4 md:p-6">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mb-3 md:mb-4" />
                  <h3 className="font-semibold text-base md:text-lg mb-2">Client Focus</h3>
                  <p className="text-sm md:text-base text-gray-600">Your success is our priority</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 md:p-6">
                  <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mb-3 md:mb-4" />
                  <h3 className="font-semibold text-base md:text-lg mb-2">Expertise</h3>
                  <p className="text-sm md:text-base text-gray-600">Industry-leading knowledge</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 md:p-6">
                  <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mb-3 md:mb-4" />
                  <h3 className="font-semibold text-base md:text-lg mb-2">Innovation</h3>
                  <p className="text-sm md:text-base text-gray-600">Cutting-edge solutions</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 md:p-6">
                  <Building2 className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mb-3 md:mb-4" />
                  <h3 className="font-semibold text-base md:text-lg mb-2">Integrity</h3>
                  <p className="text-sm md:text-base text-gray-600">Trust and transparency</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Moosa Tanzina",
                role: "Chief Executive Officer",
                image: "https://avatar.iran.liara.run/username?username=Moosa+Tanzina"
              },
              {
                name: "Zarif Saddam",
                role: "Chief Technology Officer",
                image: "https://avatar.iran.liara.run/username?username=Zarif+Saddam"
              },
              {
                name: "Kaif Joynal",
                role: "Chief Operations Officer",
                image: "https://avatar.iran.liara.run/username?username=Kaif+Joynal"
              }
            ].map((member) => (
              <Card key={member.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-lg md:text-xl mb-1">{member.name}</h3>
                  <p className="text-sm md:text-base text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}