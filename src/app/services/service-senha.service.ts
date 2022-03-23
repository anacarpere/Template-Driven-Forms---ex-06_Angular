import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceSenhaService {

  passwordConfirm(password: string, passwordConfirm: string): boolean{
    if(password !== passwordConfirm){
      return true;
    } else {
      return false;
    }
  }



}
