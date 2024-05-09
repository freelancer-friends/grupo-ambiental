export default function initMenuMobile() {
  const btnMobile = document.getElementById('btn-mobile');
  const menu = document.getElementById('menu');

  if(btnMobile && menu) {
    function toggleMenu() {
      menu.classList.toggle('active');
    }

    btnMobile.addEventListener('click', toggleMenu);
  }
}
