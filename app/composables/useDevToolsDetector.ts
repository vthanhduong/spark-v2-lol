// composables/useDevToolsDetector.ts
export const useDevToolsDetector = () => {
  if (import.meta.server) return

  const detect = () => {
    const startTime = performance.now()

    // eslint-disable-next-line no-debugger
    debugger

    const endTime = performance.now()

    if (endTime - startTime > 100) {
      console.log('%cSTOP!!! Yamete kudasai!!!', 'color: red; font-size: 80px; font-weight: bold; text-shadow: 3px 3px 0 rgb(217,31,38) ;')
      console.log('%cmày định làm j?', 'font-size: 20px; color: yellow; background: black; padding: 10px;')
    }
  }

  onMounted(() => {
    const timer = setInterval(detect, 2000)
    onUnmounted(() => clearInterval(timer))
  })
}
