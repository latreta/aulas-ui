import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraProfessoresComponent } from './altera-professores.component';

describe('AlteraProfessoresComponent', () => {
  let component: AlteraProfessoresComponent;
  let fixture: ComponentFixture<AlteraProfessoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteraProfessoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteraProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
