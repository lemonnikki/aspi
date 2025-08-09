
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Menu, X, ChevronDown, Facebook, Instagram, Twitter, Linkedin, Loader2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ProgressIndicator from "@/components/ProgressIndicator";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { sendContactEmail } from "@/lib/email";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceRequired: "",
      projectDetails: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await sendContactEmail(data);
      toast.success("Message sent successfully! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again or contact us directly.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll to anchor when landing with hash or when hash changes
  useEffect(() => {
    const hash = location.hash || window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <div className="min-h-screen relative overflow-hidden bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-8">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex bg-white rounded-full px-8 py-4 items-center justify-between shadow-lg w-full">
              {/* Logo */}
              <img src="/logo.png" alt="Steelworks Logo" className="h-8 w-auto ml-0" />
            
                            {/* Navigation Links */}
              <div className="flex gap-8 text-gray-700 text-base">
                <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                      About
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 bg-white border border-gray-200 shadow-lg">
                    <DropdownMenuItem 
                      className="hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                      onClick={() => navigate('/vision-mission')}
                    >
                      Vision / Mission
                    </DropdownMenuItem>

                  </DropdownMenuContent>
                </DropdownMenu>
                <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
                <button 
                  onClick={() => navigate('/projects')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Projects
                </button>
                
                
                                <a href="#faqs" className="hover:text-blue-600 transition-colors">FAQs</a>
                <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
              </div>
              
              {/* Contact Information */}
              <div className="hidden lg:flex items-center gap-6 text-gray-700 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 9894429728</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>aspire@aisgroup.net.in</span>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Nav */}
          <div className="md:hidden">
            <div className="bg-white rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
              <img src="/logo.png" alt="Steelworks Logo" className="h-6 w-auto" />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black hover:bg-black/10"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-black/10">
              <div className="flex flex-col space-y-4 text-black/80">
                <a href="#" className="hover:text-black transition-colors">Home</a>
               
                <div className="space-y-2">
                  <div className="font-medium">About</div>
                  <div className="ml-4 space-y-2">
                    <button 
                      onClick={() => navigate('/vision-mission')}
                      className="block hover:text-blue-600 transition-colors text-left w-full"
                    >
                      Vision / Mission
                    </button>

                  </div>
                </div>
                <a href="#services" className="hover:text-black transition-colors">Services</a>
                <button 
                  onClick={() => navigate('/projects')}
                  className="block hover:text-blue-600 transition-colors text-left w-full"
                >
                  Projects
                </button>
                <a href="#faqs" className="hover:text-black transition-colors">FAQs</a>
                <a href="#contact" className="hover:text-black transition-colors">Contact</a>
              </div>
            </div>
          )}
        </nav>

                {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src="/plant.jpg" 
              alt="Plant" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
                    <div className="flex-1 flex items-center justify-center relative z-10">
            <div className="w-full max-w-7xl px-8 flex flex-col justify-center items-center">
              {/* Text Content */}
              <div className="flex-1 text-center">
                {/* Main Heading */}
                <div className="pt-32 lg:pt-32 mb-8">
                  <h1 className="text-white font-normal text-[8vw] lg:text-[4vw] leading-[1.1] tracking-tight" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Reliable Industrial <br/>
                    <span className="text-blue-300">Solutions for the Steel Industry.</span>
                  </h1>
                </div>
                {/* Description and Buttons */}
                <div className="max-w-2xl w-full mx-auto">
                  <p className="text-white/90 text-sm lg:text-lg mb-8 max-w-[48ch] mx-auto">
                    Aspire Industrial Solutions LLP brings over 5 years of experience in managing and operating steel plants, offering manpower, equipment rentals, and technical expertise to major steel sector projects.
                  </p>
                  
                  
                  
                  <div className="flex justify-center">
                    <Button 
                      className="bg-white text-black hover:bg-white/90 rounded-xl px-8 py-4 text-base font-semibold shadow-lg"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* About Us Section */}
      <section id="about" className="relative z-10 bg-gray-50 text-black py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side: Text Content */}
            <div className="flex-1">
              {/* About Us Label */}
              <div className="mb-4">
                <span className="text-black text-sm font-light tracking-wider uppercase" style={{fontFamily: 'Manrope, sans-serif'}}>About Us</span>
              </div>
              
              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6 text-blue-600" style={{fontFamily: 'Manrope, sans-serif'}}>
                Driven by Expertise. Trusted for Excellence.
              </h2>
              
              {/* Description */}
              <div className="space-y-6 text-black/80 text-lg leading-relaxed mb-8" style={{fontFamily: 'Manrope, sans-serif'}}>
                <p>
                  Aspire Industrial Solutions LLP, established in 2019, is an ISO 9001:2015 certified company providing high-quality, safe, and cost-effective industrial services across the steel sector.
                </p>
                <p className="text-black/70">
                  We specialize in Coke Oven Heating, Commissioning, Operation & Maintenance, along with services for Blast Furnaces, Pellet Plants, Rolling Mills, and more. With a workforce of over 2000 professionals, Aspire proudly supports leading clients like JSW, Bhushan Power & Steel, Kirloskar Ferrous, and Jindal SAW.
                </p>
                <p className="text-black/70">
                  Our expert team combines deep technical knowledge with a strong focus on safety, efficiency, and client satisfaction—making Aspire a trusted partner in industrial growth.
                </p>
              </div>
              
              {/* CTA Button */}
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-8 py-3 text-base font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </div>
            
            {/* Right Side: Image */}
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-lg">
                <img 
                  src="/herobg.jpg" 
                  alt="Hero background image" 
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision and Our Statement Section */}
      <section className="relative z-10 bg-white text-black py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Header */}
            <div className="col-span-12 md:col-span-8">
              <div className="mb-6">
                <span className="text-black/60 text-sm font-medium tracking-wider uppercase">Our Vision</span>
              </div>
              <div className="flex justify-between items-start">
                <h2 className="text-4xl md:text-5xl font-light leading-tight font-bold text-blue-600">
                  Our Vision
                </h2>
                
              </div>
              <p className="text-black/70 text-lg mt-6 max-w-2xl">
                Our vision drives every project—integrity, innovation, excellence, and sustainability—creating spaces that inspire, endure, and enhance lives.
              </p>
            </div>
          </div>
          
          {/* Bento Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Vision Statement */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-black">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Vision Statement</h3>
                <p className="text-gray-600 text-sm">To be leader in operation and mechanical maintenance, Raw material handling and other support services to coke, steel, energy and metal industries.</p>
              </div>
            </div>

            {/* Card 2 - Mission Statement */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-black">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mission Statement</h3>
                <p className="text-gray-600 text-sm">Extending best possible services to all our clients at the most economical price, excelling in relevant field of work with improved workmanship and sincerity.</p>
              </div>
            </div>

            {/* Card 3 - Our Goals */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-black">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Goals</h3>
                <p className="text-gray-600 text-sm">Safe working environment, superior quality, client satisfaction, continues growth with prudent financial management and employee welfare.</p>
              </div>
            </div>

            {/* Card 4 - Our Values */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-black md:col-span-2">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
                <p className="text-gray-600 text-sm">Safety and the well being of employees, clients and communities. Building on our proud heritage of integrity, excellence, responsibilities and commitment to our clients.</p>
              </div>
            </div>

            {/* Card 5 - Quality Commitment */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-black md:col-span-1">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Commitment</h3>
                <p className="text-gray-600 text-sm">Make continues improvement an integral part of the way we operate and create a working environment that encourages openness, trust, communication, team work & innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="services" className="relative z-10 bg-gray-50 text-black py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <div className="mb-6">
              <span className="text-black/60 text-sm font-medium tracking-wider uppercase">Services</span>
            </div>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-4xl md:text-5xl font-light leading-tight text-blue-600">
                Areas of Expertise
              </h2>
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-none px-6 py-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
               Connect to Us
              </Button>
            </div>
            <p className="text-black/70 text-lg max-w-2xl">
            At Aspire Industrial Solutions LLP, we bring deep technical know-how and hands-on experience across a wide range of industrial operations. Our core expertise lies in the following areas:
            </p>
          </div>

          {/* Project Cards */}
          <div className="space-y-8">
            {/* Project 1 - Coke Oven Services */}
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg">
              <div className="h-96 bg-gradient-to-r from-gray-200 to-gray-300 relative">
                <div className="absolute inset-0 bg-[url('/cokeoven.jpg')] bg-cover bg-center"></div>
                <div className="absolute top-6 left-6 bg-white rounded-xl p-6 max-w-sm shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                   
                   
                  </div>
                  <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 bg-[url('/cokeoven.jpg')] bg-cover bg-center"></div>
                  <h3 className="text-xl font-semibold mb-2">Coke Oven Services</h3>
                  <p className="text-black/70 text-sm mb-4">
                  Heating, Commissioning, Operation & Maintenance (O&M).

Expertise in both Recovery and Non-Recovery battery systems.

Refractory repair and maintenance.
                  </p>
                 
                </div>
              </div>
            </div>

            {/* Project 2 - Blast Furnace & Sinter Plant Operations */}
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg">
              <div className="h-96 bg-gradient-to-r from-green-100 to-green-200 relative">
                <div className="absolute inset-0 bg-[url('/blastfurnance.jpg')] bg-cover bg-center"></div>
                <div className="absolute top-6 left-6 bg-white rounded-xl p-6 max-w-sm shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    
                   
                  </div>
                  <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 bg-[url('/blastfurnance.jpg')] bg-cover bg-center"></div>
                  <h3 className="text-xl font-semibold mb-2">Blast Furnace & Sinter Plant Operations</h3>
                  <p className="text-black/70 text-sm mb-4">
                  Skilled manpower and technical support for smooth and efficient operation.

Preventive and breakdown maintenance.
                  </p>
                 
                </div>
              </div>
            </div>

            {/* Project 3 - Rolling Mills & Pellet Plants */}
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg">
              <div className="h-96 bg-gradient-to-r from-blue-100 to-blue-200 relative">
                <div className="absolute inset-0 bg-[url('/rollingmills.jpg')] bg-cover bg-center"></div>
                <div className="absolute top-6 left-6 bg-white rounded-xl p-6 max-w-sm shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    
                   
                  </div>
                  <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 bg-[url('/rollingmills.jpg')] bg-cover bg-center"></div>
                  <h3 className="text-xl font-semibold mb-2">Rolling Mills & Pellet Plants</h3>
                  <p className="text-black/70 text-sm mb-4">
                  Complete operation and maintenance services for rolling mills.

Pellet plant operations with quality control expertise.

Equipment optimization and performance enhancement.
                  </p>
                 
                </div>
              </div>
            </div>

            {/* Project 4 - Industrial Support Services */}
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg">
              <div className="h-96 bg-gradient-to-r from-orange-100 to-orange-200 relative">
                <div className="absolute inset-0 bg-[url('/support.jpg')] bg-cover bg-center"></div>
                <div className="absolute top-6 left-6 bg-white rounded-xl p-6 max-w-sm shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    
                   
                  </div>
                  <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 bg-[url('/support.jpg')] bg-cover bg-center"></div>
                  <h3 className="text-xl font-semibold mb-2">Industrial Support Services</h3>
                  <p className="text-black/70 text-sm mb-4">
                  Equipment and vehicle rental.

Manpower supply – skilled, semi-skilled, and technical staff.

Railway wagon loading/unloading, industrial painting, and civil support.
                  </p>
                 
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Quality Policy Section */}
      <section className="relative z-10 bg-gray-50 text-black py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="mb-6">
                <span className="text-black text-sm font-medium tracking-wider uppercase">YOUR BENEFIT</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-blue-600 leading-tight" style={{fontFamily: 'Manrope, sans-serif'}}>
                Quality Policy
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Aspire Industrial Solutions LLP, quality is not just a standard — it's a commitment. We aim to deliver excellence through structured systems, skilled people, and a continuous drive for improvement. Our quality approach is built on the following pillars:
              </p>
              
              {/* Quality Policy Image */}
              <div className="w-full h-96 rounded-xl overflow-hidden">
                <img 
                  src="/quality.jpg" 
                  alt="Quality Policy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Quality Policy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 - Service Quality */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-black">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Quality</h3>
                <p className="text-gray-600 text-sm">
                  We actively manage and participate in ventures that enhance profitability while minimizing risks through a diverse client base.
                </p>
              </div>

              {/* Card 2 - Best in Service */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-black">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Best in Service</h3>
                <p className="text-gray-600 text-sm">
                  We strive to be the benchmark in industrial service quality, driven by the dedication of our management and staff at all sites.
                </p>
              </div>

              {/* Card 3 - Flexible Engagements */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-black">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Flexible Engagements</h3>
                <p className="text-gray-600 text-sm">
                  We operate a formal quality management system tailored to client needs. We invest in our people through training and development, recognizing them as our most valuable resource and fostering teamwork across all levels.
                </p>
              </div>

              {/* Card 4 - Vision Focused */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-black">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Vision Focused</h3>
                <p className="text-gray-600 text-sm">
                  We align our quality efforts with our business objectives—taking full responsibility for the delivery and improvement of services provided to our clients.
                </p>
              </div>

              {/* Card 5 - Self Evaluation */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-black md:col-span-2">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Self Evaluation</h3>
                <p className="text-gray-600 text-sm">
                  We lead by example, ensuring that our quality policy is well understood, consistently implemented, and regularly reviewed across the organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="relative z-10 bg-gray-50 text-black py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-16">
            <div className="mb-6">
              <span className="text-black/60 text-sm font-medium tracking-wider uppercase">FAQ</span>
            </div>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Frequently Asked Questions
              </h2>
              <Button 
                variant="outline" 
                className="border-black text-black hover:bg-black hover:text-white rounded-none px-6 py-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>
            <p className="text-black/70 text-lg">
              Find answers to common questions about our industrial services, steel plant operations, manpower solutions, quality standards, and safety protocols.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">01</span>
                <span className="text-lg font-medium">What industrial services does Aspire Industrial Solutions offer?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                We specialize in Coke Oven Services (Heating, Commissioning, O&M), Blast Furnace & Sinter Plant Operations, Rolling Mills & Pellet Plants, and comprehensive Industrial Support Services including equipment rental, manpower supply, and technical support for steel sector projects.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">02</span>
                <span className="text-lg font-medium">What is your experience in the steel industry?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                Aspire Industrial Solutions LLP has over 5 years of experience in managing and operating steel plants. We have successfully supported major clients like JSW, Bhushan Power & Steel, Kirloskar Ferrous, and Jindal SAW with our workforce of over 2000 professionals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">03</span>
                <span className="text-lg font-medium">Do you provide manpower services for steel plants?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                Yes, we provide skilled, semi-skilled, and technical staff for steel sector projects. Our team includes professionals with expertise in coke oven operations, blast furnace maintenance, rolling mill operations, and other specialized industrial processes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">04</span>
                <span className="text-lg font-medium">What quality standards do you maintain?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                We are ISO 9001:2015 certified and maintain strict quality standards across all our services. Our quality policy focuses on service excellence, continuous improvement, and delivering safe, efficient, and cost-effective solutions to our clients.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">05</span>
                <span className="text-lg font-medium">How do you ensure safety in industrial operations?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                Safety is our top priority. We implement comprehensive safety protocols, provide regular training to our workforce, and maintain strict adherence to industrial safety standards. Our commitment to safety extends to employees, clients, and the communities where we operate.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">06</span>
                <span className="text-lg font-medium">How can I get started with your services?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                Contact us through our website or call us directly. We'll schedule a consultation to understand your specific requirements, discuss our capabilities, and provide a customized solution for your steel plant operations and maintenance needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="relative z-10 bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Company Info */}
            <div>
              <h3 className="text-2xl font-light mb-6 text-blue-500" style={{fontFamily: 'Manrope, sans-serif'}}>Aspire Industrial Solutions LLP</h3>
              <p className="text-white/80 mb-8 max-w-md font-light" style={{fontFamily: 'Manrope, sans-serif'}}>
                ISO 9001:2015 certified company providing high-quality, safe, and cost-effective industrial services across the steel sector. With over 2000 professionals, we support leading steel industry clients.
              </p>
              
              <div className="mb-8">
                <h4 className="text-white font-light mb-4" style={{fontFamily: 'Manrope, sans-serif'}}>Contact Information</h4>
                <div className="space-y-3 text-white/80 font-light" style={{fontFamily: 'Manrope, sans-serif'}}>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>9894429728 / 7781807711/ 9952632404</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>aspire@aisgroup.net.in</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Flat No A-1, Chola Chendhur Apartment
Azhgar, Nagar, Nagarmalai Main Road, Alagapuram, Pudur,
Dist- Salem, Tamilnadu, Pin – 636016</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <h3 className="text-2xl font-light mb-6 text-blue-500" style={{fontFamily: 'Manrope, sans-serif'}}>Request Industrial Services</h3>
              <p className="text-white/80 mb-8 font-light" style={{fontFamily: 'Manrope, sans-serif'}}>
                Get in touch with us for your steel plant operations, maintenance, and industrial support needs. Our expert team is ready to provide customized solutions.
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80 text-sm font-light" style={{fontFamily: 'Manrope, sans-serif'}}>
                            First name
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your first name" 
                              className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80 text-sm font-light" style={{fontFamily: 'Manrope, sans-serif'}}>
                            Last name
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your last name" 
                              className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80 text-sm font-light" style={{fontFamily: 'Manrope, sans-serif'}}>
                            Phone number
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your phone number" 
                              className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80 text-sm font-light" style={{fontFamily: 'Manrope, sans-serif'}}>
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your email address" 
                              type="email"
                              className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="serviceRequired"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 text-sm font-light" style={{fontFamily: 'Manrope, sans-serif'}}>
                          Service required
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Coke Oven, Blast Furnace, Rolling Mills, etc." 
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="projectDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 text-sm font-light" style={{fontFamily: 'Manrope, sans-serif'}}>
                          Project details
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your industrial requirements" 
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-white text-black hover:bg-white/90 rounded-xl py-3 text-base font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Request'
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          {/* Footer Links - Single Row at Bottom */}
          <div className="mt-16 pt-8 border-t border-white/20">
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
