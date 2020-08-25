import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { API2Page } from './api2.page';

describe('API2Page', () => {
  let component: API2Page;
  let fixture: ComponentFixture<API2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ API2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(API2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
