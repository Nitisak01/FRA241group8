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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var FloorseachComponent = (function () {
    function FloorseachComponent(_router) {
        this._router = _router;
        this.submitted = false;
        this.active = true;
        var x = document.cookie.split(';');
        var cookievalue;
        var i = 0;
        for (; i < x.length; i++) {
            if (x[i].split('=')[0].trim() == 'sessionID') {
                cookievalue = x[i].split('=')[1];
                break;
            }
        }
        if (cookievalue === undefined) {
            this._router.navigate(['']);
        }
        else {
            var res = atob(cookievalue).split('??');
            if (atob(res[0]) == 'student' && atob(res[1]) == 'student') {
            }
            else if (atob(res[0]) == 'teach' && atob(res[1]) == 'teach') {
            }
            else {
                this._router.navigate(['']);
            }
        }
    }
    FloorseachComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    FloorseachComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'floorseach',
            templateUrl: 'floorseach.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], FloorseachComponent);
    return FloorseachComponent;
}());
exports.FloorseachComponent = FloorseachComponent;
//# sourceMappingURL=floorseach.component.js.map