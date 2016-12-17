import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import {User} from '../providers/user';

@Injectable()
export class Api {
    profile:any = {};
    isLocal:boolean = false;
    url:string = '';

    constructor(public http:Http,
                public platform: Platform,
                public user:User) {
        this.isLocal = (this.platform.is( 'core' ) || window.location.protocol == 'http:');
        this.url = this.isLocal ? '/' : "https://example.com/";
        this.profile = user.get_profile();
    }

    createAuthorizationHeader(headers:Headers) {
        headers.append('Authorization', 'Bearer ' + (this.profile.token ? this.profile.token : this.user.get_profile().token));
    }

    get(slug:string) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.url+slug, {headers: headers})
    }

    post(slug:string, data:any) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.url+slug, data, {headers: headers})
    }

    delete(slug:string) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.delete(this.url+slug, {headers: headers})
    }
}
