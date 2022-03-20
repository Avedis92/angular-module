import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Todo1Component } from './todo1/todo1.component';
import { Todo2Component } from './todo2/todo2.component';
import { routes } from './todoroute';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MainComponent,
    Todo1Component,
    Todo2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    MainComponent,
    Todo1Component,
    Todo2Component,
    RouterModule
  ]
})
export class TodosModule { }
