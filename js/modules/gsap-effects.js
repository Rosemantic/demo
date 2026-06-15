/**
 * ============================================
 * gsap-effects.js — GSAP 动效模块（入口）
 * 传播正能量 · 综合资讯平台
 * ============================================
 *
 * 此文件为 animations.js 的对外接口，
 * 将 animations.js 中的函数封装为模块对象。
 */

const GsapEffects = {
  /**
   * 初始化页面动效
   */
  initPageAnimations() {
    if (typeof initPageAnimations === "function") {
      initPageAnimations();
    } else {
      console.warn("[gsap-effects.js] animations.js 尚未加载");
    }
  },
};
