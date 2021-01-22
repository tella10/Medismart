/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MedformComponent } from './Medform.component';

describe('MedformComponent', () => {
  let component: MedformComponent;
  let fixture: ComponentFixture<MedformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
