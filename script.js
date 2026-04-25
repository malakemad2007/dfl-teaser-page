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
            question: 'What is Dear Future Luminary?',
            answer: 'Think of Dear Future Luminary as the friend who already figured things out and decided to share the map. We organize real global opportunities and explain them in a way that actually makes sense—so you stop feeling lost and start moving forward.'
        },
        {
            question: 'Do I need to be "exceptional" to belong here?',
            answer: 'Not at all. You don\'t need awards, experience, or a perfect profile. If you\'re curious, motivated, or even just trying to figure things out, you\'re exactly where you\'re supposed to be.'
        },
        {
            question: 'Will this guarantee I get accepted into programs?',
            answer: 'No magic promises here. But we will help you understand opportunities, prepare better, and apply with confidence instead of guessing. And honestly? That already changes everything.'
        },
        {
            question: 'I\'m still in high school and totally confused. Is this for me?',
            answer: 'Yes—100%. This was built for that exact phase: when you know you want more, but don\'t know where to start. Most of what you\'ll find here starts from zero and walks with you step by step.'
        },
        {
            question: 'How can I get involved?',
            answer: 'Start by exploring. Read, learn, try things out. If you want to contribute, share your journey, or join the team, there\'s always space for people who care and want to grow—just like you.'
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
                <div class="px-10 pb-10 faq-answer hidden">
                    <p class="text-gray-500 text-xl leading-relaxed">${item.answer}</p>
                </div>
            `;
            faqContainer.appendChild(div);
        });

        faqContainer.addEventListener('click', (e) => {
            const button = e.target.closest('button[data-faq-index]');
            if (button) {
                const index = parseInt(button.dataset.faqIndex);
                const answer = button.nextElementSibling;
                const iconDiv = button.querySelector('div');

                if (answer.classList.contains('hidden')) {
                    // Close all other open answers
                    document.querySelectorAll('.faq-answer:not(.hidden)').forEach(openAnswer => {
                        openAnswer.classList.add('hidden');
                        openAnswer.previousElementSibling.querySelector('div').classList.remove('rotate-180', 'bg-[#a488f4]', 'text-white');
                        openAnswer.previousElementSibling.querySelector('div').classList.add('text-gray-400');
                    });

                    answer.classList.remove('hidden');
                    iconDiv.classList.add('rotate-180', 'bg-[#a488f4]', 'text-white');
                    iconDiv.classList.remove('text-gray-400');
                } else {
                    answer.classList.add('hidden');
                    iconDiv.classList.remove('rotate-180', 'bg-[#a488f4]', 'text-white');
                    iconDiv.classList.add('text-gray-400');
                }
                lucide.createIcons(); // Re-render Lucide icons
            }
        });
    }

    // Modals
    window.toggleModal = (modalId) => {
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
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;

            try {
                const response = await fetch('https://formspree.io/f/xqaqankn', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, message })
                });
                if (response.ok) {
                    contactSuccess.classList.remove('hidden');
                    contactSuccess.classList.add('flex');
                    contactForm.reset();
                    setTimeout(() => {
                        contactSuccess.classList.add('hidden');
                        contactSuccess.classList.remove('flex');
                    }, 3000);
                } else {
                    alert('There was an error sending your message. Please try again.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('There was an error sending your message. Please try again.');
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
