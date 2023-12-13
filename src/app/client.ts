export class Client {
    id: number;
    name:string;
    cm_name:string;
    ctnumber:string;
    cm_email:string;
    url:string;
    constructor(id: number, name:string, cm_name:string, ctnumber:string, cm_email:string, url:string){
        this.id=id;
        this.name=name;
        this.cm_name=cm_name;
        this.ctnumber=ctnumber;
        this.cm_email=cm_email;
        this.url=url;
    }
}
