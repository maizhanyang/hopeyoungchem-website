/**
 * 页面渲染就绪信号 — 供 vite-plugin-prerender 等待
 * 在字体加载完成 + 短暂延迟后触发 render-ready 事件
 */
export function dispatchRenderReady() {
  const fontsReady =
    typeof document !== 'undefined' && 'fonts' in document
      ? document.fonts.ready
      : Promise.resolve()

  fontsReady.then(() => {
    setTimeout(() => {
      document.dispatchEvent(new Event('render-ready'))
    }, 100)
  })
}
