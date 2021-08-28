import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { finalize, switchMap, take } from 'rxjs/operators';

import { AlbumsService } from '../albums.service';
import { SnackBarService } from '../../../shared/services/snack-bar/snack-bar.service';
import { FormService } from '../../../shared/services/form/form.service';
import { Form } from '../../../shared/models/form';
import { Album } from '../../../shared/models/album';

@Component({
    selector: 'app-albums-update',
    templateUrl: '../form/albums-form.component.html',
    styleUrls: ['../form/albums-form.component.scss']
})
export class AlbumsUpdateComponent implements OnInit, Form{
    album: Album = { title: '' };
    loadingInfo = true;
    formService = FormService;

    constructor(
        private service: AlbumsService,
        private router: Router,
        private route: ActivatedRoute,
        private snackBar: SnackBarService
    ){}

    ngOnInit(): void{
        this.get();
    }

    onSubmit(): void{
        this.service.update(this.album).subscribe(album => {
            this.snackBar.open(`Atualizado álbum de id: ${album.id}`);

            this.router.navigateByUrl('/albuns');
        });
    }

    private get(): void{
        this.route
            .params
            .pipe(
                take(1),
                switchMap(params => this.service.single(Number(params.id))),
                finalize(() => this.loadingInfo = false)
            )
            .subscribe(album => this.album = album);
    }
}
