import { useState, useEffect } from 'react';
import { Mail, Instagram, Facebook, Music, Zap, Heart, Users, MessageCircle, Youtube } from 'lucide-react';

/**
 * Design System: Neon Spirituality
 * Premium website for Dian Grobbelaar - Prophet, Musician & MMA Artist
 * Colors: Black (#000000), White (#FFFFFF), Cyan (#00F7FF), Magenta (#FA00FF), Lime (#00FF49)
 * Typography: Fredoka font family throughout
 * Theme: Cyberpunk meets Spirituality with electric neon accents
 * Enhanced with premium creative design features and visual excellence
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-5 float-animation"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-magenta-500 rounded-full mix-blend-screen filter blur-3xl opacity-5 float-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-lime-500 rounded-full mix-blend-screen filter blur-3xl opacity-3 float-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center items-center">
          <div className="text-3xl font-bold" style={{ color: '#00F7FF', letterSpacing: '0.08em', textShadow: '0 0 15px rgba(0, 247, 255, 0.5)' }}>PROPHET DIAN</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 flex justify-center">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl">
            {/* Center: Image with Premium Effects */}
            <div className="fade-in-up">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-magenta-500 to-lime-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl"></div>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663476928525/TKW77vZ77nHhfNkPta2jej/dian_formal_a961f443.jpg"
                  alt="Dian Grobbelaar"
                  className="relative w-80 h-auto rounded-2xl border-2 border-cyan-500/50 shadow-2xl object-cover image-premium-quality"
                />
              </div>
            </div>

            {/* Center: Hero Text */}
            <div className="slide-in-right space-y-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  <span className="neon-glow-cyan">DIAN</span>
                  <br />
                  <span className="neon-glow-magenta">GROBBELAAR</span>
                </h1>
                <p className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-magenta-400 to-lime-400 bg-clip-text text-transparent animate-pulse">
                  Prophet of God
                </p>
              </div>

              <p className="text-lg leading-relaxed text-gray-200 max-w-2xl mx-auto">
                The Man, the Myth, the Prophet. Dian is a Man of God, anointed by the Most High as a Prophet, chosen to deliver divine messages with power and clarity. Through his multifaceted ministry—as a Prophet proclaiming God's word, as a Musician expressing spiritual truth through melody, and as an MMA Artist demonstrating physical and spiritual discipline—Dian embodies the fullness of God's calling. Founder of Glory and Grace Church, he stands as a beacon of faith, leading believers into their divine destiny and transforming lives through the Gospel of Jesus Christ.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center flex-wrap">
                <a
                  href="https://www.paypal.com/ncp/payment/6NG4Q34ACBTCG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-6 rounded-lg font-bold text-2xl transition-all duration-300 transform hover:scale-105 floating-particles neon-flicker navi-button-enhanced"
                  style={{
                    background: '#00F7FF',
                    color: '#000000',
                    border: '3px solid #00F7FF',
                    boxShadow: '0 0 20px rgba(0, 247, 255, 0.4)',
                    textDecoration: 'none',
                    display: 'inline-block',
                    letterSpacing: '0.05em',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 247, 255, 0.8), 0 0 60px rgba(0, 247, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 247, 255, 0.4)';
                  }}
                >
                  <span className="particle-cyan-1"></span>
                  <span className="particle-cyan-2"></span>
                  <span className="particle-cyan-3"></span>
                  <span className="particle-white-1"></span>
                  <span className="particle-white-2"></span>
                  <span className="particle-white-3"></span>
                  <span className="particle-gold-1"></span>
                  <span className="particle-gold-2"></span>
                  <span className="particle-gold-3"></span>
                  <span className="particle-gold-4"></span>
                  <span className="particle-gold-5"></span>
                  <span className="particle-gold-6"></span>
                  Give to the Church
                </a>
                <a
                  href="https://whatsapp.com/channel/0029VbBpoyx05MUhjSNxvS17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-6 rounded-lg font-bold text-2xl transition-all duration-300 transform hover:scale-105 floating-particles neon-flicker navi-button-enhanced"
                  style={{
                    background: '#FA00FF',
                    color: '#000000',
                    border: '3px solid #FA00FF',
                    boxShadow: '0 0 20px rgba(250, 0, 255, 0.4)',
                    textDecoration: 'none',
                    display: 'inline-block',
                    letterSpacing: '0.05em',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(250, 0, 255, 0.8), 0 0 60px rgba(250, 0, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(250, 0, 255, 0.4)';
                  }}
                >
                  <span className="particle-cyan-1"></span>
                  <span className="particle-cyan-2"></span>
                  <span className="particle-cyan-3"></span>
                  <span className="particle-white-1"></span>
                  <span className="particle-white-2"></span>
                  <span className="particle-white-3"></span>
                  <span className="particle-gold-1"></span>
                  <span className="particle-gold-2"></span>
                  <span className="particle-gold-3"></span>
                  <span className="particle-gold-4"></span>
                  <span className="particle-gold-5"></span>
                  <span className="particle-gold-6"></span>
                  Join the Church WhatsApp Channel
                </a>
                <a
                  href="https://upgrade.chat/navisociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-16 py-8 rounded-lg font-bold text-3xl transition-all duration-300 navi-button-alt-enhanced"
                  style={{
                    background: 'linear-gradient(-45deg, #00FF49, #00DD3F, #00FF49, #00DD3F, #00FF49)',
                    backgroundSize: '500% 500%',
                    color: '#000000',
                    border: '4px solid #00FF49',
                    boxShadow: '0 0 40px rgba(0, 247, 255, 0.7), 0 0 80px rgba(0, 255, 73, 0.4), 0 0 120px rgba(0, 247, 255, 0.2)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    letterSpacing: '0.1em',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 60px rgba(0, 247, 255, 1), 0 0 100px rgba(0, 255, 73, 0.8), 0 0 150px rgba(0, 247, 255, 0.5), 0 0 200px rgba(0, 255, 73, 0.3)';
                    e.currentTarget.style.transform = 'scale(1.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 247, 255, 0.7), 0 0 80px rgba(0, 255, 73, 0.4), 0 0 120px rgba(0, 247, 255, 0.2)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <span className="spark"></span>
                  <span className="spark"></span>
                  <span className="spark"></span>
                  <span className="spark"></span>
                  <span className="spark"></span>
                  <span className="spark"></span>
                  <span className="navi-button-alt-text-enhanced">Join NAVI Society</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Divider with Shimmer */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 shimmer-effect"></div>

      {/* Three Roles Section */}
      <section id="roles" className="py-20 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text-cyan-magenta">Divine Purpose</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Prophet Card */}
            <div className="card-premium group float-animation">
              <div className="mb-6 p-4 bg-cyan-500/10 rounded-lg w-fit group-hover:bg-cyan-500/20 transition-all">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 neon-glow-cyan">Prophet</h3>
              <p className="text-gray-300 leading-relaxed">
                Anointed with divine revelation and spiritual insight. Delivering God's message with clarity, power, and unwavering faith to guide believers toward their destiny.
              </p>
            </div>

            {/* Musician Card */}
            <div className="card-premium group float-animation" style={{ animationDelay: '0.5s' }}>
              <div className="mb-6 p-4 bg-magenta-500/10 rounded-lg w-fit group-hover:bg-magenta-500/20 transition-all">
                <Music className="w-8 h-8 text-magenta-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 neon-glow-magenta">Musician</h3>
              <p className="text-gray-300 leading-relaxed">
                Expressing spiritual truth through music. Creating melodies that inspire, uplift, and connect listeners to the divine presence through artistic excellence.
              </p>
            </div>

            {/* MMA Artist Card */}
            <div className="card-premium group float-animation" style={{ animationDelay: '1s' }}>
              <div className="mb-6 p-4 bg-lime-500/10 rounded-lg w-fit group-hover:bg-lime-500/20 transition-all">
                <Heart className="w-8 h-8 text-lime-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 neon-glow-lime">MMA Artist</h3>
              <p className="text-gray-300 leading-relaxed">
                Channeling spiritual discipline and strength through combat sports. Demonstrating the power of faith, determination, and excellence in the arena.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-magenta-500 to-transparent opacity-50 shimmer-effect"></div>

      {/* Glory and Grace Church Section */}
      <section id="church" className="py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-center">
            {/* Church Info - Centered */}
            <div className="slide-in-right space-y-8 flex flex-col justify-center max-w-2xl">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#FA00FF', textShadow: '0 0 10px rgba(250, 0, 255, 0.5), 0 0 20px rgba(250, 0, 255, 0.3)' }}>
                  Glory and Grace
                  <br />
                  <span className="text-white">Church</span>
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-gray-200">
                Founded by Dian Grobbelaar, Glory and Grace Church is a thriving community of believers dedicated to spiritual growth, divine purpose, and transformative faith. We believe in the power of God's word, the importance of community, and the reality of divine miracles.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <Users className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Community-Driven</h4>
                    <p className="text-gray-300">Building a strong family of believers united in faith and purpose</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group cursor-pointer">
                  <Heart className="w-6 h-6 text-magenta-400 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Spirit-Led</h4>
                    <p className="text-gray-300">Guided by the Holy Spirit in all our teachings and actions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group cursor-pointer">
                  <Zap className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Transformative</h4>
                    <p className="text-gray-300">Empowering believers to live their divine purpose with power</p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.paypal.com/ncp/payment/6NG4Q34ACBTCG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 font-bold text-lg rounded-xl transition-all duration-500 transform hover:scale-110 text-center"
                style={{
                  background: 'linear-gradient(135deg, #FA00FF 0%, #FA00FF 100%)',
                  color: '#FFFFFF',
                  boxShadow: '0 0 30px rgba(250, 0, 255, 0.5), 0 0 60px rgba(250, 0, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  border: '2px solid rgba(250, 0, 255, 0.7)',
                  letterSpacing: '0.05em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 50px rgba(250, 0, 255, 0.7), 0 0 100px rgba(250, 0, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #FA00FF 0%, #FF00FF 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(250, 0, 255, 0.5), 0 0 60px rgba(250, 0, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #FA00FF 0%, #FA00FF 100%)';
                }}
              >
                Support Our Mission
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-lime-500 to-transparent opacity-50 shimmer-effect"></div>

      {/* WhatsApp Section */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="float-animation mb-6">
            <MessageCircle className="w-16 h-16 mx-auto text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-glow-cyan">Join the Church</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Stay connected with daily inspirations, prayer requests, and updates from Glory and Grace Church. Join our WhatsApp channel for exclusive content and community engagement.
          </p>
          <a
            href="https://whatsapp.com/channel/0029VbBpoyx05MUhjSNxvS17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 pulse-glow transform hover:scale-105"
            style={{
              background: '#FA00FF',
              color: '#000000',
              boxShadow: '0 0 25px rgba(250, 0, 255, 0.4), 0 0 40px rgba(250, 0, 255, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 35px rgba(250, 0, 255, 0.6), 0 0 60px rgba(250, 0, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 25px rgba(250, 0, 255, 0.4), 0 0 40px rgba(250, 0, 255, 0.2)';
            }}
          >
            Join Now on WhatsApp
          </a>
        </div>
      </section>

      {/* Premium Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 shimmer-effect"></div>

      {/* Rekkies Section */}
      <section className="py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-12 neon-glow-lime">REKKIES</h2>
          <a
            href="https://upgrade.chat/rekkies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 font-bold text-lg rounded-xl transition-all duration-500 transform hover:scale-110 text-center"
            style={{
              background: 'linear-gradient(135deg, #00FF49 0%, #00FF49 100%)',
              color: '#000000',
              boxShadow: '0 0 30px rgba(0, 255, 73, 0.5), 0 0 60px rgba(0, 255, 73, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              border: '2px solid rgba(0, 255, 73, 0.7)',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 255, 73, 0.7), 0 0 100px rgba(0, 255, 73, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #00FF49 0%, #00FF73 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 73, 0.5), 0 0 60px rgba(0, 255, 73, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #00FF49 0%, #00FF49 100%)';
            }}
          >
            Join the Rekkies
          </a>
        </div>
      </section>

      {/* Premium Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-lime-500 to-transparent opacity-50 shimmer-effect"></div>

      {/* Prophet Dian Logo Section */}
      <section className="py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="mb-8 flex justify-center float-animation">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663476928525/TKW77vZ77nHhfNkPta2jej/prophet_dian_logo_original_4k_92f28861.png"
              alt="Prophet Dian Logo 4K"
              className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl transition-transform hover:scale-110"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(0, 247, 255, 0.4))',
              }}
            />
          </div>
          <h2 className="text-7xl md:text-8xl font-bold mb-3 neon-glow-cyan">PROPHET DIAN</h2>
          <p className="text-5xl md:text-6xl font-bold mb-8 gradient-text-cyan-magenta">All Things Prophetic</p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://www.instagram.com/prophet.dian?igsh=MzY2YWFjaXV0dHJo"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="Instagram"
            >
              <div className="p-4 rounded-full transition-all duration-300 transform hover:scale-110" style={{
                background: 'rgba(0, 247, 255, 0.1)',
                border: '2px solid #00F7FF',
                boxShadow: '0 0 15px rgba(0, 247, 255, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 247, 255, 0.6), 0 0 50px rgba(0, 247, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 247, 255, 0.3)';
              }}>
                <Instagram size={28} color="#00F7FF" />
              </div>
            </a>
            
            <a
              href="https://www.facebook.com/share/1AerrQ7YJJ/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="Facebook"
            >
              <div className="p-4 rounded-full transition-all duration-300 transform hover:scale-110" style={{
                background: 'rgba(250, 0, 255, 0.1)',
                border: '2px solid #FA00FF',
                boxShadow: '0 0 15px rgba(250, 0, 255, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(250, 0, 255, 0.6), 0 0 50px rgba(250, 0, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 15px rgba(250, 0, 255, 0.3)';
              }}>
                <Facebook size={28} color="#FA00FF" />
              </div>
            </a>
            
            <a
              href="https://x.com/Prophet_Dian"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="X"
            >
              <div className="p-4 rounded-full transition-all duration-300 transform hover:scale-110" style={{
                background: 'rgba(0, 255, 73, 0.1)',
                border: '2px solid #00FF49',
                boxShadow: '0 0 15px rgba(0, 255, 73, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 73, 0.6), 0 0 50px rgba(0, 255, 73, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 73, 0.3)';
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00FF49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l16 16M20 4l-16 16" />
                </svg>
              </div>
            </a>
            
            <a
              href="https://www.youtube.com/@prophetdian"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="YouTube"
            >
              <div className="p-4 rounded-full transition-all duration-300 transform hover:scale-110" style={{
                background: 'rgba(0, 247, 255, 0.1)',
                border: '2px solid #00F7FF',
                boxShadow: '0 0 15px rgba(0, 247, 255, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 247, 255, 0.6), 0 0 50px rgba(0, 247, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 247, 255, 0.3)';
              }}>
                <Youtube size={28} color="#00F7FF" />
              </div>
            </a>
          </div>
        </div>
        
        {/* Join NAVI Society Button - Cyan Particles */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://upgrade.chat/navisociety"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-6 rounded-lg font-bold text-2xl transition-all duration-300 transform hover:scale-105 floating-particles neon-flicker navi-button-enhanced"
            style={{
              background: '#00F7FF',
              color: '#000000',
              border: '3px solid #00F7FF',
              boxShadow: '0 0 20px rgba(0, 247, 255, 0.4)',
              textDecoration: 'none',
              display: 'inline-block',
              letterSpacing: '0.05em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 247, 255, 0.8), 0 0 60px rgba(0, 247, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 247, 255, 0.4)';
            }}
          >
            <span className="particle-cyan-1"></span>
            <span className="particle-cyan-2"></span>
            <span className="particle-cyan-3"></span>
            <span className="particle-white-1"></span>
            <span className="particle-white-2"></span>
            <span className="particle-white-3"></span>
            <span className="particle-gold-1"></span>
            <span className="particle-gold-2"></span>
            <span className="particle-gold-3"></span>
            <span className="particle-gold-4"></span>
            <span className="particle-gold-5"></span>
            <span className="particle-gold-6"></span>
            Join NAVI Society
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-magenta-lime">Contact the Team</span>
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Have questions, prayer requests, or want to collaborate? We'd love to hear from you. Reach out to our team directly.
          </p>

          <a
            href="mailto:realdiangrobbelaar@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 pulse-glow transform hover:scale-105"
            style={{
              background: '#00F7FF',
              color: '#000000',
              boxShadow: '0 0 25px rgba(0, 247, 255, 0.4), 0 0 40px rgba(0, 247, 255, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 35px rgba(0, 247, 255, 0.6), 0 0 60px rgba(0, 247, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 247, 255, 0.4), 0 0 40px rgba(0, 247, 255, 0.2)';
            }}
          >
            <Mail className="w-6 h-6" />
            Send Email
          </a>
        </div>
      </section>

      {/* Premium Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-magenta-500 to-transparent opacity-50 shimmer-effect"></div>

      {/* Social Links Footer */}
      <footer className="py-20 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8 neon-glow-cyan">Follow Dian</h3>
            <p className="text-gray-400 mb-8">Connect on social media for daily inspiration and updates</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/d_grobbelaar_?igsh=MWNzMml1bjlqZDA4dA=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon group float-animation"
              title="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/17oJR2oB8A/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon group float-animation"
              style={{ animationDelay: '0.1s' }}
              title="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>



            {/* X (Twitter) */}
            <a
              href="https://x.com/D_Grobbelaar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon group float-animation"
              style={{ animationDelay: '0.3s' }}
              title="X"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.8-5.974 6.8h-3.308l7.732-8.835L.424 2.25h6.837l4.867 6.44 5.516-6.44zM17.534 20.25h1.832L6.455 3.75H4.529l13.005 16.5z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@d_grobbelaar_"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon group float-animation"
              style={{ animationDelay: '0.4s' }}
              title="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 mb-2">© 2026 Dian Grobbelaar. All rights reserved.</p>

          </div>
        </div>
      </footer>
    </div>
  );
}
