import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {LoginApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';

import { User } from '../providers/user';
import { Api } from '../providers/api';
import { Storage } from '@ionic/storage';

// let providers = [
//     { provide: ErrorHandler, useClass: IonicErrorHandler },
// ].concat(Providers);

@NgModule({
    declarations: [
        LoginApp,
        LoginPage,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    imports: [
        IonicModule.forRoot(LoginApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        LoginApp,
        LoginPage,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    providers: [
        Storage,
        Api,
        User,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {}
