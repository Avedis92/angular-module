import { Routes } from "@angular/router";

export const app_route:Routes=[
    {path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
    {path:'todo',loadChildren:()=>import('./todos/todos.module').then(m=>m.TodosModule)}
]