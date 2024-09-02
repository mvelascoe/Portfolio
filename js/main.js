
const navMenu = document.getElementById('nav-menu'),
      navabrir = document.getElementById('nav-abrir'),
      navCerrar = document.getElementById('nav-cerrar')

if(navabrir){
   navabrir.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}


if(navCerrar){
   navCerrar.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
 }


const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')

   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const blurHeader = () =>{
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('blur-header') 
                      : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)