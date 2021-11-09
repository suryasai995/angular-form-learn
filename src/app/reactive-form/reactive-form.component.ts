import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../shared/password-validation';
import { namevalidation } from '../shared/user-name-validation';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent  {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
          acceptTerms: [false, Validators.requiredTrue]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

      this.onReset();
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}



  /*
  registerFrom= new FormGroup({
    userName : new FormControl(''),
    passWord : new FormControl(''),
    confrimPassword : new FormControl(''),
    address : new FormGroup({
      city: new FormControl(''),
      contry : new FormControl(''),
      zipcode : new FormControl('')
    })

  });

  loadvalues(){

    this.registerFrom.setValue({
      //setValue is strick mode need to installize all fields init if we miss address group value error at console
      //patch method is use instant of setValue
      userName : 'surya',
    passWord : 'ssss',
    confrimPassword :'jhgjg',
    address :{
    city: 'rjy',
      contry : 'india',
      zipcode :'533126'}
    });
  }
  */
 
 
  


