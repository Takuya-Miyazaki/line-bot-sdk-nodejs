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

import { RequestFile } from './models';

/**
* The current status. One of:  `ongoing`: Rich menu batch control is in progress. `succeeded`: Rich menu batch control is complete. `failed`: Rich menu batch control failed.           This means that the rich menu for one or more users couldn\'t be controlled.            There may also be users whose operations have been successfully completed. 
*/
export enum RichMenuBatchProgressPhase {
    Ongoing = <any> 'ongoing',
    Succeeded = <any> 'succeeded',
    Failed = <any> 'failed'
}
