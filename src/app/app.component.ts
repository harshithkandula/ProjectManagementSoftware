import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { WebmenuComponent } from './webmenu/webmenu.component';
import { ClientmanagementComponent } from './clientmanagement/clientmanagement.component';
import { Client } from './client';
import { MeetingsComponent } from './meetings/meetings.component';
import { MeetingsmanagementComponent } from './meetingsmanagement/meetingsmanagement.component';
import { Meetings } from './model/meetings';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ClientComponent, WebmenuComponent, ClientmanagementComponent, MeetingsComponent, MeetingsmanagementComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectmanagement';
}
