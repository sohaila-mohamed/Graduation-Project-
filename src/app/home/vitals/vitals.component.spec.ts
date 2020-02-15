import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VitalsComponent } from './vitals.component';

describe('VitalsComponent', () => {
  let component: VitalsComponent;
  let fixture: ComponentFixture<VitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitalsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
