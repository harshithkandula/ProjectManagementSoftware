import { Component } from '@angular/core';
import { Client } from '../client';
import { CommonModule } from '@angular/common';
import { ClientService } from '../client.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientmanagement',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './clientmanagement.component.html',
  styleUrl: './clientmanagement.component.css'
})
export class ClientmanagementComponent {
  client!: Client[];
  clientService: ClientService;

  constructor(clientService: ClientService){
    this.clientService=clientService;
      
  }

  ngOnInit(): void {
    this.client=this.clientService.getAllClients();
  }
}
