import React from 'react';
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import Link from 'next/link';
import { FaGithub, FaRocket, FaLaptopCode, FaChartLine, FaUserGraduate, FaLinkedin, FaGlobe } from "react-icons/fa";
import AnimatedButton from '@/components/ui/animated-button';
import AnimatedCard from '@/components/ui/animated-card';
import GradientText from '@/components/ui/gradient-text';
import AnimatedBackground from '@/components/ui/animated-background';
import ThemeToggle from '@/components/ui/theme-toggle';
import MobileMenu from '@/components/ui/mobile-menu';
import { FiMail } from 'react-icons/fi';

const Page = () => {
  return (
    <div>
      <Head>
        <title>AI Mock Interview</title>
        <meta name="description" content="Ace your next interview with AI-powered mock interviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <header className="sticky top-0 z-40 w-full backdrop-blur-sm bg-background/90 border-b border-border/40 shadow-md animate-fadeIn">
          <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <div className="flex items-center space-x-2">
                <Link href="/" className="flex items-center space-x-2">
                  <img src="/logo.svg" alt="AI Mock Interview Logo" className="h-8 w-8 dark:invert transition-all duration-200" />
                  <GradientText gradient="blue-purple" className="text-2xl font-bold tracking-tight">AI Mock Interview</GradientText>
                </Link>
              </div>
              <div className="flex items-center">
                <nav className="hidden md:flex items-center space-x-6 mr-8">
                  <a href="#features" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">Features</a>
                  <a href="#testimonials" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">Testimonials</a>
                </nav>
                <div className="hidden md:flex items-center space-x-5">
                  <ThemeToggle />
                  <Link href="/sign-in" className="text-sm font-medium hover:text-primary transition-colors">Login</Link>
                  <Link href="/sign-up" passHref legacyBehavior>
                    <a>
                      <AnimatedButton size="sm" className="shadow-lg bg-gradient-to-r from-primary to-accent text-white font-medium px-5 py-2.5" withHoverScale withPulse>
                        Sign Up Free
                      </AnimatedButton>
                    </a>
                  </Link>
                </div>
                <MobileMenu 
                  links={[
                    { href: '#features', label: 'Features' },
                    { href: '#testimonials', label: 'Testimonials' }
                  ]}
                />
            </div>
          </div>
        </header>

        <AnimatedBackground variant="gradient" className="flex flex-col items-center justify-center text-center py-28 px-6 md:px-0 overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/camera.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="animate-fadeIn relative z-10 max-w-5xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg tracking-tight leading-tight">Ace Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Interview</span></h2>
            <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">Practice with AI-powered mock interviews and get personalized feedback to land your dream job</p>
            <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
              <Link href="/sign-up" passHref legacyBehavior>
                <a>
                  <AnimatedButton
                    className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                    withHoverScale
                    withPulse
                  >
                    <FaRocket className="animate-float" /> Sign Up Free
                  </AnimatedButton>
                </a>
              </Link>
              <a href="#features">
                <AnimatedButton
                  className="px-8 py-4 text-lg font-semibold border-2 border-white/80 bg-blue-600/70 text-white rounded-full hover:bg-blue-700/80 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 shadow-xl backdrop-blur-sm"
                  withHoverScale
                >
                  Learn More <span className="ml-1 text-xl">↓</span>
                </AnimatedButton>
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
        </AnimatedBackground>

        <section id="features" className="py-24 px-6 bg-background">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold mb-6 animate-slideInUp relative inline-block">
                <span className="relative z-10">Why Choose Our Platform?</span>
                <span className="absolute -bottom-3 left-0 right-0 h-3 bg-primary/20 -rotate-1 transform -skew-x-12"></span>
              </h2>
              <p className="text-lg text-muted-foreground">Our AI-powered platform offers everything you need to prepare for your next interview</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatedCard className="p-8 border border-border/50 bg-card/50" hoverEffect="lift" withShadow>
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <FaLaptopCode className="text-primary text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI-Powered Practice</h3>
                <p className="text-muted-foreground leading-relaxed">Practice with our advanced AI that simulates real interview scenarios and adapts to your responses in real-time.</p>
                <div className="mt-6 pt-4 border-t border-border/30">
                  <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">Learn more <span className="ml-1">→</span></a>
                </div>
              </AnimatedCard>
              
              <AnimatedCard className="p-8 border border-border/50 bg-card/50" hoverEffect="lift" withShadow>
                <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <FaChartLine className="text-secondary text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Detailed Feedback</h3>
                <p className="text-muted-foreground leading-relaxed">Receive comprehensive feedback on your answers, communication skills, and specific areas for improvement.</p>
                <div className="mt-6 pt-4 border-t border-border/30">
                  <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">Learn more <span className="ml-1">→</span></a>
                </div>
              </AnimatedCard>
              
              <AnimatedCard className="p-8 border border-border/50 bg-card/50" hoverEffect="lift" withShadow>
                <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <FaUserGraduate className="text-accent text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Industry Specific</h3>
                <p className="text-muted-foreground leading-relaxed">Choose from a variety of industry-specific interview questions tailored to your unique career goals and aspirations.</p>
                <div className="mt-6 pt-4 border-t border-border/30">
                  <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">Learn more <span className="ml-1">→</span></a>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>
        
        <section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold mb-6 animate-slideInUp">What Our Users Say</h2>
              <p className="text-lg text-muted-foreground">Hear from professionals who have successfully used our platform to land their dream jobs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedCard className="p-8 border border-border/50 bg-card/80" hoverEffect="lift" withShadow>
                <div className="relative mb-8">
                  <div className="absolute -top-4 -left-2 text-6xl text-primary/20 font-serif">"</div>
                  <p className="text-muted-foreground relative z-10 italic">This platform helped me prepare for my technical interviews at top tech companies. The AI feedback was incredibly helpful!</p>
                </div>
                <div className="flex items-center mt-6 pt-4 border-t border-border/30">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">JS</span>
                  </div>
                  <div>
                    <h4 className="font-bold">John Smith</h4>
                    <p className="text-sm text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
              </AnimatedCard>
              
              <AnimatedCard className="p-8 border border-border/50 bg-card/80" hoverEffect="lift" withShadow>
                <div className="relative mb-8">
                  <div className="absolute -top-4 -left-2 text-6xl text-secondary/20 font-serif">"</div>
                  <p className="text-muted-foreground relative z-10 italic">I was able to practice different scenarios and improve my confidence. Landed my dream job after just two weeks of practice!</p>
                </div>
                <div className="flex items-center mt-6 pt-4 border-t border-border/30">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-secondary font-bold">AR</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Amanda Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Product Manager</p>
                  </div>
                </div>
              </AnimatedCard>
              
              <AnimatedCard className="p-8 border border-border/50 bg-card/80" hoverEffect="lift" withShadow>
                <div className="relative mb-8">
                  <div className="absolute -top-4 -left-2 text-6xl text-accent/20 font-serif">"</div>
                  <p className="text-muted-foreground relative z-10 italic">The industry-specific questions were spot on. I felt well-prepared for my actual interviews and received multiple offers.</p>
                </div>
                <div className="flex items-center mt-6 pt-4 border-t border-border/30">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent font-bold">DK</span>
                  </div>
                  <div>
                    <h4 className="font-bold">David Kim</h4>
                    <p className="text-sm text-muted-foreground">Data Scientist</p>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>
        

      </main>

      <footer className="bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/90 text-white">
        <div className="container mx-auto px-6">
          <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.svg" alt="AI Mock Interview Logo" className="h-8 w-8 invert" />
                <h3 className="text-2xl font-bold">AI Mock Interview</h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">Helping you prepare for your dream job with AI-powered interview practice that adapts to your skills and career goals.</p>
              <div className="flex space-x-4">
                <Link href="/sign-up" passHref legacyBehavior>
                  <a>
                    <AnimatedButton className="bg-white text-primary font-medium px-5 py-2.5 shadow-lg" withHoverScale withPulse>
                      Sign Up Free <span className="ml-2">→</span>
                    </AnimatedButton>
                  </a>
                </Link>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-white/80 hover:text-white transition-colors inline-flex items-center"><span className="mr-2">•</span>Home</a></li>
                <li><a href="#features" className="text-white/80 hover:text-white transition-colors inline-flex items-center"><span className="mr-2">•</span>Features</a></li>
                <li><a href="#testimonials" className="text-white/80 hover:text-white transition-colors inline-flex items-center"><span className="mr-2">•</span>Testimonials</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center"><span className="mr-2">•</span>Blog</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center"><span className="mr-2">•</span>FAQ</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center"><span className="mr-2">•</span>Privacy Policy</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center"><span className="mr-2">•</span>Terms of Service</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Connect With Us</h4>
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <a href="https://github.com/tousif31" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white hover:text-white transition-all"><FaGithub size={20} /></a>
                  <a href="https://www.linkedin.com/in/mohammedtousif" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white hover:text-white transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                  <a href="https://mdtousif.onrender.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white hover:text-white transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/></svg></a>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 p-3 rounded-md">
                  <FiMail className="text-white" size={18} />
                  <a href="mailto:mohammedtousif3709@gmail.com" className="text-white/90 hover:text-white transition-colors">mohammedtousif3709@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 py-6 text-center">
            <p className="text-white/80">© 2024 AI Mock Interview by Mohammed Tousif. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
