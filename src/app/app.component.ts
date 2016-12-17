import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {User} from '../providers/user';

import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';


@Component({
    templateUrl: 'app.html'
})
export class LoginApp {
    rootPage:any;

    constructor(platform:Platform,
                public user:User,
                private storage: Storage,
                public toastCtrl: ToastController) {
        
        let self = this;
        storage.get('user').then((val) => {
            if (val) {
                user.set_profile(JSON.parse(val));
                self.rootPage = TabsPage;
                let toast = this.toastCtrl.create({
                    message: 'User is authorized',
                    duration: 2000
                });
                toast.present();
            } else {
                self.rootPage = LoginPage;
            }
        });
        
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }
}
