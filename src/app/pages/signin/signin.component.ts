import { Component ,OnInit} from '@angular/core';
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
  selector: 'app-signin',
  standalone: true,
  imports: [FlexLayoutModule, 
            MatFormFieldModule,
            MatInputModule, 
            MatCardModule,
            MatButtonModule,
            MatIconModule,
            FormsModule,
            ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SigninComponent implements OnInit{
  constructor(private router: Router){}
  onLogin(){
    this.Users.push(this.UsersObj.username);
    this.router.navigate(['/homepage']);
  }
  ngOnInit(): void { 
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