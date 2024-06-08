import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  // fb = inject(FormBuilder);
  unsubscribe$: Subject<void>=new Subject<void>()
  constructor(private fb: FormBuilder, private appService: AppService, private router: Router) {
  }
  isSubmitted = false;
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {}

  onSubmit() {
    console.log(this.loginForm.value);
    const uName = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    if(uName && password){
      this.appService.authUser(uName, password).pipe(takeUntil(this.unsubscribe$)).subscribe({
        next: (userData) => {
          localStorage.setItem('jwtToken', userData.jwtToken);
          this.handleLogin()
        },
        error: (err) => {
          console.log('login error',err);
        },
        complete: () => {}
      })
    }
    this.isSubmitted = true;
  }

  handleLogin() {
    this.router.navigate(['associate']);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
