import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustommersComponent } from './custommers.component';

describe('CustommersComponent', () => {
  let component: CustommersComponent;
  let fixture: ComponentFixture<CustommersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustommersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustommersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
