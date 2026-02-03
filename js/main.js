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

// Menu Mobile
const menuToggle = document.querySelector('.header__menu-toggle')
const menu = document.querySelector('.header__menu')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
})

// Fechar menu ao click em um link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active')
        menu.classList.remove('active')
    })
})

// Botão Back to Top

const backToTop = document.createElement('button')
backToTop.innerHTML = '↑'
backToTop.className = 'back-to-top'
document.body.appendChild(backToTop)

window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
        backToTop.classList.add('show')
    } else {
        backToTop.classList.remove('show')
    }
})

backToTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
})

