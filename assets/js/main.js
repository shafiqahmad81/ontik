document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#leadership-btn');
  const activeItems = document.querySelectorAll('.leadership-item.leadership-active');

  btn.addEventListener('click', () => {
    // Show active items
    activeItems.forEach(item => {
      item.style.display = 'block';
    });

    // Hide the button itself
    btn.style.display = 'none';
  });
});


// slider hunding

  const fundingSwiper = new Swiper(".funding-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
// slider partners

  const parentsSwiper = new Swiper(".paretners-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
// slider inside

  const insideSwiper = new Swiper(".inside-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });


