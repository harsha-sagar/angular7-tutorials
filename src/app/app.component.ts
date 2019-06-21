import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenNames = ['Chris', 'Ana'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.validateForbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl(this.genders[0]),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  validateForbiddenNames(formControl: FormControl): {[s: string]: boolean} {
    if (this.forbiddenNames.indexOf(formControl.value) !== -1) {
      // incase invalid
      return {'nameIsForbidden': true}
    }
    // incase valid 
    return null
  }
}
