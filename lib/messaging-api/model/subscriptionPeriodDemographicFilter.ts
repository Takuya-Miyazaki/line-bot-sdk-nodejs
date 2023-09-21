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
import { SubscriptionPeriodDemographic } from './subscriptionPeriodDemographic';

export class SubscriptionPeriodDemographicFilter extends DemographicFilter {
    'gte'?: SubscriptionPeriodDemographic;
    'lt'?: SubscriptionPeriodDemographic;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "gte",
            "baseName": "gte",
            "type": "SubscriptionPeriodDemographic"
        },
        {
            "name": "lt",
            "baseName": "lt",
            "type": "SubscriptionPeriodDemographic"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SubscriptionPeriodDemographicFilter.attributeTypeMap);
    }
}

export namespace SubscriptionPeriodDemographicFilter {
}
