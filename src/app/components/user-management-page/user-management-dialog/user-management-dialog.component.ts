import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs';
import { User } from 'src/app/models/User';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-user-management-dialog',
  templateUrl: './user-management-dialog.component.html',
  styleUrls: ['./user-management-dialog.component.scss']
})
export class UserManagementDialogComponent {
  userRoles = ['ADMIN', 'USER'];
  formGroup!: FormGroup;
  currentUser!: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UserManagementDialogComponent>,
    private formBuilder: FormBuilder,
    private webApiService: WebApiService) {
  }

  ngOnInit(): void {
    this.currentUser = this.data.user;
    this.formGroup = this.formBuilder.group({
      usernameInput: [this.currentUser.username, Validators.required],
      emailInput: [this.currentUser.email, Validators.required],
      roleInput: [this.currentUser.role, Validators.required]
    });
  }

  saveUser(): void {
    this.currentUser.username = this.formGroup.controls['usernameInput'].value;
    this.currentUser.email = this.formGroup.controls['emailInput'].value;
    this.currentUser.role = this.formGroup.controls['roleInput'].value;

    this.webApiService.updateUser(this.currentUser)
      .pipe(take(1))
      .subscribe({
        next: (response: User) => this.currentUser = response,
        error: (error: HttpErrorResponse) => console.error(error.error.error)
      });

    this.dialogRef.close({ action: 'save', user: this.currentUser });
  }
}
