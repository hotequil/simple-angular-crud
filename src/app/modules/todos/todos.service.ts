import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Todo } from '../../shared/models/todo';

@Injectable({
    providedIn: 'root'
})
export class TodosService{
    constructor(private http: HttpClient){}

    get(): Observable<Todo[]>{
        return this.http.get<Todo[]>(`${environment.API}/todos`).pipe(take(1));
    }

    single(id: number): Observable<Todo>{
        return this.http.get<Todo>(`${environment.API}/todos/${id}`).pipe(take(1));
    }

    create(todo: Todo): Observable<Todo>{
        return this.http.post<Todo>(`${environment.API}/todos`, todo).pipe(take(1));
    }

    update(todo: Todo): Observable<Todo>{
        return this.http.patch<Todo>(`${environment.API}/todos/${todo.id}`, todo).pipe(take(1));
    }

    delete(id: number): Observable<null>{
        return this.http.delete<null>(`${environment.API}/todos/${id}`).pipe(take(1));
    }
}
