import { Component }from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId : module.id,
    selector : 'dashboard-component',
    templateUrl : 'dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent {
    
    constructor(private route: ActivatedRoute, private router: Router  ){

    }
    showRestaurants() {
        console.log('Show the Menu Bro.');
        this.router.navigate(['menulist']);
    };
}