// Initialize Lucide Icons
lucide.createIcons();

// FAQ Data - Full text as requested
const faqData = [
    {
        question: "WHAT EVEN IS DEAR FUTURE LUMINARY?",
        answer: "Dear Future Luminary is your corner of the internet for figuring things out—your next opportunity, your passions, your personal growth, and honestly… yourself. We help students discover scholarships, summer programs, teams, skills, and paths they might not even know exist yet."
    },
    {
        question: "WHO IS THIS FOR?",
        answer: "High school students. Early college students. Dreamers. Overthinkers. Future founders. People who feel behind. People who want more. Basically… if you're trying to grow, build your future, or find your spark, you do belong here."
    },
    {
        question: "IS THIS REALLY FREE?",
        answer: "Yep. Actually free. No hidden fees. No 'pay to unlock the good stuff.' No weird catch. Access should never be the thing holding someone back."
    },
    {
        question: "I FEEL LOST. WHERE DO I EVEN START?",
        answer: "That's exactly why this exists. Start anywhere that feels exciting: opportunities, personal growth, roadmaps, profile building… there's no perfect order. You do not need to have your life figured out before beginning."
    },
    {
        question: "I'M NOT EXTRAORDINARY ENOUGH FOR THESE OPPORTUNITIES.",
        answer: "Respectfully… says who? You do not need to be 'the perfect student' to deserve good opportunities. You need curiosity, effort, and the courage to try. Please don't reject yourself before the application even can."
    },
    {
        question: "THERE'S TOO MUCH INFORMATION. I'M OVERWHELMED.",
        answer: "Same. That's why we curate everything—to save you from ten hours of chaotic searching and fifteen open tabs. Take one small step. One application. One resource. One better day. That's enough."
    },
    {
        question: "CAN I TRUST THESE OPPORTUNITIES?",
        answer: "We do our best to carefully curate and share legitimate opportunities and resources. Still—always read official websites, double-check deadlines, and do your own final review. Smart luminaries verify."
    },
    {
        question: "CAN I SUGGEST OPPORTUNITIES OR RESOURCES?",
        answer: "Please do. If you've found something amazing, send it our way. This space grows stronger when students help students."
    },
    {
        question: "CAN I WORK WITH DEAR FUTURE LUMINARY?",
        answer: "Absolutely!! We love meeting passionate students, collaborators, mentors, and organizations who believe in helping young people grow. Reach out through the form below. Good things start with messages."
    },
    {
        question: "WHO'S BEHIND ALL THIS?",
        answer: "A student who knows how confusing all of this can feel. Someone who spent way too much time figuring things out the hard way—and decided to make it easier for others. Built with care. Built with purpose. Built for you."
    },
    {
        question: "WHAT DOES 'LUMINARY' MEAN HERE?",
        answer: "Someone who shines—and helps others shine too. Not because they have everything figured out. Not because they're perfect. But because they keep learning, growing, and choosing to light the way. That can be you, too."
    },
    {
        question: "STILL WONDERING SOMETHING?",
        answer: "Ask us through the form below. Seriously. No question is too small, too random, or too 'I feel silly asking this.' That's what we're here for."
    }
];

// Render FAQ with 2026 Invention Level UI
function renderFAQ() {
    const faqContainer = document.getElementById('faq-container');
    if (!faqContainer) return;

    faqContainer.innerHTML = faqData.map((item, index) => `
        <div class="faq-item-wrapper border-b border-gray-100 last:border-0 py-8">
            <button 
                class="w-full text-left focus:outline-none group flex justify-between items-center gap-8"
                onclick="toggleFAQ(this)"
            >
                <h3 class="text-2xl md:text-4xl font-black text-[#1e3a8a] group-hover:text-[#a488f4] transition-colors leading-tight uppercase">
                    ${item.question}
                </h3>
                <div class="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#1e3a8a] group-hover:border-[#a488f4] flex items-center justify-center transition-all duration-300 transform group-data-[open=true]:rotate-45">
                    <i data-lucide="plus" class="w-6 h-6 text-[#1e3a8a] group-hover:text-[#a488f4]"></i>
                </div>
            </button>
            <div class="faq-answer-container max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                <p class="text-xl md:text-2xl text-gray-500 font-bold leading-relaxed pt-6">
                    ${item.answer}
                </p>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

// Toggle FAQ
function toggleFAQ(button) {
    const container = button.nextElementSibling;
    const iconContainer = button.querySelector('div');
    const isOpen = button.getAttribute('data-open') === 'true';
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item-wrapper button').forEach(btn => {
        if (btn !== button) {
            btn.setAttribute('data-open', 'false');
            btn.nextElementSibling.style.maxHeight = '0';
            btn.querySelector('div').style.transform = 'rotate(0deg)';
        }
    });

    // Toggle current
    if (isOpen) {
        button.setAttribute('data-open', 'false');
        container.style.maxHeight = '0';
        iconContainer.style.transform = 'rotate(0deg)';
    } else {
        button.setAttribute('data-open', 'true');
        container.style.maxHeight = container.scrollHeight + 'px';
        iconContainer.style.transform = 'rotate(45deg)';
    }
}

// Programs Carousel
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
    
    // Duplicate data for infinite scroll effect
    const extendedData = [...programsData, ...programsData, ...programsData];
    
    carousel.innerHTML = extendedData.map(program => `
        <div class="flex-shrink-0 group">
            <div class="w-40 h-40 bg-white border-2 border-gray-100 rounded-[2rem] flex items-center justify-center p-6 group-hover:border-[#a488f4] group-hover:shadow-2xl transition-all duration-500 transform group-hover:-rotate-6">
                <img src="${program.logo}" alt="${program.name}" class="w-full h-full object-contain" />
            </div>
            <p class="mt-4 text-center text-sm font-black text-[#1e3a8a] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">${program.name}</p>
        </div>
    `).join('');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Modal Functions
function toggleModal(modalId, event) {
    if (event) event.preventDefault();
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// Section Reveal Observer
const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1
});

// Contact Form
document.addEventListener('DOMContentLoaded', function() {
    renderFAQ();
    renderProgramsCarousel();
    
    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;
            
            try {
                console.log('Form submitted:', { name, email, message });
                document.getElementById('contact-form').classList.add('hidden');
                document.getElementById('contact-success').classList.remove('hidden');
                
                setTimeout(() => {
                    contactForm.reset();
                    document.getElementById('contact-form').classList.remove('hidden');
                    document.getElementById('contact-success').classList.add('hidden');
                }, 5000);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        });
    }
    
    // Close modals when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('fixed') && e.target.id !== 'navbar') {
            e.target.classList.add('hidden');
            e.target.classList.remove('flex');
        }
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
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = target.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Custom Cursor
const cursor = document.getElementById('custom-cursor');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}
