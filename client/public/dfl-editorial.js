(() => {
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

  const enhance = () => {
    const nav = document.querySelector('nav.fixed');
    if (nav) {
      nav.classList.add('dfl-nav');
      nav.querySelectorAll('a').forEach((link) => {
        const label = link.textContent.trim();
        if (label.includes("What You'll Find")) link.textContent = 'Ecosystem';
        if (label === 'Programs') link.remove();
        if (label === 'Contact') link.classList.add('dfl-contact-link');
      });
      nav.querySelectorAll('button').forEach((button) => {
        if (button.textContent.includes('Join the Movement')) {
          button.textContent = 'Join Us';
          button.classList.add('dfl-join-nav');
        }
      });
      const joinButton = [...nav.querySelectorAll('button')].find((button) => button.textContent.includes('Join Us'));
      if (joinButton && !nav.querySelector('.dfl-contact-link')) {
        const contact = document.createElement('a');
        contact.href = '#contact';
        contact.textContent = 'Contact';
        contact.className = 'dfl-contact-link';
        joinButton.parentElement.insertBefore(contact, joinButton);
      }
      const mobileMenu = [...nav.querySelectorAll('div')].find((element) => element.textContent.includes("What You'll Find") && element.textContent.includes('FAQ') && element.querySelector('button'));
      if (mobileMenu) mobileMenu.classList.add('dfl-mobile-menu');
    }

    const who = document.getElementById('who-we-are');
    if (who) who.dataset.dflEditorial = 'true';
    const ecosystem = document.getElementById('what-you-find');
    if (ecosystem) ecosystem.dataset.dflEditorial = 'true';
    const mission = document.getElementById('mission');
    if (mission) mission.dataset.dflMission = 'true';

    const connect = [...document.querySelectorAll('div')].find((element) => {
      const text = element.textContent || '';
      return text.includes('Discord') && text.includes('Instagram') && typeof element.className === 'string' && element.className.includes('bg-[#facc15]');
    });
    if (connect) connect.classList.add('dfl-connect');

    const footer = document.querySelector('footer');
    if (footer) footer.classList.add('dfl-footer');

    document.querySelectorAll('[class*="backdrop-blur"]').forEach((modal) => {
      modal.classList.add('dfl-modal-backdrop');
      const panel = modal.querySelector('.modal-content');
      if (panel) panel.classList.add('dfl-modal-panel');
    });

    if (hasFinePointer && !document.querySelector('.dfl-cursor')) {
      const cursor = document.createElement('div');
      cursor.className = 'dfl-cursor';
      document.body.appendChild(cursor);
      window.addEventListener('mousemove', (event) => {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
      }, { passive: true });
      document.addEventListener('mouseover', (event) => {
        if (event.target instanceof Element && event.target.closest('a,button,input,textarea,[role="button"]')) cursor.classList.add('is-active');
      });
      document.addEventListener('mouseout', (event) => {
        if (event.target instanceof Element && event.target.closest('a,button,input,textarea,[role="button"]')) cursor.classList.remove('is-active');
      });
    }
  };

  const observer = new MutationObserver(() => enhance());
  observer.observe(document.body, { childList: true, subtree: true });
  enhance();
  window.addEventListener('load', enhance);
  setTimeout(enhance, 100);
  setTimeout(enhance, 500);
})();
