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

export type GetFollowersResponse = {
  /**
   * An array of strings indicating user IDs of users that have added the LINE Official Account as a friend. Only users of LINE for iOS and LINE for Android are included in `userIds`.
   */
  userIds: Array<string> /**/;
  /**
   * A continuation token to get the next array of user IDs. Returned only when there are remaining user IDs that weren\'t returned in `userIds` in the original request. The number of user IDs in the `userIds` element doesn\'t have to reach the maximum number specified by `limit` for the `next` property to be included in the response.
   */
  next?: string /**/;
};
