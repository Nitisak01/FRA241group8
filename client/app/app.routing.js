"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require("./login.component");
var search_component_1 = require("./search.component");
var floorsearch_component_1 = require("./floorsearch.component");
var datesearch_component_1 = require("./datesearch.component");
var tech_component_1 = require("./tech.component");
var page1_component_1 = require('./page1/page1.component');
var page2_component_1 = require('./page2/page2.component');
var form_component_1 = require('./form/form.component');
var appRoutes = [
    // { path: '', component: logincomponent },
    { path: 'login', component: login_component_1.logincomponent },
    { path: 'search', component: search_component_1.searchcomponent },
    { path: 'search/floor', component: floorsearch_component_1.floorsearchcomponent },
    { path: 'search/date', component: datesearch_component_1.datesearchcomponent },
    { path: 'tech', component: tech_component_1.techcomponent },
    { path: 'book', component: page2_component_1.Page2Component },
    { path: 'book/form', component: page1_component_1.Page1Component },
    { path: 'book/form/commitform', component: form_component_1.FormComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map