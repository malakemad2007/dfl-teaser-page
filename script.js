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
        { name: 'Yale Young Global Scholars', logo: 'yzWmAN3cqipr.jpg' },
        { name: 'MITES Summer', logo: 'TpB8TQlLTo0t.jpeg' },
        { name: 'Research Science Institute', logo: 'eA2DPI2dUl9E.png' },
        { name: 'TASS', logo: 'Gy653jScZN3s.jpg' },
        { name: 'Summer Science Program', logo: 'K51FDFwazPo9.jpg' },
        { name: 'Google CSSI', logo: 'S6O8ClfrudS9.png' },
        { name: 'NASA Space Apps', logo: '7Vd2e6O0Tysj.jpg' },
        { name: 'Kode With Klossy', logo: 'DUZWWvrt3CHC.jpg' },
        { name: 'Stanford Pre-College', logo: 'EaqhqRnzF3qb.jpg' },
        { name: 'TechGirls', logo: 'nRhom7EcP3cj.jpg' },
        { name: 'Soliya', logo: 'rcJRiGtof7hd.png' },
        { name: 'Youth Ambassadors', logo: 'z3bloNLXiQOR.png' },
        { name: 'ICYE', logo: 'IWl65sYv3dtL.jpg' },
        { name: 'Climate Olympiad', logo: 'Ps8nyzamqpV7.jpg' },
        { name: 'TEDx Youth', logo: '2DwCr1MrGKbb.jpg' },
        { name: 'AFS Intercultural', logo: 'LRsfzR5E3Tfa.jpg' },
        { name: 'The Experiment', logo: 'nRhom7EcP3cj.jpg' },
        { name: 'YES Abroad', logo: 'DUZWWvrt3CHC.jpg' },
        { name: 'NSLI-Y', logo: 'EaqhqRnzF3qb.jpg' },
        { name: 'CBYX', logo: '7Vd2e6O0Tysj.jpg' },
        { name: 'Junior Academy', logo: 'rcJRiGtof7hd.png' },
        { name: 'National Youth Science Camp', logo: 'z3bloNLXiQOR.png' },
        { name: 'Dear Future Luminary', logo: 'dear.future.luminary.logo.svg.svg' },
    ];

    const programsCarousel = document.getElementById('programs-carousel');
    if (programsCarousel) {
        // Duplicate programs for seamless scrolling effect
        const allPrograms = [...programs, ...programs];
        allPrograms.forEach((program, index) => {
            const div = document.createElement('div');
            div.className = 'flex-shrink-0 w-48 h-48 bg-white border border-gray-100 rounded-[2.5rem] p-10 flex items-center justify-center hover:shadow-2xl hover:border-[#a488f4]/30 transition-all duration-500 group';
            div.title = program.name;
            div.innerHTML = `
                <img
                    src="client/public/images/${program.logo}"
                    alt="${program.name}"
                    class="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-110"
                />
            `;
            programsCarousel.appendChild(div);
        });
    }

    // FAQ Items Data
    const faqItems = [
        {
            question: "What even is Dear Future Luminary?",
            answer: "<strong>Dear Future Luminary</strong> is your corner of the internet for <strong>figuring things out</strong>—your next opportunity, your passions, your personal growth, and honestly… yourself.<br><br>We help students discover <strong>scholarships, summer programs, teams, skills, and paths</strong> they might not even know exist yet.<br><br>Think of it as a <strong>guide</strong>, a <strong>resource hub</strong>, and a <strong>big-sis energy boost</strong> all in one."
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
            answer: "Honestly? That’s exactly why this exists.<br><br>Start anywhere that feels exciting: <strong>opportunities, personal growth, roadmaps, profile building…</strong> there’s no perfect order.<br><br><strong>You do not need to have your life figured out before beginning.</strong>"
        },
        {
            question: "I’m not extraordinary enough for these opportunities.",
            answer: "Respectfully… says who?<br><br>You <strong>do not need to be “the perfect student”</strong> to deserve good opportunities.<br><br>You need <strong>curiosity, effort, and the courage to try.</strong><br><br>Please don’t reject yourself before the application even can."
        },
        {
            question: "There’s too much information. I’m overwhelmed.",
            answer: "Same.<br><br>That’s why we <strong>curate everything</strong>—to save you from ten hours of chaotic searching and fifteen open tabs.<br><br>Take <strong>one small step</strong>. One application. One resource. One better day.<br><br><strong>That’s enough.</strong>"
        },
        {
            question: "Can I trust these opportunities?",
            answer: "We do our best to <strong>carefully curate and share legitimate opportunities</strong> and resources.<br><br>Still—always <strong>read official websites, double-check deadlines, and do your own final review.</strong><br><br><strong>Smart luminaries verify.</strong>"
        },
        {
            question: "Can I suggest opportunities or resources?",
            answer: "<strong>Please do.</strong><br><br>If you’ve found something amazing, send it our way. This space grows stronger when <strong>students help students.</strong>"
        },
        {
            question: "Can I work with Dear Future Luminary?",
            answer: "<strong>Absolutely !!</strong><br><br>We love meeting <strong>passionate students, collaborators, mentors, and organizations</strong> who believe in helping young people grow.<br><br>Reach out through the form below. <strong>Good things start with messages.</strong>"
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
            answer: "Ask us through the form below.<br><br>Seriously.<br><strong>No question is too small, too random, or too “I feel silly asking this.”</strong><br><br>That’s what we’re here for."
        }
    ];

    const faqContainer = document.getElementById('faq-container');
    if (faqContainer) {
        faqItems.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden transition-all hover:border-[#a488f4]/20';
            div.innerHTML = `
                <button
                    class="w-full px-10 py-10 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                    data-faq-index="${index}"
                >
                    <h3 class="text-2xl font-black text-[#1e3a8a] text-left">${item.question}</h3>
                    <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-500 text-gray-400">
                        <i data-lucide="chevron-down" class="w-6 h-6"></i>
                    </div>
                </button>
                <div class="faq-answer">
                    <div class="px-10 pb-10 text-gray-500 text-xl leading-relaxed">${item.answer}</div>
                </div>
            `;
            faqContainer.appendChild(div);
        });

        faqContainer.addEventListener('click', (e) => {
            const button = e.target.closest('button[data-faq-index]');
            if (button) {
                const answer = button.nextElementSibling;
                const iconDiv = button.querySelector('div');
                const isOpen = answer.style.gridTemplateRows === '1fr';

                // Close all other open answers
                document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                    otherAnswer.style.gridTemplateRows = '0fr';
                    otherAnswer.style.opacity = '0';
                    const otherIcon = otherAnswer.previousElementSibling.querySelector('div');
                    otherIcon.classList.remove('rotate-180', 'bg-[#a488f4]', 'text-white');
                    otherIcon.classList.add('text-gray-400');
                });

                if (!isOpen) {
                    answer.style.gridTemplateRows = '1fr';
                    answer.style.opacity = '1';
                    iconDiv.classList.add('rotate-180', 'bg-[#a488f4]', 'text-white');
                    iconDiv.classList.remove('text-gray-400');
                }
                lucide.createIcons();
            }
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

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                if (entry.target.classList.contains('reveal-text')) {
                    entry.target.style.opacity = '1';
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .group, .reveal-text').forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });

    // Custom class for visible state
    const style = document.createElement('style');
    style.textContent = `
        .is-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
