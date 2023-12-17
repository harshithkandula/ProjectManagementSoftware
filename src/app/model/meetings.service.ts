import { Injectable } from '@angular/core';
import { Meetings } from './meetings';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {

  meetings!: Meetings[];

  constructor() {
    this.meetings=[
      new Meetings(1,"Sun MicroSystems","Sprint review meeting","11/12/2023","14:30", "", "Yet to start"),
      new Meetings(2,"Fine digital technologies","Sprint planning meeting", "20-01-2024", "11:30", "", "Yet to start"),
      new Meetings(3, "Apile Info Solutions", "Cost Estimation Meeting", "14-01-2024", "18:00", "", "Cost estimated and finalised"),
      new Meetings(4, "EasyOrder Inc", "Project Review Meeting", "04-02-2024", "17:30","", "Yet to Start"),
      new Meetings(5, "EagleHunt Technologies", "", "25-02-2024", "13:00", "", "Yet to start"),
      new Meetings(6,"HelloSky", "", "04-01-2024", "11:00", "", "Yet to Start")
    ]
   }

   getAllMeetings = (): Meetings[] => {
    return this.meetings;
   }

   addMeeting = (name: string, mt: string, date: string, time: string):void => {
    let new_meeting: Meetings = new Meetings(this.meetings.length+1,name, mt, date, time, "", "Yet to Start");
    this.meetings.push(new_meeting);
   }

   delMeetings = (id: number):void => {
    this.meetings.splice(0, id-1);
   }
}
