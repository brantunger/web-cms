import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authorizationGuard } from './authorization.guard';
import { UserManagementPageComponent } from './components/user-management-page/user-management-page.component';
import { AuthFailedPageComponent } from './components/auth-failed-page/auth-failed-page.component';

const routes: Routes = [
  {
    path: 'users',
    canActivate: [authorizationGuard],
    component: UserManagementPageComponent,
    title: 'Dreadfall | User Management'
  },
  { path: 'auth', component: AuthFailedPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
