const easing = [0.6, -0.05, 0.01, 0.99]

export default {
  initial: {
    opacity: 0,
    x: -60
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: .5,
      ease: easing
    }
  }
}