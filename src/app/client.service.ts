import { Injectable } from '@angular/core';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients!:Client[];

  constructor() { 
    this.clients=[
      new Client(1, "Sun MicroSystems", "John Mccullum", "0014212177", "john.mccullum@yifm.com", ""),
      new Client(2, "Apile Info Solutions", "Henry sigile", "1334479601", "henry.sigile@yifm.com", ""),
      new Client(3, "Fine digital technologies", "Joseph brand", "6160338511", "joseph.brand@yifm.com", ""),
      new Client(4, "EasyOrder Inc", "Joseph Altruz", "3312577746","josephaltruz411@yifm.com", ""),
      new Client(5, "EagleHunt Technologies", "Almond steyn", "6619527619", "almondsteyn@yifm.com", ""),
      new Client(6, "HelloSky", "charan dev", "7901224415", "devcharan313@yifm.com", "")
    ]
  }

  getAllClients = ():Client[] => {
    return this.clients;
  }

  addClient = (name: string, mname: string, mno: string, mmail: string):void => {
    console.log("Inside Client Service Add Product");
    let new_client: Client = new Client(this.clients.length+1, name, mname, mno,mmail, "");
    this.clients.push(new_client);
  }
}
