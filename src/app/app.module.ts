import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { WebmenuComponent } from './webmenu/webmenu.component';
import { ClientmanagementComponent } from './clientmanagement/clientmanagement.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { MeetingsmanagementComponent } from './meetingsmanagement/meetingsmanagement.component';
import { ClientService } from './client.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [AppComponent, ClientComponent, WebmenuComponent, ClientmanagementComponent, MeetingsComponent, MeetingsmanagementComponent],
    providers:[ClientService],
    imports: [AppComponent, ClientComponent, WebmenuComponent, ClientmanagementComponent, MeetingsComponent, MeetingsmanagementComponent, FormsModule, ReactiveFormsModule],
    exports:[],
    bootstrap: []
})
export class AppModule { }