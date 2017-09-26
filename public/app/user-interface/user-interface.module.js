"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var main_layout_module_1 = require("./main-layout/main-layout.module");
var index_1 = require("./main-layout/index");
var components = [];
var UserInterfaceModule = (function () {
    function UserInterfaceModule() {
    }
    UserInterfaceModule = __decorate([
        core_1.NgModule({
            imports: [main_layout_module_1.default],
            declarations: components,
            exports: [
                components
            ].concat(index_1.components),
        })
    ], UserInterfaceModule);
    return UserInterfaceModule;
}());
exports.UserInterfaceModule = UserInterfaceModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyLWludGVyZmFjZS91c2VyLWludGVyZmFjZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFFekMsdUVBQWdFO0FBQ2hFLDZDQUF5RTtBQUV6RSxJQUFNLFVBQVUsR0FBRyxFQUVsQixDQUFDO0FBVUY7SUFBQTtJQUEyQixDQUFDO0lBQXRCLG1CQUFtQjtRQVJ4QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBRSw0QkFBZ0IsQ0FBRTtZQUM3QixZQUFZLEVBQUUsVUFBVTtZQUN4QixPQUFPO2dCQUNILFVBQVU7cUJBQ1Asa0JBQW9CLENBQzFCO1NBQ0osQ0FBQztPQUNJLG1CQUFtQixDQUFHO0lBQUQsMEJBQUM7Q0FBNUIsQUFBNEIsSUFBQTtBQUd4QixrREFBbUIiLCJmaWxlIjoiYXBwL3VzZXItaW50ZXJmYWNlL3VzZXItaW50ZXJmYWNlLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgTWFpbkxheW91dE1vZHVsZSBmcm9tICcuL21haW4tbGF5b3V0L21haW4tbGF5b3V0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IGNvbXBvbmVudHMgYXMgbWFpbkxheW91dENvbXBvbmVudHMgfSBmcm9tICcuL21haW4tbGF5b3V0L2luZGV4JztcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcbiAgICBcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbIE1haW5MYXlvdXRNb2R1bGUgXSxcclxuICAgIGRlY2xhcmF0aW9uczogY29tcG9uZW50cyxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBjb21wb25lbnRzLFxyXG4gICAgICAgIC4uLm1haW5MYXlvdXRDb21wb25lbnRzLFxyXG4gICAgXSxcclxufSlcclxuY2xhc3MgVXNlckludGVyZmFjZU1vZHVsZSB7fVxyXG5cclxuZXhwb3J0IHtcclxuICAgIFVzZXJJbnRlcmZhY2VNb2R1bGUsXHJcbn07Il19
