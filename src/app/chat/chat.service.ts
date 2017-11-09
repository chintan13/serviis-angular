import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';  // debug

import { Subject } from 'rxjs/Subject';

import { Store } from '@ngrx/store';
import { AppState } from './chat-reducer/chat.reducer';
import * as ChatActions from './chat-reducer/chat.action';


@Injectable()
export class ChatService {

    private chatSubject = new Subject<any>();

    constructor(private httpFactory: Http, private router: Router, private store: Store<AppState>) { }

    //   login(username: string, password: string) {
    getChatList() {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Basic dmlld2Zvb3VzZXI6MjMzMXNkNTZhNDU2czNkMTRhczY='
        });
        const options = new RequestOptions({ headers: headers });

        return this.httpFactory.get('/assets/mockdata/chat/chat-list.json', options)
            .map((res: Response) => {
                const body = res.json();
                console.error('body ', body);

                return this.store.dispatch(
                    new ChatActions.AddToChatContactList(body)
                );

            });
    }

    getdetailedChat(id) {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Basic dmlld2Zvb3VzZXI6MjMzMXNkNTZhNDU2czNkMTRhczY='
        });
        const options = new RequestOptions({ headers: headers });

        return this.httpFactory.get('/assets/mockdata/chat/chat-detail/' + id + '.json', options)
            .map((res: Response) => {
                const body = res.json();
                console.log('body ', body);
                return this.store.dispatch(
                    new ChatActions.AddToChatDetailList(body)
                );
            });
    }

    sendChatMessage(id: number, message: string) {
        const msgJson = {
            id: '1',
            type: 'sent',
            message: message,
            avatar: '/assets/images/a6.jpg',
            date: 'Mar 21 11:44 PM'
        };
        return this.store.dispatch(
            new ChatActions.AddMessageToChatDetailList(msgJson)
        );
        // this.chatSubject.next(msgJson);
    }

    getMessageObservable(): Observable<any> {
        return this.chatSubject.asObservable();
    }

}
