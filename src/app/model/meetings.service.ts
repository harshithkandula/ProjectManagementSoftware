import { Injectable } from '@angular/core';
import { Meetings } from './meetings';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {

  meetings!: Meetings[];

  constructor() {
    this.meetings=[
      new Meetings("Sun MicroSystems","Sprint review meeting","11/12/2023","14:30", "", "Yet to start"),
      new Meetings("Fine digital technologies","Sprint planning meeting", "20-01-2024", "11:30", "", "Yet to start"),
      new Meetings("Apile Info Solutions", "Cost Estimation Meeting", "14-01-2024", "18:00", "", "Cost estimated and finalised"),
      new Meetings("EasyOrder Inc", "Project Review Meeting", "04-02-2024", "17:30","", "Yet to Start"),
      new Meetings("EagleHunt Technologies", "", "25-02-2024", "13:00", "", "Yet to start"),
      new Meetings("HelloSky", "", "04-01-2024", "11:00", "", "Yet to Start")
    ]
   }

   getAllMeetings = (): Meetings[] => {
    return this.meetings;
   }

   addMeeting = (name: string, mt: string, date: string, time: string, jurl:string, mo: string):void => {
    let new_meeting: Meetings = new Meetings(name, mt, date, time, jurl, mo);
    this.meetings.push(new_meeting);
   }
}
