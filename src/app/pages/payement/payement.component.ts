import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { setTimeout } from "timers/promises";


@Component({
  selector: 'app-payement',
  standalone: true,
  imports: [MatChipsModule,
            HomePageComponent,
            MatInputModule, 
            MatFormFieldModule,
            FormsModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatButtonModule,
            ],
  templateUrl: './payement.component.html',
  styleUrl: './payement.component.css'
})
export class PayementComponent {
  constructor(private router: Router){}
  login(){
    this.router.navigate(['/login'])
  }
  home(){
    this.router.navigate(['/homepage'])
  }
  submit(){
    this.router.navigate(['/homepage'])
    
  }
  
}
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout( ms));
}