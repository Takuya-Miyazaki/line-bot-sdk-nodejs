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

export class GroupUserProfileResponse {
    /**
    * User\'s display name
    */
    'displayName': string;
    /**
    * User ID
    */
    'userId': string;
    /**
    * Profile image URL. `https` image URL. Not included in the response if the user doesn\'t have a profile image.
    */
    'pictureUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "pictureUrl",
            "baseName": "pictureUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GroupUserProfileResponse.attributeTypeMap;
    }
}

