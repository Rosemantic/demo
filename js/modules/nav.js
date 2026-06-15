/**
 * ============================================
 * nav.js — 公共导航栏模块
 * 传播正能量 · 综合资讯平台
 * ============================================
 */

const NavModule = {
  /**
   * 导航链接配置
   * 从首页出发的相对路径
   */
  links: [
    { text: "首页", href: "index.html", id: "home" },
    { text: "社会热点", href: "pages/social.html", id: "social" },
    { text: "文娱影视", href: "pages/entertainment.html", id: "entertainment" },
    {
      text: "财经体育",
      href: "pages/finance-sports.html",
      id: "finance-sports",
    },
    { text: "文旅生活", href: "pages/culture-life.html", id: "culture-life" },
    { text: "热点排行", href: "pages/ranking.html", id: "ranking" },
    { text: "互动专区", href: "pages/interaction.html", id: "interaction" },
  ],

  /**
   * 初始化导航
   */
  init() {
    this.renderNavbar();
    this.setActiveLink();
    console.log("[nav.js] 导航模块初始化完成");
  },

  /**
   * 渲染导航栏 HTML
   */
  renderNavbar() {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    // 判断当前页面深度，调整链接路径
    const isSubPage = window.location.pathname.includes("/pages/");
    const isTopicPage = window.location.pathname.includes("/pages/topics/");
    const pathPrefix = isTopicPage ? "../../" : isSubPage ? "../" : "";

    const linksHtml = this.links
      .map((link) => {
        const href = pathPrefix + link.href;
        return `<li><a class="navbar__link" href="${href}" data-nav-id="${link.id}">${link.text}</a></li>`;
      })
      .join("");

    const navbarInner = navbar.querySelector(".navbar__inner");
    if (navbarInner) {
      const navLinksEl = navbarInner.querySelector(".navbar__links");
      if (navLinksEl) {
        navLinksEl.innerHTML = linksHtml;
      }
    }
  },

  /**
   * 标记当前页面为激活状态
   */
  setActiveLink() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll(".navbar__link");
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (
        currentPath.includes(href) ||
        (href.includes("index.html") && currentPath.endsWith("/"))
      ) {
        link.classList.add("navbar__link--active");
      }
    });
  },
};
