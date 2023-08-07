import { Component } from "@angular/core";

@Component({
    selector: 'app-practice',
    templateUrl: './practice.component.html',
    styleUrls: ['./practice.component.css'],

})

export class PracticeComponent {
    username = ' ';
    allowInput = false;

    constructor() {
    }
    
    onAllowInput() {
        this.allowInput = this.username.trim()!=='';
    }
    onClickReset() {
        this.username = ' ';
    }
    }