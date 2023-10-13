import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {
  @Output() public sideNavToggle = new EventEmitter();

  constructor(
    public authorizationService: AuthorizationService,
    private dialog: MatDialog) {
  }

  openLoginDialog(): void {
    this.dialog.open(LoginDialogComponent, {
      width: '400px',
      disableClose: true,
      enterAnimationDuration: 400,
      exitAnimationDuration: 400
    });
  }

  openSignupDialog(): void {
    this.dialog.open(SignupDialogComponent, {
      width: '400px',
      disableClose: true,
      enterAnimationDuration: 400,
      exitAnimationDuration: 400
    });
  }

  openSideNav(): void {
    this.sideNavToggle.emit();
  }

  logout(): void {
    this.authorizationService.logout();
  }
}
