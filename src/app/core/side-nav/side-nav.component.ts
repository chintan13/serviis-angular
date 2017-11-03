import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import 'jquery-slimscroll';

declare var jQuery: any;

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, AfterViewInit {

    constructor(
        private router: Router
    ) {

    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();

        if (jQuery('body').hasClass('fixed-sidebar')) {
            jQuery('.sidebar-collapse').slimscroll({
                height: '100%'
            });
        }
    }

    activeRoute(routename: string): boolean {
        // console.log('activeRoute: ', this.router.url.indexOf(routename));
        return this.router.url.indexOf(routename) > -1;
    }

}
