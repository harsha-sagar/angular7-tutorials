import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;

  defaultQuestion = 'teacher';
  answer = '';
  genders = [ 'Male', 'Female' ];

  suggestUserName() {
    this.signupForm.setValue({
      userData: {
        username: 'Superuser',
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: this.genders[0]
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }
}
