# Landing Page para Emprendedores

Landing page dirigida a emprendedores que desean encontrar recursos, herramientas y orientación para iniciar o mejorar sus negocios.

El sitio fue desarrollado como proyecto del curso de Desarrollo Frontend de INTECAP y aplica HTML5, SASS, JavaScript, TypeScript, Programación Orientada a Objetos, Vite, Git y GitHub.

## Objetivo

Crear un sitio web dinámico, responsivo, amigable y funcional que permita presentar recursos para emprendedores y registrar datos mediante un formulario validado.

## Requerimientos funcionales

- Mostrar un menú de navegación con acceso a las secciones del sitio.
- Permitir abrir y cerrar el menú en dispositivos móviles.
- Mostrar una sección principal con un llamado a la acción.
- Desplazarse desde el botón “Empezar” hasta el contenido principal.
- Presentar recursos mediante tarjetas informativas.
- Mostrar animaciones y transiciones al visualizar las secciones.
- Validar los datos ingresados en el formulario.
- Administrar los datos utilizando Programación Orientada a Objetos.
- Representar la información registrada en formato JSON.

## Requerimientos no funcionales

- La página debe ser amigable, intuitiva y fácil de utilizar.
- El diseño debe adaptarse a computadoras, tabletas y teléfonos.
- Los estilos deben estar organizados con SASS.
- SASS debe utilizar variables, mixins y anidamiento.
- TypeScript debe utilizar el modo estricto.
- El sitio debe incluir animaciones, transiciones y transformaciones.
- El proyecto debe mantenerse bajo control de versiones con Git.
- Los avances deben publicarse en GitHub mediante commits descriptivos.

## Estructura del sitio

- **Encabezado:** contiene el logotipo y el menú de navegación.
- **Sección hero:** presenta el título, la descripción y el botón “Empezar”.
- **Recursos:** muestra tarjetas con asesoría, plantillas y comunidad.
- **Información de SASS:** explica el uso de variables, mixins y anidamiento.
- **Formulario:** permite registrar y validar la información del usuario.
- **Pie de página:** presenta la información final del proyecto.

## Tecnologías y justificación

| Tecnología | Por qué la utilizamos |
|---|---|
| HTML5 semántico | Permite crear una estructura clara, ordenada y accesible |
| CSS3 | Aplica la presentación visual y los estilos finales del sitio |
| SASS | Organiza los estilos mediante variables, mixins y anidamiento |
| Media Queries | Adaptan el diseño a celular, tableta y computadora |
| JavaScript | Añade interactividad y permite aplicar POO en una sección |
| TypeScript | Proporciona tipado, mayor seguridad y clases mejor organizadas |
| Programación Orientada a Objetos | Organiza la lógica mediante clases, propiedades y métodos |
| Animaciones CSS | Mejoran la experiencia mediante movimiento aplicado con moderación |
| Vite | Ejecuta y compila el proyecto durante el desarrollo |
| Git | Registra el historial de cambios realizados en el proyecto |
| GitHub | Respalda el repositorio y permite publicar sus versiones |

## Organización principal de archivos

```text
emprender-landing/
├── docs/
│   └── BOCETO.md
├── scss/
│   ├── _mixins.scss
│   ├── _variables.scss
│   ├── main.scss
│   └── main.css
├── src/
│   ├── formulario.ts
│   ├── main.ts
│   ├── modelos.ts
│   └── tipos.ts
├── index.html
├── REQUERIMIENTOS.md
├── README.md
├── package.json
└── tsconfig.json
```

## Funcionalidades dinámicas

La lógica desarrollada controla:

- El menú de navegación para dispositivos móviles.
- El desplazamiento hacia las secciones.
- Las animaciones de aparición de los elementos.
- La validación del formulario.
- La creación de objetos mediante clases.
- El manejo de información en formato JSON.

## Cómo ejecutar el proyecto

1. Clonar o descargar el repositorio.
2. Abrir la carpeta en Visual Studio Code.
3. Abrir la terminal integrada.
4. Instalar las dependencias:

```bash
npm install
```

5. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

6. Abrir en el navegador la dirección local mostrada por la terminal.

## Compilar la versión final

```bash
npm run build
```

La versión optimizada del sitio se genera en la carpeta `dist`.

## Autor

Jefte Alexander Gómez Rodas  
Desarrollo Frontend — INTECAP
