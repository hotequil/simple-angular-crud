import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostsCreateComponent } from './create/posts-create.component';
import { PostsUpdateComponent } from './update/posts-update.component';

const routes: Routes = [
    {
        path: '',
        component: PostsComponent
    },
    {
        path: 'nova',
        component: PostsCreateComponent
    },
    {
        path: ':id',
        component: PostsUpdateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule{}
