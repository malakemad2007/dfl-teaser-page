import { useEffect, useRef, useState } from 'react';
import { Menu, X, Instagram, Mail, Youtube, Facebook, ArrowRight, Send, Sparkles, Heart, Slack, Linkedin, MessageSquare, Twitter, Disc, ChevronDown, Globe, User, FileText, Users } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const [contactFormData, setContactFormData] = useState({ name: '', email: '', message: '' });
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isInWhatYouFind, setIsInWhatYouFind] = useState(false);

  const whatYouFindRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (whatYouFindRef.current) {
        const rect = whatYouFindRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionStart = rect.top;
        const sectionEnd = rect.bottom;
        setIsInWhatYouFind(sectionStart < windowHeight && sectionEnd > 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [cursorColor, setCursorColor] = useState('#a488f4');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      const isInteractive = target?.closest('button, a, input, textarea, [role="button"]');
      setCursorColor(isInteractive ? '#facc15' : '#a488f4');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const programs = [
    { name: 'AFS Intercultural Programs', logo: 'afs.png' },
    { name: 'Kode With Klossy', logo: 'kode_with_klossy.png' },
    { name: 'Stanford Code in Place', logo: 'stanford_code_in_place.png' },
    { name: 'UNICEF', logo: 'unicef.png' },
    { name: 'Soliya', logo: 'soliya.png' },
    { name: 'NASA Space Apps Challenge', logo: 'nasa_space_apps.png' },
    { name: 'International Organisation of youth', logo: 'ioy.png' },
    { name: 'Climate Olympiad', logo: 'climate_olympiad.png' },
    { name: 'MUN', logo: 'mun.png' },
    { name: 'Microsoft', logo: 'microsoft.png' },
    { name: 'Girls Who Code', logo: 'girls_who_code.png' },
    { name: 'New York Academy of Sciences', logo: 'nyas.png' },
    { name: 'International House', logo: 'international_house.png' },
  ];

  const faqItems = [
    {
      question: "What even is Dear Future Luminary?",
      answer: "Think of it as the older sibling many of us wish we had.\n\nWe're building a place where students can discover opportunities, learn how to apply for them, and realize that people like us can do incredible things too."
    },
    {
      question: "Who is this for?",
      answer: "If you're a student who has ever Googled:\n\n• \"Fully funded summer programs for international students\"\n• \"How do people get into Harvard?\"\n• \"I have no extracurriculars. Am I cooked?\"\n\nCongratulations. You're one of us."
    },
    {
      question: "Is this really free?",
      answer: "Yep. Actually free.\n\nNo hidden fees. No \"pay to unlock the good stuff.\" No suspicious motivational guru energy."
    },
    {
      question: "I feel lost. Where do I even start?",
      answer: "Same.\n\nThat's exactly why Dear Future Luminary exists. Start anywhere—the opportunities, the guides, the roadmaps. Nobody has life figured out at 17. Or 18. Or, honestly, ever."
    },
    {
      question: "I'm not extraordinary enough for these opportunities.",
      answer: "Respectfully... says who?\n\nMost students you admire started with zero awards, zero connections, and a lot of self-doubt. The difference is that they applied anyway.\n\nPlease don't reject yourself before the application even can."
    },
    {
      question: "There's too much information online. It's overwhelming.",
      answer: "We know.\n\nOne person says, \"Build a startup.\"\n\nAnother says, \"Publish research.\"\n\nA third tells you to wake up at 5 AM and meditate on a mountain.\n\nWe're trying to make things simpler."
    },
    {
      question: "Can I trust these opportunities?",
      answer: "If it's on Dear Future Luminary, we've done our homework.\n\nWe care way too much about students to send them somewhere sketchy."
    },
    {
      question: "Can I suggest opportunities or resources?",
      answer: "Please do.\n\nThis isn't supposed to be a one-person mission. If you've found something amazing, we'd love to hear about it."
    },
    {
      question: "Can I work with Dear Future Luminary?",
      answer: "Absolutely.\n\nIf you enjoy helping people, creating cool things, and occasionally questioning your life choices while fixing a website bug at midnight, you'll fit right in."
    },
    {
      question: "Who's behind all this?",
      answer: "A student.\n\nNot a giant organization. Not a company with a fancy office and unlimited coffee.\n\nJust someone who got tired of watching talented students miss opportunities because nobody told them where to look."
    },
    {
      question: "What does \"Luminary\" mean here?",
      answer: "Someone who shines—and helps others shine too.\n\nCheesy? Maybe.\n\nTrue? Also yes."
    },
    {
      question: "Still wondering something?",
      answer: "Ask us.\n\nWorst case scenario, we answer with an unnecessarily long paragraph because we got excited."
    }
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xqaqankn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactFormData)
      });
      if (response.ok) {
        setContactFormSubmitted(true);
        setContactFormData({ name: '', email: '', message: '' });
        setTimeout(() => setContactFormSubmitted(false), 8000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      <style>{`
        * { cursor: default; }
        
        @keyframes scroll-seamless {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logos-carousel {
          display: flex;
          gap: 3rem;
          animation: scroll-seamless 40s linear infinite;
          width: fit-content;
        }
        .logos-carousel:hover { animation-play-state: paused; }
        
        @keyframes slideIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .modal-content { animation: slideIn 0.3s ease-out; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .float-anim { animation: float 6s ease-in-out infinite; }

        @keyframes drawLine {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes morphBlob {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
          75% { border-radius: 60% 40% 60% 30% / 60% 40% 30% 70%; }
        }

        html { scroll-behavior: smooth; }

        .text-reveal {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        .faq-answer-enter {
          animation: fadeInUp 0.4s ease-out forwards;
        }

        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #a488f4, #facc15, transparent);
        }

        @media (max-width: 768px) {
          .faq-main-title {
            position: relative !important;
            left: 0 !important;
            width: 100% !important;
            padding: 0 !important;
            margin-bottom: 3rem !important;
          }
          .faq-scroll-area {
            height: auto !important;
            max-height: none !important;
          }
          .mini-nav {
            padding: 0.5rem !important;
          }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* NAVBAR — Non-sticky, rounded on scroll */}
      {/* ═══════════════════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled
            ? 'top-5 left-1/2 -translate-x-1/2 bg-white/[0.92] shadow-[0_8px_40px_rgba(164,136,244,0.15)] border border-[#a488f4]/10'
            : 'top-0 left-0 bg-white/70 border-b border-gray-100/40'
        } ${isScrolled ? 'rounded-full max-w-[calc(100%-40px)]' : 'rounded-none max-w-full'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src="/images/dear.future.luminary.logo.svg.svg" alt="Logo" className="h-9 w-9 sm:h-10 sm:w-10" />
              <span className="font-bold text-base sm:text-lg text-[#1e3a8a] hidden sm:inline">Dear Future Luminary</span>
            </div>
            <div className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-600 font-medium text-sm lg:text-base">
              <a href="#" className="hover:text-[#a488f4] transition-colors duration-300">Home</a>
              <a href="#what-you-find" className="hover:text-[#a488f4] transition-colors duration-300">What You'll Find</a>
              <a href="#mission" className="hover:text-[#a488f4] transition-colors duration-300">Mission</a>
              <a href="#programs" className="hover:text-[#a488f4] transition-colors duration-300">Programs</a>
              <a href="#faq" className="hover:text-[#a488f4] transition-colors duration-300">FAQ</a>
              <button onClick={() => setShowJoinModal(true)} className="px-5 py-2.5 bg-[#1e3a8a] text-white rounded-full font-bold text-sm hover:bg-[#a488f4] transition-all duration-300 hover:shadow-lg hover:shadow-[#a488f4]/20">Join the Movement</button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-600 hover:text-[#a488f4] transition-colors">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100/50 rounded-b-2xl shadow-xl">
            <div className="px-6 py-6 space-y-4">
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-[#a488f4] transition-colors">Home</a>
              <a href="#what-you-find" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-[#a488f4] transition-colors">What You'll Find</a>
              <a href="#mission" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-[#a488f4] transition-colors">Mission</a>
              <a href="#programs" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-[#a488f4] transition-colors">Programs</a>
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-[#a488f4] transition-colors">FAQ</a>
              <button onClick={() => { setIsMobileMenuOpen(false); setShowJoinModal(true); }} className="w-full mt-4 px-6 py-3 bg-[#1e3a8a] text-white rounded-full font-bold hover:bg-[#a488f4] transition-all">Join the Movement</button>
            </div>
          </div>
        )}
      </nav>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* MINI NAVBAR — Appears in "What You'll Find" section */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className={`fixed bottom-0 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isInWhatYouFind ? 'opacity-100 translate-y-0 mb-4' : 'opacity-0 translate-y-24 pointer-events-none mb-0'
      }`}>
        <div className="bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(164,136,244,0.12)] border border-[#a488f4]/10 rounded-full px-3 py-2 flex items-center gap-1 sm:gap-2 mini-nav">
          <a href="#find-01" className="px-3 py-2 text-xs sm:text-sm font-semibold text-gray-500 hover:text-[#a488f4] hover:bg-[#a488f4]/5 rounded-full transition-all">Growth</a>
          <a href="#find-02" className="px-3 py-2 text-xs sm:text-sm font-semibold text-gray-500 hover:text-[#a488f4] hover:bg-[#a488f4]/5 rounded-full transition-all">Opportunities</a>
          <a href="#find-03" className="px-3 py-2 text-xs sm:text-sm font-semibold text-gray-500 hover:text-[#a488f4] hover:bg-[#a488f4]/5 rounded-full transition-all">Guides</a>
          <a href="#find-04" className="px-3 py-2 text-xs sm:text-sm font-semibold text-gray-500 hover:text-[#a488f4] hover:bg-[#a488f4]/5 rounded-full transition-all">Profile</a>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* HERO SECTION — UNCHANGED */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#a488f4] via-[#8a6ef1] to-[#7b5fde] relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white">
            <div>
              <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">Dear Future<br />Luminary</h1>
              <p className="text-2xl md:text-3xl font-serif text-[#facc15] relative inline-block">
                For the future that's watching.
                <span className="absolute bottom-0 left-0 w-24 h-1 bg-[#facc15] rounded-full"></span>
              </p>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-white/90">
              <p className="text-2xl font-bold">Finding opportunities shouldn't feel like solving a mystery.</p>
              <p>Discover your direction. Build your path with clarity. Access real global opportunities.</p>
              <p>I'm here to help you find where you belong, understand your next step, and move forward with confidence. You're not alone on this journey.</p>
            </div>
          </div>
          <div className="hidden md:flex justify-center"><img src="/images/dear.future.luminary.logo.svg.svg" alt="Logo" className="w-full max-w-sm" /></div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION DIVIDER */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="section-divider"></div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* BUILT BY YOUTH — NEW DESIGN */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="who-we-are" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Left — Big Statement */}
            <div className="w-full lg:w-5/12 relative">
              <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-[#1e3a8a] leading-[0.88] tracking-tighter mb-6 sm:mb-8">
                Built by<br />
                <span className="text-[#a488f4]">Youth,</span>
              </h2>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e3a8a] leading-[0.9] tracking-tight">
                for <span className="italic font-serif text-[#a488f4]">Youth.</span>
              </p>
              <div className="mt-8 sm:mt-12 flex items-center gap-4">
                <div className="w-16 sm:w-24 h-[2px] bg-[#facc15]"></div>
                <span className="text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-gray-400">Origin Story</span>
              </div>
            </div>

            {/* Right — Flowing Text + Manifesto */}
            <div className="w-full lg:w-7/12 space-y-10 lg:space-y-14">
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600 leading-snug">
                Not because it sounds cool. Because I'm literally a student too. I've spent years searching, making mistakes, and figuring it out.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#a488f4]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-6 sm:p-8 border-l-[3px] border-[#a488f4]">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#a488f4] mb-3 block">The Mission</span>
                    <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">Help students discover possibilities they didn't know existed.</p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#facc15]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-6 sm:p-8 border-l-[3px] border-[#facc15]">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#facc15] mb-3 block">The Focus</span>
                    <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">Opportunities, personal growth, and tools for a future you're excited about.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* WHAT YOU'LL FIND — NEW DESIGN: Each item is its own section */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="what-you-find" ref={whatYouFindRef} className="relative">
        {/* Section Header */}
        <div className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#1e3a8a] text-white overflow-hidden rounded-[3rem] sm:rounded-[4rem] mx-2 sm:mx-4 lg:mx-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-6 sm:mb-8">
              What You'll<br /><span className="text-[#a488f4]">Find Here</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/50 font-medium max-w-2xl mx-auto leading-relaxed">
              No magic formula. Just resources I genuinely wish someone had shown me earlier.
            </p>
          </div>
        </div>

        {/* Sub-section 01 — Personal Growth */}
        <div id="find-01" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#a488f4]/20 leading-none">01</span>
                    <div className="h-[1px] flex-1 bg-[#a488f4]/20"></div>
                  </div>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1e3a8a] leading-tight">Personal<br /><span className="text-[#a488f4]">Growth</span></h3>
                  <div className="w-12 h-1 bg-[#a488f4]"></div>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 leading-relaxed">
                    Because opportunities matter—but knowing yourself matters too.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#a488f4]/5 float-anim"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#facc15]/10 float-anim" style={{ animationDelay: '2s' }}></div>
                  <div className="relative bg-gray-50/80 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-gray-100">
                    <Users className="w-12 h-12 sm:w-16 sm:h-16 text-[#a488f4] mb-6" />
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                      Self-awareness is the foundation of every great journey. Before you chase opportunities, learn to understand who you are, what drives you, and what kind of future excites you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-section 02 — Global Opportunities */}
        <div id="find-02" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#facc15]/10 float-anim" style={{ animationDelay: '1s' }}></div>
                  <div className="relative bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-gray-100 shadow-sm">
                    <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-[#facc15] mb-6" />
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                      From fully-funded summer programs to international competitions—these are the doors that can change your trajectory. We find them so you don't have to dig through hundreds of websites.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#facc15]/30 leading-none">02</span>
                    <div className="h-[1px] flex-1 bg-[#facc15]/30"></div>
                  </div>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1e3a8a] leading-tight">Global<br /><span className="text-[#facc15]">Opportunities</span></h3>
                  <div className="w-12 h-1 bg-[#facc15]"></div>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 leading-relaxed">
                    Scholarships, summer programs, and experiences worth exploring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-section 03 — Guides & Roadmaps */}
        <div id="find-03" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#1e3a8a]/10 leading-none">03</span>
                    <div className="h-[1px] flex-1 bg-[#1e3a8a]/10"></div>
                  </div>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1e3a8a] leading-tight">Guides &<br /><span className="text-[#1e3a8a]">Roadmaps</span></h3>
                  <div className="w-12 h-1 bg-[#1e3a8a]"></div>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 leading-relaxed">
                    Clear steps for students who keep thinking: "What do I actually do now?"
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1e3a8a]/5 float-anim" style={{ animationDelay: '3s' }}></div>
                  <div className="relative bg-[#1e3a8a]/[0.02] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-[#1e3a8a]/10">
                    <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-[#1e3a8a] mb-6" />
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                      Step-by-step frameworks for building your profile, preparing applications, and navigating the uncertainty of "what's next." No fluff—just direction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-section 04 — Profile Building */}
        <div id="find-04" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#a488f4]/5 float-anim" style={{ animationDelay: '4s' }}></div>
                  <div className="relative bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-gray-100 shadow-sm">
                    <User className="w-12 h-12 sm:w-16 sm:h-16 text-[#a488f4] mb-6" />
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                      Your profile is more than grades. It's your story, your interests, your unique combination of experiences. We help you build something that actually represents you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#a488f4]/20 leading-none">04</span>
                    <div className="h-[1px] flex-1 bg-[#a488f4]/20"></div>
                  </div>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1e3a8a] leading-tight">Profile<br /><span className="text-[#a488f4]">Building</span></h3>
                  <div className="w-12 h-1 bg-[#a488f4]"></div>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 leading-relaxed">
                    Stand out authentically. Build a profile that tells your story.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION DIVIDER */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="section-divider"></div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* MEET THE FOUNDER — REFINED */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="founder" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-[#a488f4] rounded-[3rem] sm:rounded-[4rem] rotate-3 opacity-15"></div>
              <img src="/images/our-founder.png" alt="Malak Emad" className="relative z-10 w-full rounded-[3rem] sm:rounded-[4rem] shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-[#facc15] rounded-full z-20 flex items-center justify-center rotate-12 shadow-xl">
                <span className="text-[#1e3a8a] font-black text-center text-xs sm:text-sm leading-tight">Our<br />Founder</span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#1e3a8a] leading-tight">Hi, I'm Malak.</h2>
                <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#a488f4] leading-tight italic">
                  And after spending years discovering opportunities by pure accident, I started wondering:
                </p>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1e3a8a]">Why does finding them have to be this hard?</p>
              </div>
              <div className="h-1 w-24 sm:w-32 bg-[#facc15]"></div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed">
                A few years ago, I was the student endlessly searching Google, opening fifty tabs, and wondering how everyone else seemed to know about incredible programs, scholarships, and experiences. Over time, I found opportunities that changed my life, connected with amazing people, and discovered paths I never knew existed. But I kept thinking: "What about the students who never find these opportunities?" That's the question that led to Dear Future Luminary.
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-medium text-[#1e3a8a] border-l-4 border-[#a488f4] pl-4 sm:pl-6 py-2">
                If you're reading this and feeling a little lost about your future, trust me—I started there too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION DIVIDER */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="section-divider"></div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* PROGRAMS SECTION — REFINED */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="programs" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20 sm:mb-32">
            <div>
              <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-[#1e3a8a] leading-none tracking-tighter mb-8 sm:mb-12">Opportunities<br /><span className="text-[#a488f4]">Worth Knowing</span></h2>
              <div className="h-2 w-24 sm:w-32 bg-[#facc15] mb-8 sm:mb-12"></div>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 font-medium leading-relaxed">
              These are programs I got accepted into that completely changed how I see what's possible. They're fully funded, life-changing, and yet many students never hear about them. <span className="text-[#a488f4] font-black">That shouldn't happen.</span>
            </p>
          </div>
          <div className="relative py-8 sm:py-12">
            <div className="logos-carousel">
              {[...programs, ...programs].map((p, i) => (
                <div key={i} className="flex-shrink-0 w-48 h-48 sm:w-64 sm:h-64 bg-white border border-gray-100 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 flex items-center justify-center hover:shadow-2xl hover:border-[#a488f4]/30 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#a488f4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src={`/images/logos/${p.logo}`} alt={p.name} className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-110 relative z-10" />
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 sm:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION DIVIDER */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="section-divider"></div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* MISSION SECTION — REFINED */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="mission" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#facc15] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-6xl sm:text-8xl lg:text-[10rem] font-black text-[#1e3a8a] leading-[0.8] tracking-tighter mb-8 sm:mb-12">
              Talent is <br /> Everywhere. <br /> <span className="text-white">Access is not.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 lg:p-12 bg-white rounded-[3rem] sm:rounded-[4rem] shadow-2xl space-y-6 sm:space-y-8 transform lg:rotate-2">
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#1e3a8a] leading-tight">
                Dear Future Luminary was born from one student asking: <br />
                <span className="text-[#a488f4] font-black italic">"What if finding opportunities was a little less confusing?"</span>
              </p>
              <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8 border-t border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#a488f4] flex-shrink-0 mt-1"></div>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600"><span className="font-black text-[#1e3a8a]">Authenticity:</span> Built by a student who knows how this feels.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#1e3a8a] flex-shrink-0 mt-1"></div>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600"><span className="font-black text-[#1e3a8a]">Clarity:</span> Converting confusion into simple steps.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#facc15] flex-shrink-0 mt-1 border-2 border-[#1e3a8a]"></div>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600"><span className="font-black text-[#1e3a8a]">Impact:</span> Realizing you're capable of more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION DIVIDER */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="section-divider"></div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* FAQ SECTION — COMPLETELY NEW DESIGN */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="faq" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Layout: Fixed title left, scrollable Q&A right on desktop; stacked on mobile */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Fixed Title Block */}
            <div className="lg:w-2/5 lg:sticky lg:top-28 lg:self-start lg:h-fit">
              <div className="faq-main-title">
                <div className="inline-block px-6 py-2.5 bg-[#a488f4] text-white rounded-full text-sm sm:text-base font-black mb-6 sm:mb-8 tracking-wider">Q&A</div>
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#1e3a8a] leading-[0.9] tracking-tighter mb-4 sm:mb-6">
                  Questions You<br />Might Be<br /><span className="text-[#a488f4]">Too Shy</span> to Ask
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 font-medium italic">But Come on. You Ask. We Yap, Respectfully.</p>
              </div>
            </div>

            {/* Scrollable FAQ Area */}
            <div className="lg:w-3/5 faq-scroll-area">
              <div className="space-y-0">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-100/60 last:border-0">
                    <button
                      className="w-full py-6 sm:py-8 flex items-center justify-between text-left group transition-all duration-300"
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    >
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1e3a8a] group-hover:text-[#a488f4] transition-colors duration-300 pr-4 sm:pr-8 leading-snug">
                        {item.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-[#a488f4] flex-shrink-0 transition-all duration-500 ${
                          openFaqIndex === index ? 'rotate-180 text-[#a488f4]' : ''
                        }`}
                      />
                    </button>
                    {openFaqIndex === index && (
                      <div className="pb-8 sm:pb-12 pr-8 sm:pr-12 faq-answer-enter">
                        <div className="pl-0 sm:pl-4 border-l-2 border-[#a488f4]/20 space-y-3 sm:space-y-4">
                          {item.answer.split('\n').map((line, lineIdx) => {
                            if (line.trim() === '') return <div key={lineIdx} className="h-3 sm:h-4"></div>;
                            if (line.startsWith('• ')) {
                              return (
                                <p key={lineIdx} className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed pl-4 relative">
                                  <span className="absolute left-0 top-1 w-1.5 h-1.5 rounded-full bg-[#a488f4]"></span>
                                  {line.replace('• ', '')}
                                </p>
                              );
                            }
                            return (
                              <p key={lineIdx} className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed">
                                {line}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION DIVIDER */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="section-divider"></div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* CTA SECTION — REFINED */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#a488f4] via-[#9377f0] to-[#8a6ef1] rounded-[3rem] sm:rounded-[4rem] p-10 sm:p-16 lg:p-32 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-8 sm:space-y-10 lg:space-y-12 max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl lg:text-8xl font-black text-white leading-[1] tracking-tight">Ready to build something <br /><span className="text-[#facc15]">bigger than yourself?</span></h2>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-xl sm:text-2xl lg:text-3xl font-black text-white">Whatever brought you here, I'm glad you're here.</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-black text-[#facc15]">Let's figure it out together.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4 sm:pt-8">
                <a href="https://forms.gle/pLqpSodiuMmB36Ei8" target="_blank" className="px-8 sm:px-12 py-4 sm:py-6 bg-white text-[#1e3a8a] rounded-2xl font-black text-base sm:text-xl hover:bg-[#facc15] hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 group">Join the Movement <ArrowRight className="group-hover:translate-x-1 transition-transform" /></a>
                <a href="https://forms.gle/1uFr976gMZqtJHcw7" target="_blank" className="px-8 sm:px-12 py-4 sm:py-6 bg-transparent border-2 border-white/30 text-white rounded-2xl font-black text-base sm:text-xl hover:bg-white/10 transition-all duration-500 flex items-center justify-center gap-3">Support the Mission <Heart /></a>
              </div>
              <p className="text-white/60 text-xs sm:text-sm font-bold tracking-widest uppercase">No pressure. No perfect timing. Just one step forward.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* CONNECT BAR — Updated Socials */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="bg-[#facc15] py-4 px-4 sm:px-6 lg:px-8 mx-2 sm:mx-4 lg:mx-8 rounded-full mb-6 sm:mb-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="flex flex-wrap gap-6 sm:gap-10 items-center justify-center">
            <a href="https://www.instagram.com/dear.future.luminary/" target="_blank" className="text-[#1e3a8a] hover:scale-125 transition-all" title="Instagram @dear.future.luminary"><Instagram size={24} /></a>
            <a href="https://www.youtube.com/@malak_luminary" target="_blank" className="text-[#1e3a8a] hover:scale-125 transition-all" title="YouTube @malak_luminary"><Youtube size={24} /></a>
            <a href="https://www.facebook.com/dear.future.luminary/" target="_blank" className="text-[#1e3a8a] hover:scale-125 transition-all" title="Facebook @dear.future.luminary"><Facebook size={24} /></a>
            <a href="mailto:dear.future.luminary@gmail.com" className="text-[#1e3a8a] hover:scale-125 transition-all" title="Email dear.future.luminary@gmail.com"><Mail size={24} /></a>
            <button onClick={() => setShowComingSoonModal(true)} className="text-[#1e3a8a] hover:scale-125 transition-all cursor-pointer" title="Discord — Coming Soon"><Disc size={24} /></button>
            <button onClick={() => setShowComingSoonModal(true)} className="text-[#1e3a8a] hover:scale-125 transition-all cursor-pointer" title="Slack — Coming Soon"><Slack size={24} /></button>
            <button onClick={() => setShowComingSoonModal(true)} className="text-[#1e3a8a] hover:scale-125 transition-all cursor-pointer" title="X / Twitter — Coming Soon"><Twitter size={24} /></button>
            <button onClick={() => setShowComingSoonModal(true)} className="text-[#1e3a8a] hover:scale-125 transition-all cursor-pointer" title="LinkedIn — Coming Soon"><Linkedin size={24} /></button>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* FOOTER — UNCHANGED */}
      {/* ═══════════════════════════════════════════════════════ */}
      <footer className="bg-white pt-10 sm:pt-12 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 text-[#1e3a8a]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-16 mb-12 sm:mb-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h4 className="text-4xl sm:text-5xl font-black mb-4 sm:mb-6">Let's Talk.</h4>
              <p className="text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed mb-6 sm:mb-8">Have a question, an idea, or just want to say hi? I'm all ears.</p>
              <div className="flex items-center gap-4 text-[#a488f4]"><Sparkles /><span className="font-bold uppercase tracking-widest text-xs sm:text-sm">Always checking my inbox</span></div>
            </div>
            {!contactFormSubmitted ? (
              <form onSubmit={handleContactSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <input type="text" placeholder="Your Name" required className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-[#a488f4] transition-colors text-sm sm:text-base" value={contactFormData.name} onChange={e => setContactFormData({...contactFormData, name: e.target.value})} />
                  <input type="email" placeholder="Your Email" required className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-[#a488f4] transition-colors text-sm sm:text-base" value={contactFormData.email} onChange={e => setContactFormData({...contactFormData, email: e.target.value})} />
                </div>
                <textarea placeholder="Your Message" required rows={4} className="w-full bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-[#a488f4] transition-colors text-sm sm:text-base" value={contactFormData.message} onChange={e => setContactFormData({...contactFormData, message: e.target.value})} />
                <button type="submit" className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-[#1e3a8a] text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-[#a488f4] transition-all flex items-center justify-center gap-2 group">Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></button>
              </form>
            ) : (
              <div className="p-8 sm:p-12 bg-[#a488f4]/10 rounded-[2rem] sm:rounded-[3rem] text-center">
                <h3 className="text-2xl sm:text-3xl font-black text-[#1e3a8a] mb-3 sm:mb-4">Message Sent!</h3>
                <p className="text-base sm:text-xl text-gray-600">Thank you so much! I'll reply as soon as I can.</p>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-100">
            <p className="text-gray-400 font-light text-xs sm:text-sm">© 2026 Dear Future Luminary. All rights reserved.</p>
            <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-8">
              <p className="text-[#1e3a8a] font-light text-xs sm:text-sm">Supporting SDGs: 4, 8, 10, 17</p>
              <p className="text-gray-400 font-light text-xs sm:text-sm">Developed by Malak Emad</p>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* JOIN MODAL */}
      {/* ═══════════════════════════════════════════════════════ */}
      {showJoinModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1e3a8a]/40 backdrop-blur-md">
          <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 max-w-2xl w-full relative modal-content shadow-2xl">
            <button onClick={() => setShowJoinModal(false)} className="absolute top-6 right-6 sm:top-8 sm:right-8 text-gray-400 hover:text-[#1e3a8a] transition-colors"><X size={28} /></button>
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-block px-5 py-2 bg-[#facc15] text-[#1e3a8a] rounded-full font-black uppercase tracking-widest text-xs sm:text-sm">Join Us</div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#1e3a8a]">The movement is growing.</h2>
              <p className="text-base sm:text-xl text-gray-500 leading-relaxed">We're looking for students who want to build, lead, and shine. Choose how you want to be part of the story:</p>
              <div className="grid gap-3 sm:gap-4">
                <a href="https://forms.gle/pLqpSodiuMmB36Ei8" target="_blank" className="p-6 sm:p-8 bg-gray-50 rounded-2xl sm:rounded-3xl border-2 border-transparent hover:border-[#a488f4] hover:bg-white transition-all group">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg sm:text-2xl font-black text-[#1e3a8a]">Apply to Join the Team</h4>
                      <p className="text-gray-500 text-sm sm:text-base">Help us build the future of student empowerment.</p>
                    </div>
                    <ArrowRight className="text-[#a488f4] group-hover:translate-x-2 transition-transform hidden sm:block" />
                  </div>
                </a>
                <a href="https://forms.gle/1uFr976gMZqtJHcw7" target="_blank" className="p-6 sm:p-8 bg-gray-50 rounded-2xl sm:rounded-3xl border-2 border-transparent hover:border-[#facc15] hover:bg-white transition-all group">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg sm:text-2xl font-black text-[#1e3a8a]">Become a Contributor</h4>
                      <p className="text-gray-500 text-sm sm:text-base">Share opportunities, resources, or your own story.</p>
                    </div>
                    <ArrowRight className="text-[#facc15] group-hover:translate-x-2 transition-transform hidden sm:block" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════ */}
      {/* COMING SOON MODAL */}
      {/* ═══════════════════════════════════════════════════════ */}
      {showComingSoonModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1e3a8a]/40 backdrop-blur-md">
          <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 max-w-md w-full relative modal-content shadow-2xl text-center">
            <button onClick={() => setShowComingSoonModal(false)} className="absolute top-6 right-6 sm:top-8 sm:right-8 text-gray-400 hover:text-[#1e3a8a] transition-colors"><X size={28} /></button>
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-block px-5 py-2 bg-[#a488f4] text-white rounded-full font-black uppercase tracking-widest text-xs sm:text-sm">Coming Soon</div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a]">We're getting there.</h2>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed">This platform is on its way. Follow us on the channels that are live to stay in the loop.</p>
              <div className="pt-4">
                <button onClick={() => setShowComingSoonModal(false)} className="px-8 py-3 bg-[#1e3a8a] text-white rounded-full font-bold text-sm sm:text-base hover:bg-[#a488f4] transition-all">Got it</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
