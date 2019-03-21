import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraCadeirasComponent } from './cadastra-cadeiras.component';

describe('CadastraCadeirasComponent', () => {
  let component: CadastraCadeirasComponent;
  let fixture: ComponentFixture<CadastraCadeirasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraCadeirasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraCadeirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
