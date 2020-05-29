import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefrenceVraiableComponent } from './template-refrence-vraiable.component';

describe('TemplateRefrenceVraiableComponent', () => {
  let component: TemplateRefrenceVraiableComponent;
  let fixture: ComponentFixture<TemplateRefrenceVraiableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRefrenceVraiableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefrenceVraiableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
