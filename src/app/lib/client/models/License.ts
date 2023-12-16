/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SimpleSeason } from './SimpleSeason';

export type License = {
    uuid: string;
    /**
     * Número de licencia.
     */
    number: number;
    season: SimpleSeason;
    /**
     * Estado de la licencia.
     */
    status?: string;
    /**
     * Club de la licencia.
     */
    club?: string | null;
    /**
     * Subcategoría de la licencia.
     */
    subcategory?: string | null;
    /**
     * Categoría de la licencia.
     */
    category?: string | null;
    /**
     * Modalidad de la licencia.
     */
    modality?: string | null;
    /**
     * Fecha de tramitación de la licencia.
     */
    processing_date?: string | null;
    /**
     * Fecha de anulación de la licencia.
     */
    annulation_date?: string | null;
};

