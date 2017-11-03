import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-core',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
    loginUser: any;
    constructor(private router: Router) {
        this.loginUser = JSON.parse(window.localStorage['userDetails'] || '{}');

        if (this.loginUser === {}) {
            this.router.navigate(['/login']);
        }
    }

    ngOnInit() {
    }

}
