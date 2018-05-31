import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {PhotoService} from './app.photo.service';
import {SharedPhotoService} from './app.photo-shared.service';
import {Show} from './app.showPhoto';

@NgModule({
    declarations: [
        AppComponent,
        Show
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        PhotoService,
        SharedPhotoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
