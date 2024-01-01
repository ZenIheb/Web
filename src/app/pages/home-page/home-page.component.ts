import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private router: Router){}
  login(){
    this.router.navigate(['/login'])
  }
  signin(){
    this.router.navigate(['/signin'])
  }
  payement(){
    this.router.navigate(['/payement'])
  }
}

