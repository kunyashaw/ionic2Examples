import { ActionSheetController } from 'ionic-angular'
import { Component } from '@angular/core'
import { AlertController } from 'ionic-angular'
import { LoadingController } from 'ionic-angular'

@Component({
    templateUrl: 'demoWindows.html'
})

export class demoWindows {

    constructor(public actionSheetCtrl: ActionSheetController,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController) {

    }

    showActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: '请选择操作',
            buttons: [
                {
                    text: '分享到朋友圈',
                    handler: function () {
                        console.log('分享到朋友圈');
                    }
                },
                {
                    text: '分享给好友',
                    handler: function () {
                        console.log('分享给好友');
                    }
                },
                {
                    text: '取消',
                    role: 'cancel'
                }, {
                    text: '删除',
                    role: 'destructive',
                    handler: function () {
                        console.log('删除');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    showAlert() {
        //普通警告窗口
        let alert = this.alertCtrl.create({
            title: '准备交易',
            subTitle: '请注意交易环境安全',
            buttons:
            [
                {
                    text: 'ok',
                    handler: function () {
                        console.log('pressed ok ');
                        this.showPrompt();
                    }.bind(this)
                }
            ]
        });
        alert.present();
    }

    showPrompt() {
        //输入提示框
        let promptWindow = this.alertCtrl.create({
            title: '请输入金额',
            message: '请输入此次交易的金额详细数据',
            inputs: [
                {
                    name: 'num',
                    placeholder: '请输入金额'
                },
                {
                    name: 'pwd',
                    placeholder: '请输入验证码'
                }
            ],
            buttons: [
                {
                    text: '确定',
                    handler: function (data) {
                        console.log(data);
                        this.showConfirm();
                    }.bind(this)
                },
                {
                    text: '取消',
                    handler: function (data) {
                        console.log(data);
                    }
                }
            ]
        })
        promptWindow.present();
    }

    showConfirm() {
        //确认窗口
        let confirmWindow = this.alertCtrl.create({
            title: '请确定',
            message: '一旦确定，数据将无法复原，确定要完成此操作吗？',
            buttons: [
                {
                    text: '确定',
                    handler: function () {
                        console.log('确定这样操作');
                    }
                },
                {
                    text: '取消',
                    handler: function () {
                        console.log('用户取消');
                    }
                }
            ]
        })
        confirmWindow.present();
    }

    showPages() {
        let pagesWindow = this.alertCtrl.create({
            title: '请选择性别',
            inputs: [
                {
                    type: 'radio',
                    label: '男',
                    value: '1',
                    checked: true
                },
                {
                    type: 'radio',
                    label: '女',
                    value: '2',
                    checked: false
                }
            ],
            buttons: [
                {
                    text: 'next',
                    handler: function () {
                        this.showNext();
                    }.bind(this)
                }
            ]
        });
        pagesWindow.present();
    }

    showNext() {
        let colorWindow = this.alertCtrl.create();
        colorWindow.setTitle('请选择喜欢的颜色');
        colorWindow.addInput({
            type: 'checkbox',
            label: '红色',
            value: 'r',
            checked: true
        });
        colorWindow.addInput({
            type: 'checkbox',
            label: '绿色',
            value: 'g'
        })
        colorWindow.addInput({
            type: 'checkbox',
            label: '蓝色',
            value: 'b'
        })
        colorWindow.addButton({
            text: '分享结果',
            handler: function () {
                this.showActionSheet();
            }.bind(this)
        });
        colorWindow.addButton({
            text: '结束',
            handler: function (data) {
                console.log(data);
            }
        })
        colorWindow.present();
    }

    showLoading() {
        let loader = this.loadingCtrl.create({
            content: 'loading...',
            duration: 3000
        });
        loader.present();
    }
}