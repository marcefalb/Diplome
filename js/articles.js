window.onload = () => {
  const articlesContainer = document.querySelector('#articles-container')
  const articlesArr = ['Пункты приема Добрых крышечек в Твери', 'ТЗВП – Лучший переработчик пластика в России!', 'EcoPartners на выставке-форуме «Чистая страна» ', 'Программа «Город без отходов» в рамках глобальной стратегии Coca-Cola «Мир без отходов» ', 'Путь вторсырья от контейнера до переработчика', 'Всероссийский экологический диктант']

  for (article in articlesArr) {
    articlesContainer.innerHTML += `
      <a class="article__block" href="articles/${articlesArr[article]}.html">
        <div class="article__img">
          <img src="images/article-${article}.jpg" alt="">
        </div>
        <span class="article__title">${articlesArr[article]}</span>
      </a>  
    `
  }
}