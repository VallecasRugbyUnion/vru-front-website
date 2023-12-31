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
import type { GNero } from './GNero';
import {
    GNeroFromJSON,
    GNeroFromJSONTyped,
    GNeroToJSON,
} from './GNero';

/**
 * 
 * @export
 * @interface Me
 */
export interface Me {
    /**
     * 
     * @type {string}
     * @memberof Me
     */
    uuid: string;
    /**
     * Email del usuario.
     * @type {string}
     * @memberof Me
     */
    email: string;
    /**
     * 
     * @type {GNero}
     * @memberof Me
     */
    gender?: GNero | null;
    /**
     * 
     * @type {string}
     * @memberof Me
     */
    address: string;
    /**
     * Número de teléfono del usuario.
     * @type {string}
     * @memberof Me
     */
    phoneNumber?: string | null;
    /**
     * Fecha de nacimiento del usuario.
     * @type {Date}
     * @memberof Me
     */
    birthdate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof Me
     */
    nationality: string;
    /**
     * Campo que muestra si el usuario tiene alguna discapacidad.
     * @type {string}
     * @memberof Me
     */
    disability?: string | null;
}

/**
 * Check if a given object implements the Me interface.
 */
export function instanceOfMe(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "uuid" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "nationality" in value;

    return isInstance;
}

export function MeFromJSON(json: any): Me {
    return MeFromJSONTyped(json, false);
}

export function MeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Me {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'email': json['email'],
        'gender': !exists(json, 'gender') ? undefined : GNeroFromJSON(json['gender']),
        'address': json['address'],
        'phoneNumber': !exists(json, 'phone_number') ? undefined : json['phone_number'],
        'birthdate': !exists(json, 'birthdate') ? undefined : (json['birthdate'] === null ? null : new Date(json['birthdate'])),
        'nationality': json['nationality'],
        'disability': !exists(json, 'disability') ? undefined : json['disability'],
    };
}

export function MeToJSON(value?: Me | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'email': value.email,
        'gender': GNeroToJSON(value.gender),
        'address': value.address,
        'phone_number': value.phoneNumber,
        'birthdate': value.birthdate === undefined ? undefined : (value.birthdate === null ? null : value.birthdate.toISOString().substring(0,10)),
        'nationality': value.nationality,
        'disability': value.disability,
    };
}

