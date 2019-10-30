import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeCreateComponent } from './shoe-create.component';

describe('ShoeCreateComponent', () => {
  let component: ShoeCreateComponent;
  let fixture: ComponentFixture<ShoeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
