// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('.header__menu a')

//Percorre cada link do menu
menuLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault()
        // Pega o id da seção
        const targetId = link.getAttribute('href')
        // Seleciona a seção correspondente
        const targetSection = document.querySelector(targetId)
        // Faz o scroll suave até a seção
        targetSection.scrollIntoView({
            behavior: 'smooth'
        })
    })
})

// Header

const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header--fixed')
    } else {
        header.classList.remove('header--fixed')
    }
}) 