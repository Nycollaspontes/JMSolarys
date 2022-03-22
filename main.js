// Abre e fecha o menu quando clikar no icone   
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')


for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })

}

// quando clikar em um item do menu , esconder o menu 
for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

// Mudara sombra do header quando scrollar 


const header = document.querySelector('#header')
const navheight = header.offsetHeight;

function changeHeaderWhenScroll() {

    if (window.scrollY >= navheight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}


// Scroll Reveal : Mostrar elementos quando a pagina for scrollada 

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: '700',
    reset: true,
})


scrollReveal.reveal(`
#home .text , #home .image ,
 #about .text , #about .image ,
 #services header , #services .card , 
 #contact .text , #contact .links ,
 footer .brand , footer .social`,
    { interval: 100 })

// Botao voltar para o topo 
const backToTopButton = document.querySelector('.back-to-top')


// menu ativo conforme secao visivel na pagina


const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  
    for (const section of sections) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')
  
      const checkpointStart = checkpoint >= sectionTop
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight
  
      if (checkpointStart && checkpointEnd) {
        document
          .querySelector('nav ul li a[href*=' + sectionId + ']')
          .classList.add('active')
      } else {
        document
          .querySelector('nav ul li a[href*=' + sectionId + ']')
          .classList.remove('active')
      }
    }
  }

function changeHeightButtonTop() {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    }

    if (window.scrollY <= 560) {
        backToTopButton.classList.remove('show')
    }
}

window.addEventListener('scroll', function () {
    changeHeightButtonTop(),
    changeHeaderWhenScroll(),
    activateMenuAtCurrentSection()
})
