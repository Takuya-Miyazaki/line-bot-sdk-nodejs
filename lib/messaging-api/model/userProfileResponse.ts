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

export class UserProfileResponse {
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
    /**
    * User\'s status message. Not included in the response if the user doesn\'t have a status message.
    */
    'statusMessage'?: string;
    /**
    * User\'s language, as a BCP 47 language tag. Not included in the response if the user hasn\'t yet consented to the LINE Privacy Policy.
    */
    'language'?: string;

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
        },
        {
            "name": "statusMessage",
            "baseName": "statusMessage",
            "type": "string"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UserProfileResponse.attributeTypeMap;
    }
}

