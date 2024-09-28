
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

/*configurando la seccion contactenos con correo */

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
   e.preventDefault()

   // serviceID - templateID - #form - publicKey
   emailjs.sendForm('service_toiw9bi','template_lnj7bii','#contact-form','6xjgCQ-2sGGG_wrQE')
      .then(() =>{
         // mensaje despues de enciado
         contactMessage.textContent = 'Mensaje enviado con exito, me pondre en contacto con usted al correo electronico suministrado ✅'

         // limipiar el formulario
         setTimeout(() =>{
            contactMessage.textContent = ''
         }, 5000)

         
         contactForm.reset()

      }, () =>{
         //Mesaje de error
         contactMessage.textContent = 'Mensaje no enviado (error en el servidor) ❌'
      })
}

contactForm.addEventListener('submit', sendEmail)