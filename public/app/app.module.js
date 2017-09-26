"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var platform_browser_1 = require("@angular/platform-browser");
var router_module_1 = require("./routes/router.module");
var index_1 = require("./user-interface/index");
var login_layout_module_1 = require("./login/login-layout/login-layout.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./routes/home/home.component");
var not_found_component_1 = require("./routes/not-found/not-found.component");
var login_main_component_1 = require("./routes/login-main/login-main.component");
var registration_component_1 = require("./routes/registration/registration.component");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [app_component_1.AppComponent],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                not_found_component_1.NotFoundComponent,
                login_main_component_1.LoginMainComponent,
                registration_component_1.RegistrationComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_module_1.default,
                forms_1.FormsModule,
                http_1.HttpModule,
                material_1.MaterialModule,
                index_1.UserInterfaceModule,
                login_layout_module_1.LoginLayoutModule,
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.default = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLHdDQUE2QztBQUM3QyxzQ0FBMkM7QUFDM0MsOENBQW1EO0FBQ25ELDhEQUEwRDtBQUUxRCx3REFBaUQ7QUFFakQsZ0RBQTZEO0FBQzdELGdGQUE2RTtBQUU3RSxpREFBK0M7QUFDL0MsK0RBQTZEO0FBQzdELDhFQUEyRTtBQUMzRSxpRkFBOEU7QUFDOUUsdUZBQXFGO0FBRXJGLGlDQUErQjtBQUMvQixtQ0FBaUM7QUFzQmpDO0lBQUE7SUFBaUIsQ0FBQztJQUFaLFNBQVM7UUFwQmQsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFLENBQUUsNEJBQVksQ0FBRTtZQUMzQixlQUFlLEVBQUUsQ0FBRSw0QkFBWSxDQUFFO1lBQ2pDLFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYix1Q0FBaUI7Z0JBQ2pCLHlDQUFrQjtnQkFDbEIsOENBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGdDQUFhO2dCQUNiLHVCQUFXO2dCQUNYLG1CQUFXO2dCQUNYLGlCQUFVO2dCQUNWLHlCQUFjO2dCQUNkLDJCQUFtQjtnQkFDbkIsdUNBQWlCO2FBQ3BCO1NBQ0osQ0FBQztPQUNJLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQWxCLEFBQWtCLElBQUE7QUFFbEIsa0JBQWUsU0FBUyxDQUFDIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmltcG9ydCBSb3V0ZU1vZHVsZSBmcm9tICcuL3JvdXRlcy9yb3V0ZXIubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IFVzZXJJbnRlcmZhY2VNb2R1bGUgfSBmcm9tICcuL3VzZXItaW50ZXJmYWNlL2luZGV4JztcclxuaW1wb3J0IHsgTG9naW5MYXlvdXRNb2R1bGUgfSBmcm9tICcuL2xvZ2luL2xvZ2luLWxheW91dC9sb2dpbi1sYXlvdXQubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL3JvdXRlcy9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3JvdXRlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luTWFpbkNvbXBvbmVudCB9IGZyb20gJy4vcm91dGVzL2xvZ2luLW1haW4vbG9naW4tbWFpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWdpc3RyYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3JvdXRlcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogWyBBcHBDb21wb25lbnQgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIE5vdEZvdW5kQ29tcG9uZW50LFxyXG4gICAgICAgIExvZ2luTWFpbkNvbXBvbmVudCxcclxuICAgICAgICBSZWdpc3RyYXRpb25Db21wb25lbnQsXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgUm91dGVNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgSHR0cE1vZHVsZSxcclxuICAgICAgICBNYXRlcmlhbE1vZHVsZSxcclxuICAgICAgICBVc2VySW50ZXJmYWNlTW9kdWxlLFxyXG4gICAgICAgIExvZ2luTGF5b3V0TW9kdWxlLFxyXG4gICAgXSxcclxufSlcclxuY2xhc3MgQXBwTW9kdWxlIHt9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBNb2R1bGU7Il19
