const scrollFunc = () => {
  const links = document.querySelectorAll('.header-menu__item a, .card-details__link-characteristics') //links - псевдомассив
seamless.polyfill();

links.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();//отменяем стандартное поведение ссылки

    const id = element.getAttribute('href').substring(1)
    const section = document.getElementById(id)
    if (section) {
      seamless.elementScrollIntoView(section, {
        behavior: 'smooth',
        block: 'start'
      }) // scrollIntoView не работает на safari
    } else {
      seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
        behavior: "smooth",
        block: "center",
        inline: "center",
    });
    }
  })
})

}

scrollFunc()