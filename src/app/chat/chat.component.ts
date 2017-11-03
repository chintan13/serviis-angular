import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatService } from './chat.service';



@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
    chatList: any;
    selectedID: any;
    constructor(private route: ActivatedRoute, private router: Router, private chatService: ChatService) {
        this.route.params.subscribe(params => {
            console.log(params);
        });
    }

    ngOnInit() {
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
        this.selectedID = item.id;
        this.router.navigate(['chat', item.id]);
    }

}
