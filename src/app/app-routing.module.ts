import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { HeaderComponent } from './components/header/header.component';
import { WordtoolsComponent } from './components/wordtools/wordtools.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
{path: 'home', component:HeaderComponent},
{path: 'about', component:AboutmeComponent},
{path: 'tools', component:WordtoolsComponent},
{path: 'projects', component:ProjectsComponent},
{path: 'contact', component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
