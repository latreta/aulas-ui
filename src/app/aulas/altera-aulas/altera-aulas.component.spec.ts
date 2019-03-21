import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraAulasComponent } from './altera-aulas.component';

describe('AlteraAulasComponent', () => {
  let component: AlteraAulasComponent;
  let fixture: ComponentFixture<AlteraAulasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteraAulasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteraAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
