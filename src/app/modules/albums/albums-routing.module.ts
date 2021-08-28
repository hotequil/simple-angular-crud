import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumsComponent } from './albums.component';
import { AlbumsCreateComponent } from './create/albums-create.component';
import { AlbumsUpdateComponent } from './update/albums-update.component';

const routes: Routes = [
    {
        path: '',
        component: AlbumsComponent
    },
    {
        path: 'novo',
        component: AlbumsCreateComponent
    },
    {
        path: ':id',
        component: AlbumsUpdateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlbumsRoutingModule {}
