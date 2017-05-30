import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular'

@Component({
    templateUrl: './testModal.html',
})
export class TestModal implements OnInit {
    constructor(public viewCtrl: ViewController) { }

    ngOnInit() { }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}