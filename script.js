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

    // FAQ Section
    const faqItems = [
        {
            "question": "What even is Dear Future Luminary?",
            "answer": "Dear Future Luminary is your corner of the internet for figuring things out\u2014your next opportunity, your passions, your personal growth, and honestly\u2026 yourself.<br><br>We help students discover scholarships, summer programs, teams, skills, and paths they might not even know exist yet.<br><br>Think of it as a guide, a resource hub, and a big-sis energy boost all in one."
        },
        {
            "question": "Who is this for?",
            "answer": "High school students. Early college students. Dreamers. Overthinkers. Future founders. People who feel behind. People who want more.<br><br>Basically\u2026 if you\u2019re trying to grow, build your future, or find your spark\u2014you belong here."
        },
        {
            "question": "Is this really free?",
            "answer": "Yep. Actually free.<br><br>No hidden fees. No \u201cpay to unlock the good stuff.\u201d No weird catch.<br><br>Access should never be the thing holding someone back."
        },
        {
            "question": "I feel lost. Where do I even start?",
            "answer": "Honestly? That\u2019s exactly why this exists.<br><br>Start anywhere that feels exciting:<br><br>opportunities, personal growth, roadmaps, profile building\u2026 there\u2019s no perfect order.<br><br>You do not need to have your life figured out before beginning."
        },
        {
            "question": "I\u2019m not extraordinary enough for these opportunities.",
            "answer": "Respectfully\u2026 says who?<br><br>You do not need to be \u201cthe perfect student\u201d to deserve good opportunities.<br><br>You need curiosity, effort, and the courage to try.<br><br>Please don\u2019t reject yourself before the application even can."
        },
        {
            "question": "There\u2019s too much information. I\u2019m overwhelmed.",
            "answer": "Same.<br><br>That\u2019s why we curate everything\u2014to save you from ten hours of chaotic searching and fifteen open tabs.<br><br>Take one small step. One application. One resource. One better day.<br><br>That\u2019s enough."
        },
        {
            "question": "Can I trust these opportunities?",
            "answer": "We do our best to carefully curate and share legitimate opportunities and resources.<br><br>Still\u2014always read official websites, double-check deadlines, and do your own final review.<br><br>Smart luminaries verify."
        },
        {
            "question": "Can I suggest opportunities or resources?",
            "answer": "Please do.<br><br>If you\u2019ve found something amazing, send it our way. This space grows stronger when students help students."
        },
        {
            "question": "Can I work with Dear Future Luminary?",
            "answer": "We love meeting passionate students, collaborators, mentors, and organizations who believe in helping young people grow.<br><br>Reach out through the form below. Good things start with messages."
        },
        {
            "question": "Who\u2019s behind all this?",
            "answer": "A student who knows how confusing all of this can feel.<br><br>Someone who spent way too much time figuring things out the hard way\u2014and decided to make it easier for others.<br><br>Built with care. Built with purpose. Built for you."
        },
        {
            "question": "What does \u201cLuminary\u201d mean here?",
            "answer": "Someone who shines\u2014and helps others shine too.<br><br>Not because they have everything figured out.<br><br>Not because they\u2019re perfect.<br><br>But because they keep learning, growing, and choosing to light the way.<br><br>That can be you, too."
        },
        {
            "question": "Still wondering something?",
            "answer": "Ask us through the form below.<br><br>Seriously.<br><br>No question is too small, too random, or too \u201cI feel silly asking this.\u201d<br><br>That\u2019s what we\u2019re here for."
        }
    ];

    const faqContainer = document.getElementById('faq-container');
    if (faqContainer) {
        faqItems.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'border-b border-gray-100 last:border-0';
            div.innerHTML = `
                <div class="group">
                    <button class="w-full py-8 flex items-center justify-between text-left transition-all" onclick="toggleFaq(${index})">
                        <h3 class="text-xl md:text-2xl font-bold text-[#1e3a8a] group-hover:text-[#a488f4] transition-colors pr-8">${item.question}</h3>
                        <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#1e3a8a] group-hover:bg-[#a488f4]/10 group-hover:text-[#a488f4] transition-all flex-shrink-0">
                            <i data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-500" id="faq-icon-${index}"></i>
                        </div>
                    </button>
                    <div class="faq-answer hidden overflow-hidden transition-all duration-500" id="faq-answer-${index}">
                        <div class="pb-10 text-lg text-gray-500 leading-relaxed max-w-2xl">
                            ${item.answer}
                        </div>
                    </div>
                </div>
            `;
            faqContainer.appendChild(div);
        });
    }

    window.toggleFaq = (index) => {
        const answer = document.getElementById(`faq-answer-${index}`);
        const icon = document.getElementById(`faq-icon-${index}`);
        const allAnswers = document.querySelectorAll('.faq-answer');
        const allIcons = document.querySelectorAll('[id^="faq-icon-"]');

        allAnswers.forEach((ans, i) => {
            if (i !== index) {
                ans.classList.add('hidden');
                const otherIcon = document.getElementById(`faq-icon-${i}`);
                if (otherIcon) {
                    otherIcon.style.transform = 'rotate(0deg)';
                    otherIcon.setAttribute('data-lucide', 'chevron-down');
                }
            }
        });

        const isHidden = answer.classList.contains('hidden');
        if (isHidden) {
            answer.classList.remove('hidden');
            icon.style.transform = 'rotate(180deg)';
            icon.setAttribute('data-lucide', 'chevron-up');
        } else {
            answer.classList.add('hidden');
            icon.style.transform = 'rotate(0deg)';
            icon.setAttribute('data-lucide', 'chevron-down');
        }
        lucide.createIcons();
    };

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
