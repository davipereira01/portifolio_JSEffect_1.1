



function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function(){

            elemento.innerHTML += letra;

        }, 200 * i);

        


    });

}


const titulo2 = document.querySelector('#titulo-2');
typeWrite(titulo2);


const titulo = document.querySelector('#titulo');
typeWrite(titulo);

/*proximo titulo*/

    







const btnMobile = document.getElementById('btn-mobile');
const visual = document.getElementById('btn-mobile')

function toggleMenu(event) {

    if (event.type === 'touchstart') event.preventDefaut();

    

    const visual = document.getElementById('visual');
    visual.classList.toggle ('active');
    
    
    

    
    const nav = document.getElementById ('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)



visual.addEventListener('click', toggleMenu)
visual.addEventListener('touchstart', toggleMenu)











  