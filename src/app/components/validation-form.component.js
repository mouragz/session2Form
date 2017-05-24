"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormValidationComponent = (function () {
    function FormValidationComponent(fb) {
        this.fb = fb;
        this.complexForm = fb.group({
            // To add a validator, we must first convert the string value into an array.
            // The first item in the array is the default value if any, then the next item in the array is the validator.
            // Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            'firstName': [null, forms_1.Validators.required],
            // We can use more than one validator per field.
            // If we want to use more than one validator we have to wrap our array of validators
            // with a Validators.compose function. Here we are using a required, 
            //minimum length and maximum length validator.
            'lastName': [null, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(5),
                    forms_1.Validators.maxLength(10)
                ])],
            'gender': [null, forms_1.Validators.required],
            'hiking': false,
            'running': false,
            'swimming': false
        });
    }
    FormValidationComponent.prototype.submitForm = function (value) {
        console.log(value);
    };
    return FormValidationComponent;
}());
FormValidationComponent = __decorate([
    core_1.Component({
        selector: 'form-validation',
        templateUrl: '../../templates/complex-form-with-validation.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], FormValidationComponent);
exports.FormValidationComponent = FormValidationComponent;
//# sourceMappingURL=validation-form.component.js.map