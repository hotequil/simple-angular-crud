import { NgModule } from '@angular/core';

import { AlbumsCreateComponent } from './create/albums-create.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { AlbumsUpdateComponent } from './update/albums-update.component';
import { BarrelModule } from '../../shared/helpers/barrel/barrel.module';

@NgModule({
    declarations: [
        AlbumsComponent,
        AlbumsCreateComponent,
        AlbumsUpdateComponent
    ],
    imports: [
        BarrelModule,
        AlbumsRoutingModule
    ]
})
export class AlbumsModule {}
