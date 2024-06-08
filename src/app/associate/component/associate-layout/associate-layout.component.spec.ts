import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateLayoutComponent } from './associate-layout.component';

describe('AssociateLayoutComponent', () => {
  let component: AssociateLayoutComponent;
  let fixture: ComponentFixture<AssociateLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssociateLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
