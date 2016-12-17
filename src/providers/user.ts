import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
 Generated class for the User provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class User {
    profile : any = {};

    constructor(public http:Http,private storage: Storage) {
        console.log('Hello User Provider');
    }
    
    login (data) {
        let self = this;
        return new Promise<any>(
            ( resolve, reject ) => {
                if (data) {
                    let fake_user_data = {
                        name: 'Username',
                        token: '123'
                    };
                    self.storage.set('user', data);
                    resolve( fake_user_data );
                } else {
                    reject();
                }
            });
    }
    
    get_profile () {
        return this.profile || {};
    }
    
    set_profile (profile:any) {
        if (profile.token) {
            this.storage.set('user', JSON.stringify(profile));
        }
        this.profile = profile;
    }

}
