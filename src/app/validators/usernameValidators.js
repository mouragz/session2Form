"use strict";
var UserNameValidators = (function () {
    function UserNameValidators() {
    }
    UserNameValidators.cannotContainSpace = function (formControl) {
        if (formControl.value.indexOf(' ') > 0)
            return { cannotContainSpace: true };
        return null;
    };
    return UserNameValidators;
}());
exports.UserNameValidators = UserNameValidators;
//# sourceMappingURL=usernameValidators.js.map