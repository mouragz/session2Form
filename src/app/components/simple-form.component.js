"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SimpleFormComponent = (function () {
    function SimpleFormComponent() {
    }
    // Here we are implementing the submitForm function. All we are doing for right now is spitting out the details of the form to our console.
    SimpleFormComponent.prototype.submitForm = function (form) {
        console.log('Form Data: ');
        console.log(form);
    };
    return SimpleFormComponent;
}());
SimpleFormComponent = __decorate([
    core_1.Component({
        selector: 'simple-form',
        templateUrl: '../../templates/simple-form.html'
    })
], SimpleFormComponent);
exports.SimpleFormComponent = SimpleFormComponent;
//# sourceMappingURL=simple-form.component.js.map