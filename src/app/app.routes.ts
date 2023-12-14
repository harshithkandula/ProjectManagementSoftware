import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientmanagementComponent } from './clientmanagement/clientmanagement.component';
import { ClientComponent } from './client/client.component';
import { MeetingsmanagementComponent } from './meetingsmanagement/meetingsmanagement.component';
import { MeetingsComponent } from './meetings/meetings.component';

export const routes: Routes = [
    {path: 'home', component: AppComponent},
    {path: 'ClientsList', component: ClientmanagementComponent},
    {path: 'AddClient', component: ClientComponent},
    {path: 'MeetingsList', component: MeetingsmanagementComponent},
    {path: 'AddMeetings', component: MeetingsComponent}
];
