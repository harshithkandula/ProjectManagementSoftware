import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchpassword : ValidatorFn = (control: AbstractControl):ValidationErrors | null => {
    let Password = control.get('password');
    let ConfirmPassword = control.get('confirmpassword');

    if(Password && ConfirmPassword && Password?.value != ConfirmPassword?.value){
        return{
            passwordmatcherror : true
        }
    }
    return null;
}