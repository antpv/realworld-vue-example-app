export default {
  functional: true,
  render(createElement, context) {
    return createElement('div', {}, context.children)
  }
}
