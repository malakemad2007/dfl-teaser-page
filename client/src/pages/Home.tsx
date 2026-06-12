import { useEffect, useState } from 'react';
import { Menu, X, Instagram, Mail, Youtube, Facebook, ArrowRight, Send, Map, Sparkles, Users, Heart, Globe, User, FileText, Star } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
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
        answer: "<strong>Dear Future Luminary</strong> is my corner of the internet for <strong>figuring things out</strong>—your next opportunity, your passions, your personal growth, and honestly… yourself.<br><br>I help students discover <strong>scholarships, summer programs, teams, skills, and paths</strong> I wish I knew about earlier.<br><br>Think of it as a <strong>guide</strong>, a <strong>resource hub</strong>, and a <strong>big-sis energy boost</strong> all in one."
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
        answer: "Honestly? That’s exactly why I built this.<br><br>Start anywhere that feels exciting: <strong>opportunities, personal growth, roadmaps, profile building…</strong> there’s no perfect order.<br><br><strong>You do not need to have your life figured out before beginning.</strong>"
    },
    {
        question: "I’m not extraordinary enough for these opportunities.",
        answer: "Respectfully… says who?<br><br>You <strong>do not need to be “the perfect student”</strong> to deserve good opportunities.<br><br>You need <strong>curiosity, effort, and the courage to try.</strong><br><br>Please don’t reject yourself before the application even can."
    },
    {
        question: "There’s too much information. I’m overwhelmed.",
        answer: "Same.<br><br>That’s why I <strong>curate everything</strong>—to save you from ten hours of chaotic searching and fifteen open tabs.<br><br>Take <strong>one small step</strong>. One application. One resource. One better day.<br><br><strong>That’s enough.</strong>"
    },
    {
        question: "Can I trust these opportunities?",
        answer: "I do my best to <strong>carefully curate and share legitimate opportunities</strong> and resources.<br><br>Still—always <strong>read official websites, double-check deadlines, and do your own final review.</strong><br><br><strong>Smart luminaries verify.</strong>"
    },
    {
        question: "Can I suggest opportunities or resources?",
        answer: "<strong>Please do.</strong><br><br>If you’ve found something amazing, send it our way. This space grows stronger when <strong>students help students.</strong>"
    },
    {
        question: "Can I work with Dear Future Luminary?",
        answer: "<strong>Absolutely !!</strong><br><br>I love meeting <strong>passionate students, collaborators, mentors, and organizations</strong> who believe in helping young people grow.<br><br>Reach out through the form below. <strong>Good things start with messages.</strong>"
    },
    {
        question: "Who’s behind all this?",
        answer: "<strong>A student who knows how confusing all of this can feel.</strong><br><br>Someone who spent way too much time figuring things out the hard way—and decided to make it easier for others.<br><br><strong>Built with care. Built with purpose. Built for you.</strong>"
    },
    {
        question: "What does “Luminary” mean here?",
        answer: "Someone who <strong>shines—and helps others shine too.</strong><br><br>Not because they have everything figured out.<br>Not because they’re perfect.<br><br>But because they <strong>keep learning, growing, and choosing to light the way.</strong><br><br>That can be you, too."
    },
    {
        question: "Still wondering something?",
        answer: "Ask me through the form below.<br><br>Seriously.<br><strong>No question is too small, too random, or too “I feel silly asking this.”</strong><br><br>That’s what I'm here for."
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
        setTimeout(() => setContactFormSubmitted(false), 3000);
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
          gap: 2rem;
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
              <a href="#what-we-offer" className="hover:text-[#a488f4] transition-colors">What You'll Find</a>
              <a href="#about" className="hover:text-[#a488f4] transition-colors">Mission</a>
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
              <p>I know how overwhelming it can be—hundreds of tabs open, confusing advice, opportunities you discover three days after the deadline, and that constant feeling that everyone else somehow knows something you don't.</p>
              <p>That's why I started Dear Future Luminary. A place to help students discover opportunities, build their profiles, explore new paths, and realize they're capable of much more than they think.</p>
              <p>You don't need to have everything figured out. You just need somewhere to start.</p>
            </div>
          </div>
          <div className="hidden md:flex justify-center"><img src="/images/dear.future.luminary.logo.svg.svg" alt="Logo" className="w-full max-w-sm" /></div>
        </div>
      </section>

      <section id="who-we-are" class="py-40 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-16 items-start">
          <div class="lg:col-span-7 space-y-6">
            <div class="flex items-center gap-4">
              <div class="h-px w-12 bg-[#a488f4]"></div>
              <span class="text-sm font-black tracking-[0.3em] text-[#a488f4] uppercase">Built by Youth, for Youth</span>
            </div>
            <h2 class="text-[clamp(4rem,10vw,8rem)] font-black text-[#1e3a8a] leading-[0.85] tracking-tighter">Not because <br/>it sounds <br/><span class="text-[#a488f4]">cool.</span></h2>
          </div>
          <div class="lg:col-span-5 pt-12 lg:pt-32 space-y-12">
            <p class="text-3xl md:text-4xl font-medium text-[#1e3a8a] leading-tight">Because I'm literally a student too. I've spent years searching for opportunities, making mistakes, and trying to figure out what comes next.</p>
            <div class="grid grid-cols-2 gap-x-8 gap-y-12 border-t border-gray-100 pt-12">
              <div class="space-y-4">
                <span class="text-[#a488f4] font-black text-xs uppercase tracking-widest">01 / Mission</span>
                <p class="text-gray-500 text-lg leading-snug">Help students discover possibilities they didn't know existed.</p>
              </div>
              <div class="space-y-4">
                <span class="text-[#facc15] font-black text-xs uppercase tracking-widest">02 / Focus</span>
                <p class="text-gray-500 text-lg leading-snug">Opportunities, personal growth, and the tools to build a future you're excited about.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-offer" class="py-40 px-4 sm:px-6 lg:px-8 bg-[#1e3a8a] text-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div class="max-w-3xl">
              <h2 class="text-7xl md:text-9xl font-black leading-none tracking-tighter mb-8">What You'll <br/><span class="text-[#facc15]">Find Here</span></h2>
              <p class="text-3xl text-white/50 font-medium max-w-xl">No magic formula. Just resources I genuinely wish someone had shown me earlier.</p>
            </div>
            <div class="text-right text-8xl font-black text-white/5 select-none">2026</div>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-white/10">
            {[
              { icon: <User className="w-12 h-12 text-[#a488f4]" />, title: "Personal Growth", text: "Because opportunities matter—but knowing yourself matters too." },
              { icon: <Globe className="w-12 h-12 text-[#facc15]" />, title: "Global Opportunities", text: "Scholarships, summer programs, competitions, exchanges, and experiences worth exploring." },
              { icon: <Map className="w-12 h-12 text-[#a488f4]" />, title: "Guides & Roadmaps", text: "Clear steps for students who keep thinking: 'Okay... but what do I actually do now?'" },
              { icon: <FileText className="w-12 h-12 text-[#facc15]" />, title: "Profile Building", text: "CVs, portfolios, applications, personal branding, and all the things nobody teaches in school." },
              { icon: <Users className="w-12 h-12 text-[#a488f4]" />, title: "Community", text: "A space for students who are trying, learning, building, and figuring things out together." },
              { icon: <Sparkles className="w-12 h-12 text-[#facc15]" />, title: "Stories & Inspiration", text: "Proof that amazing opportunities aren't reserved for 'geniuses' or 'perfect students.'" }
            ].map((item, i) => (
              <div key={i} class="p-16 border-r border-b border-white/10 hover:bg-white/5 transition-colors group relative overflow-hidden">
                <div class="relative z-10 space-y-8">
                  <div class="group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 class="text-3xl font-black group-hover:text-[#facc15] transition-colors">{item.title}</h3>
                  <p class="text-xl text-white/40 leading-tight">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" class="py-40 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col items-center text-center mb-32">
            <h2 class="text-7xl md:text-8xl font-black text-[#1e3a8a] leading-none tracking-tighter mb-8 uppercase">Opportunities <br/><span class="text-[#a488f4]">Worth Knowing About</span></h2>
            <div class="w-24 h-1 bg-[#facc15] mb-8"></div>
            <p class="text-2xl text-gray-500 max-w-4xl">These are some of the programs that I got accepted into, and they completely changed how I see education, leadership, STEM, cultural exchange, and what's possible for students. All of them are fully funded, and some are life-changing. Many students never hear about them at all. That shouldn't happen. So here's a place to start.</p>
          </div>
          <div class="relative overflow-hidden">
            <div class="logos-carousel">
              {[...programs, ...programs].map((p, i) => (
                <div key={i} class="logo-item flex-shrink-0 w-48 h-48 bg-white border border-gray-100 rounded-[2.5rem] p-10 flex items-center justify-center hover:shadow-2xl hover:border-[#a488f4]/30 transition-all duration-500 group">
                  <img src={`/images/logos/${p.logo}`} alt={p.name} class="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="py-40 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-24 items-center">
          <div class="lg:col-span-8">
            <h2 class="text-7xl md:text-9xl font-black text-[#1e3a8a] leading-[0.85] tracking-tighter mb-16">Talent is everywhere. <br/><span class="text-[#facc15] inline-block hover:translate-x-4 transition-transform cursor-default">Access is not.</span></h2>
            <p class="text-3xl md:text-4xl font-medium text-[#1e3a8a] leading-tight">Dear Future Luminary was born from that experience. Not from a company. Not from a university. Not from a big organization. Just from one student asking: <span class="text-[#a488f4] italic underline decoration-4 underline-offset-8">"What if finding opportunities was a little less confusing?"</span></p>
          </div>
          <div class="lg:col-span-4 space-y-16">
            {[
              { id: "01", title: "Authenticity", text: "Built by a student who knows how this feels." },
              { id: "02", title: "Clarity", text: "Converting overwhelming confusion into simple steps." },
              { id: "03", title: "Impact", text: "Helping you realize you're capable of more than you think." }
            ].map(item => (
              <div key={item.id} class="group border-b border-gray-100 pb-8 relative">
                <div class="text-6xl font-black text-gray-50 group-hover:text-[#a488f4]/10 transition-colors absolute -mt-12 select-none">{item.id}</div>
                <h4 class="text-3xl font-black text-[#1e3a8a] mb-4 relative z-10">{item.title}</h4>
                <p class="text-lg text-gray-500 leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" class="py-40 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
          <div class="lg:w-1/3 sticky top-32 space-y-8">
            <h2 class="text-7xl font-black text-[#1e3a8a] leading-[0.9] tracking-tighter">Questions You Might Be <span class="text-[#a488f4]">Too Shy</span> to Ask</h2>
            <p class="text-2xl text-gray-400 font-medium">But Come on. You Ask. I Yap, Respectfully.</p>
          </div>
          <div class="lg:w-2/3 space-y-2">
            {faqItems.map((item, i) => (
              <div key={i} class="border-b border-gray-100 overflow-hidden group">
                <button onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)} class="w-full py-12 flex items-center justify-between hover:px-4 transition-all duration-500">
                  <h3 class="text-3xl font-black text-[#1e3a8a] text-left group-hover:text-[#a488f4] transition-colors">{item.question}</h3>
                  <div class={`w-12 h-12 flex items-center justify-center transition-all duration-500 ${expandedFAQ === i ? 'text-[#a488f4]' : 'text-gray-300'}`}>
                    <Star className="w-8 h-8" />
                  </div>
                </button>
                {expandedFAQ === i && <div class="faq-answer pb-12 text-gray-500 text-2xl leading-tight max-w-3xl" dangerouslySetInnerHTML={{ __html: item.answer }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="bg-gradient-to-br from-[#a488f4] via-[#9377f0] to-[#8a6ef1] rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl text-white">
            <div class="relative z-10 space-y-12 max-w-4xl mx-auto">
              <h2 class="text-6xl md:text-8xl font-black leading-[1] tracking-tight">Ready to build something <br /><span class="text-[#facc15]">bigger than yourself?</span></h2>
              <div class="space-y-4 text-3xl font-black">
                <p>Whatever brought you here, I'm glad you're here.</p>
                <p class="text-[#facc15]">Let's figure it out together.</p>
              </div>
              <div class="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <a href="https://forms.gle/pLqpSodiuMmB36Ei8" target="_blank" class="px-12 py-6 bg-white text-[#1e3a8a] rounded-2xl font-black text-xl hover:bg-[#facc15] transition-all flex items-center justify-center gap-3 group">Join the Movement <ArrowRight className="group-hover:translate-x-1 transition-transform" /></a>
                <a href="https://forms.gle/1uFr976gMZqtJHcw7" target="_blank" class="px-12 py-6 bg-transparent border-2 border-white/30 rounded-2xl font-black text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3">Support the Mission <Heart /></a>
              </div>
              <p class="text-white/60 text-base font-bold tracking-widest uppercase">No pressure. No perfect timing. Just one step forward.</p>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-gradient-to-br from-[#a488f4] via-[#8a6ef1] to-[#7b5fde] pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-7xl mx-auto">
          <div class="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div class="flex items-center gap-2 mb-6"><img src="/images/dear.future.luminary.logo.svg.svg" alt="Logo" className="w-8 h-8" /><span class="font-bold text-lg">Dear Future Luminary</span></div>
              <p class="text-white/70">Luminaries don't shine alone. We light the way for each other.</p>
            </div>
            <div>
              <h4 class="font-bold mb-6 text-[#facc15] text-lg">Quick Links</h4>
              <ul class="space-y-3 text-white/70 cursor-pointer">
                <li onClick={() => setShowComingSoonModal(true)}>Home</li>
                <li onClick={() => setShowComingSoonModal(true)}>Scholarships Hub</li>
                <li onClick={() => setShowComingSoonModal(true)}>Roadmaps</li>
                <li onClick={() => setShowComingSoonModal(true)}>Profile Building</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-6 text-[#facc15] text-lg">About</h4>
              <ul class="space-y-3 text-white/70">
                <li><a href="#about">Our Story & Vision</a></li>
                <li onClick={() => setShowComingSoonModal(true)} class="cursor-pointer">Community Space</li>
                <li onClick={() => setShowComingSoonModal(true)} class="cursor-pointer">Blog</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-6 text-[#facc15] text-lg">Connect</h4>
              <div class="flex gap-4">
                <a href="https://www.instagram.com/dear.future.luminary" target="_blank" class="hover:text-[#facc15] transition-colors"><Instagram /></a>
                <a href="https://www.facebook.com/dear.future.luminary" target="_blank" class="hover:text-[#facc15] transition-colors"><Facebook /></a>
                <a href="https://www.youtube.com/@malak_luminary" target="_blank" class="hover:text-[#facc15] transition-colors"><Youtube /></a>
                <a href="mailto:dear.future.luminary@gmail.com" class="hover:text-[#facc15] transition-colors"><Mail /></a>
              </div>
            </div>
          </div>
          <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 mb-12">
            <h4 class="font-bold mb-6 text-[#facc15] text-lg">Contact Me</h4>
            {contactFormSubmitted ? (
              <div class="text-center p-8"><Sparkles className="mx-auto text-[#facc15] mb-4" /> <h3 class="text-2xl font-black">Message Sent!</h3><p>Thank you so much! 💜</p></div>
            ) : (
              <form onSubmit={handleContactSubmit} class="space-y-4">
                <div class="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" required value={contactFormData.name} onChange={e => setContactFormData({...contactFormData, name: e.target.value})} class="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#facc15]" />
                  <input type="email" placeholder="Email" required value={contactFormData.email} onChange={e => setContactFormData({...contactFormData, email: e.target.value})} class="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#facc15]" />
                </div>
                <textarea placeholder="Message" required rows={4} value={contactFormData.message} onChange={e => setContactFormData({...contactFormData, message: e.target.value})} class="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#facc15]"></textarea>
                <button type="submit" class="px-8 py-3 bg-[#facc15] text-[#1e3a8a] rounded-xl font-bold hover:bg-white transition-all flex items-center gap-2">Send Message <Send size={16} /></button>
              </form>
            )}
          </div>
          <div class="pt-8 border-t border-white/10 flex justify-between items-center text-sm font-bold">
            <p>© {new Date().getFullYear()} Dear Future Luminary.</p>
            <p>Developed by <a href="https://malakemad2007.github.io/My-portfolio/" target="_blank" class="hover:text-[#facc15]">Malak Emad</a></p>
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
