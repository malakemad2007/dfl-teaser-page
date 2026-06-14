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
            "answer": "Dear Future Luminary is your corner of the internet for figuring things out—your next opportunity, your passions, your personal growth, and honestly… yourself.<br><br>We help students discover scholarships, summer programs, teams, skills, and paths they might not even know exist yet.<br><br>Think of it as a guide, a resource hub, and a big-sis energy boost all in one."
        },
        {
            "question": "Who is this for?",
            "answer": "High school students. Early college students. Dreamers. Overthinkers. Future founders. People who feel behind. People who want more.<br><br>Basically… if you’re trying to grow, build your future, or find your spark—you belong here."
        },
        {
            "question": "Is this really free?",
            "answer": "Yep. Actually free.<br><br>No hidden fees. No “pay to unlock the good stuff.” No weird catch.<br><br>Access should never be the thing holding someone back."
        },
        {
            "question": "I feel lost. Where do I even start?",
            "answer": "Honestly? That’s exactly why this exists.<br><br>Start anywhere that feels exciting:<br><br>opportunities, personal growth, roadmaps, profile building… there’s no perfect order.<br><br>You do not need to have your life figured out before beginning."
        },
        {
            "question": "I’m not extraordinary enough for these opportunities.",
            "answer": "Respectfully… says who?<br><br>You do not need to be “the perfect student” to deserve good opportunities.<br><br>You need curiosity, effort, and the courage to try.<br><br>Please don’t reject yourself before the application even can."
        },
        {
            "question": "There’s too much information. I’m overwhelmed.",
            "answer": "Same.<br><br>That’s why we curate everything—to save you from ten hours of chaotic searching and fifteen open tabs.<br><br>Take one small step. One application. One resource. One better day.<br><br>That’s enough."
        },
        {
            "question": "Can I trust these opportunities?",
            "answer": "We do our best to carefully curate and share legitimate opportunities and resources.<br><br>Still—always read official websites, double-check deadlines, and do your own final review.<br><br>Smart luminaries verify."
        },
        {
            "question": "Can I suggest opportunities or resources?",
            "answer": "Please do.<br><br>If you’ve found something amazing, send it our way. This space grows stronger when students help students."
        },
        {
            "question": "Can I work with Dear Future Luminary?",
            "answer": "Absolutely !!<br><br>We love meeting passionate students, collaborators, mentors, and organizations who believe in helping young people grow.<br><br>Reach out through the form below. Good things start with messages."
        },
        {
            "question": "Who’s behind all this?",
            "answer": "A student who knows how confusing all of this can feel.<br><br>Someone who spent way too much time figuring things out the hard way—and decided to make it easier for others.<br><br>Built with care. Built with purpose. Built for you."
        },
        {
            "question": "What does “Luminary” mean here?",
            "answer": "Someone who shines—and helps others shine too.<br><br>Not because they have everything figured out.<br><br>Not because they’re perfect.<br><br>But because they keep learning, growing, and choosing to light the way.<br><br>That can be you, too."
        },
        {
            "question": "Still wondering something?",
            "answer": "Ask us through the form below.<br><br>Seriously.<br><br>No question is too small, too random, or too “I feel silly asking this.”<br><br>That’s what we’re here for."
        }
    ];

    const faqContainer = document.getElementById('faq-container');
    if (faqContainer) {
        faqItems.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'border-b border-[#1e3a8a]/10 group';
            div.innerHTML = `
                <button class="w-full py-10 flex items-center justify-between text-left transition-all group-hover:pl-4 duration-500" onclick="toggleFaq(${index})">
                    <h3 class="text-2xl md:text-3xl font-black text-[#1e3a8a] group-hover:text-[#a488f4] transition-all duration-500 pr-8 leading-tight uppercase tracking-tight italic">${item.question}</h3>
                    <div class="w-12 h-12 flex items-center justify-center text-[#1e3a8a]/30 group-hover:text-[#a488f4] transition-all duration-500 flex-shrink-0" id="faq-icon-container-${index}">
                        <i data-lucide="arrow-down-right" class="w-8 h-8 transition-transform duration-500" id="faq-icon-${index}"></i>
                    </div>
                </button>
                <div class="faq-answer hidden overflow-hidden transition-all duration-500" id="faq-answer-${index}">
                    <div class="pb-12 text-xl text-gray-500 font-medium leading-relaxed max-w-2xl pl-0 md:pl-4">
                        ${item.answer}
                    </div>
                </div>
            `;
            faqContainer.appendChild(div);
        });
    }

    window.toggleFaq = (index) => {
        const answer = document.getElementById(`faq-answer-${index}`);
        const iconContainer = document.getElementById(`faq-icon-container-${index}`);
        const allAnswers = document.querySelectorAll('.faq-answer');
        const allIconContainers = document.querySelectorAll('[id^="faq-icon-container-"]');

        allAnswers.forEach((ans, i) => {
            if (i !== index) {
                ans.classList.add('hidden');
                const otherContainer = document.getElementById(`faq-icon-container-${i}`);
                if (otherContainer) {
                    otherContainer.style.transform = 'rotate(0deg)';
                }
            }
        });

        const isHidden = answer.classList.contains('hidden');
        if (isHidden) {
            answer.classList.remove('hidden');
            iconContainer.style.transform = 'rotate(45deg)';
        } else {
            answer.classList.add('hidden');
            iconContainer.style.transform = 'rotate(0deg)';
        }
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
    const contactContainer = document.getElementById('contact-form-container');
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
                    contactContainer.innerHTML = `
                        <div class="p-12 bg-[#a488f4]/10 rounded-[3rem] text-center animate-in fade-in zoom-in duration-500">
                            <h3 class="text-3xl font-black text-[#1e3a8a] mb-4">Message Sent!</h3>
                            <p class="text-xl text-gray-600">Thank you so much! 💜 I'll reply as soon as I can.</p>
                        </div>
                    `;
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

    // Initialize Lucide Icons
    lucide.createIcons();
});
