import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionDetailsComponent } from './election-details.component';
import { provideRouter } from '@angular/router';

describe('ElectionDetailsComponent', () => {
  let component: ElectionDetailsComponent;
  let fixture: ComponentFixture<ElectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectionDetailsComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
