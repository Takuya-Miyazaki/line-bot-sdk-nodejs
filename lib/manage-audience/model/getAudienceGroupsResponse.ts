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
import { AudienceGroup } from './audienceGroup';

/**
* Gets data for more than one audience.
*/
export class GetAudienceGroupsResponse {
    /**
    * An array of audience data. If there are no audiences that match the specified filter, an empty array will be returned.
    */
    'audienceGroups'?: Array<AudienceGroup>;
    /**
    * true when this is not the last page.
    */
    'hasNextPage'?: boolean;
    /**
    * The total number of audiences that can be returned with the specified filter.
    */
    'totalCount'?: number;
    /**
    * Of the audiences you can get with the specified filter, the number of audiences with the update permission set to READ_WRITE.
    */
    'readWriteAudienceGroupTotalCount'?: number;
    /**
    * The current page number.
    */
    'page'?: number;
    /**
    * The maximum number of audiences on the current page.
    */
    'size'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "audienceGroups",
            "baseName": "audienceGroups",
            "type": "Array<AudienceGroup>"
        },
        {
            "name": "hasNextPage",
            "baseName": "hasNextPage",
            "type": "boolean"
        },
        {
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number"
        },
        {
            "name": "readWriteAudienceGroupTotalCount",
            "baseName": "readWriteAudienceGroupTotalCount",
            "type": "number"
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GetAudienceGroupsResponse.attributeTypeMap;
    }
}

