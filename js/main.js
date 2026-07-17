const boton = document.getElementById('menuBtn');
const links = document.querySelector('.nav__links');

boton.addEventListener('click', () => {
    // Muestra u ocultar el menu en pantallas pequeñas
    links.classList.toggle('is-open');
});

// 10. Aparicion al hacer scroll (scroll reveal)
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            observador.unobserve(entrada.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.oculto').forEach((el) => {
    observador.observe(el);
});

console.log('landing de emprendedores lista para la entrega 2');