"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            moduleId: module.id,
            selector: 'app',
            styleUrls: [
                './global.styles.scss',
            ],
            template: "\n        <left-nav></left-nav>\n        <router-outlet></router-outlet>\n    ",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQ2tEO0FBY2xEO0lBQUE7SUFBb0IsQ0FBQztJQUFmLFlBQVk7UUFaakIsZ0JBQVMsQ0FBQztZQUNQLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsS0FBSztZQUNmLFNBQVMsRUFBRTtnQkFDUCxzQkFBc0I7YUFDekI7WUFDRCxRQUFRLEVBQUUsZ0ZBR1Q7U0FDSixDQUFDO09BQ0ksWUFBWSxDQUFHO0lBQUQsbUJBQUM7Q0FBckIsQUFBcUIsSUFBQTtBQUdqQixvQ0FBWSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcclxuICAgICAgICAgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgICBzdHlsZVVybHM6IFtcclxuICAgICAgICAnLi9nbG9iYWwuc3R5bGVzLnNjc3MnLFxyXG4gICAgXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGxlZnQtbmF2PjwvbGVmdC1uYXY+XHJcbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgYCxcclxufSlcclxuY2xhc3MgQXBwQ29tcG9uZW50IHt9XHJcblxyXG5leHBvcnQge1xyXG4gICAgQXBwQ29tcG9uZW50LFxyXG59OyJdfQ==
