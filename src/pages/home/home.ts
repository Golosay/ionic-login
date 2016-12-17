import {Component} from '@angular/core';
import {NavController,App} from 'ionic-angular';

import {LoginPage} from '../login/login';
import {Api} from '../../providers/api';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(
        public navCtrl:NavController,
        private api:Api,
        public app: App) {
        //do some stuff
    }

    doLogOut () {
        let nav = this.app.getRootNav();
        nav.setRoot(LoginPage);
    }

}
