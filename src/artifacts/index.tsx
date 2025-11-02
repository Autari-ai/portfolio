import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, FileText, Video, Linkedin, Mail, Database, Cpu, Zap, Bot, TrendingUp, ArrowUp, Facebook, Instagram, Music } from 'lucide-react';

// Project Data
const projects = [
  {
    id: 1,
    title: "DataSphere Intelligence",
    description: "Enterprise-grade automation platform with 80% reduction in manual workload. Real-time data operations, validation, and analytics monitoring.",
    tags: ["ETL", "Data Pipeline", "Analytics"],
    category: "ETL",
    impact: "80% reduction in manual workload",
    docLink: "https://docs.google.com/document/d/1G90hpnJy6YmmcIf2M2dE_H9D_DcpHhlEQaJT58lHVy4/edit?usp=sharing",
    videoLink: "#datasphere-video"
  },
  {
    id: 2,
    title: "MarketVision Automate360",
    description: "Smart competitor tracking system. From monthly reports to daily insights with automated image extraction and pricing analysis.",
    tags: ["AI Agent", "Web Scraping", "Analytics"],
    category: "AI Agents",
    impact: "From weeks to hours",
    docLink: "https://docs.google.com/document/d/1i2PDoxVsnMd7G0UNSg90oTC7FsWQPa8y7_6IOoKctE8/edit?usp=sharing",
    videoLink: "#marketvision-video"
  },
  {
    id: 3,
    title: "eBay DataXcelerator",
    description: "200,000+ products extracted in 5 minutes. Global product coverage with smart filtering and validation.",
    tags: ["ETL", "Data Extraction"],
    category: "ETL",
    impact: "2000% efficiency improvement",
    docLink: "https://docs.google.com/document/d/1GR1nkF5dT0BsySiNVPTeV_oqsnVtcH5rYgvA7r_6hBY/edit?usp=sharing",
    videoLink: "#ebay-video"
  },
  {
    id: 4,
    title: "PinMaster AutomateX",
    description: "Pinterest automation extracting user data and sending personalized messages. Tasks from weeks to 10 minutes.",
    tags: ["AI Agent", "Social Media", "Workflow"],
    category: "AI Agents",
    impact: "Weeks to 10 minutes",
    docLink: "https://docs.google.com/document/d/1KJDVxkM1tgUqCQnPEuKwcKaIfpjw1UY21a65wwdwbYU/edit?usp=sharing",
    videoLink: "#pinmaster-video"
  },
  {
    id: 5,
    title: "InstaLead Connect",
    description: "WhatsApp to lead submission in under 2 seconds. 99% success rate with instant capture and secure local processing.",
    tags: ["Workflow", "Integration"],
    category: "Workflow",
    impact: "25% to 99% capture rate",
    docLink: "https://docs.google.com/document/d/1e1Q39kXaR0xlkf2X9ZkOCj9CAf0dBLGiQgVESWCeOHQ/edit?usp=sharing",
    videoLink: "#instalead-video"
  },
  {
    id: 6,
    title: "WhatsHub Control Center",
    description: "Centralized multi-WhatsApp management dashboard. Control multiple accounts with instant notifications and unified API.",
    tags: ["Workflow", "API Integration"],
    category: "Workflow",
    impact: "Multi-device to single dashboard",
    docLink: "https://docs.google.com/document/d/1qanmIN0fP3Sx2m_6HCMCYIkIIImJlXI55rOcBD60ZsY/edit?usp=sharing",
    videoLink: "#whatshub-video"
  },
  {
    id: 7,
    title: "NetCheck Automator",
    description: "ADSL verification 60x faster. From 1 minute to seconds per number with automatic error detection.",
    tags: ["Workflow", "Data Validation"],
    category: "Workflow",
    impact: "60x faster processing",
    docLink: "https://docs.google.com/document/d/1NCHoZyU5FfSAIHs6jqXKpnrA1nKL3xXvJQgNv8g4XUY/edit?usp=sharing",
    videoLink: "#netcheck-video"
  },
  {
    id: 8,
    title: "DataWave Automator",
    description: "Phone number verification from 10 minutes to 1 second. 600x improvement with automatic data validation.",
    tags: ["ETL", "Automation"],
    category: "ETL",
    impact: "600x speed improvement",
    docLink: "https://docs.google.com/document/d/1UdcCdadX2gYZiwbszkUlcqe-crmcnlAREI8_a6vobNg/edit?usp=sharing",
    videoLink: "#datawave-video"
  },
  {
    id: 9,
    title: "LeadPulse Automator",
    description: "Automated lead generation and verification. From 5 minutes to 5 seconds per request with instant creation.",
    tags: ["Workflow", "CRM Integration"],
    category: "Workflow",
    impact: "60x faster performance",
    docLink: "https://docs.google.com/document/d/1utrFd1CnX1dKhiiSbLhh8KqcJwabFDnHUx35dsRUxsc/edit?usp=sharing",
    videoLink: "#leadpulse-video"
  },
  {
    id: 10,
    title: "PayFlow Validator",
    description: "Payment validation automation processing 1000+ numbers per minute. 100x faster with perfect accuracy.",
    tags: ["ETL", "Financial"],
    category: "ETL",
    impact: "100x faster processing",
    docLink: "https://docs.google.com/document/d/1qhDcSeLrivHAK10_X6VmKiMSLMnNCx2SVzttg-vg5ik/edit?usp=sharing",
    videoLink: "#payflow-video"
  },
  {
    id: 11,
    title: "OfficeFlow Intelligence",
    description: "Enterprise office automation platform. Invoice output from 30 to 500+ per month with zero manual intervention.",
    tags: ["Workflow", "Enterprise", "Integration"],
    category: "Workflow",
    impact: "500+ invoices per month",
    docLink: "https://docs.google.com/document/d/17qbrZ9RVGVP0h_7SEgxKOZGfs8M-e6elGx5xwJkojGw/edit?usp=sharing",
    videoLink: "#officeflow-video"
  }
];

const features = [
  { icon: Cpu, title: "Algorithm Engineering", description: "Building custom algorithms for intelligent automation" },
  { icon: Zap, title: "Workflow Automation", description: "Creating automated processes that eliminate manual work" },
  { icon: Database, title: "ETL Pipelines", description: "Developing robust data extraction and transformation systems" },
  { icon: Bot, title: "Smart Solutions", description: "Engineering AI-enhanced systems with adaptive capabilities" }
];

const processSteps = [
  { title: "Data Ingestion", description: "Collecting and aggregating data from multiple sources efficiently" },
  { title: "ETL Processing", description: "Transforming and validating data through engineered pipelines" },
  { title: "Algorithm Integration", description: "Applying custom logic and intelligent decision-making systems" },
  { title: "Workflow Orchestration", description: "Coordinating automated processes with reliable execution" },
  { title: "Solution Delivery", description: "Deploying complete systems with monitoring and insights" }
];

function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: 0
      });
    }

    let animationFrame = 0;
    const fadeInDuration = 180;

    function animate() {
      animationFrame++;

      ctx.fillStyle = 'rgba(8, 10, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const fadeProgress = Math.min(animationFrame / fadeInDuration, 1);

      particles.forEach((p, i) => {
        p.opacity = fadeProgress * 0.4;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(111, 122, 255, ${p.opacity})`;
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(55, 72, 199, ${fadeProgress * 0.15 * (1 - dist / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-30" />;
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;

      setScrollProgress(progress);
      setShowScrollTop(scrolled > 500);

      const sections = document.querySelectorAll('.fade-up-section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8) {
          section.classList.add('visible');
        }
      });
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = ["All", "Workflow", "ETL", "AI Agents"];
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden" style={{
      background: 'linear-gradient(135deg, #080A14 0%, #141731 50%, #1A2140 100%)'
    }}>
      <AnimatedBackground />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 transition-all duration-500" style={{
        background: scrollProgress > 2 ? 'rgba(8, 10, 20, 0.85)' : 'transparent',
        backdropFilter: scrollProgress > 2 ? 'blur(20px)' : 'none',
        borderBottom: scrollProgress > 2 ? '1px solid rgba(111, 122, 255, 0.15)' : 'none'
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute bg-gradient-to-br from-blue-500 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0)',
                    boxShadow: '0 0 20px rgba(111, 122, 255, 0.4)',
                    backdropFilter: 'blur(10px)',
                  }}>
                  <img
                    src="/20251102_0927_AI_Text_Design_remix_01k91qb086fy98g2e64skj9zkr-removebg-preview.png"
                    alt="AUTARI Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="text-2xl font-bold tracking-wide" style={{
                background: 'linear-gradient(135deg, #6F7AFF, #3748C7, #6F7AFF)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'Orbitron, sans-serif'
              }}>
                AUTARI
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'projects', 'process', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="relative text-sm uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  {section}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500" />
                </button>
              ))}
              <button
                onClick={() => scrollToSection('projects')}
                className="relative px-6 py-2.5 rounded-lg font-medium tracking-wide overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #3748C7, #6F7AFF)',
                  boxShadow: '0 0 20px rgba(111, 122, 255, 0.3)'
                }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Explore</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden backdrop-blur-xl" style={{
            background: 'rgba(8, 10, 20, 0.95)',
            borderTop: '1px solid rgba(111, 122, 255, 0.15)'
          }}>
            <div className="px-6 py-6 space-y-4">
              {['home', 'about', 'projects', 'process', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-3 text-sm uppercase tracking-widest hover:text-blue-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{
            background: 'radial-gradient(circle, rgba(55, 72, 199, 0.4), transparent)'
          }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow-delayed" style={{
            background: 'radial-gradient(circle, rgba(111, 122, 255, 0.3), transparent)'
          }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-block animate-float">
            <div className="relative p-6 rounded-2xl" style={{
              background: 'linear-gradient(135deg, rgba(55, 72, 199, 0.1), rgba(111, 122, 255, 0.05))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(111, 122, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(55, 72, 199, 0.2)'
            }}>
              <div className="relative w-80 h-32 rounded-xl shadow-2xl overflow-hidden" style={{
                boxShadow: '0 0 40px rgba(111, 122, 255, 0.5)'
              }}>
                <img
                  src="/20250729_1938_AI-Infused_Autari_Logo_remix_01k1bghb6sfp8b1w3ht2f1dtzr.png"
                  alt="AUTARI Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-tight animate-fade-in" style={{
            background: 'linear-gradient(135deg, #D1D3DC 0%, #6F7AFF 50%, #3748C7 100%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Orbitron, sans-serif',
            textShadow: '0 0 80px rgba(111, 122, 255, 0.5)'
          }}>
            Automate Your Comfort
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed" style={{
            color: '#D1D3DC',
            fontWeight: '300',
            letterSpacing: '0.02em'
          }}>
            Building intelligent automation solutions through advanced algorithms, robust ETL pipelines, and engineered workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-more-delayed">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-10 py-4 rounded-xl font-semibold tracking-wide overflow-hidden transition-all duration-500 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #3748C7, #6F7AFF)',
                boxShadow: '0 0 30px rgba(111, 122, 255, 0.4)',
                border: '1px solid rgba(111, 122, 255, 0.3)'
              }}
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Explore Projects</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-10 py-4 rounded-xl font-semibold tracking-wide overflow-hidden transition-all duration-500 hover:scale-105"
              style={{
                background: 'rgba(55, 72, 199, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(111, 122, 255, 0.3)',
                boxShadow: '0 0 20px rgba(111, 122, 255, 0.2)'
              }}
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Contact Us</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6 fade-up-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight" style={{
              background: 'linear-gradient(135deg, #D1D3DC, #6F7AFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Orbitron, sans-serif'
            }}>
              About AUTARI
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{
              color: '#D1D3DC',
              fontWeight: '300'
            }}>
              AUTARI builds intelligent automation systems using algorithm-driven engineering. We create efficient
              data pipelines, automated workflows, and smart solutions that eliminate manual processes and transform
              how businesses operate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl transition-all duration-500 hover:scale-105 animate-fade-up"
                style={{
                  background: 'linear-gradient(135deg, rgba(26, 44, 128, 0.2), rgba(55, 72, 199, 0.1))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(111, 122, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  animationDelay: `${idx * 150}ms`
                }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: 'linear-gradient(135deg, rgba(55, 72, 199, 0.1), rgba(111, 122, 255, 0.05))',
                  boxShadow: '0 0 40px rgba(111, 122, 255, 0.3)'
                }} />

                <div className="relative">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500" style={{
                    background: 'linear-gradient(135deg, #3748C7, #6F7AFF)',
                    boxShadow: '0 0 20px rgba(111, 122, 255, 0.5)'
                  }}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-wide" style={{
                    color: '#D1D3DC',
                    fontFamily: 'Orbitron, sans-serif'
                  }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6 fade-up-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center tracking-tight" style={{
            background: 'linear-gradient(135deg, #D1D3DC, #6F7AFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Orbitron, sans-serif'
          }}>
            Our Projects
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative px-8 py-3 rounded-xl font-medium tracking-wide transition-all duration-500 hover:scale-105"
                style={{
                  background: activeCategory === cat
                    ? 'linear-gradient(135deg, #3748C7, #6F7AFF)'
                    : 'rgba(55, 72, 199, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${activeCategory === cat ? 'rgba(111, 122, 255, 0.5)' : 'rgba(111, 122, 255, 0.2)'}`,
                  boxShadow: activeCategory === cat ? '0 0 30px rgba(111, 122, 255, 0.4)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="group relative p-8 rounded-2xl transition-all duration-500 hover:scale-105 animate-fade-up flex flex-col"
                style={{
                  background: 'linear-gradient(135deg, rgba(26, 44, 128, 0.2), rgba(55, 72, 199, 0.1))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(111, 122, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  animationDelay: `${idx * 100}ms`
                }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: 'linear-gradient(135deg, rgba(55, 72, 199, 0.15), rgba(111, 122, 255, 0.1))',
                  boxShadow: '0 0 40px rgba(111, 122, 255, 0.4)'
                }} />

                <div className="relative flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-blue-300 transition-colors duration-300" style={{
                      fontFamily: 'Orbitron, sans-serif',
                      letterSpacing: '0.02em'
                    }}>
                      {project.title}
                    </h3>
                    <TrendingUp className="w-6 h-6 text-green-400 animate-pulse-subtle flex-shrink-0" />
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full text-sm font-medium tracking-wide"
                        style={{
                          background: 'rgba(55, 72, 199, 0.2)',
                          color: '#6F7AFF',
                          border: '1px solid rgba(111, 122, 255, 0.3)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-sm font-semibold mb-6 flex items-center space-x-2" style={{
                    color: '#39E0E5'
                  }}>
                    <TrendingUp className="w-4 h-4" />
                    <span>{project.impact}</span>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.docLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 font-medium"
                      style={{
                        background: 'rgba(55, 72, 199, 0.2)',
                        border: '1px solid rgba(111, 122, 255, 0.3)'
                      }}
                    >
                      <FileText className="w-4 h-4" />
                      <span>Document</span>
                    </a>
                    <a
                      href={project.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 font-medium"
                      style={{
                        background: 'linear-gradient(135deg, #3748C7, #6F7AFF)',
                        boxShadow: '0 0 20px rgba(111, 122, 255, 0.3)'
                      }}
                    >
                      <Video className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative py-32 px-6 fade-up-section">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center tracking-tight" style={{
            background: 'linear-gradient(135deg, #D1D3DC, #6F7AFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Orbitron, sans-serif'
          }}>
            How It Works
          </h2>

          <div className="relative">
            <div className="absolute left-10 top-0 bottom-0 w-0.5 hidden md:block" style={{
              background: 'linear-gradient(180deg, #3748C7, #6F7AFF, #39E0E5)'
            }} />

            <div className="space-y-12">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex gap-8 items-start group animate-fade-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                      background: 'radial-gradient(circle, rgba(111, 122, 255, 0.6), transparent)'
                    }} />
                    <div
                      className="relative w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl transition-all duration-500 group-hover:scale-110 z-10"
                      style={{
                        background: 'linear-gradient(135deg, #3748C7, #6F7AFF)',
                        boxShadow: '0 0 30px rgba(111, 122, 255, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                        fontFamily: 'Orbitron, sans-serif'
                      }}
                    >
                      {idx + 1}
                    </div>
                  </div>

                  <div className="flex-1 pt-4 pb-8 px-8 rounded-2xl transition-all duration-500 group-hover:scale-105" style={{
                    background: 'linear-gradient(135deg, rgba(26, 44, 128, 0.2), rgba(55, 72, 199, 0.1))',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(111, 122, 255, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}>
                    <h3 className="text-3xl font-bold mb-3 tracking-wide" style={{
                      color: '#D1D3DC',
                      fontFamily: 'Orbitron, sans-serif'
                    }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 fade-up-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight" style={{
              background: 'linear-gradient(135deg, #D1D3DC, #6F7AFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Orbitron, sans-serif'
            }}>
              Let's Automate Together
            </h2>
            <p className="text-xl leading-relaxed" style={{
              color: '#D1D3DC',
              fontWeight: '300'
            }}>
              Get in touch to explore how AUTARI can enhance your operations through intelligent automation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Mail, href: 'mailto:autari.ai.company@gmail.com', label: 'Email' },
              { icon: Linkedin, href: 'https://www.linkedin.com/company/autari-ai', label: 'LinkedIn' },
              { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61582576511823', label: 'Facebook' },
              { icon: Instagram, href: 'https://www.instagram.com/autari_ai/', label: 'Instagram' },
              { icon: Music, href: 'https://www.tiktok.com/@autari_ai', label: 'TikTok' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="group relative flex flex-col items-center gap-4 p-8 rounded-2xl transition-all duration-500 hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(26, 44, 128, 0.2), rgba(55, 72, 199, 0.1))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(111, 122, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  minWidth: '140px'
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    background: 'radial-gradient(circle, rgba(111, 122, 255, 0.6), transparent)'
                  }} />
                  <div
                    className="relative w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500"
                    style={{
                      background: 'linear-gradient(135deg, #3748C7, #6F7AFF)',
                      boxShadow: '0 0 30px rgba(111, 122, 255, 0.5)'
                    }}
                  >
                    <social.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 group-hover:text-blue-300 transition-colors duration-300">
                  {social.label}
                </span>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: 'linear-gradient(135deg, rgba(55, 72, 199, 0.15), rgba(111, 122, 255, 0.1))',
                  boxShadow: '0 0 40px rgba(111, 122, 255, 0.4)'
                }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 mt-20" style={{
        background: 'linear-gradient(135deg, rgba(26, 44, 128, 0.3), rgba(8, 10, 20, 0.8))',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(111, 122, 255, 0.15)'
      }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-4">
              <div
                className="relative w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0)',
                  boxShadow: '0 0 20px rgba(111, 122, 255, 0.4)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <img
                  src="/20251102_0927_AI_Text_Design_remix_01k91qb086fy98g2e64skj9zkr-removebg-preview.png"
                  alt="AUTARI Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold tracking-wide" style={{ color: '#D1D3DC' }}>
                © 2025 AUTARI. All rights reserved.
              </span>
            </div>

            <div className="flex gap-8">
              {['home', 'about', 'projects', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm uppercase tracking-widest text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 z-50 group"
          style={{
            background: 'linear-gradient(135deg, #3748C7, #6F7AFF)',
            boxShadow: '0 0 40px rgba(111, 122, 255, 0.6)',
            border: '1px solid rgba(111, 122, 255, 0.3)'
          }}
        >
          <ArrowUp className="w-6 h-6" />
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
            background: 'linear-gradient(135deg, #6F7AFF, #39E0E5)',
            boxShadow: '0 0 60px rgba(111, 122, 255, 0.8)'
          }} />
        </button>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .fade-up-section {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-up-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-more-delayed {
          animation: fade-in 1s ease-out 0.6s forwards;
          opacity: 0;
        }
        
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow-delayed {
          animation: pulse-slow 8s ease-in-out infinite 4s;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
        
        input::placeholder,
        textarea::placeholder {
          color: rgba(209, 211, 220, 0.3);
        }
        
        input:focus,
        textarea:focus {
          box-shadow: 0 0 30px rgba(111, 122, 255, 0.3);
        }
        
        /* Custom Scrollbar */
        :root {
          --scrollbar-gradient: linear-gradient(180deg, #3748C7 0%, #6F7AFF 50%, #39E0E5 100%);
        }
        
        ::-webkit-scrollbar {
          width: 14px;
        }
        
        ::-webkit-scrollbar-track {
          background: linear-gradient(180deg, 
            rgba(55, 72, 199, 0.1) 0%, 
            rgba(111, 122, 255, 0.15) 25%,
            rgba(57, 224, 229, 0.1) 50%,
            rgba(111, 122, 255, 0.15) 75%,
            rgba(55, 72, 199, 0.1) 100%
          );
          border-left: 1px solid rgba(111, 122, 255, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, 
            #3748C7 0%, 
            #5865D9 15%,
            #6F7AFF 35%, 
            #7B8EFF 50%,
            #39E0E5 65%,
            #6F7AFF 85%,
            #3748C7 100%
          );
          border-radius: 8px;
          border: 2px solid rgba(8, 10, 20, 0.8);
          box-shadow: 
            inset 0 1px 1px rgba(255, 255, 255, 0.1),
            0 0 10px rgba(111, 122, 255, 0.3);
          transition: all 0.3s ease;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, 
            #4A5FE0 0%, 
            #6F7AFF 25%, 
            #39E0E5 50%,
            #6F7AFF 75%,
            #4A5FE0 100%
          );
          box-shadow: 
            inset 0 1px 1px rgba(255, 255, 255, 0.2),
            0 0 20px rgba(111, 122, 255, 0.6),
            0 0 30px rgba(57, 224, 229, 0.4);
          border-color: rgba(111, 122, 255, 0.4);
        }
        
        /* Firefox Scrollbar */
        * {
          scrollbar-width: thin;
          scrollbar-color: #6F7AFF rgba(8, 10, 20, 0.5);
        }
      `}</style>
    </div>
  );
}

export default App;