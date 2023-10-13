import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertBannerComponent } from './components/alert-banner/alert-banner.component';
import { AuthFailedPageComponent } from './components/auth-failed-page/auth-failed-page.component';
import { BottomFooterComponent } from './components/bottom-footer/bottom-footer.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ExpandCollapseComponent } from './components/expand-collapse/expand-collapse.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { SignupDialogComponent } from './components/signup-dialog/signup-dialog.component';
import { NavigationListComponent } from './components/top-navigation/navigation-list/navigation-list.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { UserManagementDialogComponent } from './components/user-management-page/user-management-dialog/user-management-dialog.component';
import { UserManagementPageComponent } from './components/user-management-page/user-management-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpandCollapseComponent,
    TopNavigationComponent,
    NavigationListComponent,
    BottomFooterComponent,
    AlertBannerComponent,
    LoginDialogComponent,
    SignupDialogComponent,
    UserManagementPageComponent,
    AuthFailedPageComponent,
    UserManagementDialogComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return sessionStorage.getItem('access_token');
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
