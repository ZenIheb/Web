import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl,FormGroupDirective,NgForm,Validators,FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FlexLayoutModule, 
            MatFormFieldModule,
            MatInputModule, 
            MatCardModule,
            MatButtonModule,
            MatIconModule,
            FormsModule,
            ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{
  constructor(private router: Router){}
  ngOnInit(): void { 
  }
  onLogin(){
    this.router.navigate(['/homepage']);
  }
  Users: any[] = [] ;
  UsersObj: any = {
    username: '',
    password: ''
  };
  hide = true ;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
 
}
