/**
 * ============================================
 * footer.js — 公共页脚模块
 * 传播正能量 · 综合资讯平台
 * ============================================
 */

const FooterModule = {
  init() {
    this.renderFooter();
    console.log("[footer.js] 页脚模块初始化完成");
  },

  renderFooter() {
    const footer = document.querySelector(".footer");
    if (!footer) return;

    const isSubPage = window.location.pathname.includes("/pages/");
    const isTopicPage = window.location.pathname.includes("/pages/topics/");
    const pathPrefix = isTopicPage ? "../../" : isSubPage ? "../" : "";

    footer.innerHTML = `
      <div class="footer__inner">
        <ul class="footer__links">
          <li><a class="footer__link" href="${pathPrefix}index.html">首页</a></li>
          <li><a class="footer__link" href="${pathPrefix}pages/social.html">社会热点</a></li>
          <li><a class="footer__link" href="${pathPrefix}pages/entertainment.html">文娱影视</a></li>
          <li><a class="footer__link" href="${pathPrefix}pages/finance-sports.html">财经体育</a></li>
          <li><a class="footer__link" href="${pathPrefix}pages/culture-life.html">文旅生活</a></li>
          <li><a class="footer__link" href="${pathPrefix}pages/ranking.html">热点排行</a></li>
          <li><a class="footer__link" href="${pathPrefix}pages/interaction.html">互动专区</a></li>
        </ul>
        <p class="footer__copyright">
          传播正能量 · 综合资讯平台 &copy; 2026 | 仅供学习交流使用
        </p>
      </div>
    `;
  },
};
