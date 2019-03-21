import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCadeirasComponent } from './lista-cadeiras.component';

describe('ListaCadeirasComponent', () => {
  let component: ListaCadeirasComponent;
  let fixture: ComponentFixture<ListaCadeirasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCadeirasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCadeirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
