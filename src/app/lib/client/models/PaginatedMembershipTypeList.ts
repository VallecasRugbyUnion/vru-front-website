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
import type { MembershipType } from './MembershipType';
import {
    MembershipTypeFromJSON,
    MembershipTypeFromJSONTyped,
    MembershipTypeToJSON,
} from './MembershipType';

/**
 * 
 * @export
 * @interface PaginatedMembershipTypeList
 */
export interface PaginatedMembershipTypeList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedMembershipTypeList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMembershipTypeList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMembershipTypeList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<MembershipType>}
     * @memberof PaginatedMembershipTypeList
     */
    results?: Array<MembershipType>;
}

/**
 * Check if a given object implements the PaginatedMembershipTypeList interface.
 */
export function instanceOfPaginatedMembershipTypeList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaginatedMembershipTypeListFromJSON(json: any): PaginatedMembershipTypeList {
    return PaginatedMembershipTypeListFromJSONTyped(json, false);
}

export function PaginatedMembershipTypeListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedMembershipTypeList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(MembershipTypeFromJSON)),
    };
}

export function PaginatedMembershipTypeListToJSON(value?: PaginatedMembershipTypeList | null): any {
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
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(MembershipTypeToJSON)),
    };
}

