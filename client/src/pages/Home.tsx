import { useEffect, useState } from 'react';
import { Menu, X, Instagram, Mail, Youtube, Facebook, ArrowRight, Send, Map, Sparkles, Users, Heart, Globe, User, FileText, Star, HelpCircle } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const [contactFormData, setContactFormData] = useState({ name: '', email: '', message: '' });
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        answer: "<strong>Dear Future Luminary</strong> is my corner of the internet for <strong>figuring things out</strong>—your next opportunity, your passions, your personal growth, and honestly… yourself.<br><br>I help students discover <strong>scholarships, summer programs, teams, skills, and paths</strong> I wish I knew about earlier."
    },
    {
        question: "Who is this for?",
        answer: "<strong>High school students. Early college students. Dreamers. Overthinkers. Future founders. People who feel behind. People who want more.</strong><br><br>Basically… if you’re trying to <strong>grow</strong>, <strong>build your future</strong>, or <strong>find your spark</strong>—you belong here."
    },
    {
        question: "Is this really free?",
        answer: "<strong>Yep. Actually free.</strong><br><br>No hidden fees. No “pay to unlock the good stuff.” No weird catch.<br><br><strong>Access should never be the thing holding someone back.</strong>"
    },
    {
        question: "I feel lost. Where do I even start?",
        answer: "Honestly? That’s exactly why I built this.<br><br>Start anywhere that feels exciting: <strong>opportunities, personal growth, roadmaps, profile building…</strong> there’s no perfect order."
    },
    {
        question: "I’m not extraordinary enough.",
        answer: "Respectfully… says who?<br><br>You <strong>do not need to be “the perfect student”</strong> to deserve good opportunities. You need <strong>curiosity, effort, and the courage to try.</strong>"
    },
    {
        question: "Too much information. Overwhelmed.",
        answer: "Same. That’s why I <strong>curate everything</strong>—to save you from ten hours of chaotic searching and fifteen open tabs.<br><br>Take <strong>one small step</strong>. That’s enough."
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
        * { cursor: none; }
        @keyframes pulse-cursor-purple {
          0%, 100% { box-shadow: 0 0 0 0 rgba(164, 136, 244, 0.7), 0 0 20px 0 rgba(164, 136, 244, 0.5); }
          50% { box-shadow: 0 0 0 12px rgba(164, 136, 244, 0.2), 0 0 30px 5px rgba(164, 136, 244, 0.3); }
        }
        @keyframes pulse-cursor-yellow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.7), 0 0 20px 0 rgba(250, 204, 21, 0.5); }
          50% { box-shadow: 0 0 0 12px rgba(250, 204, 21, 0.2), 0 0 30px 5px rgba(250, 204, 21, 0.3); }
        }
        .custom-cursor {
          position: fixed;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: background-color 0.2s ease;
        }
        .custom-cursor.purple { animation: pulse-cursor-purple 1.5s infinite; }
        .custom-cursor.yellow { animation: pulse-cursor-yellow 1.5s infinite; }
        
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

        html { scroll-behavior: smooth; }
      `}</style>

      <div
        className={`custom-cursor ${cursorColor === '#facc15' ? 'yellow' : 'purple'}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, background: cursorColor }}
      />

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'top-4 left-4 right-4 bg-white/95 backdrop-blur-xl shadow-xl border border-gray-100 rounded-2xl'
            : 'bg-white/80 backdrop-blur-xl rounded-none border-b border-gray-100/50'
        }`}
        style={isScrolled ? { maxWidth: 'calc(100% - 32px)', margin: '0 auto', left: '16px', right: '16px' } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src="/images/dear.future.luminary.logo.svg.svg" alt="Logo" className="h-10 w-10" />
              <span className="font-bold text-lg text-[#1e3a8a] hidden sm:inline">Dear Future Luminary</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
              <a href="#" className="hover:text-[#a488f4] transition-colors">Home</a>
              <a href="#what-you-find" className="hover:text-[#a488f4] transition-colors">What You'll Find</a>
              <a href="#mission" className="hover:text-[#a488f4] transition-colors">Mission</a>
              <a href="#programs" className="hover:text-[#a488f4] transition-colors">Programs</a>
              <a href="#faq" className="hover:text-[#a488f4] transition-colors">FAQ</a>
              <button onClick={() => setShowJoinModal(true)} className="px-6 py-2 bg-[#1e3a8a] text-white rounded-xl font-bold hover:bg-[#a488f4] transition-all">Join the Movement</button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-600">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section (KEEP AS IS) */}
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

      {/* Personal Note Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -top-24 -left-24 text-[20rem] font-black text-gray-50 select-none pointer-events-none opacity-50">“</div>
            <div className="relative z-10 space-y-12">
              <p className="text-4xl md:text-5xl font-medium text-[#1e3a8a] leading-[1.3]">
                I know how <span className="text-[#a488f4] font-black underline decoration-wavy decoration-[#facc15] underline-offset-8">overwhelming</span> it can be—hundreds of tabs open, confusing advice, opportunities you discover three days after the deadline, and that constant feeling that <span className="italic">everyone else somehow knows something you don't.</span>
              </p>
              <p className="text-4xl md:text-5xl font-medium text-[#1e3a8a] leading-[1.3]">
                That's why I started <span className="font-black text-[#1e3a8a]">Dear Future Luminary</span>. A place to help students discover opportunities, build their profiles, explore new paths, and realize they're <span className="text-[#a488f4] font-black">capable of much more</span> than they think.
              </p>
              <p className="text-3xl md:text-4xl font-bold text-[#facc15] bg-[#1e3a8a] inline-block px-8 py-4 rounded-2xl transform -rotate-1">
                You don't need to have everything figured out. You just need somewhere to start.
              </p>
            </div>
            <div className="absolute -bottom-24 -right-24 text-[20rem] font-black text-gray-50 select-none pointer-events-none opacity-50">”</div>
          </div>
        </div>
      </section>

      {/* Built by Youth overhaul */}
      <section id="who-we-are" className="py-40 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 relative">
              <div className="w-full aspect-square bg-[#a488f4] rounded-[5rem] rotate-3 absolute inset-0 opacity-10"></div>
              <div className="relative z-10 p-12 bg-white rounded-[4rem] shadow-2xl border border-gray-100">
                <h2 className="text-8xl md:text-9xl font-black text-[#1e3a8a] leading-[0.8] tracking-tighter mb-12">
                  Built by <br/>
                  <span className="text-[#a488f4]">Youth,</span> <br/>
                  for Youth.
                </h2>
                <div className="h-2 w-32 bg-[#facc15] rounded-full"></div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-12">
              <div className="inline-block px-6 py-2 bg-[#a488f4]/10 text-[#a488f4] rounded-full text-sm font-black tracking-widest uppercase">The Truth</div>
              <p className="text-4xl font-medium text-[#1e3a8a] leading-tight">
                Not because it sounds cool. Because I'm literally a student too. I've spent years searching, making mistakes, and figuring it out.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                  <span className="text-5xl font-black text-[#a488f4]/20 group-hover:text-[#a488f4] transition-colors block mb-4">01</span>
                  <h4 className="text-2xl font-black text-[#1e3a8a] mb-2">The Mission</h4>
                  <p className="text-gray-500">Help students discover possibilities they didn't know existed.</p>
                </div>
                <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                  <span className="text-5xl font-black text-[#facc15]/20 group-hover:text-[#facc15] transition-colors block mb-4">02</span>
                  <h4 className="text-2xl font-black text-[#1e3a8a] mb-2">The Focus</h4>
                  <p className="text-gray-500">Opportunities, personal growth, and tools for a future you're excited about.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find overhaul */}
      <section id="what-you-find" className="py-40 px-4 sm:px-6 lg:px-8 bg-[#1e3a8a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-32">
            <h2 className="text-8xl md:text-[12rem] font-black text-white/5 leading-none absolute top-0 left-0 select-none">DISCOVER</h2>
            <div className="relative pt-24">
              <h2 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter mb-8">What You'll <br/><span className="text-[#facc15]">Find Here</span></h2>
              <p className="text-3xl text-white/40 font-medium max-w-2xl">No magic formula. Just resources I genuinely wish someone had shown me earlier.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: <User className="w-24 h-24" />, color: "#a488f4", title: "Personal Growth", text: "Because opportunities matter—but knowing yourself matters too.", id: "01" },
              { icon: <Globe className="w-24 h-24" />, color: "#facc15", title: "Global Opportunities", text: "Scholarships, summer programs, and experiences worth exploring.", id: "02" },
              { icon: <Map className="w-24 h-24" />, color: "#a488f4", title: "Guides & Roadmaps", text: "Clear steps for students who keep thinking: 'What do I actually do now?'", id: "03" },
              { icon: <FileText className="w-24 h-24" />, color: "#facc15", title: "Profile Building", text: "CVs, portfolios, applications, and all the things nobody teaches in school.", id: "04" },
              { icon: <Users className="w-24 h-24" />, color: "#a488f4", title: "Community", text: "A space for students who are trying, learning, and building together.", id: "05" },
              { icon: <Sparkles className="w-24 h-24" />, color: "#facc15", title: "Stories & Inspiration", text: "Proof that amazing opportunities aren't reserved for 'geniuses'.", id: "06" }
            ].map((item, i) => (
              <div key={i} className="group cursor-default">
                <div className="mb-8 overflow-hidden rounded-[3rem] aspect-[4/3] bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-opacity-100 transition-all relative" style={{ borderColor: item.color + '33' }}>
                  <div className="opacity-20 group-hover:opacity-100 transition-all group-hover:scale-110" style={{ color: item.color }}>{item.icon}</div>
                  <div className="absolute bottom-8 left-8 text-white font-black text-4xl opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">{item.id}</div>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-[#facc15] transition-colors">{item.title}</h3>
                <p className="text-xl text-white/40">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities overhaul */}
      <section id="programs" className="py-40 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <h2 className="text-7xl md:text-8xl font-black text-[#1e3a8a] leading-none tracking-tighter mb-12">Opportunities <br/><span className="text-[#a488f4]">Worth Knowing</span></h2>
              <div className="h-2 w-32 bg-[#facc15] mb-12"></div>
            </div>
            <p className="text-2xl text-gray-500 font-medium leading-relaxed">
              These are programs I got accepted into that completely changed how I see what's possible. They're fully funded, life-changing, and yet many students never hear about them. <span className="text-[#a488f4] font-black">That shouldn't happen.</span>
            </p>
          </div>
          
          <div className="relative py-12">
            <div className="logos-carousel">
              {[...programs, ...programs].map((p, i) => (
                <div key={i} className="flex-shrink-0 w-64 h-64 bg-white border border-gray-100 rounded-[3rem] p-12 flex items-center justify-center hover:shadow-2xl hover:border-[#a488f4]/30 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#a488f4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src={`/images/logos/${p.logo}`} alt={p.name} className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-110 relative z-10" />
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Our Mission overhaul */}
      <section id="mission" className="py-40 px-4 sm:px-6 lg:px-8 bg-[#facc15] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-8xl md:text-[10rem] font-black text-[#1e3a8a] leading-[0.8] tracking-tighter mb-12">
                Talent is <br/>
                Everywhere. <br/>
                <span className="text-white">Access is not.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <div className="p-12 bg-white rounded-[4rem] shadow-2xl space-y-8 transform lg:rotate-2">
                <p className="text-3xl font-medium text-[#1e3a8a] leading-tight">
                  Dear Future Luminary was born from one student asking: <br/>
                  <span className="text-[#a488f4] font-black italic">"What if finding opportunities was a little less confusing?"</span>
                </p>
                <div className="space-y-6 pt-8 border-t border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#a488f4] flex-shrink-0 mt-1"></div>
                    <p className="text-xl text-gray-600"><span className="font-black text-[#1e3a8a]">Authenticity:</span> Built by a student who knows how this feels.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#1e3a8a] flex-shrink-0 mt-1"></div>
                    <p className="text-xl text-gray-600"><span className="font-black text-[#1e3a8a]">Clarity:</span> Converting confusion into simple steps.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#facc15] flex-shrink-0 mt-1 border-2 border-[#1e3a8a]"></div>
                    <p className="text-xl text-gray-600"><span className="font-black text-[#1e3a8a]">Impact:</span> Realizing you're capable of more.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ overhaul */}
      <section id="faq" className="py-40 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <div className="inline-block px-8 py-3 bg-[#1e3a8a] text-white rounded-full text-xl font-black mb-8 transform -rotate-2">Q&A</div>
            <h2 className="text-7xl md:text-9xl font-black text-[#1e3a8a] leading-none tracking-tighter">Questions You Might <br/>Be <span className="text-[#a488f4]">Too Shy</span> to Ask</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {faqItems.map((item, i) => (
              <div key={i} className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100 hover:border-[#a488f4] hover:bg-white transition-all group">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#a488f4]/10 flex items-center justify-center text-[#a488f4] group-hover:bg-[#a488f4] group-hover:text-white transition-all flex-shrink-0">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-[#1e3a8a] leading-tight">{item.question}</h3>
                    <div className="text-xl text-gray-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section (KEEP AS IS) */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#a488f4] via-[#9377f0] to-[#8a6ef1] rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl text-white">
            <div className="relative z-10 space-y-12 max-w-4xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-black leading-[1] tracking-tight">Ready to build something <br /><span className="text-[#facc15]">bigger than yourself?</span></h2>
              <div className="space-y-4 text-3xl font-black">
                <p>Whatever brought you here, I'm glad you're here.</p>
                <p className="text-[#facc15]">Let's figure it out together.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <a href="https://forms.gle/pLqpSodiuMmB36Ei8" target="_blank" className="px-12 py-6 bg-white text-[#1e3a8a] rounded-2xl font-black text-xl hover:bg-[#facc15] transition-all flex items-center justify-center gap-3 group">Join the Movement <ArrowRight className="group-hover:translate-x-1 transition-transform" /></a>
                <a href="https://forms.gle/1uFr976gMZqtJHcw7" target="_blank" className="px-12 py-6 bg-transparent border-2 border-white/30 rounded-2xl font-black text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3">Support the Mission <Heart /></a>
              </div>
              <p className="text-white/60 text-base font-bold tracking-widest uppercase">No pressure. No perfect timing. Just one step forward.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-[#a488f4] via-[#8a6ef1] to-[#7b5fde] pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6"><img src="/images/dear.future.luminary.logo.svg.svg" alt="Logo" className="w-8 h-8" /><span className="font-bold text-lg">Dear Future Luminary</span></div>
              <p className="text-white/70">Luminaries don't shine alone. We light the way for each other.</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-[#facc15] text-lg">Quick Links</h4>
              <ul className="space-y-3 text-white/70 cursor-pointer">
                <li onClick={() => setShowComingSoonModal(true)}>Home</li>
                <li onClick={() => setShowComingSoonModal(true)}>Scholarships Hub</li>
                <li onClick={() => setShowComingSoonModal(true)}>Roadmaps</li>
                <li onClick={() => setShowComingSoonModal(true)}>Profile Building</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-[#facc15] text-lg">About</h4>
              <ul className="space-y-3 text-white/70">
                <li><a href="#mission">Our Story & Vision</a></li>
                <li onClick={() => setShowComingSoonModal(true)} className="cursor-pointer">Community Space</li>
                <li onClick={() => setShowComingSoonModal(true)} className="cursor-pointer">Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-[#facc15] text-lg">Connect</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/dear.future.luminary" target="_blank" className="hover:text-[#facc15] transition-colors"><Instagram /></a>
                <a href="https://www.facebook.com/dear.future.luminary" target="_blank" className="hover:text-[#facc15] transition-colors"><Facebook /></a>
                <a href="https://www.youtube.com/@malak_luminary" target="_blank" className="hover:text-[#facc15] transition-colors"><Youtube /></a>
                <a href="mailto:dear.future.luminary@gmail.com" className="hover:text-[#facc15] transition-colors"><Mail /></a>
              </div>
            </div>
          </div>

          {/* SDGs RESTORED */}
          <div className="py-12 border-t border-white/10 mb-12">
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 hover:opacity-100 transition-opacity duration-500">
              <img src="/images/sdgs/sdg4_official.jpg" alt="SDG 4" className="h-16 w-auto grayscale hover:grayscale-0 transition-all" />
              <img src="/images/sdgs/sdg8_official.png" alt="SDG 8" className="h-16 w-auto grayscale hover:grayscale-0 transition-all" />
              <img src="/images/sdgs/sdg10_official.png" alt="SDG 10" className="h-16 w-auto grayscale hover:grayscale-0 transition-all" />
              <img src="/images/sdgs/sdg17_official.png" alt="SDG 17" className="h-16 w-auto grayscale hover:grayscale-0 transition-all" />
            </div>
            <p className="text-center text-white/40 text-xs mt-6 tracking-[0.3em] uppercase">Proudly Contributing to Global Impact</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 mb-12">
            <h4 className="font-bold mb-6 text-[#facc15] text-lg">Contact Me</h4>
            {contactFormSubmitted ? (
              <div className="text-center p-8"><Sparkles className="mx-auto text-[#facc15] mb-4" /> <h3 className="text-2xl font-black">Message Sent!</h3><p>Thank you so much! 💜</p></div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" required value={contactFormData.name} onChange={e => setContactFormData({...contactFormData, name: e.target.value})} className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#facc15]" />
                  <input type="email" placeholder="Email" required value={contactFormData.email} onChange={e => setContactFormData({...contactFormData, email: e.target.value})} className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#facc15]" />
                </div>
                <textarea placeholder="Message" required rows={4} value={contactFormData.message} onChange={e => setContactFormData({...contactFormData, message: e.target.value})} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#facc15]"></textarea>
                <button type="submit" className="px-8 py-3 bg-[#facc15] text-[#1e3a8a] rounded-xl font-bold hover:bg-white transition-all flex items-center gap-2">Send Message <Send size={16} /></button>
              </form>
            )}
          </div>
          <div className="pt-8 border-t border-white/10 flex justify-between items-center text-sm font-bold">
            <p>© {new Date().getFullYear()} Dear Future Luminary.</p>
            <p>Developed by <a href="https://malakemad2007.github.io/My-portfolio/" target="_blank" className="hover:text-[#facc15]">Malak Emad</a></p>
          </div>
        </div>
      </footer>

      {showJoinModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#1e3a8a]/40 backdrop-blur-md" onClick={() => setShowJoinModal(false)}></div>
          <div className="bg-white rounded-[2.5rem] w-full max-w-lg relative z-10 overflow-hidden modal-content shadow-2xl">
            <div className="bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] p-8 text-white relative">
              <button onClick={() => setShowJoinModal(false)} className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full"><X /></button>
              <h3 className="text-3xl font-black mb-2">Join the Luminary Movement</h3>
              <p className="text-white/80">Be part of something bigger than yourself.</p>
            </div>
            <div className="p-8 space-y-4">
              <a href="https://forms.gle/pLqpSodiuMmB36Ei8" target="_blank" className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border hover:border-[#a488f4] transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#a488f4]/10 rounded-xl flex items-center justify-center text-[#a488f4]"><Users /></div>
                  <div><h4 className="font-bold text-[#1e3a8a]">Become a Member</h4><p className="text-sm text-gray-500">Join our growing community</p></div>
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-[#a488f4] group-hover:translate-x-1 transition-all" />
              </a>
              <a href="https://forms.gle/1uFr976gMZqtJHcw7" target="_blank" className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border hover:border-[#facc15] transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#facc15]/10 rounded-xl flex items-center justify-center text-[#facc15]"><Heart /></div>
                  <div><h4 className="font-bold text-[#1e3a8a]">Support Us</h4><p className="text-sm text-gray-500">Help the mission grow</p></div>
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-[#facc15] group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </div>
      )}

      {showComingSoonModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#1e3a8a]/40 backdrop-blur-md" onClick={() => setShowComingSoonModal(false)}></div>
          <div className="bg-white rounded-[2.5rem] w-full max-w-md relative z-10 overflow-hidden modal-content p-12 text-center shadow-2xl">
            <div className="w-24 h-24 bg-[#facc15]/10 rounded-full flex items-center justify-center text-[#facc15] mx-auto mb-4"><Sparkles size={48} /></div>
            <h3 className="text-4xl font-black text-[#1e3a8a]">Coming Soon</h3>
            <p className="text-xl text-gray-500 mb-8">I'm currently polishing this experience to make it absolutely perfect for you. Stay tuned!</p>
            <button onClick={() => setShowComingSoonModal(false)} className="w-full py-5 bg-[#1e3a8a] text-white rounded-2xl font-black text-xl hover:bg-[#a488f4] transition-all">Got it!</button>
          </div>
        </div>
      )}
    </div>
  );
}
