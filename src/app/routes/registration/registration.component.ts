import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth';

@Component({
    moduleId: module.id,
    selector: 'registration',
    styleUrls: [
        './registration.styles.css',
    ],
    templateUrl: './registration.template.html',
})
class RegistrationComponent {
    public username: string;
    public password: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    
    constructor(private router: Router,
                private authService: AuthService) {}
    
    public register() {
        this.authService
            .register({
                username: this.username,
                password: this.password,
                email: this.email,
                firstName: this.firstName,
                lastName: this.lastName,
            })
            .subscribe(results => {
                
                // this.router.navigate(['']);
            }, err => {
                
            });
    }
}

export {
    RegistrationComponent,
};