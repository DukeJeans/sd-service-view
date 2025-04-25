import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUserAppComponent } from './test-user-app.component';

describe('TestUserAppComponent', () => {
  let component: TestUserAppComponent;
  let fixture: ComponentFixture<TestUserAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestUserAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestUserAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
