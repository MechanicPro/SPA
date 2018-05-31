import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class PhotoService {

    public photoHost: string = 'https://jsonplaceholder.typicode.com/photos';

    constructor(private http: HttpClient) {
    }

    getPhotos(): Observable<any> {
        return this.http.get(this.photoHost);
    }
}