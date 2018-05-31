import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'show',
    template: `
        <div>
            <img src="{{url}}">
        </div>
    `
})
export class Show {
    @Input() url;

    constructor() {
    }
}