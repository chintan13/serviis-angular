import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { smoothlyMenu } from '../../app.helpers';

declare var jQuery: any;
@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
    constructor(
        private _router: Router
    ) {

    }


    ngOnInit() {
    }

    toggleNavigation(): void {
        jQuery('body').toggleClass('mini-navbar');
        smoothlyMenu();
    }

    logout() {
        window.localStorage.removeItem('userDetails');
        this._router.navigate(['/login']);
    }

}
