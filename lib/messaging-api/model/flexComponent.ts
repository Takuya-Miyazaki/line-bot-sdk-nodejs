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

export class FlexComponent {
    'type': string;

    static discriminator: string | undefined = "type";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FlexComponent.attributeTypeMap;
    }
}

