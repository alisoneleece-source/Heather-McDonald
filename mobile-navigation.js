/* Shared mobile navigation: the same menu on every page; desktop headers remain unchanged. */
(()=>{
const style=document.createElement('style');style.textContent=`.unified-mobile-shell{display:none!important}
@media(max-width:700px){
header.unified-mobile-header{display:block!important;position:relative!important;z-index:100!important;background:#251925!important;color:white!important;border-bottom:1px solid #ffffff25!important;padding:0!important;min-height:0!important;overflow:visible!important}
header.unified-mobile-header > :not(.unified-mobile-shell){display:none!important}
.unified-mobile-shell{display:block!important;width:100%!important;margin:0!important;padding:0!important;background:#251925;color:white;font:inherit;text-align:left}
.unified-mobile-shell *{box-sizing:border-box}
.unified-mobile-social{display:flex;align-items:center;justify-content:flex-end;gap:10px;padding:10px 20px 0;min-height:42px}
.unified-mobile-social a{display:inline-flex;align-items:center;justify-content:center;width:31px;height:31px;border:1px solid #ffffff66;border-radius:50%;color:white;text-decoration:none}
.unified-mobile-social a svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.unified-mobile-social a.youtube svg{fill:currentColor;stroke:none}
.unified-mobile-top{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:77px;padding:12px 20px 17px}
.unified-mobile-brand{color:white!important;text-decoration:none!important;font:900 20px/1.07 Arial,Helvetica,sans-serif!important;letter-spacing:-1.25px!important;white-space:nowrap}
.unified-mobile-brand small{display:block;margin-top:5px;color:#ff91bf!important;font:italic 700 12px Georgia,serif!important;letter-spacing:0!important}
.unified-mobile-toggle{display:inline-flex;align-items:center;justify-content:center;flex:none;min-width:76px;min-height:41px;padding:9px 12px;border:1px solid #ffffff80;border-radius:6px;background:transparent;color:white;font:800 12px Arial,sans-serif;cursor:pointer}
.unified-mobile-panel{position:absolute;top:100%;left:0;right:0;padding:17px 22px 25px;background:#251925;color:white;box-shadow:0 16px 25px #25192540;z-index:150}
.unified-mobile-panel[hidden]{display:none!important}
.unified-mobile-panel > a,.unified-mobile-panel > details > summary{display:block;width:100%;padding:13px 4px;color:white!important;font:900 11px/1.3 Arial,sans-serif!important;text-decoration:none!important;text-transform:uppercase!important;letter-spacing:.04em!important;cursor:pointer;list-style:none}
.unified-mobile-panel > details > summary::-webkit-details-marker{display:none}
.unified-mobile-panel > details > div{padding:0 0 8px 18px;border-left:2px solid #ff91bf;margin:0 0 4px 4px}
.unified-mobile-panel > details > div a{display:block;padding:10px 5px;color:white!important;font:800 11px Arial,sans-serif!important;text-decoration:none!important;text-transform:uppercase!important}
.unified-mobile-panel > a.unified-mobile-join{display:block;margin-top:8px;padding:14px 9px;border-radius:5px;background:#ffe6ef;color:#251925!important;text-align:center}
.unified-mobile-panel a[aria-current=page]{color:#ff91bf!important}
}`;document.head.appendChild(style);
function init(){const header=document.querySelector('header.header,header.top');if(!header||header.querySelector('.unified-mobile-shell'))return;
header.classList.add('unified-mobile-header');const shell=document.createElement('div');shell.className='unified-mobile-shell';
shell.innerHTML=`<div class="unified-mobile-social" aria-label="Heather's social channels"><a href="https://www.instagram.com/heathermcdonald/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg></a><a class="youtube" href="https://www.youtube.com/@JuicyScoop" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.1 7.2c-.2-.8-.8-1.4-1.6-1.6C18 5.2 12 5.2 12 5.2s-6 0-7.5.4c-.8.2-1.4.8-1.6 1.6C2.5 8.7 2.5 12 2.5 12s0 3.3.4 4.8c.2.8.8 1.4 1.6 1.6 1.5.4 7.5.4 7.5.4s6 0 7.5-.4c.8-.2 1.4-.8 1.6-1.6.4-1.5.4-4.8.4-4.8s0-3.3-.4-4.8ZM10 15.6V8.4l6.2 3.6L10 15.6Z"/></svg></a><a href="https://www.tiktok.com/@heathermcdonald" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.8a4.2 4.2 0 1 1-4.1-4.2"/><path d="M14 3c.6 3.3 2.7 5.1 6.1 5.2"/></svg></a></div><div class="unified-mobile-top"><a class="unified-mobile-brand" href="index.html">HEATHER McDONALD<small>the juicy new look</small></a><button class="unified-mobile-toggle" type="button" aria-expanded="false" aria-controls="unified-mobile-menu">Menu ☰</button></div><nav class="unified-mobile-panel" id="unified-mobile-menu" aria-label="Mobile navigation" hidden><a href="index.html">Home</a><details><summary>The Scoop ⌄</summary><div><a href="podcast.html">Podcasts</a><a href="https://www.youtube.com/@JuicyScoop" target="_blank" rel="noopener noreferrer">YouTube ↗</a><a href="https://www.patreon.com/cw/juicyscoop" target="_blank" rel="noopener noreferrer">Patreon ↗</a></div></details><a href="tour.html">Tour dates</a><a href="shop.html">Shop</a><a href="contact.html">Contact</a><a class="unified-mobile-join" href="https://www.patreon.com/cw/juicyscoop" target="_blank" rel="noopener noreferrer">Get the inside scoop ↗</a></nav>`;
header.appendChild(shell);const button=shell.querySelector('.unified-mobile-toggle'),panel=shell.querySelector('.unified-mobile-panel');function setOpen(open){panel.hidden=!open;button.setAttribute('aria-expanded',String(open));button.textContent=open?'Close ×':'Menu ☰'}button.addEventListener('click',()=>setOpen(panel.hidden));panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){setOpen(false);button.focus()}});document.addEventListener('click',e=>{if(!panel.hidden&&!shell.contains(e.target))setOpen(false)});const current=location.pathname.split('/').pop()||'index.html';panel.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===current)a.setAttribute('aria-current','page')});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
/* Keep non-home social links, contact layout and the desktop greeting in sync. */
const siteContinuityScript=document.createElement('script');
siteContinuityScript.src='site-continuity.js';
document.head.appendChild(siteContinuityScript);
