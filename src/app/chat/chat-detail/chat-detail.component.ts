import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
    selector: 'app-chat-detail',
    templateUrl: './chat-detail.component.html',
    styleUrls: ['./chat-detail.component.scss']
})
export class ChatDetailComponent implements OnInit {
    chatMessages: any;

    constructor(
        private route: ActivatedRoute, private chatService: ChatService
    ) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.chatService.getdetailedChat(params.id).subscribe((result) => {
                this.chatMessages = result;
            }, (error: any) => {
                console.log('ChatDetailComponent login fail: ' + error);
            });
        });

    }

}
