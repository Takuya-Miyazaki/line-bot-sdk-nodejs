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

/* tslint:disable:no-unused-locals */
import { AcquireChatControlRequest } from '../model/acquireChatControlRequest';
import { DetachModuleRequest } from '../model/detachModuleRequest';
import { GetModulesResponse } from '../model/getModulesResponse';
import * as Types from "../../types";
import {ensureJSON} from "../../utils";
import {Readable} from "stream";

import { RequestFile } from './apis';
import HTTPClient from "../../http";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


interface httpClientConfig {
    baseURL?: string;
    // TODO support defaultHeaders?
}


export class LineModuleClient {
    private httpClient: HTTPClient;

    constructor(config: httpClientConfig = {}) {
        if (!config.baseURL) {
            config.baseURL = 'https://api.line.me';
        }
        this.httpClient = new HTTPClient(config);
    }

    /**
     * If the Standby Channel wants to take the initiative (Chat Control), it calls the Acquire Control API. The channel that was previously an Active Channel will automatically switch to a Standby Channel. 
     * @param chatId The &#x60;userId&#x60;, &#x60;roomId&#x60;, or &#x60;groupId&#x60;
     * @param acquireChatControlRequest 
     */
    public async acquireChatControl(chatId: string, acquireChatControlRequest?: AcquireChatControlRequest, ) : Promise<Types.MessageAPIResponseBase> {
        const res = this.httpClient.post("/v2/bot/chat/{chatId}/control/acquire");
        return ensureJSON(res);
    }
    /**
     * The module channel admin calls the Detach API to detach the module channel from a LINE Official Account.
     * @param detachModuleRequest 
     */
    public async detachModule(detachModuleRequest?: DetachModuleRequest, ) : Promise<Types.MessageAPIResponseBase> {
        const res = this.httpClient.post("/v2/bot/channel/detach");
        return ensureJSON(res);
    }
    /**
     * Gets a list of basic information about the bots of multiple LINE Official Accounts that have attached module channels.
     * @param start Value of the continuation token found in the next property of the JSON object returned in the response. If you can\&#39;t get all basic information about the bots in one request, include this parameter to get the remaining array. 
     * @param limit Specify the maximum number of bots that you get basic information from. The default value is 100. Max value: 100 
     */
    public async getModules(start?: string, limit?: number, ) : Promise<GetModulesResponse> {
        const res = this.httpClient.get("/v2/bot/list");
        return ensureJSON(res);
    }
    /**
     * To return the initiative (Chat Control) of Active Channel to Primary Channel, call the Release Control API. 
     * @param chatId The &#x60;userId&#x60;, &#x60;roomId&#x60;, or &#x60;groupId&#x60;
     */
    public async releaseChatControl(chatId: string, ) : Promise<Types.MessageAPIResponseBase> {
        const res = this.httpClient.post("/v2/bot/chat/{chatId}/control/release");
        return ensureJSON(res);
    }
}
