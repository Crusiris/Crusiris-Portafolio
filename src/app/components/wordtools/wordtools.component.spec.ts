import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordtoolsComponent } from './wordtools.component';

describe('WordtoolsComponent', () => {
  let component: WordtoolsComponent;
  let fixture: ComponentFixture<WordtoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordtoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
