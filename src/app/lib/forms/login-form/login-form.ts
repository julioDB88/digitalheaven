import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../services/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  private authService = inject(AuthService);
  private router = inject(Router);
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.nonNullable.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.getRawValue())
        .subscribe({
          next: (response) => {

            if (response.success) {
              this.authService.setToken(response.token);
              this.router.navigate(['/admin']);
            }
          },
          error: (e) => {
            console.log('Login failed:', e);

          }
        });

    }


    //lamada al servicio
  }
}
