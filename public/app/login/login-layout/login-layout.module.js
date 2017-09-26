"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_layout_component_1 = require("./login-layout.component");
var login_component_1 = require("./login/login.component");
var login_box_component_1 = require("./login-box/login-box.component");
var login_form_component_1 = require("./login-form/login-form.component");
var components = [
    login_layout_component_1.LoginLayoutComponent,
    login_component_1.LoginComponent,
    login_box_component_1.LoginBoxComponent,
    login_form_component_1.LoginFormComponent,
];
exports.components = components;
var LoginLayoutModule = (function () {
    function LoginLayoutModule() {
    }
    LoginLayoutModule = __decorate([
        core_1.NgModule({
            declarations: components,
            exports: components,
        })
    ], LoginLayoutModule);
    return LoginLayoutModule;
}());
exports.LoginLayoutModule = LoginLayoutModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi1sYXlvdXQvbG9naW4tbGF5b3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUV6QyxtRUFBZ0U7QUFDaEUsMkRBQXlEO0FBQ3pELHVFQUFvRTtBQUNwRSwwRUFBdUU7QUFFdkUsSUFBTSxVQUFVLEdBQUc7SUFDZiw2Q0FBb0I7SUFDcEIsZ0NBQWM7SUFDZCx1Q0FBaUI7SUFDakIseUNBQWtCO0NBQ3JCLENBQUM7QUFTRSxnQ0FBVTtBQUhkO0lBQUE7SUFBeUIsQ0FBQztJQUFwQixpQkFBaUI7UUFKdEIsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLFVBQVU7WUFDeEIsT0FBTyxFQUFFLFVBQVU7U0FDdEIsQ0FBQztPQUNJLGlCQUFpQixDQUFHO0lBQUQsd0JBQUM7Q0FBMUIsQUFBMEIsSUFBQTtBQUl0Qiw4Q0FBaUIiLCJmaWxlIjoiYXBwL2xvZ2luL2xvZ2luLWxheW91dC9sb2dpbi1sYXlvdXQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IExvZ2luTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luQm94Q29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi1ib3gvbG9naW4tYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG4gICAgTG9naW5MYXlvdXRDb21wb25lbnQsXHJcbiAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgIExvZ2luQm94Q29tcG9uZW50LFxyXG4gICAgTG9naW5Gb3JtQ29tcG9uZW50LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogY29tcG9uZW50cyxcclxuICAgIGV4cG9ydHM6IGNvbXBvbmVudHMsXHJcbn0pXHJcbmNsYXNzIExvZ2luTGF5b3V0TW9kdWxlIHt9XHJcblxyXG5leHBvcnQge1xyXG4gICAgY29tcG9uZW50cyxcclxuICAgIExvZ2luTGF5b3V0TW9kdWxlLFxyXG59OyJdfQ==
