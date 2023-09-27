/**
 * Webhook Type Definition
 * Webhook event definition of the LINE Messaging API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ThingsContent } from "./thingsContent";

import { ThingsContentBase } from "./models";
export type LinkThingsContent = ThingsContentBase & {
  type: "link";
  /**
   * Device ID of the device that has been linked with LINE.
   */
  deviceId: string /**/;
};
