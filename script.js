document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Continuous Scroll Reveal ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".reveal")
    .forEach((el) => revealObserver.observe(el));

  // --- 2. Infinite Slider Logic ---
  const slider = document.getElementById("gallerySlider");
  if (slider) {
    slider.innerHTML += slider.innerHTML;
    slider.classList.add("animate-scroll");
  }

  // --- 3. Lightbox Logic ---
  const lightbox = document.getElementById("lightboxOverlay");
  const lbImg = document.getElementById("lightboxImage");
  const closeBtn = document.getElementById("closeLightbox");

  const openLightbox = (src) => {
    lbImg.src = src;
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
    document.body.style.overflow = "";
  };

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("gallery-img")) {
      openLightbox(e.target.src);
    }
  });

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // --- 4. Navbar Scroll Change ---
  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      nav.classList.add("py-2");
      nav.classList.remove("py-6");
    } else {
      nav.classList.add("py-6");
      nav.classList.remove("py-2");
    }
  });

  // --- 5. Scroll to Top Button ---
  const scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
