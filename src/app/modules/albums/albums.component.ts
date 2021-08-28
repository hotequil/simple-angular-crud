import { Component, OnInit } from '@angular/core';

import { AlbumsService } from './albums.service';
import { SnackBarService } from '../../shared/services/snack-bar/snack-bar.service';
import { Album } from '../../shared/models/album';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
    albums: Album[] = [];
    albumsColumns = ['title', 'actions'];

    constructor(private service: AlbumsService, private snackBar: SnackBarService){}

    ngOnInit(): void {
        this.service.get().subscribe(albums => this.albums = albums);
    }

    delete(album: Album): void{
        const { id } = album;

        this.service.delete(id as number).subscribe(() => {
            this.snackBar.open(`Deletado álbum de id: ${id}`);

            this.albums = this.albums.filter(currentAlbum => currentAlbum.id !== id);
        });
    }
}
