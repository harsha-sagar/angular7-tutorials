import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { reject } from 'q';

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
        'email': new FormControl(null, [Validators.required, Validators.email], this.validateForbiddenEmails)
      }),
      'gender': new FormControl(this.genders[0]),
      'hobbies': new FormArray([])
    });

    this.signupForm.valueChanges.subscribe(
      (formObj) => { console.log(formObj); })

    this.signupForm.statusChanges.subscribe(
      (formStatus) => { console.log(formStatus); })
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

  validateForbiddenEmails(formControl: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (formControl.value == 'test@test.com'){
          return resolve({'emailIsForbidden': true})
        } else {
          return resolve(null);
        }
      }, 1500);
    })
    return promise;
  }
}
