import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
class AuthStorageService {
    public saveToken(token: string) {
        localStorage.setItem('token', token);
    }
    
    public removeToken() {
        localStorage.removeItem('token');
    }
    
    public getToken() {
        return localStorage.getItem('token');
    }
}

export {
    AuthStorageService,
};