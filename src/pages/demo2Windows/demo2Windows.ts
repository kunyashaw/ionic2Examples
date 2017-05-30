import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, MenuController, PopoverController, ToastController } from 'ionic-angular'
import { TestModal } from './testModal'

@Component({
    templateUrl: './demo2Windows.html',
})
export class demo2Windows implements OnInit {
    constructor(public loadingCtrl: LoadingController,
        public modalCtrl: ModalController,
        public menuCtrl: MenuController,
        public popoverCtrl: PopoverController,
        public toastCtrl: ToastController) {
        menuCtrl.enable(true);

    }

    ngOnInit() { }

    showLoading() {
        let loader = this.loadingCtrl.create({
            content: 'loading...',
            duration: 2000
        })
        loader.present();
    }

    showMenus() {
        // ????
        //this.menuCtrl.open/close/toggle
        this.menuCtrl.toggle();
    }

    showModal() {
        let modal = this.modalCtrl.create(TestModal)
        modal.present();
    }

    showPopover() {
        // ????
        let popover = this.popoverCtrl.create(TestModal);
        popover.present();
    }

    showToast() {
        // position:top/middle/bottom
        let toast = this.toastCtrl.create({
            message: '操作成功',
            duration: 1000,
            position: 'top'
        })
        toast.present();
    }
}