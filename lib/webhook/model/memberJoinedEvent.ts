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
import { DeliveryContext } from "./deliveryContext";
import { Event } from "./event";
import { EventMode } from "./eventMode";
import { JoinedMembers } from "./joinedMembers";
import { Source } from "./source";

/**
 * Event object for when a user joins a group chat or multi-person chat that the LINE Official Account is in.
 */
import { EventBase } from "./models";
export type MemberJoinedEvent = EventBase & {
  type: "memberJoined";
  /**
   * Reply token used to send reply message to this event
   */
  replyToken: string /**/;
  /**
   */
  joined: JoinedMembers /**/;
};

export namespace MemberJoinedEvent {}
