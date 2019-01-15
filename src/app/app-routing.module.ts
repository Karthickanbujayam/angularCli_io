import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// Import the components so they can be referenced in routes
import { DashboardComponent } from './dashboard/dashboard.component';

// The last route is the empty path route. This specifies
// the route to redirect to if the client side path is empty.
const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: DashboardComponent }
];

// Pass the configured routes to the forRoot() method
// to let the angular router know about our routes
// Export the imported RouterModule so router directives
// are available to the module that imports this AppRoutingModule
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
