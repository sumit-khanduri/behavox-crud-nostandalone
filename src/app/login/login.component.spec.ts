import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {AppService} from "../app.service";
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {of} from "rxjs";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {provideRouter} from "@angular/router";

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AppService
  let mockToolBarService
  beforeEach(async () => {
    mockToolBarService = jasmine.createSpyObj(['authUser']);
    mockToolBarService.getCustomer.and.returnValue('jwtToken');
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [{provide: AppService, useValue: mockToolBarService}]

    })
    .compileComponents();
  service = TestBed.inject(AppService)
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
