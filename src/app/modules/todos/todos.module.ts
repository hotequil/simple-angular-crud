import { NgModule } from '@angular/core';

import { TodosCreateComponent } from './create/todos-create.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodosUpdateComponent } from './update/todos-update.component';
import { BarrelModule } from '../../shared/helpers/barrel/barrel.module';

@NgModule({
    declarations: [
        TodosComponent,
        TodosCreateComponent,
        TodosUpdateComponent
    ],
    imports: [
        BarrelModule,
        TodosRoutingModule
    ]
})
export class TodosModule {}
