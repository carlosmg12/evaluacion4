import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionNotaComponent } from './edicion-nota.component';

describe('EdicionNotaComponent', () => {
  let component: EdicionNotaComponent;
  let fixture: ComponentFixture<EdicionNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionNotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
