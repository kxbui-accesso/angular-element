import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularElementLibComponent } from './angular-element-lib.component';

describe('AngularElementLibComponent', () => {
  let component: AngularElementLibComponent;
  let fixture: ComponentFixture<AngularElementLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularElementLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularElementLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
