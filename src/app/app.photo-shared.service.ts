import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {PhotoService} from './app.photo.service';

@Injectable()
export class SharedPhotoService {

    constructor(private photoService: PhotoService) {
    }

    getPhotos(numEnd): Observable<string> {
        return this.photoService.getPhotos().pipe(map(result => {
            let photo = result.slice(0, numEnd);
            return photo;
        }));
    }

}