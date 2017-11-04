import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../chat.service';

import { Subscription } from 'rxjs/Subscription';

declare var $: any;

@Component({
    selector: 'app-chat-detail',
    templateUrl: './chat-detail.component.html',
    styleUrls: ['./chat-detail.component.scss']
})
export class ChatDetailComponent implements OnInit {

    @ViewChild('chatMessages') private chatMessagesContainer: ElementRef;
    arrChatMessages: any;

    subscriptionNewMessage: Subscription;

    constructor(
        private route: ActivatedRoute, private chatService: ChatService
    ) {
        this.subscriptionNewMessage = this.chatService.getMessageObservable()
            .subscribe(message => {
                this.arrChatMessages.push(message);
                setTimeout(() => {
                    let ele = $('.chat-discussion'); // document.querySelector('.chat-discussion');
                    // this.chatMessagesContainer.nativeElement.scrollIntoView(false);
                    // ele.scrollTo(100, ele.scrollHeight);
                    ele.animate({ scrollTop: ele.prop('scrollHeight')}, 1000);
                }, 1);

                // this.chatMessagesContainer.nativeElement.scrollTop = this.chatMessagesContainer.nativeElement.scrollHeight;
                // window.scrollTo(0, document.querySelector('.chat-discussion').scrollHeight);
            });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.chatService.getdetailedChat(params.id).subscribe((result) => {
                this.arrChatMessages = result;
            }, (error: any) => {
                console.log('ChatDetailComponent login fail: ' + error);
            });
        });

    }

}
