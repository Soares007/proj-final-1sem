import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'teacher', component: ProfessoresComponent},
  {path: 'student', component: AlunosComponent},
  { path: 'studentDetails/:id', component: AlunosFormComponent},
  {path: 'createStudent', component: AlunosFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
