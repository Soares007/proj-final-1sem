import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoresComponent } from './professores.component';

describe('ProfessoresComponent', () => {
  let component: ProfessoresComponent;
  let fixture: ComponentFixture<ProfessoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessoresComponent]
    });
    fixture = TestBed.createComponent(ProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
