import { GestorContactos } from './formulario.js';

// ================= MENÚ MÓVIL =================

const boton = document.getElementById(
    'menuBtn'
) as HTMLButtonElement | null;

const links =
    document.querySelector<HTMLElement>(
        '.nav__links'
    );

if (boton && links) {
    boton.addEventListener(
        'click',
        (): void => {
            links.classList.toggle('is-open');
        }
    );

    // Cerrar el menú después de seleccionar un enlace
    links.querySelectorAll<HTMLAnchorElement>('a')
        .forEach(
            (enlace: HTMLAnchorElement): void => {
                enlace.addEventListener(
                    'click',
                    (): void => {
                        links.classList.remove(
                            'is-open'
                        );
                    }
                );
            }
        );
}

// ================= ANIMACIÓN AL HACER SCROLL =================

const observador: IntersectionObserver =
    new IntersectionObserver(
        (
            entradas: IntersectionObserverEntry[]
        ): void => {
            entradas.forEach(
                (
                    entrada: IntersectionObserverEntry
                ): void => {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add(
                            'visible'
                        );

                        observador.unobserve(
                            entrada.target
                        );
                    }
                }
            );
        },
        {
            threshold: 0.2
        }
    );

const elementosOcultos =
    document.querySelectorAll<HTMLElement>(
        '.oculto'
    );

elementosOcultos.forEach(
    (elemento: HTMLElement): void => {
        observador.observe(elemento);
    }
);

// ================= GESTOR DE CONTACTOS =================

const gestor = new GestorContactos(
    '#formulario',
    '#error',
    '#lista-contactos'
);

// Descargar contactos en formato JSON
const botonGuardar =
    document.querySelector<HTMLButtonElement>(
        '#guardar'
    );

botonGuardar?.addEventListener(
    'click',
    (): void => {
        gestor.guardarJSON();
    }
);

// Cargar contactos desde un archivo JSON
const inputCargar =
    document.querySelector<HTMLInputElement>(
        '#cargar'
    );

inputCargar?.addEventListener(
    'change',
    async (): Promise<void> => {
        const archivo =
            inputCargar.files?.[0];

        if (!archivo) {
            return;
        }

        try {
            const texto =
                await archivo.text();

            gestor.cargarJSON(texto);
            gestor.mostrarError('');

            inputCargar.value = '';
        } catch (error: unknown) {
            console.error(error);

            gestor.mostrarError(
                'No fue posible cargar el archivo JSON'
            );
        }
    }
);

console.log(
    'Landing funcionando con TypeScript y POO'
);