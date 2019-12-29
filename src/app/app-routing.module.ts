import { TodoComponent } from './todo/todo.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'person-list', component: PersonListComponent },
  { path: 'react-form', component: ReactFormComponent },
  { path: 'todo', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
