/* Requested cross-page refinements; preserve existing page content and layout. */
(()=>{
'use strict';
const scoop='assets/scoop-exact-darkpink.svg?v=20260922';
const css=`
/* Match the approved homepage header on every desktop page. */
header.site-standard{background:#251925!important;color:#fff!important;border-bottom:1px solid #ffffff23!important;position:relative!important;z-index:30!important;overflow:visible!important}
header.site-standard .site-standard-social{display:flex;justify-content:flex-end;gap:9px;padding-top:9px}
header.site-standard .site-standard-social a{width:31px;height:31px;display:inline-flex;align-items:center;justify-content:center;border:1px solid #ffffff55;border-radius:50%;color:#fff;text-decoration:none}
header.site-standard .site-standard-social a:hover{background:#df337a}
header.site-standard .site-standard-social svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
header.site-standard .site-standard-social a.youtube svg{fill:currentColor;stroke:none}
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
.site-polished-action{display:inline-flex;align-items:center;gap:7px}
.site-polished-action .site-scoop-icon{display:inline-flex!important;align-items:center!important;justify-content:center!important;width:24px!important;height:24px!important;min-width:24px!important;min-height:24px!important;margin:0!important;padding:0!important;flex:0 0 24px!important}
.site-polished-action .site-scoop-icon img{display:block!important;width:24px!important;height:24px!important;object-fit:contain!important;border:0!important;box-shadow:none!important;filter:none!important}
header.site-standard .site-polished-action .site-scoop-icon,footer .site-polished-action .site-scoop-icon{width:17px!important;height:17px!important;min-width:17px!important;min-height:17px!important;flex-basis:17px!important}
header.site-standard .site-polished-action .site-scoop-icon img,footer .site-polished-action .site-scoop-icon img{width:17px!important;height:17px!important}
body.site-podcast .hero .art.site-podcast-cover-frame{display:block!important;width:100%!important;max-width:530px!important;aspect-ratio:auto!important;height:auto!important;border:0!important;border-radius:20px!important;background:transparent!important;overflow:hidden!important;transform:none!important;box-shadow:none!important}
body.site-podcast .hero .art.site-podcast-cover-frame img{display:block!important;width:100%!important;height:auto!important;max-width:100%!important;object-fit:contain!important;object-position:center!important;border:0!important;border-radius:20px!important;transform:none!important}
.episode-panel .podcast-cover{display:block;width:100%;height:190px;object-fit:contain;object-position:center;border-radius:8px;background:#fff;margin:0 0 15px}
@media(max-width:1100px) and (min-width:701px){header.site-standard .site-standard-menu{display:block}header.site-standard .site-standard-links{display:none;position:absolute;top:100%;left:0;right:0;flex-direction:column;align-items:stretch;gap:0;background:#251925;padding:12px 25px 26px;box-shadow:0 17px 26px #25192522}header.site-standard .site-standard-links.open{display:flex}header.site-standard .site-standard-links a{padding:13px 5px}header.site-standard .site-standard-links .join{text-align:center;margin-top:10px}header.site-standard .scoop-menu summary{padding:13px 5px}header.site-standard .scoop-menu .scoop-options{position:static;min-width:0;margin:0 0 4px 12px;border:0;border-left:2px solid #ff91bf;border-radius:0;box-shadow:none;padding:0 0 0 12px}}
@media(max-width:700px){header.site-standard>.site-standard-social,header.site-standard>.site-standard-nav{display:none!important}.episode-panel .podcast-cover{height:165px}}
`;
const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);
function icon(){const span=document.createElement('span');span.className='site-scoop-icon';span.setAttribute('aria-hidden','true');const img=document.createElement('img');img.src=scoop;img.alt='';span.appendChild(img);return span;}
function unifyHeader(){
  const page=location.pathname.split('/').pop()||'index.html';
  if(page==='index.html'||page==='mobile.html')return;
  const header=document.querySelector('header.header,header.top');if(!header)return;
  const mobile=header.querySelector('.unified-mobile-shell');if(mobile)mobile.remove();
  header.classList.add('header','site-standard');
  header.innerHTML=`<div class="wrap site-standard-social" aria-label="Heather’s official social channels"><a href="https://www.instagram.com/heathermcdonald/" aria-label="Heather McDonald on Instagram" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg></a><a class="youtube" href="https://www.youtube.com/@JuicyScoop" aria-label="Heather McDonald on YouTube" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.1 7.2c-.2-.8-.8-1.4-1.6-1.6C18 5.2 12 5.2 12 5.2s-6 0-7.5.4c-.8.2-1.4.8-1.6 1.6C2.5 8.7 2.5 12 2.5 12s0 3.3.4 4.8c.2.8.8 1.4 1.6 1.6 1.5.4 7.5.4 7.5.4s6 0 7.5-.4c.8-.2 1.4-.8 1.6-1.6.4-1.5.4-4.8.4-4.8s0-3.3-.4-4.8ZM10 15.6V8.4l6.2 3.6L10 15.6Z"/></svg></a><a href="https://www.tiktok.com/@heathermcdonald" aria-label="Heather McDonald on TikTok" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.8a4.2 4.2 0 1 1-4.1-4.2"/><path d="M14 3c.6 3.3 2.7 5.1 6.1 5.2"/></svg></a></div><div class="wrap site-standard-nav"><a class="site-standard-brand" href="index.html?desktop=1"><b>HEATHER McDONALD</b><small>the juicy new look</small></a><button class="site-standard-menu" type="button" aria-expanded="false" aria-controls="site-standard-links">Menu ☰</button><nav class="site-standard-links" id="site-standard-links" aria-label="Main navigation"><details class="scoop-menu"><summary>The Scoop <span aria-hidden="true">⌄</span></summary><div class="scoop-options"><a href="podcast.html">Podcasts</a><a href="https://www.youtube.com/@JuicyScoop" target="_blank" rel="noopener noreferrer">YouTube ↗</a><a href="https://www.patreon.com/cw/juicyscoop" target="_blank" rel="noopener noreferrer">Patreon ↗</a></div></details><a href="tour.html">Tour Dates</a><a href="shop.html">Shop</a><a href="contact.html">Contact</a><a class="join" href="https://www.patreon.com/cw/juicyscoop" target="_blank" rel="noopener noreferrer">Get the inside scoop ↗</a></nav></div>`;
  if(mobile)header.appendChild(mobile);
  const button=header.querySelector('.site-standard-menu'),links=header.querySelector('.site-standard-links');
  button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));links.classList.toggle('open',open);button.textContent=open?'Close ×':'Menu ☰'});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{button.setAttribute('aria-expanded','false');links.classList.remove('open');button.textContent='Menu ☰'}));
  const current=links.querySelector(`a[href="${page}"]`);if(current)current.setAttribute('aria-current','page');
}
function podcast(){if(!location.pathname.endsWith('/podcast.html'))return;
 const art=document.querySelector('.hero .art');if(art){art.classList.add('site-podcast-cover-frame');art.replaceChildren();const img=document.createElement('img');img.src='image%20for%20podcast.png';img.alt='Heather McDonald podcast header artwork';art.appendChild(img);art.setAttribute('aria-label',img.alt);}
 const panels=document.querySelectorAll('.episode-panel');const images=[['Juicy-Scoop-with-Hather-McDonald.jpg','Juicy Scoop podcast artwork'],['Juicy%20crimes%20image%20for%20podcast.jpeg','Juicy Crimes podcast artwork']];
 panels.forEach((panel,i)=>{if(!images[i])return;const image=document.createElement('img');image.className='podcast-cover';image.src=images[i][0];image.alt=images[i][1];const heading=panel.querySelector('h3');if(heading)heading.insertAdjacentElement('afterend',image);const button=panel.querySelector('a.button');if(button)button.textContent=button.textContent.replace(/^\s*See\s+/i,'');});
}
function removeLoop(){document.querySelectorAll('main > .site-loop,main > .social,main .site-loop,main .social').forEach(section=>{if(section.querySelector('.social-grid')||section.classList.contains('site-loop'))section.remove();});}
function replaceArrows(){
 document.querySelectorAll('a,button').forEach(el=>{
  if(el.closest('.unified-mobile-shell')&&el.classList.contains('unified-mobile-toggle'))return;
  let replaced=false;const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  for(const node of nodes){if(node.parentElement&&node.parentElement.closest('.site-scoop-icon'))continue;const value=node.textContent;if(/[↗→↓↑]/u.test(value)){node.textContent=value.replace(/\s*[↗→↓↑]\s*/gu,' ').replace(/\s+$/u,' ');replaced=true;}}
  if(!replaced||el.querySelector('.site-scoop-icon'))return;
  const last=el.querySelector('.shop-link span:last-child');if(last&&last.textContent.trim()===''){last.appendChild(icon());}else{el.appendChild(icon());}
  el.classList.add('site-polished-action');
 });
 document.querySelectorAll('.shop-link span:last-child').forEach(span=>{if(span.textContent.trim().match(/^[↗→↓↑]$/u)){span.textContent='';span.appendChild(icon());}});
}
function init(){removeLoop();unifyHeader();podcast();replaceArrows();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();