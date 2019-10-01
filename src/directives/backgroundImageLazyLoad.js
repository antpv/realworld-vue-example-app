export default {
  inserted: el => {
    function loadImage() {
      const imageElement = Array.from(el.children).find(el => el.dataset.url)

      if (imageElement) {
        imageElement.addEventListener('load', () => {
          setTimeout(() => el.classList.add('loaded'), 100)
        })
        imageElement.addEventListener('error', () => {})
        imageElement.style += `background-image: url(${imageElement.dataset.url})`
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage()
          observer.unobserve(el)
        }
      })
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: '0'
      }
      const observer = new IntersectionObserver(handleIntersect, options)

      observer.observe(el)
    }
    if (window['IntersectionObserver']) {
      createObserver()
    } else {
      loadImage()
    }
  }
}
