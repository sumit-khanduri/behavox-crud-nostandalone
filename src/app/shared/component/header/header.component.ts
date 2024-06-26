import { Component, inject } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 private router = inject(Router)
  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }
}
