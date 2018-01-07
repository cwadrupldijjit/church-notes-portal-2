import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
class AuthService {
    private loggedIn = false;
    
    constructor(private http: HttpClient,
                private router: Router) {}
    
    public logIn(credentials: LoginCredentials) {
        
    }
    
    public register(credentials: RegisterCredentials) {
        return this.http
            .post('/auth/register', credentials)
            .map((res: Response) => {
                const auth = res.headers.get('Authorization');
                
                if (!auth) {
                    this.loggedIn = false;
                    return res;
                }
                
                this.router.navigate(['']);
                
                return res;
            });
    }
}

type LoginCredentials = {
    username: string;
    password: string;
};

type RegisterCredentials = LoginCredentials & {
    email: string;
    firstName: string;
    lastName: string;
};

export {
    AuthService,
    LoginCredentials,
    RegisterCredentials,
};