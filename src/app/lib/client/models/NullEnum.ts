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

/**
 *
 * @export
 */
export const NullEnum = {
  Null: 'null',
} as const;
export type NullEnum = (typeof NullEnum)[keyof typeof NullEnum];

export function NullEnumFromJSON(json: any): NullEnum {
  return NullEnumFromJSONTyped(json, false);
}

export function NullEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): NullEnum {
  return json as NullEnum;
}

export function NullEnumToJSON(value?: NullEnum | null): any {
  return value as any;
}
