// Initialize Lucide Icons
lucide.createIcons();

// FAQ Data - Exact text from user

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


// Render FAQ
function renderFAQ() {
    const faqContainer = document.getElementById('faq-container');
    faqContainer.innerHTML = faqData.map((item, index) => `
        <div class="faq-item border-b-2 border-gray-100 last:border-b-0">
            <button 
                class="faq-button w-full py-8 px-0 flex items-start justify-between gap-6 hover:text-[#a488f4] transition-colors group text-left"
                onclick="toggleFAQ(this)"
            >
                <span class="flex-1">
                    <span class="text-4xl md:text-5xl font-black text-[#1e3a8a] group-hover:text-[#a488f4] transition-colors leading-tight">
                        ${item.question}
                    </span>
                </span>
                <span class="flex-shrink-0 mt-2">
                    <i data-lucide="chevron-down" class="w-8 h-8 text-[#facc15] group-hover:rotate-180 transition-transform duration-500"></i>
                </span>
            </button>
            <div class="faq-answer hidden overflow-hidden">
                <div class="pb-8 px-0">
                    <p class="text-2xl md:text-3xl text-gray-600 font-medium leading-relaxed">
                        ${item.answer}
                    </p>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

// Toggle FAQ
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const isOpen = !answer.classList.contains('hidden');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-answer').forEach(el => {
        el.classList.add('hidden');
    });
    document.querySelectorAll('.faq-button i').forEach(icon => {
        icon.classList.remove('rotate-180');
    });
    
    // Toggle current
    if (!isOpen) {
        answer.classList.remove('hidden');
        button.querySelector('i').classList.add('rotate-180');
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
    { name: 'Gold medalist '23', logo: 'client/public/images/logos/climate_olympiad.png' },
    { name: 'Ambassador', logo: 'client/public/images/OIP.webp' },
    { name: 'Girls Who Code', logo: 'client/public/images/logos/girls_who_code.png' },
    { name: 'Researcher', logo: 'client/public/images/NYAS-Swirl-Featured-Image.png' },
    { name: 'Trainee', logo: 'client/public/images/images.png' },
    { name: 'Founder & Ceo', logo: 'client/public/images/images.png' },

];

function renderProgramsCarousel() {
    const carousel = document.getElementById('programs-carousel');
    carousel.innerHTML = programsData.map(program => `
        <div class="flex-shrink-0 group">
            <div class="w-40 h-40 bg-white border-2 border-gray-100 rounded-3xl flex items-center justify-center p-6 group-hover:border-[#a488f4] group-hover:shadow-lg transition-all duration-500">
                <img src="${program.logo}" alt="${program.name}" class="w-full h-full object-contain" />
            </div>
            <p class="mt-4 text-center text-sm font-bold text-gray-600 group-hover:text-[#a488f4] transition-colors">${program.name}</p>
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
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
}

// Contact Form
document.addEventListener('DOMContentLoaded', function() {
    renderFAQ();
    renderProgramsCarousel();
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;
            
            // Simulate form submission
            try {
                // Here you would normally send to a backend
                console.log('Form submitted:', { name, email, message });
                
                // Show success message
                document.getElementById('contact-form').classList.add('hidden');
                document.getElementById('contact-success').classList.remove('hidden');
                
                // Reset after 5 seconds
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
        if (e.target.classList.contains('fixed')) {
            e.target.classList.add('hidden');
            e.target.classList.remove('flex');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// Custom Cursor
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
    } else {
        navbar.classList.remove('shadow-md');
    }
});
