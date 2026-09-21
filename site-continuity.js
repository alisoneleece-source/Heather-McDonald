/* Shared design continuity and requested reference-image revisions. */
(() => {
  const css = `
    .site-loop,.social{background:#f9e3eb;color:#251925;padding:60px 20px;text-align:center}
    .site-loop .site-loop-inner{width:min(1100px,100%);margin:0 auto}
    .site-loop h2,.social h2{font:700 clamp(37px,5vw,58px)/1 Georgia,serif;letter-spacing:-.05em;margin:9px 0 25px}
    .site-loop h2 em,.social h2 em{font-weight:400;color:#df337a}
    .site-loop .social-grid,.social .social-grid{display:flex;justify-content:center;align-items:center;gap:17px;flex-wrap:wrap}
    .site-loop .social-grid a,.social .social-grid a{display:grid;place-items:center;width:83px;height:83px;border:1px solid #e9d4dd;border-radius:12px;background:white;color:#251925;text-decoration:none;transition:transform .15s}
    .site-loop .social-grid a:hover,.social .social-grid a:hover{transform:translateY(-3px)}
    .site-loop .social-grid svg,.social .social-grid svg{display:block;width:45px;height:45px}
    .contact-grid .contact-area:first-child{text-align:center}
    .contact-grid .contact-area:first-child .logo-space{justify-content:center}
    .contact-grid .contact-area:first-child .rep-name,.contact-grid .contact-area:first-child .phone{font-size:17px;line-height:1.5;text-align:center}
    .contact-grid .contact-area{min-width:0}
    .contact-grid .contact-area .email{display:block;max-width:100%;white-space:normal!important;overflow-wrap:anywhere!important;word-break:normal!important;letter-spacing:normal!important;font-size:clamp(13px,1.5vw,16px)!important;line-height:1.55}
    /* Preserve the existing mobile photo ribbon, and give desktop that SAME angled banner treatment. */
    .sticker.site-greeting{position:absolute!important;left:4%!important;right:auto!important;bottom:38px!important;width:max-content!important;max-width:93%!important;min-height:0!important;padding:10px 18px!important;border:0!important;border-radius:0!important;background:#df337a!important;color:#fff!important;box-shadow:0 9px 20px #25192524!important;transform:rotate(-5deg)!important;font:italic 700 clamp(19px,2.2vw,28px)/1.08 Georgia,serif!important;letter-spacing:-.025em!important;white-space:nowrap!important;z-index:3}
    /* The EXISTING supplied scoop asset: larger, solid approved pink, without stretching the button. */
    .site-scoop-action{gap:9px!important;align-items:center!important;max-width:100%;vertical-align:middle}
    .site-scoop-icon{display:inline-flex!important;align-items:center!important;justify-content:center!important;width:32px!important;height:32px!important;min-width:32px!important;min-height:32px!important;max-width:32px!important;max-height:32px!important;flex:0 0 32px!important;margin:0!important;padding:0!important;line-height:0!important;transform:none!important;opacity:1!important}
    .site-scoop-icon img{display:block!important;width:32px!important;height:32px!important;min-width:32px!important;max-width:32px!important;min-height:32px!important;max-height:32px!important;object-fit:contain!important;object-position:center!important;border:0!important;border-radius:0!important;box-shadow:none!important;transform:none!important;opacity:1!important;filter:drop-shadow(0 0 .45px #df337a)!important}
    /* Contact: the supplied desktop reference is photo LEFT, heading RIGHT. */
    body.site-contact .hero{padding:54px 0 0!important}
    body.site-contact .hero-grid{grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr)!important;align-items:end!important;gap:clamp(14px,3vw,50px)!important}
    body.site-contact .hero-copy{text-align:left!important;align-self:center!important;padding:0 0 30px!important}
    body.site-contact .hero-copy>p{display:none!important}
    body.site-contact .hero-photo{justify-content:center!important;align-items:end!important}
    body.site-contact .hero-photo img{display:block!important;width:100%!important;max-width:410px!important;max-height:430px!important;height:auto!important;object-fit:contain!important;object-position:bottom center!important}
    body.site-contact .contact-area:first-child>p:not(.rep-name){display:none!important}
    body.site-contact .content{padding:65px 0 80px!important}
    body.site-contact .contact-grid{grid-template-columns:1fr 1fr!important;gap:36px!important}
    /* Podcast: use the actual supplied image instead of the invented graphic. */
    body.site-podcast .hero .art{width:100%!important;max-width:530px!important;aspect-ratio:1!important;overflow:hidden!important;display:grid!important;place-items:center!important;background:#fff!important;border:11px solid white!important;border-radius:50%!important;transform:none!important;box-shadow:14px 16px 0 #df337a24!important}
    body.site-podcast .hero .art img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important;object-position:center!important;max-width:none!important;border:0!important;transform:none!important}
    @media(max-width:850px){body.site-podcast .hero .art{display:grid!important;width:min(88%,370px)!important;margin:0 auto!important}}
    @media(max-width:700px){
      html{scroll-padding-top:135px}
      header.unified-mobile-header{position:sticky!important;top:0!important;z-index:1000!important}
      .site-loop,.social{padding:53px 17px}
      .site-loop h2,.social h2{font-size:clamp(35px,9vw,46px)}
      .site-loop .social-grid a,.social .social-grid a{width:57px;height:57px;border:1px solid #25192566;border-radius:50%;background:transparent}
      .site-loop .social-grid svg,.social .social-grid svg{width:26px;height:26px}
      .contact-grid .contact-area .email{font-size:clamp(12px,3.7vw,15px)!important}
      .sticker.site-greeting{font-size:18px!important;bottom:22px!important;left:3%!important}
      /* Contact: mobile heading ABOVE photo; both contacts in ONE stacked card. */
      body.site-contact .hero{padding:45px 0 0!important}
      body.site-contact .hero-grid{display:flex!important;flex-direction:column!important;align-items:center!important;gap:27px!important}
      body.site-contact .hero-copy{order:-1!important;align-self:center!important;text-align:center!important;padding:0!important;width:100%!important}
      body.site-contact .hero-copy h1{margin:0!important;font-size:clamp(62px,15vw,85px)!important}
      body.site-contact .hero-photo{order:1!important;width:100%!important;margin:0!important}
      body.site-contact .hero-photo img{height:auto!important;max-width:330px!important;max-height:330px!important;width:100%!important;margin:auto!important;object-fit:contain!important}
      body.site-contact .content{padding:61px 0 78px!important}
      body.site-contact .contact-grid{display:flex!important;flex-direction:column!important;align-items:stretch!important;gap:44px!important}
      body.site-contact .contact-area{text-align:center!important;width:100%!important}
      body.site-contact .contact-area .logo-space{justify-content:center!important}
      body.site-contact .panel{padding:28px 19px 34px!important}
      body.site-contact .contact-area .email{white-space:normal!important;overflow-wrap:anywhere!important;font-size:clamp(11px,3vw,14px)!important}
    }
    @media(prefers-reduced-motion:reduce){.site-loop .social-grid a,.social .social-grid a{transition:none}}
  `;
  const styles = document.createElement('style');
  styles.textContent = css;
  document.head.appendChild(styles);
  function addScoopToActions() {
    const selector = 'a.button,a.ticket-button,a.text-link,a.btn,.choice>a,.pick-card>a';
    document.querySelectorAll(selector).forEach(link => {
      if (link.querySelector('.site-scoop-icon')) return;
      const tail = [...link.childNodes].reverse().find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
      if (tail) tail.textContent = tail.textContent.replace(/\s*[↗→↓↑]\s*$/u, '').trimEnd();
      link.classList.add('site-scoop-action');
      const icon = document.createElement('span');
      icon.className = 'site-scoop-icon'; icon.setAttribute('aria-hidden', 'true');
      const img = document.createElement('img'); img.src = 'assets/scoop-exact-darkpink.svg'; img.alt = '';
      icon.appendChild(img); link.appendChild(icon);
    });
  }
  function init() {
    const page = location.pathname.split('/').pop() || 'index.html';
    addScoopToActions();
    if (page === 'index.html') {
      const sticker = document.querySelector('.sticker');
      if (sticker) { sticker.textContent = 'Hi, Juicy Scoopers!'; sticker.classList.add('site-greeting'); }
      return;
    }
    if (!['podcast.html', 'tour.html', 'shop.html', 'contact.html'].includes(page)) return;
    if (page === 'podcast.html') {
      document.body.classList.add('site-podcast');
      const stripe = document.querySelector('.stripe'); if (stripe) stripe.remove();
      const art = document.querySelector('.hero .art');
      if (art) {
        const photo = document.createElement('img');
        photo.src = 'assets/podcast-portrait-supplied.svg';
        photo.alt = 'Heather wearing the Juicy Scoop shirt in the supplied portrait';
        art.replaceChildren(photo);
        art.setAttribute('aria-label', photo.alt);
      }
    }
    if (page === 'contact.html') {
      document.body.classList.add('site-contact');
      const email = document.querySelector('.contact-area .email');
      if (email && email.textContent.trim() === 'heathermcdonaldmanagement@gmail.com') email.innerHTML = 'heathermcdonaldmanagement<wbr>@gmail.com';
    }
    if (document.querySelector('main > .social, main > .site-loop')) return;
    const main = document.querySelector('main'); if (!main) return;
    const section = document.createElement('section');
    section.className = 'site-loop'; section.setAttribute('aria-labelledby', 'site-loop-title');
    section.innerHTML = `<div class="site-loop-inner"><h2 id="site-loop-title">Stay in the <em>loop.</em></h2><div class="social-grid">
      <a href="https://www.patreon.com/join/juicyscoop" target="_blank" rel="noopener noreferrer" aria-label="Heather McDonald on Patreon" title="Patreon"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="7" y="12" width="7" height="28" rx="1" fill="currentColor"/><circle cx="30" cy="22" r="13" fill="currentColor"/></svg></a>
      <a href="https://www.youtube.com/@JuicyScoop" target="_blank" rel="noopener noreferrer" aria-label="Juicy Scoop on YouTube" title="YouTube"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="3" y="11" width="42" height="26" rx="9" fill="#e62117"/><path d="M20 17 L32 24 L20 31 Z" fill="white"/></svg></a>
      <a href="https://www.instagram.com/heathermcdonald/" target="_blank" rel="noopener noreferrer" aria-label="Heather McDonald on Instagram" title="Instagram"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="7" y="7" width="34" height="34" rx="10" fill="none" stroke="currentColor" stroke-width="3.4"/><circle cx="24" cy="24" r="8" fill="none" stroke="currentColor" stroke-width="3.4"/><path d="M34 14.5"/></svg></a>
    </div></div>`;
    main.appendChild(section);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true}); else init();
})();