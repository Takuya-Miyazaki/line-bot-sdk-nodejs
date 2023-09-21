/**
 * LIFF server API
 * LIFF Server API.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class LiffFeatures {
    /**
    * `true` if the LIFF app supports Bluetooth® Low Energy for LINE Things. `false` otherwise. 
    */
    'ble'?: boolean;
    /**
    * `true` to use the 2D code reader in the LIFF app. false otherwise. The default value is `false`. 
    */
    'qrCode'?: boolean = false;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ble",
            "baseName": "ble",
            "type": "boolean"
        },
        {
            "name": "qrCode",
            "baseName": "qrCode",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return LiffFeatures.attributeTypeMap;
    }
}

