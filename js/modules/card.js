/**
 * ============================================
 * card.js — 卡片组件模块
 * 传播正能量 · 综合资讯平台
 * ============================================
 */

const CardModule = {
  /**
   * 创建资讯卡片 HTML
   * @param {Object} data - 卡片数据 {title, summary, image, tag, date}
   * @param {string} link - 卡片链接
   * @returns {string} 卡片 HTML
   */
  create(data, link = "#") {
    return `
      <div class="card anim-slide-up">
        <img class="card__image" src="${data.image}" alt="${data.title}" loading="lazy">
        <div class="card__body">
          <h3 class="card__title">${data.title}</h3>
          <p class="card__text">${data.summary}</p>
          <span class="card__tag">${data.tag}</span>
        </div>
      </div>
    `;
  },

  /**
   * 渲染卡片列表
   * @param {Array} dataList - 数据列表
   * @param {string} containerSelector - 容器选择器
   * @param {string} linkPrefix - 链接前缀
   */
  renderList(dataList, containerSelector, linkPrefix = "#") {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = dataList
      .map((item) => this.create(item, linkPrefix + item.id))
      .join("");
  },
};
