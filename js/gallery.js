window.onload = () => {
  const galleryContainer = document.querySelector('#gallery-container')
  const galleryMore = document.querySelector('#gallery-more')
  let clickCount = 1

  for (let i = 0; i < 12; i++) {
    galleryContainer.innerHTML += `
      <div class="gallery__block">
        <img src="images/gallery-${i}.jpg" alt="">
      </div>
    `
  }

  galleryMore.addEventListener('click', function() {
    clickCount === 2 ? galleryMore.style.display = 'none' : clickCount
    clickCount += 1
    galleryContainer.innerHTML = ''
    for (let i = 0; i < 12 * clickCount; i++) {
      if (i <= 29) {
        galleryContainer.innerHTML += `
        <div class="gallery__block">
          <img src="images/gallery-${i}.jpg" alt="">
        </div>
        `
      }
    }
  })
}