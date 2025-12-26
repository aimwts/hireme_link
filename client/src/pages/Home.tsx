import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Mail, Phone, Linkedin, Twitter, Calendar, Download } from "lucide-react";
import { useState, useRef, useEffect } from "react";

/**
 * HireMe.link - Freelancer Landing Page
 * Design: Modern Minimalist with Coral Accent
 * Colors: Coral (#FF6B6B), White (#FFFFFF), Dark Gray (#2D3748)
 * Typography: Poppins (headings), Inter (body)
 */

export default function Home() {
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Freelance App Design",
      category: "UI/UX Design",
      image: "/images/portfolio-sample-1.png",
      description: "Modern dashboard interface for a freelance management platform"
    },
    {
      id: 2,
      title: "Brand Identity Design",
      category: "Branding",
      image: "/images/portfolio-sample-2.png",
      description: "Complete brand identity system with coral and white palette"
    },
    {
      id: 3,
      title: "Website Design",
      category: "Web Design",
      image: "/images/portfolio-sample-3.png",
      description: "Minimalist website design with professional aesthetic"
    },
    {
      id: 4,
      title: "Digital Product Design",
      category: "Product Design",
      image: "/images/portfolio-sample-4.png",
      description: "User-centered product interface with clean design"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      text: "Working with this freelancer was an absolute pleasure. They delivered exceptional design work on time and understood our brand vision perfectly.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      text: "Highly professional and creative. The attention to detail in every design element was impressive. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Creative Lead",
      text: "Outstanding collaboration. They brought fresh ideas to the table and were responsive to feedback throughout the project.",
      rating: 5
    }
  ];

  const experience = [
    {
      id: 1,
      company: "Creative Studio Co.",
      position: "Senior Product Designer",
      duration: "2021 - Present",
      description: "Led design strategy and execution for 15+ digital products, improving user engagement by 40% and reducing design-to-development time by 30%.",
      achievements: ["Built design system used by 50+ team members", "Mentored 3 junior designers", "Won 2 industry design awards"]
    },
    {
      id: 2,
      company: "Digital Innovations Inc.",
      position: "UX/UI Designer",
      duration: "2019 - 2021",
      description: "Designed and prototyped user interfaces for SaaS products serving 100k+ users. Conducted user research and usability testing to inform design decisions.",
      achievements: ["Increased user retention by 25%", "Designed mobile app with 4.8★ rating", "Established design best practices"]
    },
    {
      id: 3,
      company: "Brand & Design Studio",
      position: "Graphic & Web Designer",
      duration: "2017 - 2019",
      description: "Created brand identities, marketing materials, and responsive websites for 30+ clients across various industries.",
      achievements: ["Managed 50+ successful projects", "Maintained 95% client satisfaction rate", "Grew freelance client base by 200%"]
    }
  ];

  const skills = [
    { category: "Design Tools", items: ["Figma", "Adobe XD", "Sketch", "Adobe Creative Suite"] },
    { category: "UX/UI Skills", items: ["User Research", "Wireframing", "Prototyping", "Interaction Design", "Usability Testing"] },
    { category: "Web Design", items: ["Responsive Design", "Web Design", "UI Design", "Design Systems"] },
    { category: "Branding", items: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines"] },
    { category: "Other Skills", items: ["HTML/CSS Basics", "Design Thinking", "Project Management", "Client Communication"] }
  ];

  const pricingPackages = [
    {
      id: 1,
      tier: "Starter",
      price: "$500",
      description: "Perfect for small projects and getting started",
      features: [
        "Initial consultation call",
        "Up to 3 design concepts",
        "2 rounds of revisions",
        "Deliverables in PNG/PDF",
        "5-7 business days turnaround",
        "Email support"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      id: 2,
      tier: "Professional",
      price: "$1,500",
      description: "Ideal for most businesses and brands",
      features: [
        "Detailed discovery & strategy session",
        "Up to 5 design concepts",
        "Unlimited revisions (30 days)",
        "Deliverables in multiple formats",
        "Design system documentation",
        "3-5 business days turnaround",
        "Priority email & Slack support",
        "Brand guidelines included"
      ],
      popular: true,
      cta: "Choose Plan"
    },
    {
      id: 3,
      tier: "Premium",
      price: "$3,500",
      description: "Comprehensive solution for complex projects",
      features: [
        "Extended discovery & workshops",
        "Unlimited design concepts",
        "Unlimited revisions (60 days)",
        "All file formats + source files",
        "Complete design system",
        "Prototype & interactive mockups",
        "1-2 business days turnaround",
        "24/7 priority support",
        "Post-launch consultation",
        "Dedicated project manager"
      ],
      popular: false,
      cta: "Book Premium"
    }
  ];

  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that engage and delight",
      price: "Starting at $500",
      icon: "✨"
    },
    {
      id: 2,
      title: "Brand Identity",
      description: "Complete branding solutions including logos, color systems, and guidelines",
      price: "Starting at $1,200",
      icon: "🎨"
    },
    {
      id: 3,
      title: "Web Design",
      description: "Modern, responsive websites that convert visitors into customers",
      price: "Starting at $800",
      icon: "🌐"
    },
    {
      id: 4,
      title: "Product Design",
      description: "End-to-end product design from concept to launch",
      price: "Starting at $2,000",
      icon: "🚀"
    }
  ];

  // Auto-scroll carousel
  useEffect(() => {
    if (!autoScroll) return;
    
    const interval = setInterval(() => {
      setCurrentPortfolioIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoScroll, portfolioItems.length]);

  const nextPortfolio = () => {
    setCurrentPortfolioIndex((prev) => (prev + 1) % portfolioItems.length);
    setAutoScroll(false);
  };

  const prevPortfolio = () => {
    setCurrentPortfolioIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    setAutoScroll(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF6B6B]"></div>
            <span className="font-poppins font-bold text-lg text-gray-900">HireMe.link</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-[#FF6B6B] transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-[#FF6B6B] transition-colors">Portfolio</a>
            <a href="#experience" className="text-gray-700 hover:text-[#FF6B6B] transition-colors">Experience</a>
            <a href="#skills" className="text-gray-700 hover:text-[#FF6B6B] transition-colors">Skills</a>
            <a href="#pricing" className="text-gray-700 hover:text-[#FF6B6B] transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#FF6B6B] transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-[#FF6B6B] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('/images/hero-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        <div className="container relative py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-[#FF6B6B]"></div>
              <span className="text-sm font-medium text-[#FF6B6B] uppercase tracking-wide">Welcome</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Let's Create Something Amazing
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              I'm a creative professional specializing in design that transforms ideas into beautiful, functional digital experiences. Let's work together to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-[#FF6B6B] hover:bg-[#E55555] text-white font-medium py-6 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-gray-300 hover:border-[#FF6B6B] text-gray-900 font-medium py-6 px-8 rounded-lg transition-colors"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/10 to-transparent rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#FF6B6B]"></div>
              <span className="text-sm font-medium text-[#FF6B6B] uppercase tracking-wide">Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What I Offer</h2>
            <p className="text-lg text-gray-600">Comprehensive design solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`p-8 rounded-lg transition-all duration-300 hover:shadow-lg ${
                  index % 2 === 0 ? "bg-gray-50 border border-gray-200" : "bg-white border border-gray-200"
                }`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="font-medium text-[#FF6B6B]">{service.price}</span>
                  <div className="w-2 h-2 rounded-full bg-[#FF6B6B]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Carousel Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#FF6B6B]"></div>
              <span className="text-sm font-medium text-[#FF6B6B] uppercase tracking-wide">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Recent Work</h2>
            <p className="text-lg text-gray-600">A selection of projects I'm proud of</p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div 
              ref={carouselRef}
              className="overflow-hidden rounded-lg"
              onMouseEnter={() => setAutoScroll(false)}
              onMouseLeave={() => setAutoScroll(true)}
            >
              <div className="relative bg-white">
                <img 
                  src={portfolioItems[currentPortfolioIndex].image}
                  alt={portfolioItems[currentPortfolioIndex].title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-sm font-medium text-gray-200 mb-2">{portfolioItems[currentPortfolioIndex].category}</p>
                  <h3 className="text-3xl font-bold">{portfolioItems[currentPortfolioIndex].title}</h3>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-3">
                <button
                  onClick={prevPortfolio}
                  className="p-3 rounded-full bg-white border border-gray-300 hover:bg-[#FF6B6B] hover:border-[#FF6B6B] hover:text-white transition-all duration-200"
                  aria-label="Previous portfolio"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextPortfolio}
                  className="p-3 rounded-full bg-white border border-gray-300 hover:bg-[#FF6B6B] hover:border-[#FF6B6B] hover:text-white transition-all duration-200"
                  aria-label="Next portfolio"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex gap-2">
                {portfolioItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentPortfolioIndex(index);
                      setAutoScroll(false);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentPortfolioIndex 
                        ? "bg-[#FF6B6B] w-8" 
                        : "bg-gray-300 w-2 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to portfolio item ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Download Portfolio Button */}
            <div className="mt-12 flex justify-center">
              <a
                href="/portfolio.pdf"
                download="HireMe-Portfolio.pdf"
                className="inline-flex items-center gap-2 bg-[#FF6B6B] hover:bg-[#E55555] text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download Complete Portfolio (PDF)
              </a>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-4 mt-8">
              {portfolioItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPortfolioIndex(index);
                    setAutoScroll(false);
                  }}
                  className={`relative rounded-lg overflow-hidden h-24 transition-all duration-200 ${
                    index === currentPortfolioIndex ? "ring-2 ring-[#FF6B6B]" : ""
                  }`}
                >
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#FF6B6B]"></div>
              <span className="text-sm font-medium text-[#FF6B6B] uppercase tracking-wide">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-lg text-gray-600">Real feedback from real projects</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card 
                key={testimonial.id}
                className="p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-[#FF6B6B]">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#FF6B6B]"></div>
              <span className="text-sm font-medium text-[#FF6B6B] uppercase tracking-wide">Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Work History</h2>
            <p className="text-lg text-gray-600">A track record of delivering exceptional results</p>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div 
                key={job.id}
                className="relative pl-8 pb-8 border-l-2 border-gray-200 hover:border-[#FF6B6B] transition-colors duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-gray-300 hover:border-[#FF6B6B] transition-colors"></div>
                
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{job.position}</h3>
                      <p className="text-[#FF6B6B] font-medium mt-1">{job.company}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-600 mt-2 md:mt-0">{job.duration}</span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">{job.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900">Key Achievements:</p>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                          <span className="text-[#FF6B6B] font-bold mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#FF6B6B]"></div>
              <span className="text-sm font-medium text-[#FF6B6B] uppercase tracking-wide">Skills</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Expertise & Capabilities</h2>
            <p className="text-lg text-gray-600">A comprehensive toolkit for modern design challenges</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card 
                key={index}
                className="p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#FF6B6B]"></div>
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#FF6B6B]"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section id="pricing" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#FF6B6B]"></div>
              <span className="text-sm font-medium text-[#FF6B6B] uppercase tracking-wide">Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Service Packages</h2>
            <p className="text-lg text-gray-600">Choose the perfect plan for your project needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                  pkg.popular
                    ? "md:scale-105 ring-2 ring-[#FF6B6B] shadow-2xl"
                    : "hover:shadow-lg"
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-[#FF6B6B] text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 h-full flex flex-col ${
                  pkg.popular ? "bg-gradient-to-br from-[#FF6B6B]/5 to-white" : "bg-gray-50"
                }`}>
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.tier}</h3>
                    <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-gray-600">one-time</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-semibold mb-8 transition-all duration-200 transform hover:scale-105 ${
                      pkg.popular
                        ? "bg-[#FF6B6B] hover:bg-[#E55555] text-white shadow-lg"
                        : "bg-white border-2 border-gray-300 text-gray-900 hover:border-[#FF6B6B] hover:text-[#FF6B6B]"
                    }`}
                  >
                    {pkg.cta}
                  </button>

                  {/* Features List */}
                  <div className="space-y-4 flex-grow">
                    <p className="text-sm font-semibold text-gray-900">What's Included:</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                          <div className="flex-shrink-0 mt-1">
                            <div className="flex items-center justify-center h-5 w-5 rounded-full bg-[#FF6B6B]/20">
                              <svg className="h-3 w-3 text-[#FF6B6B]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Border Accent */}
                  <div className={`mt-8 pt-6 border-t ${
                    pkg.popular ? "border-[#FF6B6B]/30" : "border-gray-200"
                  }`}>
                    <p className="text-xs text-gray-600 text-center">All packages include free consultation</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Projects?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Don't see exactly what you need? I offer custom packages tailored to your specific requirements. Let's discuss your project and create a solution that fits perfectly.</p>
            <Button 
              className="bg-[#FF6B6B] hover:bg-[#E55555] text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#FF6B6B]/5 to-transparent">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">Let's discuss your project and create something exceptional together.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#FF6B6B] hover:bg-[#E55555] text-white font-medium py-6 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
              >
                <Calendar size={20} />
                Book a Consultation
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-gray-300 hover:border-[#FF6B6B] text-gray-900 font-medium py-6 px-8 rounded-lg transition-colors flex items-center gap-2"
              >
                <Mail size={20} />
                Send an Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#FF6B6B]"></div>
                <span className="font-poppins font-bold text-lg">HireMe.link</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating beautiful digital experiences that inspire and engage.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-[#FF6B6B] transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-[#FF6B6B] transition-colors">Portfolio</a></li>
                <li><a href="#experience" className="hover:text-[#FF6B6B] transition-colors">Experience</a></li>
                <li><a href="#skills" className="hover:text-[#FF6B6B] transition-colors">Skills</a></li>
                <li><a href="#pricing" className="hover:text-[#FF6B6B] transition-colors">Pricing</a></li>
                <li><a href="#testimonials" className="hover:text-[#FF6B6B] transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-[#FF6B6B] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Brand Identity</a></li>
                <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Web Design</a></li>
                <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Product Design</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Get In Touch</h4>
              <div className="space-y-3">
                <a href="mailto:hello@hireme.link" className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  <Mail size={16} />
                  hello@hireme.link
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  <Phone size={16} />
                  +1 (234) 567-890
                </a>
                <div className="flex gap-3 pt-2">
                  <a href="#" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>&copy; 2025 HireMe.link. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[#FF6B6B] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#FF6B6B] transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
