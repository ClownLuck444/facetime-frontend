import { Routes } from '@angular/router';
import { CheckInComponent } from './check-it/check-it.component';

export const routes: Routes = [
  { path: 'check-it', component: CheckInComponent },
  { path: '', redirectTo: 'check-it', pathMatch: 'full' },
];