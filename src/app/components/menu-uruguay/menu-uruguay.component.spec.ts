import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUruguayComponent } from './menu-uruguay.component';

describe('MenuUruguayComponent', () => {
  let component: MenuUruguayComponent;
  let fixture: ComponentFixture<MenuUruguayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuUruguayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuUruguayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
