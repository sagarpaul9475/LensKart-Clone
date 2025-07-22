
  const banner = document.getElementById("banner");
  const slides = banner.querySelectorAll("img");
  const totalSlides = slides.length;
  let currentIndex = 0;
  let interval;

  function updateSlide() {
    banner.style.transition = "transform 0.6s ease-in-out";
    banner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function moveSlide(step) {
    currentIndex += step;
    updateSlide();


    if (currentIndex === totalSlides - 1) {
      setTimeout(() => {
        banner.style.transition = "none"; 
        currentIndex = 0;
        banner.style.transform = `translateX(0%)`;
      }, 1000); 
    }


    if (currentIndex < 0) {
      banner.style.transition = "none";
      currentIndex = totalSlides - 2;
      banner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    resetAutoSlide();
  }

  function startAutoSlide() {
    interval = setInterval(() => {
      moveSlide(1);
    }, 5000);
  }

  function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
  }

  window.onload = () => {
    banner.style.display = "flex";
    banner.style.transition = "transform 0.6s ease-in-out";

    for (let slide of slides) {
      slide.style.width = "100%";
      slide.style.height = "auto";
    }

    updateSlide();
    startAutoSlide();
  };
  let arrow1 = document.getElementById('arrow1');
  let arrow2 = document.getElementById('arrow2');
  const glass = document.getElementsByClassName("glass");



    arrow2.addEventListener('click', () => {
      let x1 = document.getElementById('carry1');
      let x2=document.getElementById('carry2');
      let x3=document.getElementById('carry3');
      let x4=document.getElementById('carry4');
      if (x1 && x1.tagName === 'IMG') {
        x1.src = "image179.webp";
      }
      if (x2 && x2.tagName === 'IMG') {
        x2.src = "cateeye.webp";
      }
      if (x3 && x3.tagName === 'IMG') {
        x3.src = "clipon.webp";
      }
      if (x4 && x3.tagName === 'IMG') {
        x4.src = "clubmaster.webp";
      }
    });

  

  arrow1.addEventListener('click', () => {
    let x1 = document.getElementById('carry1');
    let x2=document.getElementById('carry2');
    let x3=document.getElementById('carry3');
    let x4=document.getElementById('carry4');
    if (x1 && x1.tagName === 'IMG') {
      x1.src = "airflex.webp";
    }
    if (x2 && x2.tagName === 'IMG') {
      x2.src = "aviator.webp";
    }
    if (x3 && x3.tagName === 'IMG') {
      x3.src = "blend.webp";
    }
    if (x4 && x3.tagName === 'IMG') {
      x4.src = "trans.webp";
    }
  });



  
  

  