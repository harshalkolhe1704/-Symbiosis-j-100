import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAddEditComponent } from './movie-add-edit.component';

describe('MovieAddEditComponent', () => {
  let component: MovieAddEditComponent;
  let fixture: ComponentFixture<MovieAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
