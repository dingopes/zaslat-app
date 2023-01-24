import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OzivImportComponent } from './oziv-import.component';

describe('OzivImportComponent', () => {
  let component: OzivImportComponent;
  let fixture: ComponentFixture<OzivImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OzivImportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OzivImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
