const slider = () => {
  let slideIndex = 1;

  const prevBtn = document.querySelector('.slidePrev');
  const nextBtn = document.querySelector('.slideNext');

  const showSlides = (n) => {
    let i;
    const slides = document.querySelectorAll('.slide');
    
    if (n > slides.length) {slideIndex = 1}
    
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "";  
  }

  showSlides(slideIndex);

  const plusSlides = (n) => {
    showSlides(slideIndex += n);
  }

  const currentSlide = (n) => {
    showSlides(slideIndex = n);
  }
  
  prevBtn.addEventListener('click', () => plusSlides(-1));
  nextBtn.addEventListener('click', () => plusSlides(1));


}

const mobileNav = () => {
  const btnOpen = document.querySelector('.burger');
  const btnClose = document.querySelector('.icon-menu--close');
  const nav = document.querySelector('.main_nav');
  const navLinks = document.querySelectorAll('.menu_item');

  const handleClickMenu = () => {
    nav.classList.toggle('main_nav--active');

    navLinks.forEach((link, index) => {
      if(link.style.animation) link.style.animation='';
      else link.style.animation = `menuLinksFade .5s ease forwards ${(index/5)+0.2}s`;
    });

  }

  btnOpen.addEventListener('click', () => handleClickMenu());
  btnClose.addEventListener('click', () => handleClickMenu());
}

const headerOnScroll = () => {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', (e) => {
    header.style.backgroundColor = `rgba(0,0,0, ${window.scrollY / 500})`;
  });
}

window.addEventListener('DOMContentLoaded', () => {
  slider();
  mobileNav();
  headerOnScroll();
});