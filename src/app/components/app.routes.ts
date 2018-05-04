import { RouterModule, Routes } from '@angular/router';

import {
AboutComponent,
PortafolioComponent,
PortfolioItemComponent
} from "./index.paginas";


const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'producto', component: PortfolioItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true});
