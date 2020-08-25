import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { API1Page } from './api1.page';

describe('API1Page', () => {
  let component: API1Page;
  let fixture: ComponentFixture<API1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ API1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(API1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
