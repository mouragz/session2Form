import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserNameValidators } from '../validators/usernameValidators';
@Component({
    selector: 'signup-form',
    templateUrl: '../../templates/signup-form.html',
})

export class SignUpFormComponent {
    /*
    // this for signup-form without-formBuilder  logic.
    export class SignUpFormComponent {
    signUpForm = new FormGroup({
        username: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required)
    })
      log(form: any) {
            console.log(form)
        }
        signUp() {
            console.log(this.signUpForm.value)
        }
    */

    // this for signup-form-with-formBuilder.html  logic.
    signUpForm: FormGroup;
    constructor(formBuilder: FormBuilder, ) {
        this.signUpForm = formBuilder.group({
            username: ['', Validators.compose([
                Validators.required,
                UserNameValidators.cannotContainSpace])],
            password: ['', Validators.required],
        });
    }

    log(form: any) {
        console.log(form)
    }

    signUp() {
        console.log(this.signUpForm)
       // console.log(this.signUpForm.value)
    }

}