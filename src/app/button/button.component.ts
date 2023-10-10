import { Component } from '@angular/core';

@Component({
    selector:'btn-comp',
    templateUrl:'./button.component.html'
})

export class ButtonComponent {
    showDetails = false;
    constructor() {
    }
}
