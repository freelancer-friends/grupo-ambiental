import initMenuMobile from "./modules/menu-mobile.js";
import initCarrossel from "./modules/carrossel.js";

initMenuMobile();
initCarrossel();


document.addEventListener('DOMContentLoaded', function() {
    const banners = document.querySelectorAll('.banner');
    let currentIndex = 0;
  
    function showBanner(index) {
      banners.forEach((banner, i) => {
        if (i === index) {
          banner.classList.add('active');
        } else {
          banner.classList.remove('active');
        }
      });
    }
  
    function nextBanner() {
      currentIndex = (currentIndex + 1) % banners.length;
      showBanner(currentIndex);
    }
  
    function prevBanner() {
      currentIndex = (currentIndex - 1 + banners.length) % banners.length;
      showBanner(currentIndex);
    }
  
    showBanner(currentIndex);
  
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
  
    prevBtn.addEventListener('click', prevBanner);
    nextBtn.addEventListener('click', nextBanner);
  
    setInterval(nextBanner, 3000);
  });
  

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });