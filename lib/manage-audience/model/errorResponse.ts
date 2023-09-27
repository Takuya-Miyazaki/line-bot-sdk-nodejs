/**
 * LINE Messaging API
 * This document describes LINE Messaging API.
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ErrorDetail } from "./errorDetail";

export type ErrorResponse = {
  /**
   * Message containing information about the error.
   */
  message: string /**/;
  /**
   * An array of error details. If the array is empty, this property will not be included in the response.
   */
  details?: Array<ErrorDetail> /**/;
};
