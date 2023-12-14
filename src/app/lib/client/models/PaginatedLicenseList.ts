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
import type { License } from './License';
import { LicenseFromJSON, LicenseFromJSONTyped, LicenseToJSON } from './License';

/**
 *
 * @export
 * @interface PaginatedLicenseList
 */
export interface PaginatedLicenseList {
  /**
   *
   * @type {number}
   * @memberof PaginatedLicenseList
   */
  count?: number;
  /**
   *
   * @type {string}
   * @memberof PaginatedLicenseList
   */
  next?: string | null;
  /**
   *
   * @type {string}
   * @memberof PaginatedLicenseList
   */
  previous?: string | null;
  /**
   *
   * @type {Array<License>}
   * @memberof PaginatedLicenseList
   */
  results?: Array<License>;
}

/**
 * Check if a given object implements the PaginatedLicenseList interface.
 */
export function instanceOfPaginatedLicenseList(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function PaginatedLicenseListFromJSON(json: any): PaginatedLicenseList {
  return PaginatedLicenseListFromJSONTyped(json, false);
}

export function PaginatedLicenseListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedLicenseList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    count: !exists(json, 'count') ? undefined : json['count'],
    next: !exists(json, 'next') ? undefined : json['next'],
    previous: !exists(json, 'previous') ? undefined : json['previous'],
    results: !exists(json, 'results') ? undefined : (json['results'] as Array<any>).map(LicenseFromJSON),
  };
}

export function PaginatedLicenseListToJSON(value?: PaginatedLicenseList | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    count: value.count,
    next: value.next,
    previous: value.previous,
    results: value.results === undefined ? undefined : (value.results as Array<any>).map(LicenseToJSON),
  };
}
