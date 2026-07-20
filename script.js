// Initialize Lucide icons
lucide.createIcons();

// FAQ Data
const faqData = [
    {
        question: "What even is Dear Future Luminary?",
        answer: "Dear Future Luminary is your corner of the internet for figuring things out—your next opportunity, your passions, your personal growth, and honestly… yourself. We help students discover scholarships, summer programs, teams, skills, and paths they might not even know exist yet. Think of it as a guide, a resource hub, and a big-sis energy boost all in one."
    },
    {
        question: "Who is this for?",
        answer: "High school students. Early college students. Dreamers. Overthinkers. Future founders. People who feel behind. People who want more. Basically… if you're trying to grow, build your future, or find your spark—you belong here."
    },
    {
        question: "Is this really free?",
        answer: "Yep. Actually free. No hidden fees. No 'pay to unlock the good stuff.' No weird catch. Access should never be the thing holding someone back."
    },
    {
        question: "I feel lost. Where do I even start?",
        answer: "Honestly? That's exactly why this exists. Start anywhere that feels exciting: opportunities, personal growth, roadmaps… there's no perfect order. You do not need to have your life figured out before beginning."
    },
    {
        question: "I'm not extraordinary enough for these opportunities.",
        answer: "Respectfully… says who? You do not need to be 'the perfect student' to deserve good opportunities. You need curiosity, effort, and the courage to try. Please don't reject yourself before the application even can."
    },
    {
        question: "There's too much information. I'm overwhelmed.",
        answer: "Same. That's why we curate everything—to save you from ten hours of chaotic searching and fifteen open tabs. Take one small step. One application. One resource. One better day. That's enough."
    },
    {
        question: "Can I trust these opportunities?",
        answer: "We do our best to carefully curate and share legitimate opportunities and resources. Still—always read official websites, double-check deadlines, and do your own final review. Smart luminaries verify."
    },
    {
        question: "Can I suggest opportunities or resources?",
        answer: "Please do. If you've found something amazing, send it our way. This space grows stronger when students help students."
    },
    {
        question: "Can I work with Dear Future Luminary?",
        answer: "Absolutely! We love meeting passionate students, collaborators, mentors, and organizations who believe in helping young people grow. Reach out through the form below. Good things start with messages."
    },
    {
        question: "Who's behind all this?",
        answer: "A student who knows how confusing all of this can feel. Someone who spent way too much time figuring things out the hard way—and decided to make it easier for others. Built with care. Built with purpose. Built for you."
    },
    {
        question: "What does 'Luminary' mean here?",
        answer: "Someone who shines—and helps others shine too. Not because they have everything figured out. Not because they're perfect. But because they keep learning, growing, and choosing to light the way. That can be you, too."
    },
    {
        question: "Still wondering something?",
        answer: "Ask us through the form below. Seriously. No question is too small, too random, or too 'I feel silly asking this.' That's what we're here for."
    }
];

// Programs Data
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
    { name: 'Founder & CEO', logo: 'client/public/images/images.png' },
];

// Render FAQ
function renderFAQ() {
    const faqContainer = document.getElementById('faq-container');
    if (!faqContainer) return;

    faqContainer.innerHTML = faqData.map((item, index) => `
        <div class="faq-item">
            <button 
                class="w-full focus:outline-none group flex justify-between items-start gap-6"
                onclick="toggleFAQ(${index})"
                aria-expanded="false"
            >
                <h3 class="text-lg md:text-xl font-black text-[#1e3a8a] group-hover:text-[#a488f4] transition-colors leading-tight uppercase tracking-tight flex-1">
                    ${item.question}
                </h3>
                <div class="icon-wrapper">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full border-3 border-[#1e3a8a] group-hover:border-[#a488f4] flex items-center justify-center transition-all duration-300">
                        <i data-lucide="plus" class="w-5 h-5 text-[#1e3a8a] group-hover:text-[#a488f4] transition-transform duration-300 plus-icon"></i>
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

// Toggle FAQ
function toggleFAQ(index) {
    const container = document.getElementById(`faq-answer-${index}`);
    const button = container.previousElementSibling.querySelector('button');
    const icon = button.querySelector('.plus-icon');
    const isOpen = container.style.maxHeight && container.style.maxHeight !== '0px';

    // Close all other FAQs
    document.querySelectorAll('.faq-answer-container').forEach((el, i) => {
        if (i !== index) {
            el.style.maxHeight = '0';
            const btn = el.previousElementSibling.querySelector('button');
            const icn = btn.querySelector('.plus-icon');
            icn.style.transform = 'rotate(0deg)';
        }
    });

    if (isOpen) {
        container.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
    } else {
        container.style.maxHeight = container.scrollHeight + 'px';
        icon.style.transform = 'rotate(45deg)';
    }
}

// Render Programs Carousel
function renderProgramsCarousel() {
    const carousel = document.getElementById('programs-carousel');
    if (!carousel) return;

    carousel.innerHTML = programsData.map((program, index) => `
        <div class="flex-shrink-0 group snap-start">
            <div class="w-40 h-40 sm:w-48 sm:h-48 bg-gray-100 border-2 border-gray-200 rounded-2xl flex items-center justify-center p-4 group-hover:border-[#a488f4] group-hover:bg-[#a488f4]/5 transition-all duration-500 transform group-hover:scale-110">
                <img src="${program.logo}" alt="${program.name}" class="w-full h-full object-contain" />
            </div>
            <p class="mt-4 text-center text-xs sm:text-sm font-black text-gray-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500">${program.name}</p>
        </div>
    `).join('');
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Handle Contact Submit
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

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', function() {
    renderFAQ();
    renderProgramsCarousel();

    // Navbar scroll effect
    let lastScrollY = 0;
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        const miniNav = document.getElementById('mini-nav');
        const whatYouFindSection = document.getElementById('what-you-find');

        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Show/hide mini nav based on what-you-find section
        if (whatYouFindSection) {
            const rect = whatYouFindSection.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;

            if (isInView && window.scrollY > 100) {
                miniNav.classList.add('visible');
            } else {
                miniNav.classList.remove('visible');
            }
        }

        lastScrollY = window.scrollY;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 100;
                    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: elementPosition - offset,
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

    // Custom cursor
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });
    }
});

// Prevent touch scrolling issues
document.addEventListener('touchmove', function(e) {
}, { passive: true });
