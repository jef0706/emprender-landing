// Elementos del menú móvil
const boton = document.getElementById(
    'menuBtn'
) as HTMLButtonElement | null;

const links = document.querySelector<HTMLElement>(
    '.nav__links'
);

// Verificar que ambos elementos existan
if (boton && links) {
    boton.addEventListener('click', (): void => {
        // Mostrar u ocultar el menú en pantallas pequeñas
        links.classList.toggle('is-open');
    });
}

// Aparición de elementos al hacer scroll
const observador: IntersectionObserver = new IntersectionObserver(
    (entradas: IntersectionObserverEntry[]): void => {
        entradas.forEach(
            (entrada: IntersectionObserverEntry): void => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('visible');
                    observador.unobserve(entrada.target);
                }
            }
        );
    },
    {
        threshold: 0.2
    }
);

// Observar todos los elementos ocultos
const elementosOcultos =
    document.querySelectorAll<HTMLElement>('.oculto');

elementosOcultos.forEach((elemento: HTMLElement): void => {
    observador.observe(elemento);
});

console.log(
    'Landing de emprendedores ejecutándose con TypeScript'
);