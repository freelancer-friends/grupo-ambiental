export default function initMenuMobile() {
  const btnMobile = document.getElementById('btn-mobile');

  if(btnMobile) {
    function toggleMenu() {
      const nav = document.querySelector('#nav');
      nav.classList.toggle('active');
    }
    btnMobile.addEventListener('click', toggleMenu);
  }
}
