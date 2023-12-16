/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedSeasonList } from '../models/PaginatedSeasonList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SeasonsService {

    /**
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedSeasonList
     * @throws ApiError
     */
    public static seasonsList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedSeasonList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/seasons/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

}
