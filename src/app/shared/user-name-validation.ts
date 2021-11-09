import { AbstractControl, Validators } from "@angular/forms";
/*
export function forbbudenNameValidation(control :AbstractControl)
//abstractcontrol can used of now which value are recived 
//control is recived the value from form 
:{[key:string]:any} |null
//key is string return the values  and any  and null is accept any type 
{
    //admin  is not accept the admin name from field
    //test is use of test the input control.value name is equal to  a value
    const forbbiden= /admin/.test(control.value);
    return forbbiden  ?{ 'forbbiden': {value :control.value} } : null;
    // return the forbbiden  to validation  file 
}*/

export function namevalidation(forbbidenName:RegExp):Validators{
    //RegExp is use to accept and check input field any value and check the value is equali to validation ts input
  return  (control :AbstractControl):{[key:string]:any} |null =>{
    const forbbiden= forbbidenName.test(control.value);
    return forbbiden  ? { 'forbbiden': {value :control.value} } : null;
  };
}