import { onMounted, onUnmounted, ref } from "vue"

export default function useReachBottom(cb) {
  const isReachBottom = ref(false)
  function handleScrollListener() {
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
    if (scrollHeight <= clientHeight + scrollTop) {
      console.log('滚动到底部')
      isReachBottom.value = true
      cb()
    } else {
      isReachBottom.value = false
    }
  }
  onMounted(() => {
    window.addEventListener("scroll", handleScrollListener);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScrollListener);
  });

  return isReachBottom;
}