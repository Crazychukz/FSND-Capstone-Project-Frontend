import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';


const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {
    path: '', redirectTo: '/home', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    useHash: false,
    onSameUrlNavigation: 'reload',
    initialNavigation: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
