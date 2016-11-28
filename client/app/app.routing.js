"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require("./login.component");
var search_component_1 = require("./search.component");
var tech_component_1 = require("./tech.component");
var floorseach_component_1 = require('./floor/floorseach.component');
var floor1_component_1 = require('./floor/floor1.component');
var floor2_component_1 = require('./floor/floor2.component');
var floor3_component_1 = require('./floor/floor3.component');
var page1_component_1 = require('./page1/page1.component');
var page2_component_1 = require('./page2/page2.component');
var form_component_1 = require('./form/form.component');
var sign_up_component_1 = require('./sign_up/sign_up.component');
var managebook_component_1 = require("./managebook/managebook.component");
var formt_component_1 = require("./formteacher/formt.component");
var contact_component_1 = require("./Contact/contact.component");
var appRoutes = [
    { path: '', component: login_component_1.logincomponent },
    { path: 'contact', component: contact_component_1.contactComponent },
    { path: 'managebookingroom', component: managebook_component_1.managebookComponent },
    { path: 'floorseach', component: floorseach_component_1.FloorseachComponent },
    { path: 'login', component: login_component_1.logincomponent },
    { path: 'search', component: search_component_1.searchcomponent },
    { path: 'tech', component: tech_component_1.techcomponent },
    { path: 'floorseach/floor1', component: floor1_component_1.Floor1Component },
    { path: 'floorseach/floor2', component: floor2_component_1.Floor2Component },
    { path: 'floorseach/floor3', component: floor3_component_1.Floor3Component },
    { path: 'signup', component: sign_up_component_1.SignupComponent },
    { path: 'book', component: page2_component_1.Page2Component },
    { path: 'book/form', component: page1_component_1.Page1Component },
    { path: 'book/form/commitform', component: form_component_1.FormComponent },
    { path: 'book/form/commitform/formt', component: formt_component_1.FormtComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map