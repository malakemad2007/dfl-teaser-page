lucide.createIcons();

const faqData = [
    {
        question: "What even is Dear Future Luminary?",
        answer: "Dear Future Luminary is your corner of the internet for figuring things out—your next opportunity, your passions, your personal growth, and honestly… yourself.<br><br>We help students discover scholarships, summer programs, teams, skills, and paths they might not even know exist yet.<br><br>Think of it as a guide, a resource hub, and a big-sis energy boost all in one."
    },
    {
        question: "Who is this for?",
        answer: "High school students. Early college students. Dreamers. Overthinkers. Future founders. People who feel behind. People who want more.<br><br>Basically… if you're trying to grow, build your future, or find your spark—you belong here."
    },
    {
        question: "Is this really free?",
        answer: "Yep. Actually free.<br><br>No hidden fees. No \"pay to unlock the good stuff.\" No weird catch.<br><br>Access should never be the thing holding someone back."
    },
    {
        question: "I feel lost. Where do I even start?",
        answer: "Honestly? That's exactly why this exists.<br><br>Start anywhere that feels exciting: opportunities, personal growth, roadmaps, profile building… there's no perfect order.<br><br>You do not need to have your life figured out before beginning."
    },
    {
        question: "I'm not extraordinary enough for these opportunities.",
        answer: "Respectfully… says who?<br><br>You do not need to be \"the perfect student\" to deserve good opportunities.<br><br>You need curiosity, effort, and the courage to try.<br><br>Please don't reject yourself before the application even can."
    },
    {
        question: "There's too much information. I'm overwhelmed.",
        answer: "Same.<br><br>That's why we curate everything—to save you from ten hours of chaotic searching and fifteen open tabs.<br><br>Take one small step. One application. One resource. One better day. That's enough."
    },
    {
        question: "Can I trust these opportunities?",
        answer: "We do our best to carefully curate and share legitimate opportunities and resources.<br><br>Still—always read official websites, double-check deadlines, and do your own final review.<br><br>Smart luminaries verify."
    },
    {
        question: "Can I suggest opportunities or resources?",
        answer: "Please do.<br><br>If you've found something amazing, send it our way. This space grows stronger when students help students."
    },
    {
        question: "Can I work with Dear Future Luminary?",
        answer: "Absolutely !!<br><br>We love meeting passionate students, collaborators, mentors, and organizations who believe in helping young people grow.<br><br>Reach out through the form below. Good things start with messages."
    },
    {
        question: "Who's behind all this?",
        answer: "A student who knows how confusing all of this can feel.<br><br>Someone who spent way too much time figuring things out the hard way—and decided to make it easier for others.<br><br>Built with care. Built with purpose. Built for you."
    },
    {
        question: "What does \"Luminary\" mean here?",
        answer: "Someone who shines—and helps others shine too.<br><br>Not because they have everything figured out. Not because they're perfect.<br><br>But because they keep learning, growing, and choosing to light the way.<br><br>That can be you, too."
    },
    {
        question: "Still wondering something?",
        answer: "Ask us through the form below. Seriously. No question is too small, too random, or too \"I feel silly asking this.\" That's what we're here for."
    }
];

function renderFAQ() {
    const faqContainer = document.getElementById('faq-container');
    if (!faqContainer) return;

    faqContainer.innerHTML = faqData.map((item, index) => `
        <div class="faq-item" role="region" aria-expanded="false">
            <button 
                class="w-full focus:outline-none group flex justify-between items-start gap-6"
                onclick="toggleFAQ(this)"
                aria-controls="faq-answer-${index}"
            >
                <h3 class="text-lg md:text-2xl font-black text-[#1e3a8a] group-hover:text-[#a488f4] transition-colors leading-tight uppercase tracking-tight flex-1">
                    ${item.question}
                </h3>
                <div class="icon-wrapper">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full border-3 border-[#1e3a8a] group-hover:border-[#a488f4] flex items-center justify-center transition-all duration-300">
                        <i data-lucide="plus" class="w-5 h-5 text-[#1e3a8a] group-hover:text-[#a488f4] transition-transform duration-300"></i>
                    </div>
                </div>
            </button>
            <div class="faq-answer-container" id="faq-answer-${index}">
                <div class="text-base md:text-lg text-gray-600 font-medium leading-relaxed">
                    ${item.answer}
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function toggleFAQ(button) {
    const container = button.nextElementSibling;
    const icon = button.querySelector('i');
    const isOpen = button.getAttribute('data-open') === 'true';
    const parentItem = button.closest('.faq-item');
    
    document.querySelectorAll('.faq-item button').forEach(btn => {
        if (btn !== button) {
            btn.setAttribute('data-open', 'false');
            btn.nextElementSibling.style.maxHeight = '0';
            btn.querySelector('i').style.transform = 'rotate(0deg)';
            btn.closest('.faq-item').classList.remove('active');
        }
    });

    if (isOpen) {
        button.setAttribute('data-open', 'false');
        container.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
        parentItem.classList.remove('active');
    } else {
        button.setAttribute('data-open', 'true');
        container.style.maxHeight = container.scrollHeight + 'px';
        icon.style.transform = 'rotate(45deg)';
        parentItem.classList.add('active');
    }
}

const programsData = [
    { name: 'Scholar', logo: 'client/public/images/logos/afs.png' },
    { name: 'Intern & Project Manager', logo: 'client/public/images/kode with klossy.png' },
    { name: 'Scholar', logo: 'client/public/images/logos/stanford_code_in_place.png' },
    { name: 'Reporter', logo: 'client/public/images/logos/unicef.png' },
    { name: 'Mentor', logo: 'client/public/images/logos/soliya.png' },
    { name: 'Pre-Finalist', logo: 'client/public/images/logos/nasa_space_apps.png' },
    { name: 'Youth Advocate', logo: 'client/public/images/ioy-logo.svg' },
    { name: 'Gold medalist \'23', logo: 'client/public/images/logos/climate_olympiad.png' },
    { name: 'Ambassador', logo: 'client/public/images/OIP.webp' },
    { name: 'Girls Who Code', logo: 'client/public/images/logos/girls_who_code.png' },
    { name: 'Researcher', logo: 'client/public/images/NYAS-Swirl-Featured-Image.png' },
    { name: 'Trainee', logo: 'client/public/images/images.png' },
    { name: 'Founder & Ceo', logo: 'client/public/images/images.png' },
];

function renderProgramsCarousel() {
    const carousel = document.getElementById('programs-carousel');
    if (!carousel) return;
    
    const extendedData = [...programsData, ...programsData];
    
    carousel.innerHTML = extendedData.map((program, index) => `
        <div class="flex-shrink-0 group snap-start">
            <div class="w-48 h-48 sm:w-56 sm:h-56 bg-white/10 border-2 border-white/30 rounded-2xl flex items-center justify-center p-6 group-hover:border-[#facc15] group-hover:bg-white/20 transition-all duration-500 transform group-hover:scale-110">
                <img src="${program.logo}" alt="${program.name}" class="w-full h-full object-contain transition-all duration-500" />
            </div>
            <p class="mt-6 text-center text-sm font-black text-white/80 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500">${program.name}</p>
        </div>
    `).join('');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function toggleModal(modalId, event) {
    if (event) event.preventDefault();
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
}

function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.target;
    
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    if (name && email && message) {
        alert('Thank you for reaching out! We\'ll get back to you soon.');
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    renderFAQ();
    renderProgramsCarousel();
    
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('fixed') && !e.target.closest('.modal-content') && e.target.id !== 'navbar') {
            const modals = ['comingSoonModal'];
            modals.forEach(id => {
                const modal = document.getElementById(id);
                if (modal && !modal.classList.contains('hidden')) {
                    toggleModal(id);
                }
            });
        }
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = target.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            }
        });
    });
});

const cursor = document.getElementById('custom-cursor');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

document.addEventListener('touchmove', function(e) {
}, { passive: true });
