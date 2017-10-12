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
        this.pageHeader = null; //"Employee Details";
        this.imagePath = "https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
        // imagePath: string = "images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
        this.isDisabled = true;
        this.firstName = "hitesh";
        this.lastName = "nageshwar";
        this.classesToApply = "colorClass italicsClass ";
        this.applyBoldClass = true;
        this.italicsClass = true;
        this.applyItalicClass = true;
        this.isBold = true;
        /// Two way binding
        this.name = "hitesh";
        //component life cycle
        this.userText = "life cycle";
    }
    AppComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.italicsClass
        };
        return classes;
    };
    AppComponent.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    /// Event binding
    AppComponent.prototype.onclick = function () {
        console.log("Button clicked");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        //template : `<h1> Hello {{name}} </h1>` // inline view template
        templateUrl: 'app/app.component.html' // external view template, relative path    
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map