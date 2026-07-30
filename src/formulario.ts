import { Lead } from './modelos.js';

import type {
    Resultado,
    TipoPlan
} from './tipos.js';

interface IContactoPlano {
    id: number;
    nombre: string;
    correo: string;
    plan: TipoPlan;
}

export class GestorContactos {
    #leads: Lead[] = [];
    #siguienteId = 1;

    #formulario: HTMLFormElement;
    #error: HTMLElement;
    #lista: HTMLElement;

    constructor(
        formularioSelector: string,
        errorSelector: string,
        listaSelector: string
    ) {
        const formulario =
            document.querySelector<HTMLFormElement>(
                formularioSelector
            );

        const error =
            document.querySelector<HTMLElement>(
                errorSelector
            );

        const lista =
            document.querySelector<HTMLElement>(
                listaSelector
            );

        if (!formulario || !error || !lista) {
            throw new Error(
                'No se encontraron los elementos del formulario'
            );
        }

        this.#formulario = formulario;
        this.#error = error;
        this.#lista = lista;

        this.#formulario.addEventListener(
            'submit',
            (evento: SubmitEvent): void => {
                this.#alEnviar(evento);
            }
        );
    }

    #validar(
        nombre: string,
        correo: string
    ): Resultado<string> {
        if (nombre.trim().length < 3) {
            return {
                ok: false,
                datos:
                    'El nombre debe tener al menos 3 caracteres'
            };
        }

        const formatoCorreo =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formatoCorreo.test(correo)) {
            return {
                ok: false,
                datos: 'Ingresa un correo válido'
            };
        }

        return {
            ok: true,
            datos: ''
        };
    }

    #alEnviar(evento: SubmitEvent): void {
        evento.preventDefault();

        const datos = new FormData(
            this.#formulario
        );

        const nombre = String(
            datos.get('nombre') ?? ''
        ).trim();

        const correo = String(
            datos.get('correo') ?? ''
        ).trim();

        const plan = String(
            datos.get('plan') ?? 'gratis'
        ) as TipoPlan;

        const resultado =
            this.#validar(nombre, correo);

        if (!resultado.ok) {
            this.#error.textContent =
                resultado.datos;

            return;
        }

        this.#error.textContent = '';

        const lead = new Lead(
            this.#siguienteId,
            nombre,
            correo,
            plan
        );

        this.#leads.push(lead);
        this.#siguienteId++;

        this.#renderizar();
        this.#formulario.reset();
    }

    #renderizar(): void {
        this.#lista.innerHTML = '';

        this.#leads.forEach((lead: Lead): void => {
            const elemento =
                document.createElement('li');

            elemento.textContent =
                lead.presentar();

            this.#lista.append(elemento);
        });
    }

    guardarJSON(): void {
        const contactos: IContactoPlano[] =
            this.#leads.map(
                (lead: Lead): IContactoPlano => ({
                    id: lead.id,
                    nombre: lead.nombre,
                    correo: lead.correoElectronico,
                    plan: lead.plan
                })
            );

        const json = JSON.stringify(
            contactos,
            null,
            2
        );

        const archivo = new Blob(
            [json],
            {
                type: 'application/json'
            }
        );

        const url =
            URL.createObjectURL(archivo);

        const enlace =
            document.createElement('a');

        enlace.href = url;
        enlace.download = 'contactos.json';
        enlace.click();

        URL.revokeObjectURL(url);
    }

    cargarJSON(texto: string): void {
        const contactos =
            JSON.parse(texto) as IContactoPlano[];

        this.#leads = contactos.map(
            (contacto: IContactoPlano): Lead =>
                new Lead(
                    contacto.id,
                    contacto.nombre,
                    contacto.correo,
                    contacto.plan
                )
        );

        const ids = contactos.map(
            (contacto: IContactoPlano): number =>
                contacto.id
        );

        this.#siguienteId =
            ids.length > 0
                ? Math.max(...ids) + 1
                : 1;

        this.#renderizar();
    }

    mostrarError(mensaje: string): void {
        this.#error.textContent = mensaje;
    }
}