import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlbumsService } from '../albums.service';
import { SnackBarService } from '../../../shared/services/snack-bar/snack-bar.service';
import { FormService } from '../../../shared/services/form/form.service';
import { Form } from '../../../shared/models/form';
import { Album } from '../../../shared/models/album';

@Component({
    selector: 'app-albums-create',
    templateUrl: '../form/albums-form.component.html',
    styleUrls: ['../form/albums-form.component.scss']
})
export class AlbumsCreateComponent implements Form{
    album: Album = { title: '' };
    loadingInfo = false;
    formService = FormService;

    constructor(
        private service: AlbumsService,
        private router: Router,
        private snackBar: SnackBarService
    ){}

    onSubmit(): void{
        this.service.create(this.album).subscribe(createdAlbum => {
            this.snackBar.open(`Criado álbum de id: ${createdAlbum.id}`);

            this.router.navigateByUrl('/albuns');
        });
    }
}
