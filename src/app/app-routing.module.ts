import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent} from './components/dashboard/dashboard.component';
import { HotelBoardComponent } from './components/hotels/hotel.component';
import { AddHotelComponent } from './components/hotels/addhotels/addhotel.component';
import { MenulistComponent } from './components/hotels/menulist/menulist.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addhotels', component: AddHotelComponent },
  { path: 'restuarants', component: HotelBoardComponent},
  { path: 'menulist', component : MenulistComponent }
  //{ path: '**', component: PageNotFoundComponent }
  //{ path: 'detail/:id', component: HeroDetailComponent },
  //{ path: 'heroes', component: HeroesComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],  
    exports: [ RouterModule ],
})

export class AppRoutingModule {}

