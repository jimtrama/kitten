import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ToBeAddedPageComponent } from './pages/to-be-added-page/to-be-added-page.component';



const routes: Routes = [
  {
    path: 'contact',
    component: ContactPageComponent,
    title:"Contact",
    data: { animation: 'ContactPage' }
  },
  {
    path: 'see',
    component: ToBeAddedPageComponent,
    data: { animation: 'ToBeAddedPage' },
    title:"Home",
    
  },
  {
    path: '**',
    component:NotFoundPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
