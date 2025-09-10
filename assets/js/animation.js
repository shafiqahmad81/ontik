const philosophySection = document.querySelector('.philosophy');
const leftH2 = philosophySection.querySelector('.left');
const rightH2 = philosophySection.querySelector('.right');

function checkPhilosophy() {
  const rect = philosophySection.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rect.top < windowHeight * 0.8) { 
    leftH2.classList.add('show');
    rightH2.classList.add('show');

    window.removeEventListener('scroll', checkPhilosophy);
  }
}

window.addEventListener('scroll', checkPhilosophy);

checkPhilosophy();


