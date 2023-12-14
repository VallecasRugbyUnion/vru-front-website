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
import type { TokenObtainPair, TokenRefresh, TokenVerify } from '../models/index';
import {
  TokenObtainPairFromJSON,
  TokenObtainPairToJSON,
  TokenRefreshFromJSON,
  TokenRefreshToJSON,
  TokenVerifyFromJSON,
  TokenVerifyToJSON,
} from '../models/index';

export interface TokenLoginCreateRequest {
  tokenObtainPair: TokenObtainPair;
}

export interface TokenRefreshCreateRequest {
  tokenRefresh: TokenRefresh;
}

export interface TokenVerifyCreateRequest {
  tokenVerify: TokenVerify;
}

/**
 *
 */
export class TokenApi extends runtime.BaseAPI {
  /**
   * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
   */
  async tokenLoginCreateRaw(
    requestParameters: TokenLoginCreateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<TokenObtainPair>> {
    if (requestParameters.tokenObtainPair === null || requestParameters.tokenObtainPair === undefined) {
      throw new runtime.RequiredError(
        'tokenObtainPair',
        'Required parameter requestParameters.tokenObtainPair was null or undefined when calling tokenLoginCreate.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/api/token/login/`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: TokenObtainPairToJSON(requestParameters.tokenObtainPair),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue => TokenObtainPairFromJSON(jsonValue));
  }

  /**
   * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
   */
  async tokenLoginCreate(
    requestParameters: TokenLoginCreateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<TokenObtainPair> {
    const response = await this.tokenLoginCreateRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
   */
  async tokenRefreshCreateRaw(
    requestParameters: TokenRefreshCreateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<TokenRefresh>> {
    if (requestParameters.tokenRefresh === null || requestParameters.tokenRefresh === undefined) {
      throw new runtime.RequiredError(
        'tokenRefresh',
        'Required parameter requestParameters.tokenRefresh was null or undefined when calling tokenRefreshCreate.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/api/token/refresh/`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: TokenRefreshToJSON(requestParameters.tokenRefresh),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue => TokenRefreshFromJSON(jsonValue));
  }

  /**
   * Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
   */
  async tokenRefreshCreate(
    requestParameters: TokenRefreshCreateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<TokenRefresh> {
    const response = await this.tokenRefreshCreateRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Takes a token and indicates if it is valid.  This view provides no information about a token\'s fitness for a particular use.
   */
  async tokenVerifyCreateRaw(
    requestParameters: TokenVerifyCreateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<TokenVerify>> {
    if (requestParameters.tokenVerify === null || requestParameters.tokenVerify === undefined) {
      throw new runtime.RequiredError(
        'tokenVerify',
        'Required parameter requestParameters.tokenVerify was null or undefined when calling tokenVerifyCreate.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/api/token/verify/`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: TokenVerifyToJSON(requestParameters.tokenVerify),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue => TokenVerifyFromJSON(jsonValue));
  }

  /**
   * Takes a token and indicates if it is valid.  This view provides no information about a token\'s fitness for a particular use.
   */
  async tokenVerifyCreate(
    requestParameters: TokenVerifyCreateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<TokenVerify> {
    const response = await this.tokenVerifyCreateRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
