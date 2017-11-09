
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthGuard } from './shared/services/auth.guard';

import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing.module';
import { CoreComponent } from './core/core.component';
import { TopMenuComponent } from './core/top-menu/top-menu.component';
import { FooterComponent } from './core/footer/footer.component';
import { SideNavComponent } from './core/side-nav/side-nav.component';

import { Http, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { AuthService } from './shared/services/auth-service.service';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { ChatDetailComponent } from './chat/chat-detail/chat-detail.component';
import { ChatService } from './chat/chat.service';

import { Store, StoreModule } from '@ngrx/store';
import { chatContactListReducer , chatDetailReducer } from './chat/chat-reducer/chat.reducer';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        CoreComponent,
        TopMenuComponent,
        SideNavComponent,
        FooterComponent,

        HomeComponent,
        ChatComponent,
        ChatDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RoutingModule,
        HttpModule,
        StoreModule.forRoot({
            chatListReducer  : chatContactListReducer,
            chatDetailReducer : chatDetailReducer
        }),
    ],
    providers: [
        AuthGuard,
        AuthService,
        ChatService,
    ],
    bootstrap: [AppComponent]

})
export class AppModule { }
