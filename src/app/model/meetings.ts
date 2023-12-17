import { Time } from "@angular/common";

export class Meetings {
    id: number;
    name:string;
    type:string;
    date: string;
    time: string;
    joinurl: string;
    mo: string;

    constructor(id: number, name: string, type: string, date: string, time: string, joinurl: string, mo: string){
        this.id=id;
        this.name=name;
        this.type=type;
        this.date=date;
        this.time=time;
        this.joinurl=joinurl;
        this.mo=mo;
    }
}
