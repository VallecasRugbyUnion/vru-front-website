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
 * @interface Register
 */
export interface Register {
    /**
     * Email del usuario.
     * @type {string}
     * @memberof Register
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof Register
     */
    password: string;
}

/**
 * Check if a given object implements the Register interface.
 */
export function instanceOfRegister(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function RegisterFromJSON(json: any): Register {
    return RegisterFromJSONTyped(json, false);
}

export function RegisterFromJSONTyped(json: any, ignoreDiscriminator: boolean): Register {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'password': json['password'],
    };
}

export function RegisterToJSON(value?: Register | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'password': value.password,
    };
}

