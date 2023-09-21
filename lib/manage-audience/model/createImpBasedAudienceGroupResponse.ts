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
import { AudienceGroupType } from './audienceGroupType';

/**
* Create audience for impression-based retargeting
*/
export class CreateImpBasedAudienceGroupResponse {
    /**
    * The audience ID.
    */
    'audienceGroupId'?: number;
    'type'?: AudienceGroupType;
    /**
    * The audience\'s name.
    */
    'description'?: string;
    /**
    * When the audience was created (in UNIX time).
    */
    'created'?: number;
    /**
    * The request ID that was specified when the audience was created.
    */
    'requestId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "audienceGroupId",
            "baseName": "audienceGroupId",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "AudienceGroupType"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "requestId",
            "baseName": "requestId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateImpBasedAudienceGroupResponse.attributeTypeMap;
    }
}

export namespace CreateImpBasedAudienceGroupResponse {
}
