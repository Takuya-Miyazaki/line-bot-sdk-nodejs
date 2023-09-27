/**
 * Channel Access Token API
 * This document describes Channel Access Token API.
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Issued channel access token
 */
export type IssueChannelAccessTokenResponse = {
  /**
   * Channel access token.
   */
  accessToken: string /**/;
  /**
   * Amount of time in seconds from issue to expiration of the channel access token
   */
  expiresIn: number /**/;
  /**
   * A token type.
   */
  tokenType: string /* = 'Bearer'*/;
  /**
   * Unique key ID for identifying the channel access token.
   */
  keyId: string /**/;
};
