import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { demoWindows } from '../pages/demoWindows/demoWindows'
import { demoButtons } from '../pages/demoButtons/demoButtons'
import { demoCards } from '../pages/demoCards/demoCards'
import { demoForm } from '../pages/demoForm/demoForm'
import { demo2Windows } from '../pages/demo2Windows/demo2Windows'
import { TestModal } from '../pages/demo2Windows/testModal'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    demoWindows,
    demoButtons,
    demoCards,
    demoForm,
    demo2Windows,
    TestModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    demoWindows,
    demoButtons,
    demoCards,
    demoForm,
    demo2Windows,
    TestModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
