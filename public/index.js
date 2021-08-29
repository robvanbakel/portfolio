const portfolioImages = document.querySelectorAll('.project-image.desktop img');

portfolioImages.forEach(image => {

  image.addEventListener('mousemove', e => {

    const imageCenterX = image.getBoundingClientRect().x + image.offsetWidth / 2
    const imageCenterY = image.getBoundingClientRect().y + image.offsetHeight / 2

    const y = (imageCenterX - e.x) / -40;
    const x = (imageCenterY - e.y) / 40;

    image.style.transform = `scale(1.015) rotateX(${x}deg) rotateY(${y}deg)`;
    image.style.boxShadow = '0px 20px 100px rgba(0,0,0,0.1)'

  });

  image.addEventListener('mouseleave', e => {
    image.style.transform = `scale(1) rotateX(0deg) rotateY(0deg)`;
    image.style.boxShadow = '0px 20px 60px rgba(0,0,0,0.1)'
  });


  image.addEventListener('mousedown', () => {
    image.style.transform = `translateZ(-20px)`;
    image.style.boxShadow = '0px 0px 60px rgba(0,0,0,0.1)'

  });

});

// skills.json

const main = document.querySelector('#main');

const baseSpeed = 20
const speedVariation = 35

if (main) {

  const mainHTML = main.innerHTML;

  main.innerHTML = '|';

  let isTyping = false;

  const blinkingCursor = setInterval(() => {
    main.innerHTML == '|' ? main.innerHTML = '&nbsp;' : main.innerHTML = '|'
  }, 650)

  outputHTML = '';

  const speed = () => Math.random() * speedVariation + baseSpeed;
  const wait = () => new Promise(res => setTimeout(res, speed()))

  const type = async () => {

    clearInterval(blinkingCursor);
    main.innerHTML = '&nbsp;'

    for (let i = 0; i < mainHTML.length; i++) {
      switch (mainHTML[i]) {
        case ' ':
          if (mainHTML[i + 1] == ' ') {
            outputHTML += mainHTML[i];
          } else {
            outputHTML += mainHTML[i];
            await wait();
          }
          break;
        case '<':
          outputHTML += mainHTML[i];
          while (mainHTML[i] != '>') {
            i++;
            outputHTML += mainHTML[i];
          }
          break;
        default:
          outputHTML += mainHTML[i];
          await wait();
      }
      main.innerHTML = outputHTML;
    }

  }

  window.addEventListener('scroll', () => {

    if (main.getBoundingClientRect().top < pageYOffset + 400 && !isTyping) {
      isTyping = true;
      type();
    }

  });

}

// Project links

const githubLinks = document.querySelectorAll('.github-link')

githubLinks.forEach(link => {

  link.addEventListener('mouseenter', e => {
    e.target.classList.add('expanded')

    link.parentElement.addEventListener('mouseleave', () => {
      e.target.classList.remove('expanded')
    })
  })

})

// Contact Form

const contactForm = document.querySelector('form#contact');
const msgSuccess = document.querySelector('footer .success');

contactForm.addEventListener('submit', async e => {

  const inpName = document.querySelector('input#name');
  const inpEmail = document.querySelector('input#email');
  const inpMessage = document.querySelector('textarea#message');

  e.preventDefault();

  await fetch('/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: inpName.value,
      email: inpEmail.value,
      message: inpMessage.value,
    })
  });

  inpName.value = '';
  inpEmail.value = '';
  inpMessage.value = '';

  contactForm.classList.add('hidden')
  msgSuccess.classList.remove('hidden')

});