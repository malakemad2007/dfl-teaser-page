// Initialize Lucide Icons
lucide.createIcons();

// FAQ Data - Exact text from user
const faqData = [
    {
        question: "WHAT EVEN IS DEAR FUTURE LUMINARY?",
        answer: "Dear Future Luminary is a student-led initiative designed to help you navigate opportunities, build your profile, and discover your direction—without the confusion. Think of it as a guide, not a directory."
    },
    {
        question: "WHO IS THIS FOR?",
        answer: "If you're ambitious, curious, and feeling a bit lost about your future—this is for you. Whether you're in high school, early university, or just figuring things out, DFL is here to help you understand yourself and your options better."
    },
    {
        question: "IS THIS REALLY FREE?",
        answer: "Yes. Completely free. No hidden fees, no premium tiers, no catch. Everything on Dear Future Luminary is accessible to every student, regardless of their background or financial situation."
    },
    {
        question: "I FEEL LOST. WHERE DO I EVEN START?",
        answer: "Start with the Roadmaps section. Pick a field or interest that resonates with you, and follow the step-by-step guides. There's no 'perfect' starting point—just pick something and begin. You'll figure it out as you go."
    },
    {
        question: "I'M NOT EXTRAORDINARY ENOUGH FOR THESE OPPORTUNITIES.",
        answer: "Stop right there. Talent doesn't look one way. The opportunities on DFL are designed for real students—not just the 'perfect' ones. Your background, your perspective, your story—that's what makes you valuable. Apply anyway."
    },
    {
        question: "THERE'S TOO MUCH INFORMATION. I'M OVERWHELMED.",
        answer: "That's exactly why DFL exists. Instead of dumping everything on you, we organize, filter, and explain. Start small. Pick one opportunity or one skill to focus on. You don't need to do everything at once."
    },
    {
        question: "CAN I TRUST THESE OPPORTUNITIES?",
        answer: "Every opportunity on DFL has been personally vetted or is from a trusted, established organization. These are programs I've been part of or thoroughly researched. If it's here, it's legitimate."
    },
    {
        question: "CAN I SUGGEST OPPORTUNITIES OR RESOURCES?",
        answer: "Absolutely. DFL is built by students, for students—and we want your input. If you've found something amazing or have a resource to share, reach out through the contact form. Let's build this together."
    },
    {
        question: "CAN I WORK WITH DEAR FUTURE LUMINARY?",
        answer: "Yes! Whether you want to contribute content, help with outreach, partner with us, or collaborate in any way—we'd love to have you. Fill out the 'Join the Movement' form and let's talk."
    },
    {
        question: "WHO'S BEHIND ALL THIS?",
        answer: "I'm Malak, a high school student who got tired of searching for opportunities the hard way. I built DFL because I wished it existed when I was starting out. Now it's growing into something bigger with help from amazing people like you."
    },
    {
        question: "WHAT DOES 'LUMINARY' MEAN HERE?",
        answer: "A luminary is someone who shines—who lights the way. But here's the thing: luminaries don't shine alone. We light the way for each other. That's what DFL is about—helping each other discover our potential and move forward together."
    },
    {
        question: "STILL WONDERING SOMETHING?",
        answer: "Drop your question in the contact form below. I read every message and I'll get back to you as soon as I can. No question is too small or too weird—ask away."
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
