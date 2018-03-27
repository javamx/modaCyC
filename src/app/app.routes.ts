import { Routes, RouterModule } from '@angular/router';
import {
  ProductoComponent,
  PortafolioComponent
} from './components/index.paginas';

const routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'producto', component: ProductoComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(routes, { useHash: true });
