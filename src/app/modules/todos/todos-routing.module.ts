import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosComponent } from './todos.component';
import { TodosCreateComponent } from './create/todos-create.component';
import { TodosUpdateComponent } from './update/todos-update.component';

const routes: Routes = [
    {
        path: '',
        component: TodosComponent
    },
    {
        path: 'novo',
        component: TodosCreateComponent
    },
    {
        path: ':id',
        component: TodosUpdateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TodosRoutingModule {}
