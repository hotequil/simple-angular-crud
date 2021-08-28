import { NgModule } from '@angular/core';

import { PostsCreateComponent } from './create/posts-create.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostsUpdateComponent } from './update/posts-update.component';
import { BarrelModule } from '../../shared/helpers/barrel/barrel.module';

@NgModule({
    declarations: [
        PostsComponent,
        PostsCreateComponent,
        PostsUpdateComponent
    ],
    imports: [
        BarrelModule,
        PostsRoutingModule
    ]
})
export class PostsModule {}
