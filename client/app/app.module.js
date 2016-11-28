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
var forms_1 = require('@angular/forms');
var app_routing_1 = require('./app.routing');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var login_component_1 = require("./login.component");
var search_component_1 = require("./search.component");
var tech_component_1 = require("./tech.component");
var highlight_directive_1 = require('./highlight.directive');
var page1_component_1 = require('./page1/page1.component');
var page2_component_1 = require('./page2/page2.component');
var form_component_1 = require('./form/form.component');
var floor1_component_1 = require('./floor/floor1.component');
var floor2_component_1 = require('./floor/floor2.component');
var floor3_component_1 = require('./floor/floor3.component');
var floorseach_component_1 = require('./floor/floorseach.component');
var sign_up_component_1 = require("./sign_up/sign_up.component");
var managebook_component_1 = require("./managebook/managebook.component");
var formt_component_1 = require("./formteacher/formt.component");
var contact_component_1 = require("./Contact/contact.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                http_1.HttpModule],
            declarations: [app_component_1.AppComponent,
                login_component_1.logincomponent,
                search_component_1.searchcomponent,
                page1_component_1.Page1Component,
                page2_component_1.Page2Component,
                form_component_1.FormComponent,
                formt_component_1.FormtComponent,
                sign_up_component_1.SignupComponent,
                tech_component_1.techcomponent,
                floor1_component_1.Floor1Component,
                floor2_component_1.Floor2Component,
                floor3_component_1.Floor3Component,
                highlight_directive_1.HighlightDirective,
                floorseach_component_1.FloorseachComponent,
                managebook_component_1.managebookComponent,
                contact_component_1.contactComponent
            ],
            providers: [app_routing_1.appRoutingProviders],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map