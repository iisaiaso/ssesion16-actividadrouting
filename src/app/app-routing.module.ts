import { MenuPeruComponent } from './components/menu-peru/menu-peru.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuChileComponent } from './components/menu-chile/menu-chile.component';
import { MenuUruguayComponent } from './components/menu-uruguay/menu-uruguay.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'peru',component:MenuPeruComponent},
  {path:'chile',component:MenuChileComponent},
  {path:'uruguay',component:MenuUruguayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
