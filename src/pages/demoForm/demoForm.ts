import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './demoForm.html',
})
export class demoForm implements OnInit {
    myList = [10, 20, 30, 440];

    constructor() { }


    ngOnInit() { }

    pinchEvent(e) {
        console.log('pinch event is triggered');
    }

    tapEvent(e) {
        console.log('tap event is triggered');
    }

    swipeEvent(e) {
        console.log('swipe event is triggered');
    }



    getItems(ev) {
        
        // set val to the value of the ev target
        var val = ev.target.value;
        console.log(val);
        
    }
}