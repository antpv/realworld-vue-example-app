export default categories => (to, from, next) => {
  const { category } = to.params

  if (!categories.map(c => c.slug).includes(category)) next({ path: '/404' })

  next()
}
