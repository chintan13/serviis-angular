import { Chat, ChatDetail } from '../models/chat';
import { ActionReducer, Action } from '@ngrx/store';
import * as ChatActions from './chat.action';

export interface AppState {
    chatList: Array<Chat>;
}

/********************
    *** This reducer function is for CRUD oprations
 **********************/


export type Action = ChatActions.All;


export function chatContactListReducer(
    arrChatContactList: Array<Chat>[] = [], action) {
    console.log('chatListReducer', arrChatContactList);

    switch (action.type) {


        case ChatActions.ADD_TO_CHAT_CONTACT_LIST:
            return [...arrChatContactList, ...action.params];

        // case ChatActions.DELETE_CHAT:
        //     return arrChatContactList.filter(item => item.id !== action.params.id);

        default:
            return arrChatContactList;
    }
}


export function chatDetailReducer(
    arrChatDetail = [], action) {
    console.log('chatListReducer', arrChatDetail);

    switch (action.type) {

        case ChatActions.ADD_CHAT_DETAIL_LIST:
            arrChatDetail = Array.from(action.params);
            return [...arrChatDetail];

        case ChatActions.ADD_MESSAGE_TO_CHAT_DETAIL_LIST:
            return [...arrChatDetail, ...action.params];

        default:
            return arrChatDetail;
    }
}
