import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManzanaComponent } from './manzana.component';

describe('ManzanaComponent', () => {
  let component: ManzanaComponent;
  let fixture: ComponentFixture<ManzanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManzanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManzanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
