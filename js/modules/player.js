/**
 * ============================================
 * player.js — 音乐播放器模块
 * 传播正能量 · 综合资讯平台
 * ============================================
 */

const PlayerModule = {
  currentAudio: null,
  isPlaying: false,

  /**
   * 创建音频播放器 HTML
   * @param {Object} audioData - {title, artist, file}
   * @param {string} containerSelector - 容器选择器
   */
  render(audioData, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const isArr = Array.isArray(audioData);
    const items = isArr ? audioData : [audioData];

    container.innerHTML = items
      .map(
        (item) => `
      <div class="audio-player" data-audio-src="${item.file}">
        <button class="audio-player__btn audio-player__btn--play">&#9654;</button>
        <div class="audio-player__info">
          <p class="audio-player__title">${item.title}</p>
          <p class="audio-player__artist">${item.artist || "综合资讯平台"}</p>
        </div>
      </div>
    `,
      )
      .join("");

    // 绑定播放事件
    container.querySelectorAll(".audio-player__btn--play").forEach((btn) => {
      btn.addEventListener("click", () => {
        const player = btn.closest(".audio-player");
        const src = player.dataset.audioSrc;
        this.togglePlay(src, btn);
      });
    });
  },

  /**
   * 切换播放/暂停
   */
  togglePlay(src, btn) {
    if (
      this.currentAudio &&
      this.currentAudio.src !== new URL(src, window.location.href).href
    ) {
      this.currentAudio.pause();
      this.isPlaying = false;
      this.updateAllButtons();
    }

    if (this.isPlaying) {
      this.currentAudio.pause();
      this.isPlaying = false;
      btn.innerHTML = "&#9654;";
    } else {
      if (
        !this.currentAudio ||
        this.currentAudio.src !== new URL(src, window.location.href).href
      ) {
        this.currentAudio = new Audio(src);
      }
      this.currentAudio.play();
      this.isPlaying = true;
      btn.innerHTML = "&#9646;&#9646;";
    }
  },

  /**
   * 重置所有播放按钮
   */
  updateAllButtons() {
    document.querySelectorAll(".audio-player__btn--play").forEach((b) => {
      b.innerHTML = "&#9654;";
    });
  },
};
