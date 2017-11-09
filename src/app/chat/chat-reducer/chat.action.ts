import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Chat, ChatDetail } from '../models/chat';

export const ADD_TO_CHAT_CONTACT_LIST = 'ADD_TO_CHAT_CONTACT_LIST';
export const ADD_CHAT_DETAIL_LIST = 'ADD_CHAT_DETAIL_LIST';
export const ADD_MESSAGE_TO_CHAT_DETAIL_LIST = 'ADD_MESSAGE_TO_CHAT_DETAIL_LIST';
// export const DELETE_CHAT = 'DELETE_CHAT';


export class AddToChatContactList implements Action {
    readonly type = ADD_TO_CHAT_CONTACT_LIST;
    constructor(public params: Chat[]) { }
}

export class AddToChatDetailList implements Action {
    readonly type = ADD_CHAT_DETAIL_LIST;
    constructor(public params: ChatDetail[]) { }
}

// export class DeleteChat implements Action {
//     readonly type = DELETE_CHAT;
//     constructor(public params: any) { }
// }
export class AddMessageToChatDetailList implements Action {
    readonly type = ADD_MESSAGE_TO_CHAT_DETAIL_LIST;
    constructor(public params: any) { }
}

export type All = AddToChatContactList | AddToChatDetailList | AddMessageToChatDetailList;
