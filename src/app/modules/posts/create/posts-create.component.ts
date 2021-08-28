import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../../shared/models/post';
import { PostsService } from '../posts.service';
import { SnackBarService } from '../../../shared/services/snack-bar/snack-bar.service';
import { FormService } from '../../../shared/services/form/form.service';
import { Form } from '../../../shared/models/form';

@Component({
    selector: 'app-posts-create',
    templateUrl: '../form/posts-form.component.html',
    styleUrls: ['../form/posts-form.component.scss']
})
export class PostsCreateComponent implements Form{
    post: Post = { title: '', body: '' };
    loadingInfo = false;
    formService = FormService;

    constructor(
        private service: PostsService,
        private router: Router,
        private snackBar: SnackBarService
    ){}

    onSubmit(): void{
        this.service.create(this.post).subscribe(postCreated => {
            this.snackBar.open(`Criado post de id: ${postCreated.id}`);
            this.router.navigateByUrl('/postagens');
        });
    }
}
