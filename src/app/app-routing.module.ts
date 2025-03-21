import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ToBeAddedPageComponent } from './pages/to-be-added-page/to-be-added-page.component';

export type URL_ROUTE = 'adopt'|'stories'|'about'|'blog'|'contact';

const routes: Routes = [
  {
    path: '',
    redirectTo:'contact',
    pathMatch:'full'
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    title:"Contact",
    data: { animation: 'ContactPage' }
  },
  {
    path: 'adopt',
    component: ToBeAddedPageComponent,
    data: { animation: 'ToBeAddedPage', title:'Abopt a kitten '},
    title:"To Be Added",
    
  },
  {
    path: 'stories',
    component: ToBeAddedPageComponent,
    data: { animation: 'ToBeAddedPage', title:'Stories '},
    title:"To Be Added",
    
  },
  {
    path: 'about',
    component: ToBeAddedPageComponent,
    data: { animation: 'ToBeAddedPage', title:'About us '},
    title:"To Be Added",
    
  },
  {
    path: 'blog',
    component: ToBeAddedPageComponent,
    data: { animation: 'ToBeAddedPage', title:'Blog  '},
    title:"To Be Added",
    
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
