import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { finalize, switchMap, take } from 'rxjs/operators';

import { Post } from '../../../shared/models/post';
import { PostsService } from '../posts.service';
import { SnackBarService } from '../../../shared/services/snack-bar/snack-bar.service';
import { FormService } from '../../../shared/services/form/form.service';
import { Form } from '../../../shared/models/form';

@Component({
    selector: 'app-posts-update',
    templateUrl: '../form/posts-form.component.html',
    styleUrls: ['../form/posts-form.component.scss']
})
export class PostsUpdateComponent implements OnInit, Form{
    post: Post = { title: '', body: '' };
    loadingInfo = true;
    formService = FormService;

    constructor(
        private service: PostsService,
        private router: Router,
        private route: ActivatedRoute,
        private snackBar: SnackBarService
    ){}

    ngOnInit(): void{
        this.get();
    }

    onSubmit(): void{
        this.service.update(this.post).subscribe(updatedPost => {
            this.snackBar.open(`Atualizado post de id: ${updatedPost.id}`);
            this.router.navigateByUrl('/postagens');
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
            .subscribe(post => this.post = post);
    }
}
