import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog' ;
import { ConfirmDialogComponent } from './components/shared/confirm-dialog/confirm-dialog.component';
import { ServiceSenhaService } from './services/service-senha.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formproject';

  name: string = ''
  lastName: string = ''
  userName: string = ''
  cpf: string = ''
  phone: string = ''
  adress: string = ''
  adressComplement: string =''
  password: string = ''
  passwordConfirm: string = ''


  error: boolean = false;
  auxiliarDisable: boolean = true;


  constructor (
    public dialog: MatDialog,
    private passWordValidate: ServiceSenhaService
  ){}
  
  submit(): void {
    console.log(`Name = ${this.name}`)
    console.log(`Lastname = ${this.lastName}`)

    
  }
  openDialog() {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, 
      {
        data: 
        {name: this.name,
        lastName: this.lastName,
        userName: this.userName,
        cpf:  this.cpf,
        phone: this.phone,
        adress: this.adress,
        adressComplement: this.adressComplement,
        password: this.password,
        passwordConfirm: this.passwordConfirm
        
    }})

    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog Result: ${result}`);
    })
    }

    passWordValidation(): void{
      this.error = this.passWordValidate.passwordConfirm(this.password,  this.passwordConfirm)
      this.error ? this.auxiliarDisable = false : this.auxiliarDisable = true;
     }

  }

