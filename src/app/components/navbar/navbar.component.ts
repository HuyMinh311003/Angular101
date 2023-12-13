import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  imageUrl = '../../../assets/rinko.png'

  isLogged = false;

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
  }
}
