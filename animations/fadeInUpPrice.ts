const easing = [0.6, -0.05, 0.01, 0.99]

export default {
  initial: {
    opacity: 1,
    y: 70
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.7,
      ease: easing
    }
  }
}