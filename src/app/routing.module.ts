import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';
import { LoginComponent } from './login/login.component';
import { CoreComponent } from './core/core.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { ChatDetailComponent } from './chat/chat-detail/chat-detail.component';


export const routes: Routes =
    [
        { path: 'login', component: LoginComponent },

        {
            path: '',
            component: CoreComponent,
            canActivate: [AuthGuard],
            children: [
                { path: '', component: HomeComponent },
                { path: 'home', component: HomeComponent },
                {
                    path: 'chat',
                    component: ChatComponent,
                    children: [
                        { path: ':id', component: ChatDetailComponent }
                    ]
                }
            ]
        },
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})

export class RoutingModule { }

