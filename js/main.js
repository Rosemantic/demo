/**
 * ============================================
 * main.js — Main Entry Script
 * 传播正能量 · 综合资讯平台
 * ============================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  // 1. Initialize GSAP animations (includes loading overlay control)
  if (typeof initPageAnimations === "function") {
    initPageAnimations();
  } else {
    // Fallback: show content if animations.js not loaded
    var overlay = document.querySelector(".loading-overlay");
    if (overlay) { overlay.style.display = "none"; overlay.style.opacity = "0"; }
  }

  // 2. Initialize layout interactions
  if (typeof LayoutModule !== "undefined") {
    LayoutModule.init();
  }

  // 3. Render homepage ranking if container exists
  renderHomeRanking();
}

/**
 * Render ranking preview on homepage
 */
function renderHomeRanking() {
  const container = document.getElementById("ranking-preview");
  if (!container || typeof RankingData === "undefined") return;

  const items = RankingData.hotEvents || [];
  container.innerHTML = items
    .map((item, i) => {
      const rankClass = i < 3 ? ` ranking-number--${i + 1}` : "";
      const heatWidth = item.heat || 0;
      return `
      <div class="ranking-item">
        <span class="ranking-number${rankClass}">${item.rank}</span>
        <span class="ranking-title">${item.title}</span>
        <span class="tag tag--red" style="margin-right:var(--spacing-sm);font-size:0.7rem;">${item.tag}</span>
        <div class="ranking-heat">
          <div class="ranking-heat__bar" style="width:${heatWidth}%"></div>
        </div>
      </div>
    `;
    })
    .join("");

  // Animate heat bars
  setTimeout(() => {
    container.querySelectorAll(".ranking-heat__bar").forEach((bar) => {
      const w = bar.style.width;
      bar.style.width = "0%";
      setTimeout(() => {
        bar.style.width = w;
      }, 100);
    });
  }, 500);
}
