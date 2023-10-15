import { Component } from '@angular/core';

@Component({
    selector:'btn-comp',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class ButtonComponent {
    showDetails = false;
    log = [];


    constructor() {
    }

    onToggleDetails() {
        this.showDetails = !this.showDetails;
        // this.log.push(this.log.length + 1);
        this.log.push(new Date);
    }
}
