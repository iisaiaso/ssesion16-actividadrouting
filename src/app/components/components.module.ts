import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MenuPeruComponent } from './menu-peru/menu-peru.component';
import { MenuChileComponent } from './menu-chile/menu-chile.component';
import { MenuUruguayComponent } from './menu-uruguay/menu-uruguay.component';
import { RouterLink, RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    MenuPeruComponent,
    MenuChileComponent,
    MenuUruguayComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    MenuPeruComponent,
    MenuChileComponent,
    MenuUruguayComponent
  ]
})
export class ComponentsModule { }
