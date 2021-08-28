import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'postagens',
        loadChildren: () => import('./modules/posts/posts.module').then(module => module.PostsModule),
        data: {
            toolbar: "Postagens"
        }
    },
    {
        path: 'albuns',
        loadChildren: () => import('./modules/albums/albums.module').then(module => module.AlbumsModule),
        data: {
            toolbar: "Álbuns"
        }
    },
    {
        path: 'todos',
        loadChildren: () => import('./modules/todos/todos.module').then(module => module.TodosModule),
        data: {
            toolbar: "TODO's"
        }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'postagens'
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'postagens'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
