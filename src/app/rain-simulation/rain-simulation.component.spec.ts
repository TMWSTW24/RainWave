import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainSimulationComponent } from './rain-simulation.component';

describe('RainSimulationComponent', () => {
  let component: RainSimulationComponent;
  let fixture: ComponentFixture<RainSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RainSimulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RainSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
