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
import { Message } from "./message";

export type ReplyMessageRequest = {
  /**
   * replyToken received via webhook.
   */
  replyToken: string /**/;
  /**
   * List of messages.
   */
  messages: Array<Message> /**/;
  /**
   * `true`: The user doesn’t receive a push notification when a message is sent. `false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device). The default value is false.
   */
  notificationDisabled?: boolean /* = false*/;
};
