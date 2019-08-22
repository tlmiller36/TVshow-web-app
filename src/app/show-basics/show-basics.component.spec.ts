import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBasicsComponent } from './show-basics.component';

describe('ShowBasicsComponent', () => {
  let component: ShowBasicsComponent;
  let fixture: ComponentFixture<ShowBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
