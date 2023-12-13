import { Time } from "@angular/common";

export class Meetings {
    name:string;
    type:string;
    date: string;
    time: string;
    joinurl: string;
    mo: string;

    constructor(name: string, type: string, date: string, time: string, joinurl: string, mo: string){
        this.name=name;
        this.type=type;
        this.date=date;
        this.time=time;
        this.joinurl=joinurl;
        this.mo=mo;
    }
}
