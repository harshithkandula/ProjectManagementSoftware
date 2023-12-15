import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  clientForm!: FormGroup;

  clients!:Client;
  clientService!:ClientService;

  constructor(private fb:FormBuilder, clientService: ClientService){
    this.clientForm=this.fb.group(
      {
        clientName: ['',[Validators.required, Validators.minLength(2), Validators.pattern(/\d+$/g)]],
        operatingSectors: ['',[Validators.required]],
        headQuarters: ['',[Validators.required, Validators.minLength(2)]],
        state: ['',[Validators.required, Validators.minLength(2)]],
        pinCode: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
        chiefName: ['',[Validators.required, Validators.minLength(2)]],
        companyEmail: ['',[Validators.required, Validators.minLength(3), Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g)]],
        managerName: ['',[Validators.required, Validators.minLength(2)]],
        managerNo: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
        managerEmail: ['',[Validators.required, Validators.minLength(3), Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g)]],
        password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]],
        confirmpassword: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]]
      }
    );
    this.clientService=clientService;
  }

  addClient():void{
    this.clientService.addClient(this.clientForm.value.clientName, this.clientForm.value.managerName, this.clientForm.value.managerNo, this.clientForm.value.managerEmail)
  }

}
