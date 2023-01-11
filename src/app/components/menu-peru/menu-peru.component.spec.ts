import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPeruComponent } from './menu-peru.component';

describe('MenuPeruComponent', () => {
  let component: MenuPeruComponent;
  let fixture: ComponentFixture<MenuPeruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPeruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
