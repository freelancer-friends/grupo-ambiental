document.addEventListener('DOMContentLoaded', function () {
    const banners = document.querySelectorAll('.banner');
    let currentBannerIndex = 0;
  
    function showBanner(index) {
      banners.forEach((banner, i) => {
        if (i === index) {
          banner.classList.add('active');
        } else {
          banner.classList.remove('active');
        }
      });
    }
  
    document.getElementById('prevBtn').addEventListener('click', function () {
      currentBannerIndex = (currentBannerIndex - 1 + banners.length) % banners.length;
      showBanner(currentBannerIndex);
    });
  
    document.getElementById('nextBtn').addEventListener('click', function () {
      currentBannerIndex = (currentBannerIndex + 1) % banners.length;
      showBanner(currentBannerIndex);
    });
  
    // Mostrar o primeiro banner inicialmente
    showBanner(currentBannerIndex);
  });
  