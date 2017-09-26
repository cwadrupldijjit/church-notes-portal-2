"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var not_found_component_1 = require("./not-found/not-found.component");
var login_main_component_1 = require("./login-main/login-main.component");
var registration_component_1 = require("./registration/registration.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'login', component: login_main_component_1.LoginMainComponent },
    { path: 'register', component: registration_component_1.RegistrationComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent },
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        core_1.NgModule({
            exports: [router_1.RouterModule],
            imports: [router_1.RouterModule.forRoot(routes)],
        })
    ], RoutingModule);
    return RoutingModule;
}());
exports.default = RoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb3V0ZXMvcm91dGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FDeUM7QUFFekMsd0RBQXNEO0FBQ3RELHVFQUFvRTtBQUNwRSwwRUFBdUU7QUFDdkUsZ0ZBQThFO0FBRTlFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUN0QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFFO0lBQ2hELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsOENBQXFCLEVBQUU7SUFDdEQsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBRTtDQUMvQyxDQUFDO0FBTUY7SUFBQTtJQUFxQixDQUFDO0lBQWhCLGFBQWE7UUFKbEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtZQUN6QixPQUFPLEVBQUUsQ0FBRSxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBRTtTQUM1QyxDQUFDO09BQ0ksYUFBYSxDQUFHO0lBQUQsb0JBQUM7Q0FBdEIsQUFBc0IsSUFBQTtBQUV0QixrQkFBZSxhQUFhLENBQUMiLCJmaWxlIjoiYXBwL3JvdXRlcy9yb3V0ZXIubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLFxyXG4gICAgICAgICBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luTWFpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4tbWFpbi9sb2dpbi1tYWluLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlZ2lzdHJhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbk1haW5Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ3JlZ2lzdGVyJywgY29tcG9uZW50OiBSZWdpc3RyYXRpb25Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJyoqJywgY29tcG9uZW50OiBOb3RGb3VuZENvbXBvbmVudCB9LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGV4cG9ydHM6IFsgUm91dGVyTW9kdWxlIF0sXHJcbiAgICBpbXBvcnRzOiBbIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcykgXSxcclxufSlcclxuY2xhc3MgUm91dGluZ01vZHVsZSB7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGluZ01vZHVsZTsiXX0=
