import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraAulasComponent } from './cadastra-aulas.component';

describe('CadastraAulasComponent', () => {
  let component: CadastraAulasComponent;
  let fixture: ComponentFixture<CadastraAulasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraAulasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
