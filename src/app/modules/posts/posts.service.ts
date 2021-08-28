import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Post } from '../../shared/models/post';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    constructor(private http: HttpClient){}

    get(): Observable<Post[]>{
        return this.http.get<Post[]>(`${environment.API}/posts`).pipe(take(1));
    }

    single(id: number): Observable<Post>{
        return this.http.get<Post>(`${environment.API}/posts/${id}`).pipe(take(1));
    }

    create(post: Post): Observable<Post>{
        return this.http.post<Post>(`${environment.API}/posts`, post).pipe(take(1));
    }

    update(post: Post): Observable<Post>{
        return this.http.patch<Post>(`${environment.API}/posts/${post.id}`, post).pipe(take(1));
    }

    delete(postId: number): Observable<null>{
        return this.http.delete<null>(`${environment.API}/posts/${postId}`).pipe(take(1));
    }
}
