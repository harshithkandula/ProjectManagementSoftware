import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsmanagementComponent } from './meetingsmanagement.component';

describe('MeetingsmanagementComponent', () => {
  let component: MeetingsmanagementComponent;
  let fixture: ComponentFixture<MeetingsmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingsmanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetingsmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
