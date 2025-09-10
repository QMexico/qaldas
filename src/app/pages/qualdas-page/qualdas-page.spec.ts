import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualdasPage } from './qualdas-page';

describe('QualdasPage', () => {
  let component: QualdasPage;
  let fixture: ComponentFixture<QualdasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualdasPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualdasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
