const containers = document.querySelectorAll(".img-container");
let currentIndex = 0;

function showSlide(index) {
  for (let i = 0; i < containers.length; i++) {
    const container = containers[i];
    gsap.to(container, {
      left: i === index ? "0%" : i < index ? "-100%" : i === containers.length - 1 ? "0%" : "100%",
      opacity: i === index ? 1 : 0,
      duration: 1.5,
      ease: "expo.inOut",
    });

    const headingText = container.querySelector(".heading-text");
    if (i === index) {
      gsap.to(headingText, {
        opacity: 1,
        duration: 0.5,
        delay: 0.3,
      });
    } else {
      gsap.to(headingText, {
        opacity: 0,
        duration: 0.5,
        delay: 0,
      });
    }
  }
}

function startSlideshow() {
  showSlide(currentIndex);
  if (currentIndex < containers.length - 1) {
    currentIndex++;
    setTimeout(startSlideshow, 3000); 
  }
}

startSlideshow();
