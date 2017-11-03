import { Component, OnInit, AfterViewInit, OnDestroy, } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../shared/services/auth-service.service';

import { Router } from '@angular/router';


declare var jQuery: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {


    loginform: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private _router: Router
    ) {
        this.loginform = formBuilder.group({
            'email': ['', Validators.compose([Validators.required, Validators.email])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });

        const user = localStorage.getItem('userDetails');
        if (user) {
            this._router.navigate(['/']);
        }

    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        jQuery('body').addClass('gray-bg');
    }

    ngOnDestroy() {
        jQuery('body').removeClass('gray-bg');
    }

    doLogin() {
        const formdata = this.loginform.value;
        console.log(formdata.email, formdata.password);
        this.authService.login()
            .subscribe((result) => {

                window.localStorage['userDetails'] = JSON.stringify(result);
                // console.log('result login', result);
                this._router.navigate(['/home']);

            }, (error: any) => {
                console.log('LoginComponent login fail: ' + error);
            });
    }

}
