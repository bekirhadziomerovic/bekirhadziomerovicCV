import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherprojectsComponent } from './otherprojects.component';

describe('OtherprojectsComponent', () => {
  let component: OtherprojectsComponent;
  let fixture: ComponentFixture<OtherprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
