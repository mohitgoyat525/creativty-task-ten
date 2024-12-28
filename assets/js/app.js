const containers = document.querySelectorAll(".img-container");
let currentIndex = 0;

function showSlide(index) {
  containers.forEach((container, i) => {
    gsap.to(container, {
      left: i === index ? "0%" : i < index ? "-100%" : "100%",
      opacity: i === index ? 1 : 0,
      duration: 1.5,
      ease: "expo.inOut",
    });

    if (i === index) {
      gsap.to(container.querySelector(".heading-text"), {
        opacity: 1,
        duration: 0.5,
        delay: 0.3,
      });
    }
  });
}

function startSlideshow() {
  showSlide(currentIndex);
  currentIndex = (currentIndex + 1) % containers.length;
  setTimeout(startSlideshow, 3000);
}

startSlideshow();
