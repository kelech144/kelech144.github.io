let toggle = document.querySelector('.nav-toggle');
let icon = document.querySelector('.nav-toggle i');
let menu = document.querySelector('nav');

toggle.addEventListener('click', () => {
  menu.classList.toggle('showmenu');

  // Change icon between bars and times
  if (menu.classList.contains('showmenu')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});


const texts = [
      "Graphic Designer",
      "Frontend Developer",
      "Web Designer"
    ];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseAfterTyped = 1400;
    const pauseAfterDeleted = 200;

    // --- state ---
    const textEl = document.getElementById("text");
    let txtIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // main loop
    function tick() {
      const current = texts[txtIndex];
      if (!isDeleting) {
        charIndex++;
        textEl.textContent = current.slice(0, charIndex);

        if (charIndex === current.length) {
          isDeleting = true;
          setTimeout(tick, pauseAfterTyped);
          return;
        }
      } else {
        charIndex--;
        textEl.textContent = current.slice(0, charIndex);

        if (charIndex === 0) {
          isDeleting = false;
          txtIndex = (txtIndex + 1) % texts.length;
          setTimeout(tick, pauseAfterDeleted);
          return;
        }
      }

      const delay = isDeleting ? deletingSpeed : typingSpeed;
      setTimeout(tick, delay);
    }
    tick();
    
    
// Smooth scroll for internal links
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

    // Simple reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{
        if(en.isIntersecting) en.target.classList.add('show');
      })
    },{threshold:0.12});
    reveals.forEach(r=>obs.observe(r));
    
  
  
    // --- Preloader ---
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("hide");
  }, 800); // small delay for a smooth fade-out
});