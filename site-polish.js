/* Final shared presentation layer; loaded after navigation and continuity. */
(()=>{
'use strict';
const scoop='assets/scoop-exact-darkpink.svg';
const styles=document.createElement('link');styles.rel='stylesheet';styles.href='site-polish.css';document.head.appendChild(styles);
function icon(){const span=document.createElement('span');span.className='site-scoop-icon';span.setAttribute('aria-hidden','true');return span;}
function unifyHeader(){
 const page=location.pathname.split('/').pop()||'index.html';
 const header=document.querySelector('header.header,header.top');if(!header)return;
 const mobile=header.querySelector('.unified-mobile-shell');if(mobile)mobile.remove();header.classList.add('header','site-standard');
 header.innerHTML=`<div class="wrap site-standard-social" aria-label="Heather’s official social channels"><a href="https://www.instagram.com/heathermcdonald/" aria-label="Heather McDonald on Instagram" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg></a><a class="youtube" href="https://www.youtube.com/@JuicyScoop" aria-label="Heather McDonald on YouTube" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.1 7.2c-.2-.8-.8-1.4-1.6-1.6C18 5.2 12 5.2 12 5.2s-6 0-7.5.4c-.8.2-1.4.8-1.6 1.6C2.5 8.7 2.5 12 2.5 12s0 3.3.4 4.8c.2.8.8 1.4 1.6 1.6 1.5.4 7.5.4 7.5.4s6 0 7.5-.4c.8-.2 1.4-.8 1.6-1.6.4-1.5.4-4.8.4-4.8s0-3.3-.4-4.8ZM10 15.6V8.4l6.2 3.6L10 15.6Z"/></svg></a><a href="https://www.tiktok.com/@heathermcdonald" aria-label="Heather McDonald on TikTok" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.8a4.2 4.2 0 1 1-4.1-4.2"/><path d="M14 3c.6 3.3 2.7 5.1 6.1 5.2"/></svg></a></div><div class="wrap site-standard-nav"><a class="site-standard-brand" href="index.html"><b>HEATHER McDONALD</b><small>the juicy new look</small></a><button class="site-standard-menu" type="button" aria-expanded="false" aria-controls="site-standard-links">Menu ☰</button><nav class="site-standard-links" id="site-standard-links" aria-label="Main navigation"><details class="scoop-menu"><summary>The Scoop <span aria-hidden="true">⌄</span></summary><div class="scoop-options"><a href="podcast.html">Podcasts</a><a href="https://www.youtube.com/@JuicyScoop" target="_blank" rel="noopener noreferrer">YouTube ↗</a><a href="https://www.patreon.com/cw/juicyscoop" target="_blank" rel="noopener noreferrer">Patreon ↗</a></div></details><a href="tour.html">Tour Dates</a><a href="shop.html">Shop</a><a href="contact.html">Contact</a><a class="join" href="https://www.patreon.com/cw/juicyscoop" target="_blank" rel="noopener noreferrer">Scoopers Only ↗</a></nav></div>`;
 if(mobile)header.appendChild(mobile);
 const button=header.querySelector('.site-standard-menu'),links=header.querySelector('.site-standard-links');button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));links.classList.toggle('open',open);button.textContent=open?'Close ×':'Menu ☰'});
 links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{button.setAttribute('aria-expanded','false');links.classList.remove('open');button.textContent='Menu ☰'}));const current=links.querySelector(`a[href="${page}"]`);if(current)current.setAttribute('aria-current','page');
}

const headphones='<svg viewBox="0 0 24 24" width="27" height="27" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="12" width="5" height="9" rx="2"/><rect x="16" y="12" width="5" height="9" rx="2"/></svg>';
const patreon='<svg viewBox="0 0 48 48" width="26" height="26" aria-hidden="true"><rect x="7" y="12" width="7" height="28" rx="1" fill="currentColor"/><circle cx="30" cy="22" r="13" fill="currentColor"/></svg>';
function actions(){
 document.querySelectorAll('.site-scoop-icon').forEach(el=>el.replaceChildren());
 document.querySelectorAll('a,button').forEach(el=>{
  const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),nodes=[];
  while(walker.nextNode())if(/[↗→↓↑]/u.test(walker.currentNode.textContent))nodes.push(walker.currentNode);
  nodes.forEach(node=>{const frag=document.createDocumentFragment();node.textContent.split(/([↗→↓↑])/u).forEach(part=>frag.appendChild(/^[↗→↓↑]$/u.test(part)?icon():document.createTextNode(part)));node.replaceWith(frag)});
 });
 // Group only each label and icon, so multiline links stay together without altering card layout.
 document.querySelectorAll('.site-scoop-icon').forEach(el=>{
  if(el.parentElement.matches('span[aria-hidden]') && el.parentElement.children.length===1)el.parentElement.replaceWith(el);
  const parent=el.parentElement;
  if(parent.closest('.category h3')){el.remove();return;}
  if(parent.matches('a,button') && !parent.querySelector('.shop-card-label')){
   const label=document.createElement('span');label.className='action-label';
   [...parent.childNodes].filter(n=>n!==el).forEach(n=>label.appendChild(n));parent.insertBefore(label,el);
   parent.classList.add('scoop-link');
  }else parent.classList.add('scoop-label');
 });
}
function init(){
 const page=location.pathname.split('/').pop()||'index.html';document.body.classList.add('page-'+page.replace('.html',''));
 unifyHeader();
 document.querySelectorAll('.unified-mobile-join').forEach(a=>a.textContent='Scoopers Only ↗');
 document.querySelectorAll('main .site-loop,main .social').forEach(el=>el.remove());
 document.querySelectorAll('.choice:first-child .symbol-link,.pick-card:first-child .symbol').forEach(el=>el.innerHTML=headphones);
 document.querySelectorAll('.choice:nth-child(3) .symbol-link,.pick-card:nth-child(3) .symbol').forEach(el=>el.innerHTML=patreon);
 document.querySelectorAll('.choice:nth-child(3) p,.pick-card:nth-child(3) p').forEach(el=>el.textContent='Exclusive membership content.');
 document.querySelectorAll('.choice:nth-child(3) .eyebrow,.pick-card:nth-child(3) .eyebrow').forEach(el=>el.textContent='Patreon');
 if(page==='mobile.html'){
  document.querySelector('main > .closing')?.remove();
  const listen=document.querySelector('.dock a:first-child');if(listen)listen.innerHTML=headphones+'<span>Listen now</span>';
  const members=document.querySelector('.dock a:last-child');if(members)members.innerHTML='Scoopers Only ↗';
  document.querySelectorAll('.shop-card').forEach(card=>{card.querySelector('small')?.remove();const label=document.createElement('span');label.className='shop-card-label';label.append(card.querySelector('strong'),icon());card.appendChild(label)});
 }
 if(page==='podcast.html'){
  const art=document.querySelector('.hero .art');art.classList.add('site-podcast-cover-frame');art.innerHTML='<img src="image%20for%20podcast.png" alt="Heather McDonald raising a wine glass and drinking from a bottle">';
  document.querySelectorAll('.episode-panel').forEach(panel=>{const link=panel.querySelector('a'),img=panel.querySelector('img');link.className='episode-card-link';link.replaceChildren(img);panel.replaceChildren(link)});
 }
 if(page==='contact.html'){
  const divider=document.createElement('div');divider.className='contact-divider';divider.setAttribute('aria-hidden','true');document.querySelector('.contact-area:nth-child(2)').before(divider);
 }
 if(page==='shop.html'){
  document.querySelector('.cta h2').innerHTML='Juicy <em>Scoop.</em>';
  document.querySelector('.cta p').textContent='Find your favourites in the official merchandise store.';
  document.querySelector('.cta a[href^="index.html"]')?.remove();
 }
 actions();
 document.querySelectorAll('a[href="index.html?desktop=1"]').forEach(a=>{if(!/desktop/i.test(a.textContent))a.href='index.html'});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
