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

export class OperatorDemographicFilter extends DemographicFilter {
    'and'?: Array<DemographicFilter>;
    'or'?: Array<DemographicFilter>;
    'not'?: DemographicFilter;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "and",
            "baseName": "and",
            "type": "Array<DemographicFilter>"
        },
        {
            "name": "or",
            "baseName": "or",
            "type": "Array<DemographicFilter>"
        },
        {
            "name": "not",
            "baseName": "not",
            "type": "DemographicFilter"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OperatorDemographicFilter.attributeTypeMap);
    }
}

