import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChileComponent } from './menu-chile.component';

describe('MenuChileComponent', () => {
  let component: MenuChileComponent;
  let fixture: ComponentFixture<MenuChileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuChileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuChileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
