import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaldasPage } from './qaldas-page';

describe('QualdasPage', () => {
  let component: QaldasPage;
  let fixture: ComponentFixture<QaldasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QaldasPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaldasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
