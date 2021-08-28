import { Component, OnInit } from '@angular/core';

import { PostsService } from './posts.service';
import { Post } from '../../shared/models/post';
import { SnackBarService } from '../../shared/services/snack-bar/snack-bar.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    posts: Post[] = [];
    postsColumns = ['title', 'body', 'actions'];

    constructor(private service: PostsService, private snackBar: SnackBarService){}

    ngOnInit(): void {
        this.service.get().subscribe(posts => this.posts = posts);
    }

    delete(post: Post): void{
        const { id } = post;

        this.service.delete(id as number).subscribe(() => {
            this.snackBar.open(`Deletada postagem de id: ${id}`);
            this.posts = this.posts.filter(currentPost => currentPost.id !== id);
        });
    }
}
