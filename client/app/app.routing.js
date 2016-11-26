"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require("./login.component");
var search_component_1 = require("./search.component");
var floorsearch_component_1 = require("./floorsearch.component");
var datesearch_component_1 = require("./datesearch.component");
var tech_component_1 = require("./tech.component");
var appRoutes = [
    { path: '', component: login_component_1.logincomponent },
    { path: 'login', component: login_component_1.logincomponent },
    { path: 'search', component: search_component_1.searchcomponent },
    { path: 'search/floor', component: floorsearch_component_1.floorsearchcomponent },
    { path: 'search/date', component: datesearch_component_1.datesearchcomponent },
    { path: 'tech', component: tech_component_1.techcomponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map