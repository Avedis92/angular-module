import { Routes } from '@angular/router';
import { Todo1Component } from './todo1/todo1.component';
import { Todo2Component } from './todo2/todo2.component';
import { MainComponent } from './main/main.component';

export const routes:Routes=[
    {path:'todo1',component:Todo1Component},
    {path:'todo2',component:Todo2Component},
    {path:'',component:MainComponent},
]