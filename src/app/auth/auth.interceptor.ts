import { Injectable } from '@angular/core';
import { HttpInterceptor,
         HttpRequest,
         HttpHandler,
         HttpEvent,
         HttpResponse,
         HttpErrorResponse } from '@angular/common/http';

import 'rxjs/add/operator/do';
import { AuthStorageService } from './auth-storage.service';

@Injectable()
class AuthInterceptor implements HttpInterceptor {
    constructor(private authStorageService: AuthStorageService) {}
    
    public intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (this.authStorageService.getToken()) {
            req.headers.set('Authorization', 'Bearer ' + this.authStorageService.getToken())
        }
        
        return next.handle(req)
            .do((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse && event.headers.get('Authorization')) {
                    const authHeader = event.headers.get('Authorization');
                    this.authStorageService.saveToken(authHeader.slice(authHeader.indexOf(' ') + 1));
                }
            });
    }
}

export {
    AuthInterceptor,
};