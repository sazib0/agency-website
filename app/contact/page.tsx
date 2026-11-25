"use client";

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from '@emailjs/browser';
import { IMAGES } from "@/lib/constants/images";

import { MapPin, Phone, Mail, Clock, Send, Database, Cloud, Shield, Cpu, Globe } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const floatingIcons = [
  { icon: <Database className="h-8 w-8" />, delay: "0s" },
  { icon: <Cloud className="h-8 w-8" />, delay: "1s" },
  { icon: <Shield className="h-8 w-8" />, delay: "2s" },
  { icon: <Cpu className="h-8 w-8" />, delay: "3s" },
  { icon: <Globe className="h-8 w-8" />, delay: "4s" }
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await emailjs.send(
        'service_bp0kxhm', // Replace with your EmailJS service ID
        'template_cubmr8h', // Replace with your EmailJS template ID
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        'nVy9gumLubhKeyK-z' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-8 md:mt-8" >
      {/* Hero Section */}
      <section className="relative min-h-[30vh] md:min-h-[40vh] py-16 flex items-center overflow-hidden"  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        {/* Animated Background */}
        <div className="absolute opacity-80 inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 bg-[length:400%_400%] animate-[gradientFlow_15s_ease-in-out_infinite]">
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
          <h1 className="text-5xl font-bold mb-6 mt-4 text-white">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Get in touch with our team. We&#39;re here to help and answer any questions you might have.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 relative" >
                  <div style={{
                  backgroundImage: `url(${IMAGES.backgrounds.contact})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}>
        <div className="container mx-auto px-4 " >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message..." 
                            className="min-h-[150px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                  variant="outline"
                    type="submit" 
                    className="w-full hover:bg-gray-300/10 hover:border-blue-400 "
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="mb-8">
                  Have questions? We&#39;d love to hear from you. Send us a message and we&#39;ll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="h-6 w-6 text-blue-600" />,
                    title: "Visit Us",
                    content: "Dhaka, Bangladesh",
                  },
                  {
                    icon: <Phone className="h-6 w-6 text-blue-600" />,
                    title: "Call Us",
                    content: "+8801XXXX",
                  },
                  {
                    icon: <Mail className="h-6 w-6 text-blue-600" />,
                    title: "Email Us",
                    content: "gikra.info@gmail.com",
                  },
                  {
                    icon: <Clock className="h-6 w-6 text-blue-600" />,
                    title: "Business Hours",
                    content: "Sunday - Thursday: 9:00 AM - 6:00 PM",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-800">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 rounded overflow-hidden opacity-80">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.527837765117!2d90.38926877406178!3d23.800664878590525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c64b259c85cb%3A0xc64bdf6b17d5143f!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"

                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}