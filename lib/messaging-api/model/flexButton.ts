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

export class FlexButton extends FlexComponent {
    'flex'?: number;
    'color'?: string;
    'style'?: FlexButton.StyleEnum;
    'action'?: Action;
    'gravity'?: FlexButton.GravityEnum;
    'margin'?: string;
    'position'?: FlexButton.PositionEnum;
    'offsetTop'?: string;
    'offsetBottom'?: string;
    'offsetStart'?: string;
    'offsetEnd'?: string;
    'height'?: FlexButton.HeightEnum;
    'adjustMode'?: FlexButton.AdjustModeEnum;
    'scaling'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "flex",
            "baseName": "flex",
            "type": "number"
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "string"
        },
        {
            "name": "style",
            "baseName": "style",
            "type": "FlexButton.StyleEnum"
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "Action"
        },
        {
            "name": "gravity",
            "baseName": "gravity",
            "type": "FlexButton.GravityEnum"
        },
        {
            "name": "margin",
            "baseName": "margin",
            "type": "string"
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "FlexButton.PositionEnum"
        },
        {
            "name": "offsetTop",
            "baseName": "offsetTop",
            "type": "string"
        },
        {
            "name": "offsetBottom",
            "baseName": "offsetBottom",
            "type": "string"
        },
        {
            "name": "offsetStart",
            "baseName": "offsetStart",
            "type": "string"
        },
        {
            "name": "offsetEnd",
            "baseName": "offsetEnd",
            "type": "string"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "FlexButton.HeightEnum"
        },
        {
            "name": "adjustMode",
            "baseName": "adjustMode",
            "type": "FlexButton.AdjustModeEnum"
        },
        {
            "name": "scaling",
            "baseName": "scaling",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FlexButton.attributeTypeMap);
    }
}

export namespace FlexButton {
    export enum StyleEnum {
        Primary = <any> 'primary',
        Secondary = <any> 'secondary',
        Link = <any> 'link'
    }
    export enum GravityEnum {
        Top = <any> 'top',
        Bottom = <any> 'bottom',
        Center = <any> 'center'
    }
    export enum PositionEnum {
        Relative = <any> 'relative',
        Absolute = <any> 'absolute'
    }
    export enum HeightEnum {
        Md = <any> 'md',
        Sm = <any> 'sm'
    }
    export enum AdjustModeEnum {
        ShrinkToFit = <any> 'shrink-to-fit'
    }
}
