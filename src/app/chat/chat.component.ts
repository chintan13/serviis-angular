import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ChatService } from './chat.service';


@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    chatList: any;
    selectedID: any;

    chatForm: FormGroup;
    chatMessage: string;

    // selectedUser: any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private chatService: ChatService
    ) {
        // this.route.params.subscribe(params => {
        //     console.log('route param: ', params);
        // });
        // console.log('snapshot: ', route.firstChild.snapshot.params['id']);

        this.chatForm = formBuilder.group({
            'chatMessage': ['', Validators.required]
        });
    }

    ngOnInit() {
        // console.log('snapshot: ', this.route.firstChild.snapshot.params['id']);
        if (this.route.firstChild) {
            this.selectedID = this.route.firstChild.snapshot.params['id'];
        }
        // console.log('snapshot: ', this.route.snapshot);
        //   this.authService.login(formdata.email, formdata.password)
        this.chatService.getChatList()
            .subscribe((result) => {

                this.chatList = result;
                console.log(this.chatList);
            }, (error: any) => {
                console.log('ChatComponent : ' + error);
            });
    }

    onClickDetail(item) {
        // this.selectedUser = item;
        this.selectedID = item.id;
        this.router.navigate(['chat', item.id]);
    }

    onClickSendChat() {
        if (this.selectedID) {
            console.log('onClickSendChat : ', this.chatMessage);
            this.chatService.sendChatMessage(this.selectedID, this.chatMessage);
            this.chatMessage = '';
        }
    }

    keypressHandler(event) {
        if (event.keyCode === 13) {
            this.onClickSendChat();
            return false;
        }
    }

}
