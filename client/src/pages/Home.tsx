import { useEffect, useState } from 'react';
import { Menu, X, Instagram, Mail, Youtube, Facebook, ArrowRight, Send, Map, Sparkles, Users, Heart, Globe, User, FileText, Slack, Linkedin, MessageSquare, Twitter, Plus } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const [contactFormData, setContactFormData] = useState({ name: '', email: '', message: '' });
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
        answer: "Dear Future Luminary is your corner of the internet for figuring things out—your next opportunity, your passions, your personal growth, and honestly… yourself.<br><br>We help students discover scholarships, summer programs, teams, skills, and paths they might not even know exist yet.<br><br>Think of it as a guide, a resource hub, and a big-sis energy boost all in one."
    },
    {
        question: "Who is this for?",
        answer: "High school students. Early college students. Dreamers. Overthinkers. Future founders. People who feel behind. People who want more.<br><br>Basically… if you’re trying to grow, build your future, or find your spark—you belong here."
    },
    {
        question: "Is this really free?",
        answer: "Yep. Actually free.<br><br>No hidden fees. No “pay to unlock the good stuff.” No weird catch.<br><br>Access should never be the thing holding someone back."
    },
    {
        question: "I feel lost. Where do I even start?",
        answer: "Honestly? That’s exactly why this exists.<br><br>Start anywhere that feels exciting: opportunities, personal growth, roadmaps, profile building… there’s no perfect order.<br><br>You do not need to have your life figured out before beginning."
    },
    {
        question: "I’m not extraordinary enough for these opportunities.",
        answer: "Respectfully… says who?<br><br>You do not need to be “the perfect student” to deserve good opportunities.<br><br>You need curiosity, effort, and the courage to try.<br><br>Please don’t reject yourself before the application even can."
    },
    {
        question: "There’s too much information. I’m overwhelmed.",
        answer: "Same.<br><br>That’s why we curate everything—to save you from ten hours of chaotic searching and fifteen open tabs.<br><br>Take one small step. One application. One resource. One better day. That’s enough."
    },
    {
        question: "Can I trust these opportunities?",
        answer: "We do our best to carefully curate and share legitimate opportunities and resources.<br><br>Still—always read official websites, double-check deadlines, and do your own final review.<br><br>Smart luminaries verify."
    },
    {
        question: "Can I suggest opportunities or resources?",
        answer: "Please do.<br><br>If you’ve found something amazing, send it our way. This space grows stronger when students help students."
    },
    {
        question: "Can I work with Dear Future Luminary?",
        answer: "Absolutely !!<br><br>We love meeting passionate students, collaborators, mentors, and organizations who believe in helping young people grow.<br><br>Reach out through the form below. Good things start with messages."
    },
    {
        question: "Who’s behind all this?",
        answer: "A student who knows how confusing all of this can feel.<br><br>Someone who spent way too much time figuring things out the hard way—and decided to make it easier for others.<br><br>Built with care. Built with purpose. Built for you."
    },
    {
        question: "What does “Luminary” mean here?",
        answer: "Someone who shines—and helps others shine too.<br><br>Not because they have everything figured out. Not because they’re perfect.<br><br>But because they keep learning, growing, and choosing to light the way.<br><br>That can be you, too."
    },
    {
        question: "Still wondering something?",
        answer: "Ask us through the form below. Seriously. No question is too small, too random, or too “I feel silly asking this.” That’s what we’re here for."
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

      {/* Built by Youth Redesign */}
      <section id="who-we-are" className="py-40 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute -left-20 top-0 text-[15rem] font-black text-gray-50/50 select-none pointer-events-none">01</div>
            <div className="relative z-10">
              <h2 className="text-8xl md:text-[10rem] font-black text-[#1e3a8a] leading-[0.85] tracking-tighter mb-16">
                Built by <br/>
                <span className="text-[#a488f4]">Youth,</span> <br/>
                for Youth.
              </h2>
              <div className="grid md:grid-cols-2 gap-20 items-end">
                <div className="space-y-8">
                  <p className="text-4xl font-medium text-[#1e3a8a] leading-tight max-w-xl">
                    Not because it sounds cool. Because I'm literally a student too. I've spent years searching, making mistakes, and figuring it out.
                  </p>
                  <div className="h-1 w-40 bg-[#facc15]"></div>
                </div>
                <div className="space-y-12">
                  <div className="border-l-4 border-[#a488f4] pl-8 py-2">
                    <h4 className="text-2xl font-black text-[#1e3a8a] mb-4 uppercase tracking-widest">The Mission</h4>
                    <p className="text-xl text-gray-500 leading-relaxed">Help students discover possibilities they didn't know existed.</p>
                  </div>
                  <div className="border-l-4 border-[#facc15] pl-8 py-2">
                    <h4 className="text-2xl font-black text-[#1e3a8a] mb-4 uppercase tracking-widest">The Focus</h4>
                    <p className="text-xl text-gray-500 leading-relaxed">Opportunities, personal growth, and tools for a future you're excited about.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find Redesign */}
      <section id="what-you-find" className="py-40 px-4 sm:px-6 lg:px-8 bg-[#1e3a8a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-8">
            <div className="relative">
              <span className="text-[#facc15] font-black tracking-[0.3em] uppercase mb-4 block">Navigation</span>
              <h2 className="text-7xl md:text-9xl font-black leading-none tracking-tighter">What You'll <br/><span className="text-[#a488f4]">Find Here</span></h2>
            </div>
            <p className="text-2xl text-white/40 font-medium max-w-md leading-relaxed">
              No magic formula. Just resources I genuinely wish someone had shown me earlier.
            </p>
          </div>

          <div className="space-y-0 border-t border-white/10">
            <div className="group py-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:bg-white/[0.02] transition-colors px-4">
              <div className="flex items-center gap-12">
                <span className="text-2xl font-black text-white/20 group-hover:text-[#a488f4] transition-colors">01</span>
                <h3 className="text-4xl md:text-5xl font-black group-hover:translate-x-4 transition-transform duration-500">Personal Growth</h3>
              </div>
              <p className="text-xl text-white/40 max-w-sm group-hover:text-white transition-colors">Because opportunities matter—but knowing yourself matters too.</p>
            </div>
            <div className="group py-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:bg-white/[0.02] transition-colors px-4">
              <div className="flex items-center gap-12">
                <span className="text-2xl font-black text-white/20 group-hover:text-[#facc15] transition-colors">02</span>
                <h3 className="text-4xl md:text-5xl font-black group-hover:translate-x-4 transition-transform duration-500">Global Opportunities</h3>
              </div>
              <p className="text-xl text-white/40 max-w-sm group-hover:text-white transition-colors">Scholarships, summer programs, and experiences worth exploring.</p>
            </div>
            <div className="group py-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:bg-white/[0.02] transition-colors px-4">
              <div className="flex items-center gap-12">
                <span className="text-2xl font-black text-white/20 group-hover:text-[#a488f4] transition-colors">03</span>
                <h3 className="text-4xl md:text-5xl font-black group-hover:translate-x-4 transition-transform duration-500">Guides & Roadmaps</h3>
              </div>
              <p className="text-xl text-white/40 max-w-sm group-hover:text-white transition-colors">Clear steps for students who keep thinking: "What do I actually do now?"</p>
            </div>
            <div className="group py-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:bg-white/[0.02] transition-colors px-4">
              <div className="flex items-center gap-12">
                <span className="text-2xl font-black text-white/20 group-hover:text-[#facc15] transition-colors">04</span>
                <h3 className="text-4xl md:text-5xl font-black group-hover:translate-x-4 transition-transform duration-500">Profile Building</h3>
              </div>
              <p className="text-xl text-white/40 max-w-sm group-hover:text-white transition-colors">CVs, portfolios, applications, and all the things nobody teaches in school.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
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

      {/* Mission Section */}
      <section id="mission" className="py-40 px-4 sm:px-6 lg:px-8 bg-[#facc15] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-8xl md:text-[10rem] font-black text-[#1e3a8a] leading-[0.8] tracking-tighter mb-12">
              Talent is <br/> Everywhere. <br/> <span className="text-white">Access is not.</span>
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
      </section>

      {/* FAQ overhaul */}
      <section id="faq" className="py-40 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32">
            <div className="inline-block px-8 py-3 bg-[#a488f4] text-white rounded-full text-xl font-black mb-8">Q&A</div>
            <h2 className="text-7xl md:text-9xl font-black text-[#1e3a8a] leading-none tracking-tighter mb-8">Questions You Might <br/>Be <span className="text-[#a488f4]">Too Shy</span> to Ask</h2>
            <p className="text-3xl text-gray-400 font-medium">But Come on. You Ask. We Yap, Respectfully.</p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0">
                <button 
                  className="w-full py-10 flex items-center justify-between text-left group transition-all"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <h3 className="text-3xl md:text-4xl font-black text-[#1e3a8a] group-hover:text-[#a488f4] transition-colors pr-8">{item.question}</h3>
                  <div className={`w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-[#1e3a8a] group-hover:border-[#a488f4] group-hover:text-[#a488f4] transition-all flex-shrink-0 ${openFaqIndex === index ? 'rotate-45' : ''}`}>
                    <Plus size={24} />
                  </div>
                </button>
                {openFaqIndex === index && (
                  <div className="pb-12 text-2xl text-gray-500 leading-relaxed max-w-4xl animate-in fade-in slide-in-from-top-4 duration-500" dangerouslySetInnerHTML={{ __html: item.answer }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#a488f4] via-[#9377f0] to-[#8a6ef1] rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-12 max-w-4xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-black text-white leading-[1] tracking-tight">Ready to build something <br /><span className="text-[#facc15]">bigger than yourself?</span></h2>
              <div className="space-y-4">
                <p className="text-3xl font-black text-white">Whatever brought you here, I'm glad you're here.</p>
                <p className="text-3xl font-black text-[#facc15]">Let's figure it out together.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <a href="https://forms.gle/pLqpSodiuMmB36Ei8" target="_blank" className="px-12 py-6 bg-white text-[#1e3a8a] rounded-2xl font-black text-xl hover:bg-[#facc15] hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 group">Join the Movement <ArrowRight className="group-hover:translate-x-1 transition-transform" /></a>
                <a href="https://forms.gle/1uFr976gMZqtJHcw7" target="_blank" className="px-12 py-6 bg-transparent border-2 border-white/30 text-white rounded-2xl font-black text-xl hover:bg-white/10 transition-all duration-500 flex items-center justify-center gap-3">Support the Mission <Heart /></a>
              </div>
              <p className="text-white/60 text-base font-bold tracking-widest uppercase">No pressure. No perfect timing. Just one step forward.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Bar */}
      <div className="bg-[#facc15] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <span className="text-[#1e3a8a] text-3xl font-black uppercase tracking-widest">Connect:</span>
          <div className="flex flex-wrap gap-8 items-center">
            <a href="#" className="text-[#1e3a8a] hover:opacity-70 transition-opacity" title="YouTube"><Youtube size={32} /></a>
            <a href="#" className="text-[#1e3a8a] hover:opacity-70 transition-opacity" title="Facebook"><Facebook size={32} /></a>
            <a href="#" className="text-[#1e3a8a] hover:opacity-70 transition-opacity" title="Instagram"><Instagram size={32} /></a>
            <a href="#" className="text-[#1e3a8a] hover:opacity-70 transition-opacity" title="Email"><Mail size={32} /></a>
            <a href="#" className="text-[#1e3a8a] hover:opacity-70 transition-opacity" title="Discord"><MessageSquare size={32} /></a>
            <a href="#" className="text-[#1e3a8a] hover:opacity-70 transition-opacity" title="Slack"><Slack size={32} /></a>
            <a href="#" className="text-[#1e3a8a] hover:opacity-70 transition-opacity" title="X"><Twitter size={32} /></a>
            <a href="#" className="text-[#1e3a8a] hover:opacity-70 transition-opacity" title="LinkedIn"><Linkedin size={32} /></a>
          </div>
        </div>
      </div>

      {/* Footer overhaul */}
      <footer className="bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-[#1e3a8a] border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 mb-24 grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h4 className="text-5xl font-black mb-6">Let's Talk.</h4>
              <p className="text-xl text-gray-500 leading-relaxed mb-8">Have a question, an idea, or just want to say hi? I'm all ears.</p>
              <div className="flex items-center gap-4 text-[#a488f4]"><Sparkles /><span className="font-bold uppercase tracking-widest">Always checking my inbox</span></div>
            </div>
            {!contactFormSubmitted ? (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Your Name" required className="bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#a488f4] transition-colors" value={contactFormData.name} onChange={e => setContactFormData({...contactFormData, name: e.target.value})} />
                  <input type="email" placeholder="Your Email" required className="bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#a488f4] transition-colors" value={contactFormData.email} onChange={e => setContactFormData({...contactFormData, email: e.target.value})} />
                </div>
                <textarea placeholder="Your Message" required rows={4} className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#a488f4] transition-colors" value={contactFormData.message} onChange={e => setContactFormData({...contactFormData, message: e.target.value})} />
                <button type="submit" className="w-full md:w-auto px-12 py-4 bg-[#1e3a8a] text-white rounded-2xl font-bold hover:bg-[#a488f4] transition-all flex items-center justify-center gap-2 group">Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></button>
              </form>
            ) : (
              <div className="p-12 bg-[#a488f4]/10 rounded-[3rem] text-center">
                <h3 className="text-3xl font-black text-[#1e3a8a] mb-4">Message Sent!</h3>
                <p className="text-xl text-gray-600">Thank you so much! 💜 I'll reply as soon as I can.</p>
              </div>
            )}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-gray-100">
            <p className="text-gray-400 font-medium">© 2026 Dear Future Luminary. All rights reserved.</p>
            <p className="text-[#1e3a8a] font-black tracking-widest uppercase">Supporting SDGs: 4, 8, 10, 17</p>
            <p className="text-gray-400 font-medium">Developed by Malak Emad</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showJoinModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1e3a8a]/90 backdrop-blur-sm">
          <div className="bg-white rounded-[3rem] p-12 max-w-2xl w-full relative modal-content">
            <button onClick={() => setShowJoinModal(false)} className="absolute top-8 right-8 text-gray-400 hover:text-[#1e3a8a]"><X size={32} /></button>
            <div className="space-y-8">
              <div className="inline-block px-6 py-2 bg-[#facc15] text-[#1e3a8a] rounded-full text-sm font-black uppercase tracking-widest">The Movement</div>
              <h3 className="text-5xl font-black text-[#1e3a8a]">Join the Future.</h3>
              <p className="text-xl text-gray-500 leading-relaxed">We're building a space where every student has the tools to shine. Want to be part of it?</p>
              <div className="flex flex-col gap-4">
                <a href="https://forms.gle/pLqpSodiuMmB36Ei8" target="_blank" className="w-full py-4 bg-[#a488f4] text-white rounded-2xl font-black text-center hover:bg-[#1e3a8a] transition-all">Apply to Join</a>
                <a href="https://forms.gle/1uFr976gMZqtJHcw7" target="_blank" className="w-full py-4 border-2 border-gray-100 text-gray-400 rounded-2xl font-black text-center hover:border-[#a488f4] hover:text-[#a488f4] transition-all">Support Us</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {showComingSoonModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1e3a8a]/90 backdrop-blur-sm">
          <div className="bg-white rounded-[3rem] p-12 max-w-xl w-full relative modal-content text-center">
            <button onClick={() => setShowComingSoonModal(false)} className="absolute top-8 right-8 text-gray-400 hover:text-[#1e3a8a]"><X size={32} /></button>
            <div className="space-y-8">
              <div className="w-20 h-20 bg-[#a488f4]/10 rounded-3xl flex items-center justify-center text-[#a488f4] mx-auto"><Sparkles size={40} /></div>
              <h3 className="text-4xl font-black text-[#1e3a8a]">Coming Soon</h3>
              <p className="text-xl text-gray-500 leading-relaxed">I'm currently hand-crafting this section to make sure it's perfect for you. Stay tuned!</p>
              <button onClick={() => setShowComingSoonModal(false)} className="px-12 py-4 bg-[#1e3a8a] text-white rounded-2xl font-black hover:bg-[#a488f4] transition-all">Got it!</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
