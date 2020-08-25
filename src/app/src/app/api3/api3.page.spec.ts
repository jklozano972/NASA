import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { API3Page } from './api3.page';

describe('API3Page', () => {
  let component: API3Page;
  let fixture: ComponentFixture<API3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ API3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(API3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
