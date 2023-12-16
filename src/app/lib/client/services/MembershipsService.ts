/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedMembershipTypeList } from '../models/PaginatedMembershipTypeList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MembershipsService {

    /**
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedMembershipTypeList
     * @throws ApiError
     */
    public static membershipTypesList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedMembershipTypeList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/membership_types',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

}
