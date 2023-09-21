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
import { DemographicFilter } from './demographicFilter';
import { GenderDemographic } from './genderDemographic';

export class GenderDemographicFilter extends DemographicFilter {
    'oneOf'?: Array<GenderDemographic>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "oneOf",
            "baseName": "oneOf",
            "type": "Array<GenderDemographic>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GenderDemographicFilter.attributeTypeMap);
    }
}

