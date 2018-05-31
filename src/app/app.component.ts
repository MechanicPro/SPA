import {Component, OnInit} from '@angular/core';

import {PhotoService} from './app.photo.service';
import {SharedPhotoService} from './app.photo-shared.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Photo';
    numEnd = 9;
    showHideLoad: boolean = true;
    public photos: string;
    public urlPhoto;

    public hide: boolean;

    constructor(private photosService: PhotoService,
                private sharedPhotos: SharedPhotoService) {
        this.hide = true;
    }

    getPhotos(): void {
        this.sharedPhotos.getPhotos(this.numEnd).subscribe(photos => {
            this.photos = photos;
            if (this.numEnd > this.photos.length)
                this.showHideLoad = false;
        });
    }

    appendPhoto() {
        this.numEnd += 9;
        this.getPhotos();
    }

    showPhoto(url) {
        if (url != '') {
            this.urlPhoto = url;
            this.hide = false;
        }
        else
        {
            this.urlPhoto = '';
            this.hide = true;
        }

    }

    ngOnInit() {
        this.getPhotos();
    }
}
