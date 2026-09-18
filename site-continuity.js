/* Shared page details: runs on the site pages, not the concept preview. */
(() => {
  const css = `
    .site-loop,.social{background:#f9e3eb;color:#251925;padding:60px 20px;text-align:center}
    .site-loop .site-loop-inner{width:min(1100px,100%);margin:0 auto}
    .site-loop h2,.social h2{font:700 clamp(37px,5vw,58px)/1 Georgia,serif;letter-spacing:-.05em;margin:9px 0 25px}
    .site-loop h2 em,.social h2 em{font-weight:400;color:#df337a}
    .site-loop .social-grid,.social .social-grid{display:flex;justify-content:center;align-items:center;gap:17px;flex-wrap:wrap}
    .site-loop .social-grid a,.social .social-grid a{display:grid;place-items:center;width:65px;height:65px;border:1px solid #25192566;border-radius:50%;background:transparent;color:#251925;text-decoration:none;transition:transform .15s}
    .site-loop .social-grid a:hover,.social .social-grid a:hover{transform:translateY(-3px)}
    .site-loop .social-grid svg,.social .social-grid svg{display:block;width:29px;height:29px}
    .contact-grid .contact-area:first-child{text-align:center}
    .contact-grid .contact-area:first-child .logo-space{justify-content:center}
    .contact-grid .contact-area:first-child .rep-name,.contact-grid .contact-area:first-child .phone{font-size:17px;line-height:1.5;text-align:center}
    .contact-grid .contact-area{min-width:0}
    .contact-grid .contact-area .email{display:block;max-width:100%;white-space:normal!important;overflow-wrap:anywhere!important;word-break:normal!important;letter-spacing:normal!important;font-size:clamp(13px,1.5vw,16px)!important;line-height:1.55}
    .sticker.site-greeting{font:italic 700 17px/1.06 Georgia,serif;letter-spacing:-.025em;padding:12px}
    @media(max-width:700px){
      .site-loop,.social{padding:53px 17px}
      .site-loop h2,.social h2{font-size:clamp(35px,9vw,46px)}
      .site-loop .social-grid a,.social .social-grid a{width:57px;height:57px}
      .site-loop .social-grid svg,.social .social-grid svg{width:26px;height:26px}
      .contact-grid .contact-area .email{font-size:clamp(12px,3.7vw,15px)!important}
      .sticker.site-greeting{font-size:14px}
    }
    @media(prefers-reduced-motion:reduce){.site-loop .social-grid a,.social .social-grid a{transition:none}}
  `;
  const styles = document.createElement('style');
  styles.textContent = css;
  document.head.appendChild(styles);
  function init() {
    const page = location.pathname.split('/').pop() || 'index.html';
    if (page === 'index.html') {
      const sticker = document.querySelector('.sticker');
      if (sticker) {
        sticker.textContent = 'Hi, Juicy Scoopers!';
        sticker.classList.add('site-greeting');
      }
      return;
    }
    if (!['podcast.html', 'tour.html', 'shop.html', 'contact.html'].includes(page)) return;
    if (page === 'contact.html') {
      const email = document.querySelector('.contact-area .email');
      if (email && email.textContent.trim() === 'heathermcdonaldmanagement@gmail.com') {
        email.innerHTML = 'heathermcdonaldmanagement<wbr>@gmail.com';
      }
    }
    if (document.querySelector('main > .social, main > .site-loop')) return;
    const main = document.querySelector('main');
    if (!main) return;
    const section = document.createElement('section');
    section.className = 'site-loop';
    section.setAttribute('aria-labelledby', 'site-loop-title');
    section.innerHTML = `<div class="site-loop-inner"><h2 id="site-loop-title">Stay in the <em>loop.</em></h2><div class="social-grid">
      <a href="https://www.patreon.com/join/juicyscoop" target="_blank" rel="noopener noreferrer" aria-label="Heather McDonald on Patreon" title="Patreon"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="7" y="12" width="7" height="28" rx="1" fill="currentColor"/><circle cx="30" cy="22" r="13" fill="currentColor"/></svg></a>
      <a href="https://www.youtube.com/@JuicyScoop" target="_blank" rel="noopener noreferrer" aria-label="Juicy Scoop on YouTube" title="YouTube"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="3" y="11" width="42" height="26" rx="9" fill="#e62117"/><path d="M20 17 L32 24 L20 31 Z" fill="white"/></svg></a>
      <a href="https://www.instagram.com/heathermcdonald/" target="_blank" rel="noopener noreferrer" aria-label="Heather McDonald on Instagram" title="Instagram"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="7" y="7" width="34" height="34" rx="10" fill="none" stroke="currentColor" stroke-width="3.4"/><circle cx="24" cy="24" r="8" fill="none" stroke="currentColor" stroke-width="3.4"/><circle cx="34" cy="14.5" r="2.4" fill="currentColor"/></svg></a>
    </div></div>`;
    main.appendChild(section);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();
