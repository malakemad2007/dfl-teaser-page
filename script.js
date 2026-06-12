document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const customCursor = document.getElementById('custom-cursor');
    let cursorPos = { x: 0, y: 0 };
    let cursorColor = 'purple'; // Default color

    document.addEventListener('mousemove', (e) => {
        cursorPos = { x: e.clientX, y: e.clientY };
        customCursor.style.left = `${cursorPos.x}px`;
        customCursor.style.top = `${cursorPos.y}px`;

        const target = e.target;
        const isInteractive = target.closest('button, a, input, textarea, [role="button"]');
        const newColor = isInteractive ? 'yellow' : 'purple';
        if (newColor !== cursorColor) {
            customCursor.classList.remove(cursorColor);
            customCursor.classList.add(newColor);
            cursorColor = newColor;
        }
    });

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('top-4', 'left-4', 'right-4', 'bg-white/95', 'backdrop-blur-xl', 'shadow-xl', 'border', 'border-gray-100', 'rounded-2xl');
            navbar.style.maxWidth = 'calc(100% - 32px)';
            navbar.style.margin = '0 auto';
            navbar.style.left = '16px';
            navbar.style.right = '16px';
            navbar.classList.remove('bg-white/80', 'border-b', 'border-gray-100/50', 'rounded-none');
        } else {
            navbar.classList.remove('top-4', 'left-4', 'right-4', 'bg-white/95', 'backdrop-blur-xl', 'shadow-xl', 'border', 'border-gray-100', 'rounded-2xl');
            navbar.style.maxWidth = '';
            navbar.style.margin = '';
            navbar.style.left = '';
            navbar.style.right = '';
            navbar.classList.add('bg-white/80', 'backdrop-blur-xl', 'rounded-none', 'border-b', 'border-gray-100/50');
        }
    });

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    window.toggleMobileMenu = () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.setAttribute('data-lucide', 'menu');
        } else {
            menuIcon.setAttribute('data-lucide', 'x');
        }
        lucide.createIcons(); // Re-render Lucide icons
    };

    // Programs Carousel Data
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

    const programsCarousel = document.getElementById('programs-carousel');
    if (programsCarousel) {
        // Duplicate programs for seamless scrolling effect
        const allPrograms = [...programs, ...programs];
        allPrograms.forEach((program, index) => {
            const div = document.createElement('div');
            div.className = 'flex-shrink-0 w-64 h-64 bg-white border border-gray-100 rounded-[3rem] p-12 flex items-center justify-center hover:shadow-2xl hover:border-[#a488f4]/30 transition-all duration-500 group relative overflow-hidden';
            div.title = program.name;
            div.innerHTML = `
                <div class="absolute inset-0 bg-gradient-to-br from-[#a488f4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                    src="client/public/images/logos/${program.logo}"
                    alt="${program.name}"
                    class="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-110 relative z-10"
                />
            `;
            programsCarousel.appendChild(div);
        });
    }

    // FAQ Items Data
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

    const faqContainer = document.getElementById('faq-container');
    if (faqContainer) {
        faqItems.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'p-12 bg-gray-50 rounded-[3rem] border border-gray-100 hover:border-[#a488f4] hover:bg-white transition-all group';
            div.innerHTML = `
                <div class="flex items-start gap-6">
                    <div class="w-12 h-12 rounded-2xl bg-[#a488f4]/10 flex items-center justify-center text-[#a488f4] group-hover:bg-[#a488f4] group-hover:text-white transition-all flex-shrink-0">
                        <i data-lucide="help-circle" class="w-6 h-6"></i>
                    </div>
                    <div class="space-y-4">
                        <h3 class="text-3xl font-black text-[#1e3a8a] leading-tight">${item.question}</h3>
                        <div class="text-xl text-gray-500 leading-relaxed">${item.answer}</div>
                    </div>
                </div>
            `;
            faqContainer.appendChild(div);
        });
    }

    // Modals
    window.toggleModal = (modalId, event) => {
        if (event) {
            event.preventDefault(); // Prevent page refresh for # links
        }
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.toggle('hidden');
            modal.classList.toggle('flex');
        }
    };

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const contactSuccess = document.getElementById('contact-success');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('https://formspree.io/f/xqaqankn', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify(data)
                });
                if (response.ok) {
                    contactForm.style.display = 'none';
                    contactSuccess.classList.remove('hidden');
                    contactSuccess.classList.add('block');
                    contactForm.reset();
                    
                    setTimeout(() => {
                        contactSuccess.classList.add('hidden');
                        contactSuccess.classList.remove('block');
                        contactForm.style.display = 'block';
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalText;
                        lucide.createIcons();
                    }, 8000);
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Oops! There was a problem submitting your form. Please try again.');
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                lucide.createIcons();
            }
        });
    }

    // Set current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Initialize Lucide Icons
    lucide.createIcons();
});
