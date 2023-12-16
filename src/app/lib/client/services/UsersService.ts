/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Me } from '../models/Me';
import type { PaginatedLicenseList } from '../models/PaginatedLicenseList';
import type { PaginatedMembershipList } from '../models/PaginatedMembershipList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * @param active
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedLicenseList
     * @throws ApiError
     */
    public static licensesList(
        active?: boolean,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedLicenseList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/licenses',
            query: {
                'active': active,
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @returns Me
     * @throws ApiError
     */
    public static meRetrieve(): CancelablePromise<Me> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/me/',
        });
    }

    /**
     * @param active
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedMembershipList
     * @throws ApiError
     */
    public static membershipsList(
        active?: boolean,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedMembershipList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/memberships',
            query: {
                'active': active,
                'limit': limit,
                'offset': offset,
            },
        });
    }

}
