/**
 * ============================================
 * gallery.js — 图库组件模块
 * 传播正能量 · 综合资讯平台
 * ============================================
 */

const GalleryModule = {
  /**
   * 创建图库 HTML
   * @param {Array} images - 图片路径数组
   * @param {string} containerSelector - 容器选择器
   */
  render(images, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = images
      .map(
        (src) => `
      <div class="gallery__item anim-fade-in">
        <img src="${src}" alt="图库图片" loading="lazy">
      </div>
    `,
      )
      .join("");
  },
};
