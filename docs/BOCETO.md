# Boceto de la landing page

Este documento representa la distribución general de las secciones de la landing page para emprendedores y su adaptación a distintos tamaños de pantalla.

## Orden general de las secciones

```mermaid
flowchart TD
    A["Encabezado y menú"] --> B["Hero y llamado a la acción"]
    B --> C["Recursos y beneficios"]
    C --> D["Testimonios y planes"]
    D --> E["Formulario de contacto"]
    E --> F["Pie de página"]
```

## Boceto para computadora

| Encabezado |
|---|
| Logotipo a la izquierda y menú de navegación a la derecha |

| Hero |
|---|
| Título principal, descripción y botón de llamado a la acción |

| Recursos y beneficios |
|---|
| Tres tarjetas distribuidas horizontalmente |

| Testimonios y planes |
|---|
| Tarjetas organizadas en columnas |

| Formulario de contacto |
|---|
| Campos de nombre, correo y plan, acompañados del botón de registro |

| Pie de página |
|---|
| Información final y enlaces del sitio |

## Boceto para celular

En dispositivos móviles, todos los elementos se organizan verticalmente para facilitar la lectura y la navegación.

```mermaid
flowchart TD
    A["Logotipo y botón de menú"] --> B["Menú desplegable"]
    B --> C["Hero: título, texto y botón"]
    C --> D["Tarjeta de recurso 1"]
    D --> E["Tarjeta de recurso 2"]
    E --> F["Tarjeta de recurso 3"]
    F --> G["Testimonios y planes"]
    G --> H["Formulario"]
    H --> I["Pie de página"]
```

## Comportamiento responsivo

- En celular, las tarjetas aparecen una debajo de otra.
- En tableta, las tarjetas pueden distribuirse en dos columnas.
- En computadora, las tarjetas se muestran en tres columnas.
- El menú se convierte en un botón desplegable en pantallas pequeñas.
- Los textos, botones y formularios se ajustan al ancho disponible.
- Ningún elemento debe salirse horizontalmente de la pantalla.