import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinListComponent } from './shoppin-list.component';

describe('ShoppinListComponent', () => {
  let component: ShoppinListComponent;
  let fixture: ComponentFixture<ShoppinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppinListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
