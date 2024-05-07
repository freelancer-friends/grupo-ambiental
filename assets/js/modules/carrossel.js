export default function initCarrossel() {
  document.addEventListener('DOMContentLoaded', function () {
    const banners = document.querySelectorAll('.banner');
    let currentBannerIndex = 0;
  
    //     function showBanner(index) {
    //       banners.forEach((banner, i) => {
    //         if (i === index) {
    //           banner.classList.add('active');
    //         } else {
    //           banner.classList.remove('active');
    //         }
    //       });
    //     }
      
    //     document.getElementById('prevBtn').addEventListener('click', function () {
    //       currentBannerIndex = (currentBannerIndex - 1 + banners.length) % banners.length;
    //       showBanner(currentBannerIndex);
    //     });
      
    //     document.getElementById('nextBtn').addEventListener('click', function () {
    //       currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    //       showBanner(currentBannerIndex);
    //     });
      
    //     showBanner(currentBannerIndex);
    //   });
  
    let currentIndex = 0;
    const depoimentos = document.querySelectorAll('.depoimento');
    const totalDepoimentos = depoimentos.length;
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    // Avança para o próximo depoimento
    function nextDepoimento() {
      currentIndex = (currentIndex + 1) % totalDepoimentos;
      updateCarousel();
    }
  
    // Retrocede para o depoimento anterior
    function prevDepoimento() {
      currentIndex = (currentIndex - 1 + totalDepoimentos) % totalDepoimentos;
      updateCarousel();
    }
  
    // Atualiza a posição do carrossel para mostrar o depoimento atual
    function updateCarousel() {
      const width = depoimentos[currentIndex].offsetWidth;
      const offset = -(width * currentIndex);
      carousel.style.transform = `translateX(${offset}px)`;
    }
  
    // Adiciona eventos de clique aos botões de navegação
    prevButton.addEventListener('click', prevDepoimento);
    nextButton.addEventListener('click', nextDepoimento);
  })
}
