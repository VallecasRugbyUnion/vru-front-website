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

import {
    BlankEnum,
    instanceOfBlankEnum,
    BlankEnumFromJSON,
    BlankEnumFromJSONTyped,
    BlankEnumToJSON,
} from './BlankEnum';
import {
    GenderEnum,
    instanceOfGenderEnum,
    GenderEnumFromJSON,
    GenderEnumFromJSONTyped,
    GenderEnumToJSON,
} from './GenderEnum';

/**
 * @type GNero
 * Género del usuario.
 * 
 * * `M` - Hombre
 * * `F` - Mujer
 * * `O` - Otro
 * @export
 */
export type GNero = BlankEnum | GenderEnum;

export function GNeroFromJSON(json: any): GNero {
    return GNeroFromJSONTyped(json, false);
}

export function GNeroFromJSONTyped(json: any, ignoreDiscriminator: boolean): GNero {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...BlankEnumFromJSONTyped(json, true), ...GenderEnumFromJSONTyped(json, true) };
}

export function GNeroToJSON(value?: GNero | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfBlankEnum(value)) {
        return BlankEnumToJSON(value as BlankEnum);
    }
    if (instanceOfGenderEnum(value)) {
        return GenderEnumToJSON(value as GenderEnum);
    }

    return {};
}
