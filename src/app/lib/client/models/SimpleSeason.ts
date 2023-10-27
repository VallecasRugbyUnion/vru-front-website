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
/**
 * 
 * @export
 * @interface SimpleSeason
 */
export interface SimpleSeason {
    /**
     * 
     * @type {string}
     * @memberof SimpleSeason
     */
    uuid: string;
    /**
     * Nombre de la temporada.
     * @type {string}
     * @memberof SimpleSeason
     */
    name: string;
}

/**
 * Check if a given object implements the SimpleSeason interface.
 */
export function instanceOfSimpleSeason(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "uuid" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function SimpleSeasonFromJSON(json: any): SimpleSeason {
    return SimpleSeasonFromJSONTyped(json, false);
}

export function SimpleSeasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimpleSeason {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'name': json['name'],
    };
}

export function SimpleSeasonToJSON(value?: SimpleSeason | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
    };
}

