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
import { RichMenuArea } from "./richMenuArea";
import { RichMenuSize } from "./richMenuSize";

export type RichMenuResponse = {
  /**
   * ID of a rich menu
   */
  richMenuId: string /**/;
  /**
   */
  size: RichMenuSize /**/;
  /**
   * `true` to display the rich menu by default. Otherwise, `false`.
   */
  selected: boolean /**/;
  /**
   * Name of the rich menu. This value can be used to help manage your rich menus and is not displayed to users.
   */
  name: string /**/;
  /**
   * Text displayed in the chat bar
   */
  chatBarText: string /**/;
  /**
   * Array of area objects which define the coordinates and size of tappable areas
   */
  areas: Array<RichMenuArea> /**/;
};
