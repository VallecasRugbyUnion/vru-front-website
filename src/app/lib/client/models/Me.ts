/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BlankEnum } from './BlankEnum';
import type { GenderEnum } from './GenderEnum';
import type { NullEnum } from './NullEnum';

export type Me = {
    uuid: string;
    /**
     * Email del usuario.
     */
    email: string;
    /**
     * Género del usuario.
     *
     * * `M` - Hombre
     * * `F` - Mujer
     * * `O` - Otro
     */
    gender?: (GenderEnum | BlankEnum | NullEnum) | null;
    readonly address: string;
    /**
     * Número de teléfono del usuario.
     */
    phone_number?: string | null;
    /**
     * Fecha de nacimiento del usuario.
     */
    birthdate?: string | null;
    readonly nationality: string;
    /**
     * Campo que muestra si el usuario tiene alguna discapacidad.
     */
    disability?: string | null;
    /**
     * Url of the picture profile. When auth login it will come from there.
     */
    picture_url?: string;
};

