import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCryptosplicerComponent } from './why-cryptosplicer.component';

describe('WhyCryptosplicerComponent', () => {
  let component: WhyCryptosplicerComponent;
  let fixture: ComponentFixture<WhyCryptosplicerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyCryptosplicerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyCryptosplicerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
