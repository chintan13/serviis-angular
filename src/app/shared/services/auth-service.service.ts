import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';  // debug


@Injectable()
export class AuthService {

    constructor(private httpFactory: Http, private router: Router) { }

    //   login(username: string, password: string) {
    login() {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.httpFactory.get('/assets/mockdata/users.json', options)
            .map((res: Response) => {
                const body = res.json();
                console.log('body ', body);
                return body;

            });
    }

}
