const texts = ["Graphic Designer", "Frontend Developer", "Web Designer", "Brand Strategist"];
const textEl = document.getElementById("text");
let txtIndex = 0, charIndex = 0, isDeleting = false;

function tick() {
  const current = texts[txtIndex];
  if (!isDeleting) {
    charIndex++;
    textEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) { isDeleting = true; setTimeout(tick, 1400); return; }
  } else {
    charIndex--;
    textEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) { isDeleting = false; txtIndex = (txtIndex+1) % texts.length; setTimeout(tick, 200); return; }
  }
  setTimeout(tick, isDeleting ? 50 : 100);
}
tick();

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries=>{
  entries.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('show'); });
}, {threshold:0.12});
reveals.forEach(r=>obs.observe(r));

let toggle = document.querySelector('.nav-toggle');
let icon = document.querySelector('.nav-toggle i');
let menu = document.querySelector('nav');

toggle.addEventListener('click', () => {
  menu.classList.toggle('showmenu');

  // Change icon between bars and times
  if (menu.classList.contains('showmenu')) {
    icon.classList.remove('ri-menu-3-line');
    icon.classList.add('ri-close-line');
  } else {
    icon.classList.remove('ri-close-line');
    icon.classList.add('ri-menu-3-line');
  }
});
document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click',function(e){
        const href = this.getAttribute('href');
        if(href.length>1){
          e.preventDefault();
          const el = document.querySelector(href);
          if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
        }
      })
    })
    
    
    document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {

    // Close menu
    menu.classList.remove('showmenu');

    // Change icon back
    icon.classList.remove('ri-close-line');
    icon.classList.add('ri-menu-3-line');

  });
});