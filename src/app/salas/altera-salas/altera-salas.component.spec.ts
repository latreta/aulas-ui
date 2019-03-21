import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraSalasComponent } from './altera-salas.component';

describe('AlteraSalasComponent', () => {
  let component: AlteraSalasComponent;
  let fixture: ComponentFixture<AlteraSalasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteraSalasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteraSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
