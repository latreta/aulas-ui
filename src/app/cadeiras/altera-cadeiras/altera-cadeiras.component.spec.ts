import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraCadeirasComponent } from './altera-cadeiras.component';

describe('AlteraCadeirasComponent', () => {
  let component: AlteraCadeirasComponent;
  let fixture: ComponentFixture<AlteraCadeirasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteraCadeirasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteraCadeirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
