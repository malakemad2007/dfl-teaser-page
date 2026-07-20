// Initialize Lucide icons
lucide.createIcons();

// FAQ Data from pasted_content.txt
const faqData = [
    {
        question: "What even is Dear Future Luminary?",
        answer: "Think of it as the older sibling many of us wish we had. We're building a place where students can discover opportunities, learn how to apply for them, and realize that people like us can do incredible things too."
    },
    {
        question: "Who is this for?",
        answer: "If you're a student who has ever Googled: 'Fully funded summer programs for international students', 'How do people get into Harvard?', 'I have no extracurriculars. Am I cooked?' Congratulations. You're one of us."
    },
    {
        question: "Is this really free?",
        answer: "Yep. Actually free. No hidden fees. No 'pay to unlock the good stuff.' No suspicious motivational guru energy."
    },
    {
        question: "I feel lost. Where do I even start?",
        answer: "Same. That's exactly why Dear Future Luminary exists. Start anywhere—the opportunities, the guides, the roadmaps. Nobody has life figured out at 17. Or 18. Or, honestly, ever."
    },
    {
        question: "I'm not extraordinary enough for these opportunities.",
        answer: "Respectfully... says who? Most students you admire started with zero awards, zero connections, and a lot of self-doubt. The difference is that they applied anyway. Please don't reject yourself before the application even can."
    },
    {
        question: "There's too much information online. It's overwhelming.",
        answer: "We know. One person says, 'Build a startup.' Another says, 'Publish research.' A third tells you to wake up at 5 AM and meditate on a mountain. We're trying to make things simpler."
    },
    {
        question: "Can I trust these opportunities?",
        answer: "If it's on Dear Future Luminary, we've done our homework. We care way too much about students to send them somewhere sketchy."
    },
    {
        question: "Can I suggest opportunities or resources?",
        answer: "Please do. This isn't supposed to be a one-person mission. If you've found something amazing, we'd love to hear about it."
    },
    {
        question: "Can I work with Dear Future Luminary?",
        answer: "Absolutely. If you enjoy helping people, creating cool things, and occasionally questioning your life choices while fixing a website bug at midnight, you'll fit right in."
    },
    {
        question: "Who's behind all this?",
        answer: "A student. Not a giant organization. Not a company with a fancy office and unlimited coffee. Just someone who got tired of watching talented students miss opportunities because nobody told them where to look."
    },
    {
        question: "What does 'Luminary' mean here?",
        answer: "Someone who shines—and helps others shine too. Cheesy? Maybe. True? Also yes."
    },
    {
        question: "Still wondering something?",
        answer: "Ask us. Worst case scenario, we answer with an unnecessarily long paragraph because we got excited."
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

// Render FAQ with the new UI request: Main title fixed left, Q&A scrolled right
function renderFAQ() {
    const faqList = document.getElementById('faq-list');
    if (!faqList) return;

    faqList.innerHTML = faqData.map((item, index) => `
        <div class="faq-item-premium group" onclick="toggleFAQ(${index})">
            <div class="flex justify-between items-center py-6 sm:py-8 cursor-pointer border-b border-[#1e3a8a]/10 group-hover:border-[#a488f4]/30 transition-all duration-500">
                <h3 class="text-xl sm:text-2xl md:text-3xl font-black text-[#1e3a8a] group-hover:text-[#a488f4] transition-colors duration-500 pr-8">
                    ${item.question}
                </h3>
                <div class="faq-icon-wrapper flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#1e3a8a] group-hover:border-[#a488f4] group-hover:bg-[#a488f4] flex items-center justify-center transition-all duration-500">
                    <i data-lucide="arrow-down" class="w-5 h-5 sm:w-6 sm:h-6 text-[#1e3a8a] group-hover:text-white transition-all duration-500 faq-arrow"></i>
                </div>
            </div>
            <div class="faq-answer-wrapper overflow-hidden max-h-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" id="faq-answer-${index}">
                <div class="py-6 sm:py-8 text-lg sm:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl">
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
    const item = container.parentElement;
    const arrow = item.querySelector('.faq-arrow');
    const isOpen = container.style.maxHeight && container.style.maxHeight !== '0px';

    // Close others
    document.querySelectorAll('.faq-answer-wrapper').forEach((el, i) => {
        if (i !== index) {
            el.style.maxHeight = '0';
            el.parentElement.querySelector('.faq-arrow').style.transform = 'rotate(0deg)';
        }
    });

    if (isOpen) {
        container.style.maxHeight = '0';
        arrow.style.transform = 'rotate(0deg)';
    } else {
        container.style.maxHeight = container.scrollHeight + 'px';
        arrow.style.transform = 'rotate(-180deg)';
    }
}

// Render Programs Carousel
function renderProgramsCarousel() {
    const carousel = document.getElementById('programs-carousel');
    if (!carousel) return;

    carousel.innerHTML = programsData.map((program, index) => `
        <div class="flex-shrink-0 group snap-start">
            <div class="w-40 h-40 sm:w-48 sm:h-48 bg-white border border-gray-100 rounded-[2rem] flex items-center justify-center p-6 shadow-sm group-hover:shadow-xl group-hover:border-[#a488f4]/20 group-hover:-translate-y-2 transition-all duration-500">
                <img src="${program.logo}" alt="${program.name}" class="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <p class="mt-4 text-center text-xs font-black text-[#1e3a8a]/40 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500">${program.name}</p>
        </div>
    `).join('');
}

// Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.querySelector('[onclick="toggleMobileMenu()"] i');
    menu.classList.toggle('hidden');
    if (menu.classList.contains('hidden')) {
        icon.setAttribute('data-lucide', 'menu');
    } else {
        icon.setAttribute('data-lucide', 'x');
    }
    lucide.createIcons();
}

// Soon Modal
function showSoonModal() {
    const modal = document.getElementById('soon-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function hideSoonModal() {
    const modal = document.getElementById('soon-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Handle Contact Submit
function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.target;
    showSoonModal();
    form.reset();
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', function() {
    renderFAQ();
    renderProgramsCarousel();

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        const miniNav = document.getElementById('mini-nav');
        const whatYouFindSection = document.getElementById('what-you-find');

        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Show/hide mini nav based on what-you-find section
        if (whatYouFindSection) {
            const rect = whatYouFindSection.getBoundingClientRect();
            // Show when the section starts entering the viewport and hide when it leaves
            const buffer = 100;
            if (rect.top <= buffer && rect.bottom >= buffer) {
                miniNav.classList.add('visible');
            } else {
                miniNav.classList.remove('visible');
            }
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
                    const offset = 120;
                    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: elementPosition - offset,
                        behavior: 'smooth'
                    });

                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        toggleMobileMenu();
                    }
                }
            }
        });
    });

    // Custom cursor (enhanced)
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });

        document.querySelectorAll('a, button, .cursor-pointer, .faq-item-premium').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('active'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
        });
    }
});
