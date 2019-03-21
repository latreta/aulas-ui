import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraSalasComponent } from './cadastra-salas.component';

describe('CadastraSalasComponent', () => {
  let component: CadastraSalasComponent;
  let fixture: ComponentFixture<CadastraSalasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraSalasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
