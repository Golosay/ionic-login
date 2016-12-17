import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {TabsPage} from '../../pages/tabs/tabs';
import {User} from '../../providers/user';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    // The account fields for the login form.
    account:{login:string, password:string} = {
        login: '',
        password: ''
    };

    constructor(public navCtrl:NavController,
                public user:User,
                public toastCtrl:ToastController,
                private storage: Storage) {
        this.user.set_profile({});
        storage.remove('user');
    }

    doLogin () {
        this.user.login(this.account).then(
            (data) => {
                console.log(data);
                this.user.set_profile(data);
                this.navCtrl.push(TabsPage);
            },
            (error) => {
                console.log(error);
            });
    }
}