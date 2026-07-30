// Estructura de un contacto
export interface IContacto {
    readonly id: number;
    nombre: string;
    correo: string;
    mensaje: string;
}

// Valores permitidos para los planes
export type TipoPlan =
    | 'gratis'
    | 'emprendedor'
    | 'empresa';

// Tipo genérico para devolver resultados
export type Resultado<T> = {
    ok: boolean;
    datos: T;
};