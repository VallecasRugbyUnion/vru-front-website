/* tslint:disable */
/* eslint-disable */
/**
 * backend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Season } from './Season';
import {
    SeasonFromJSON,
    SeasonFromJSONTyped,
    SeasonToJSON,
} from './Season';

/**
 * 
 * @export
 * @interface PaginatedSeasonList
 */
export interface PaginatedSeasonList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedSeasonList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSeasonList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSeasonList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Season>}
     * @memberof PaginatedSeasonList
     */
    results?: Array<Season>;
}

/**
 * Check if a given object implements the PaginatedSeasonList interface.
 */
export function instanceOfPaginatedSeasonList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaginatedSeasonListFromJSON(json: any): PaginatedSeasonList {
    return PaginatedSeasonListFromJSONTyped(json, false);
}

export function PaginatedSeasonListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedSeasonList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(SeasonFromJSON)),
    };
}

export function PaginatedSeasonListToJSON(value?: PaginatedSeasonList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(SeasonToJSON)),
    };
}

