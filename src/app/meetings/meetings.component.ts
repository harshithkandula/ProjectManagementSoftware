import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Meetings } from '../model/meetings';
import { MeetingsService } from '../model/meetings.service';

@Component({
  selector: 'app-meetings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.css'
})
export class MeetingsComponent {
  meetingForm!: FormGroup;

  isClientNameInvalid: boolean = false;
  isMeetingTypeInvalid: boolean = false;
  isDateInvalid: boolean = false;
  isTimeInvalid: boolean = false;
  isNumberOfParticipantsInvalid: boolean = false;

  meetings!: Meetings;
  meetingsService!: MeetingsService;

  constructor(private fb: FormBuilder, meetingsService: MeetingsService){
    this.meetingForm=this.fb.group(
      {
        clientName: ['',[Validators.required, Validators.minLength(2), Validators.pattern(/\d+$/g)]],
        meetingType: ['',[Validators.required]],
        date: ['',[Validators.required]],
        time: ['',[Validators.required]],
        NoMp: ['',[Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/), Validators.maxLength(2)]]
      }
    );
    this.meetingsService=meetingsService;
  }

  addMeeting(): void{
    this.meetingsService.addMeeting(this.meetingForm.value.clientName, this.meetingForm.value.meetingType, this.meetingForm.value.date, this.meetingForm.value.time, "", "");
  }
}
