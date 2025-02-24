import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  userList: string[] = ['Forms', 'templateForms', 'reactiveforms']
  loggedUserData: any;

  router = inject(Router);

  constructor() {
    const loggedData = localStorage.getItem("loginUser")
    if (loggedData != null) {
      this.loggedUserData = JSON.parse(loggedData);
    }
  }

  logOff() {
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('login');
  }

}
