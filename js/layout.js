/**
 * ============================================
 * layout.js — Layout Interactions Module
 * 传播正能量 · 综合资讯平台
 * ============================================
 */

const LayoutModule = {
  init() {
    this.initMobileNav();
    this.initBackToTop();
    this.initSmoothScroll();
  },

  /** Mobile navigation toggle with GSAP */
  initMobileNav() {
    const toggle =
      document.getElementById("nav-toggle") ||
      document.querySelector(".navbar__toggle");
    const navLinks =
      document.getElementById("nav-links") ||
      document.querySelector(".navbar__links");
    if (!toggle || !navLinks) return;

    let isOpen = false;

    toggle.addEventListener("click", () => {
      isOpen = !isOpen;
      toggle.classList.toggle("navbar__toggle--active", isOpen);
      navLinks.classList.toggle("navbar__links--open", isOpen);

      // GSAP animation for menu items
      if (typeof gsap !== "undefined" && isOpen) {
        const items = navLinks.querySelectorAll("li");
        gsap.from(items, {
          x: 30,
          opacity: 0,
          duration: 0.4,
          ease: "power3.out",
          stagger: 0.05,
          delay: 0.1,
        });
      }
    });

    // Close on link click (mobile)
    navLinks.querySelectorAll(".navbar__link").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          isOpen = false;
          toggle.classList.remove("navbar__toggle--active");
          navLinks.classList.remove("navbar__links--open");
        }
      });
    });
  },

  /** Back to top button */
  initBackToTop() {
    const btn =
      document.getElementById("back-to-top") ||
      document.querySelector(".back-to-top");
    if (!btn) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        btn.classList.add("back-to-top--visible");
      } else {
        btn.classList.remove("back-to-top--visible");
      }
    });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  },

  /** Smooth scroll for anchor links */
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const id = anchor.getAttribute("href");
        if (id === "#") return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  },
};
