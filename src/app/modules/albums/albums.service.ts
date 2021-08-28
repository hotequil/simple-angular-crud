import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Album } from '../../shared/models/album';

@Injectable({
    providedIn: 'root'
})
export class AlbumsService {
    constructor(private http: HttpClient){}

    get(): Observable<Album[]>{
        return this.http.get<Album[]>(`${environment.API}/albums`).pipe(take(1));
    }

    single(id: number): Observable<Album>{
        return this.http.get<Album>(`${environment.API}/albums/${id}`).pipe(take(1));
    }

    create(album: Album): Observable<Album>{
        return this.http.post<Album>(`${environment.API}/albums`, album).pipe(take(1));
    }

    update(album: Album): Observable<Album>{
        return this.http.patch<Album>(`${environment.API}/albums/${album.id}`, album).pipe(take(1));
    }

    delete(id: number): Observable<null>{
        return this.http.delete<null>(`${environment.API}/albums/${id}`).pipe(take(1));
    }
}
