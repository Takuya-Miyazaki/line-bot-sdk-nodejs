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
import { Action } from './action';
import { FlexComponent } from './flexComponent';

export class FlexVideo extends FlexComponent {
    'url'?: string;
    'previewUrl'?: string;
    'altContent'?: FlexComponent;
    'aspectRatio'?: string;
    'action'?: Action;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "previewUrl",
            "baseName": "previewUrl",
            "type": "string"
        },
        {
            "name": "altContent",
            "baseName": "altContent",
            "type": "FlexComponent"
        },
        {
            "name": "aspectRatio",
            "baseName": "aspectRatio",
            "type": "string"
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "Action"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FlexVideo.attributeTypeMap);
    }
}

