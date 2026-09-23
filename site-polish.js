/* Shared site refinements. Podcast-specific fixes are scoped to the podcast page. */
(()=>{
'use strict';
const scoop='assets/scoop-exact-darkpink.svg?v=20260922';
const css=`
header.site-standard{background:#251925!important;color:#fff!important;border-bottom:1px solid #ffffff23!important;position:relative!important;z-index:30!important;overflow:visible!important}
header.site-standard .site-standard-social{display:flex;justify-content:flex-end;gap:9px;padding-top:9px}
header.site-standard .site-standard-social a{width:31px;height:31px;display:inline-flex;align-items:center;justify-content:center;border:1px solid #ffffff55;border-radius:50%;color:#fff;text-decoration:none}
header.site-standard .site-standard-social a:hover{background:#df337a}
header.site-standard .site-standard-social svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
header.site-standard .site-standard-social a.youtube svg{fill:currentColor;stroke:none}
/* The YouTube logo is unframed, while keyboard focus remains visible. */
header.site-standard .site-standard-social a.youtube,header.unified-mobile-header .unified-mobile-social a.youtube{border:0!important}
header.site-standard .site-standard-nav{display:flex!important;justify-content:space-between;align-items:center;gap:24px;min-height:84px;padding:0!important;flex-wrap:nowrap!important}
header.site-standard .site-standard-brand{color:white!important;text-decoration:none!important;line-height:1.1!important;white-space:nowrap}
header.site-standard .site-standard-brand b{display:block;color:#fff;font:900 23px/1.1 Arial,sans-serif;letter-spacing:-1.6px}
header.site-standard .site-standard-brand small{display:block;color:#ff91bf;font:italic bold 12px Georgia,serif;letter-spacing:.03em;margin-top:6px}
header.site-standard .site-standard-links{display:flex;align-items:center;gap:19px;flex-wrap:nowrap}
header.site-standard .site-standard-links a{color:#fff;text-decoration:none;text-transform:uppercase;letter-spacing:.04em;font:900 10px Arial,sans-serif;white-space:nowrap}
header.site-standard .site-standard-links a:hover{color:#ffd8e8}
header.site-standard .site-standard-links .join{background:#ffe6ef;color:#251925!important;padding:12px 13px;border-radius:4px}
header.site-standard .site-standard-menu{display:none;cursor:pointer;background:transparent;border:1px solid #ffffff80;padding:10px 14px;border-radius:5px;color:white;font-weight:800}
header.site-standard .scoop-menu{position:relative}
header.site-standard .scoop-menu summary{cursor:pointer;list-style:none;white-space:nowrap;text-transform:uppercase;letter-spacing:.04em;font:900 10px Arial,sans-serif;color:#fff}
header.site-standard .scoop-menu summary::-webkit-details-marker{display:none}
header.site-standard .scoop-menu .scoop-options{position:absolute;z-index:35;top:calc(100% + 17px);left:-16px;min-width:174px;padding:7px;background:#251925;border:1px solid #ffffff40;border-radius:5px;box-shadow:0 14px 22px #120a1290}
header.site-standard .scoop-options a{display:block!important;padding:11px 10px;white-space:nowrap}
header.site-standard .scoop-options a:hover{background:#ffffff16}
/* Arrow replacements are inline artwork, not a new button layout. */
.site-scoop-icon{display:inline-block!important;width:1em!important;height:1em!important;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;flex:none!important;margin:0!important;padding:0!important;line-height:0!important;vertical-align:-.13em!important;transform:none!important}
.site-scoop-icon img{display:block!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;max-width:100%!important;max-height:100%!important;object-fit:contain!important;border:0!important;box-shadow:none!important;filter:none!important;transform:none!important}
header.site-standard .scoop-options a .site-scoop-icon,header.site-standard .site-standard-links a .site-scoop-icon{width:11px!important;height:11px!important;vertical-align:-1px!important}
header.site-standard .scoop-options a .site-scoop-icon img,header.site-standard .site-standard-links a .site-scoop-icon img{width:11px!important;height:11px!important}
/* Restore prior podcast hero: text LEFT, image RIGHT, original compact image dimensions. */
body.site-podcast main .hero{padding:54px 0 0!important;overflow:visible!important}
body.site-podcast main .hero .hero-grid{display:grid!important;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr)!important;gap:clamp(14px,3vw,50px)!important;align-items:end!important}
body.site-podcast main .hero .hero-grid>div:first-child{grid-column:1!important;grid-row:1!important;align-self:center!important;min-width:0!important;padding-bottom:30px!important}
body.site-podcast main .hero .art.site-podcast-cover-frame{grid-column:2!important;grid-row:1!important;display:flex!important;align-items:flex-end!important;justify-content:center!important;width:100%!important;max-width:410px!important;height:430px!important;max-height:430px!important;aspect-ratio:auto!important;border:0!important;border-radius:0!important;background:transparent!important;overflow:visible!important;transform:none!important;box-shadow:none!important;margin:0 auto!important}
body.site-podcast main .hero .art.site-podcast-cover-frame img{display:block!important;width:100%!important;height:100%!important;max-width:410px!important;max-height:430px!important;object-fit:contain!important;object-position:bottom center!important;border:0!important;border-radius:0!important;transform:none!important}
body.site-podcast main .hero h1{font-size:clamp(60px,6vw,88px)!important;line-height:.94!important;margin:12px 0 20px!important}
/* One common image height. Top-aligned crops keep Heather's head visible in both supplied covers. */
body.site-podcast main .episode-panel img.podcast-cover{display:block!important;width:100%!important;height:235px!important;min-height:235px!important;max-width:100%!important;object-fit:cover!important;object-position:center top!important;border-radius:8px!important;background:#fff!important;margin:0 0 15px!important}
/* Preserve existing podcast button shape and typography. */
body.site-podcast main a.button .site-scoop-icon{width:12px!important;height:12px!important;vertical-align:-1px!important}
body.site-podcast main a.button .site-scoop-icon img{width:12px!important;height:12px!important}
/* Tour: keep the original ticket row and text in place. */
.performances a .ticket .site-scoop-icon{width:14px!important;height:14px!important;vertical-align:-2px!important;margin-left:3px!important}
.performances a .ticket .site-scoop-icon img{width:14px!important;height:14px!important}
@media(max-width:1100px) and (min-width:701px){header.site-standard .site-standard-menu{display:block}header.site-standard .site-standard-links{display:none;position:absolute;top:100%;left:0;right:0;flex-direction:column;align-items:stretch;gap:0;background:#251925;padding:12px 25px 26px;box-shadow:0 17px 26px #25192522}header.site-standard .site-standard-links.open{display:flex}header.site-standard .site-standard-links a{padding:13px 5px}header.site-standard .site-standard-links .join{text-align:center;margin-top:10px}header.site-standard .scoop-menu summary{padding:13px 5px}header.site-standard .scoop-menu .scoop-options{position:static;min-width:0;margin:0 0 4px 12px;border:0;border-left:2px solid #ff91bf;border-radius:0;box-shadow:none;padding:0 0 0 12px}}
@media(max-width:850px){body.site-podcast main .hero .hero-grid{grid-template-columns:1fr!important;gap:20px!important}body.site-podcast main .hero .hero-grid>div:first-child{grid-column:1!important;grid-row:1!important;text-align:center!important;padding-bottom:0!important}body.site-podcast main .hero .art.site-podcast-cover-frame{grid-column:1!important;grid-row:2!important;max-width:330px!important;height:330px!important;max-height:330px!important}body.site-podcast main .hero .art.site-podcast-cover-frame img{max-width:330px!important;max-height:330px!important}body.site-podcast main .hero{padding:45px 0 40px!important}}
@media(max-width:700px){header.site-standard>.site-standard-social,header.site-standard>.site-standard-nav{display:none!important}body.site-podcast main .episode-panel img.podcast-cover{height:210px!important;min-height:210px!important}body.site-podcast main .hero h1{font-size:clamp(57px,13vw,75px)!important}body.site-podcast main .actions{justify-content:center!important}}
`;
const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);
function icon(){const span=document.createElement('span');span.className='site-scoop-icon';span.setAttribute('aria-hidden','true');const img=document.createElement('img');img.src=scoop;img.alt='';span.appendChild(img);return span;}
function unifyHeader(){
 const page=location.pathname.split('/').pop()||'index.html';if(page==='index.html'||page==='mobile.html')return;
 const header=document.querySelector('header.header,header.top');if(!header)return;
 const mobile=header.querySelector('.unified-mobile-shell');if(mobile)mobile.remove();header.classList.add('header','site-standard');
 header.innerHTML=`<div class="wrap site-standard-social" aria-label="Heather’s official social channels"><a href="https://www.instagram.com/heathermcdonald/" aria-label="Heather McDonald on Instagram" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg></a><a class="youtube" href="https://www.youtube.com/@JuicyScoop" aria-label="Heather McDonald on YouTube" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.1 7.2c-.2-.8-.8-1.4-1.6-1.6C18 5.2 12 5.2 12 5.2s-6 0-7.5.4c-.8.2-1.4.8-1.6 1.6C2.5 8.7 2.5 12 2.5 12s0 3.3.4 4.8c.2.8.8 1.4 1.6 1.6 1.5.4 7.5.4 7.5.4s6 0 7.5-.4c.8-.2 1.4-.8 1.6-1.6.4-1.5.4-4.8.4-4.8s0-3.3-.4-4.8ZM10 15.6V8.4l6.2 3.6L10 15.6Z"/></svg></a><a href="https://www.tiktok.com/@heathermcdonald" aria-label="Heather McDonald on TikTok" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.8a4.2 4.2 0 1 1-4.1-4.2"/><path d="M14 3c.6 3.3 2.7 5.1 6.1 5.2"/></svg></a></div><div class="wrap site-standard-nav"><a class="site-standard-brand" href="index.html?desktop=1"><b>HEATHER McDONALD</b><small>the juicy new look</small></a><button class="site-standard-menu" type="button" aria-expanded="false" aria-controls="site-standard-links">Menu ☰</button><nav class="site-standard-links" id="site-standard-links" aria-label="Main navigation"><details class="scoop-menu"><summary>The Scoop <span aria-hidden="true">⌄</span></summary><div class="scoop-options"><a href="podcast.html">Podcasts</a><a href="https://www.youtube.com/@JuicyScoop" target="_blank" rel="noopener noreferrer">YouTube ↗</a><a href="https://www.patreon.com/cw/juicyscoop" target="_blank" rel="noopener noreferrer">Patreon ↗</a></div></details><a href="tour.html">Tour Dates</a><a href="shop.html">Shop</a><a href="contact.html">Contact</a><a class="join" href="https://www.patreon.com/cw/juicyscoop" target="_blank" rel="noopener noreferrer">Get the inside scoop ↗</a></nav></div>`;
 if(mobile)header.appendChild(mobile);
 const button=header.querySelector('.site-standard-menu'),links=header.querySelector('.site-standard-links');button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));links.classList.toggle('open',open);button.textContent=open?'Close ×':'Menu ☰'});
 links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{button.setAttribute('aria-expanded','false');links.classList.remove('open');button.textContent='Menu ☰'}));const current=links.querySelector(`a[href="${page}"]`);if(current)current.setAttribute('aria-current','page');
}
function podcast(){if(!location.pathname.endsWith('/podcast.html'))return;
 const art=document.querySelector('.hero .art');if(art){art.classList.add('site-podcast-cover-frame');art.replaceChildren();const img=document.createElement('img');img.src='image%20for%20podcast.png';img.alt='Heather McDonald podcast header artwork';art.appendChild(img);art.setAttribute('aria-label',img.alt);}
 const panels=document.querySelectorAll('.episode-panel');const images=[['Juicy-Scoop-with-Hather-McDonald.jpg','Juicy Scoop podcast artwork'],['Juicy%20crimes%20image%20for%20podcast.jpeg','Juicy Crimes podcast artwork']];
 panels.forEach((panel,i)=>{if(!images[i])return;const image=document.createElement('img');image.className='podcast-cover';image.src=images[i][0];image.alt=images[i][1];const heading=panel.querySelector('h3');if(heading)heading.insertAdjacentElement('afterend',image);});
}
function removeLoop(){document.querySelectorAll('main > .site-loop,main > .social,main .site-loop,main .social').forEach(section=>{if(section.querySelector('.social-grid')||section.classList.contains('site-loop'))section.remove();});}
function replaceArrows(){
 document.querySelectorAll('a,button').forEach(el=>{
  if(el.closest('a,button')!==el)return;
  const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const nodes=[];
  while(walker.nextNode())if(/[↗→↓↑]/u.test(walker.currentNode.textContent)&&!walker.currentNode.parentElement.closest('.site-scoop-icon'))nodes.push(walker.currentNode);
  for(const node of nodes){const parts=node.textContent.split(/([↗→↓↑])/u);const fragment=document.createDocumentFragment();parts.forEach(part=>{if(/^[↗→↓↑]$/u.test(part))fragment.appendChild(icon());else if(part)fragment.appendChild(document.createTextNode(part));});node.replaceWith(fragment);}
 });
}
function init(){removeLoop();unifyHeader();podcast();replaceArrows();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();