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


import * as runtime from '../runtime';
import type {
  Me,
  PaginatedLicenseList,
  PaginatedMembershipList,
} from '../models/index';
import {
    MeFromJSON,
    MeToJSON,
    PaginatedLicenseListFromJSON,
    PaginatedLicenseListToJSON,
    PaginatedMembershipListFromJSON,
    PaginatedMembershipListToJSON,
} from '../models/index';

export interface LicensesListRequest {
    active?: boolean;
    limit?: number;
    offset?: number;
}

export interface MembershipsListRequest {
    active?: boolean;
    limit?: number;
    offset?: number;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     */
    async licensesListRaw(requestParameters: LicensesListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedLicenseList>> {
        const queryParameters: any = {};

        if (requestParameters.active !== undefined) {
            queryParameters['active'] = requestParameters.active;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("jwtAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/licenses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedLicenseListFromJSON(jsonValue));
    }

    /**
     */
    async licensesList(requestParameters: LicensesListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedLicenseList> {
        const response = await this.licensesListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async meRetrieveRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Me>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("jwtAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/me/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MeFromJSON(jsonValue));
    }

    /**
     */
    async meRetrieve(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Me> {
        const response = await this.meRetrieveRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async membershipsListRaw(requestParameters: MembershipsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedMembershipList>> {
        const queryParameters: any = {};

        if (requestParameters.active !== undefined) {
            queryParameters['active'] = requestParameters.active;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("jwtAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/memberships`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedMembershipListFromJSON(jsonValue));
    }

    /**
     */
    async membershipsList(requestParameters: MembershipsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedMembershipList> {
        const response = await this.membershipsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}