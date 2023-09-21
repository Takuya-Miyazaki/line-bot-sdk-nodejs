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
import { RichMenuBatchOperation } from './richMenuBatchOperation';

export class RichMenuBatchRequest {
    /**
    * Array of Rich menu operation object...
    */
    'operations': Array<RichMenuBatchOperation>;
    /**
    * Key for retry. Key value is a string matching the regular expression pattern
    */
    'resumeRequestKey'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "operations",
            "baseName": "operations",
            "type": "Array<RichMenuBatchOperation>"
        },
        {
            "name": "resumeRequestKey",
            "baseName": "resumeRequestKey",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RichMenuBatchRequest.attributeTypeMap;
    }
}

