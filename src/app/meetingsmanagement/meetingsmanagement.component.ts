import { Component } from '@angular/core';
import { Meetings } from '../model/meetings';
import { CommonModule } from '@angular/common';
import { MeetingsService } from '../model/meetings.service';

@Component({
  selector: 'app-meetingsmanagement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meetingsmanagement.component.html',
  styleUrl: './meetingsmanagement.component.css'
})
export class MeetingsmanagementComponent {
  meetings!:Meetings[];
  meetingService: MeetingsService;

  constructor(meetingService: MeetingsService){
    this.meetingService=meetingService;
  }

  ngOnInit(): void {
    this.meetings=this.meetingService.getAllMeetings();
  }

  cancelMeeting():void{
    this.meetingService.cancelMeeting();
  }
}
