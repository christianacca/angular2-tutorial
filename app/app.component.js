System.register(["angular2/core", 'angular2/router', "./heroes/hero.service", "./attribute-directive/highlight.directive", "./click-me.component", "./keyup.component", './crisis-center/crisis-center.component', "./heroes/heroes-routes"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_service_1, highlight_directive_1, click_me_component_1, keyup_component_1, crisis_center_component_1, heroes_routes_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            },
            function (click_me_component_1_1) {
                click_me_component_1 = click_me_component_1_1;
            },
            function (keyup_component_1_1) {
                keyup_component_1 = keyup_component_1_1;
            },
            function (crisis_center_component_1_1) {
                crisis_center_component_1 = crisis_center_component_1_1;
            },
            function (heroes_routes_1_1) {
                heroes_routes_1 = heroes_routes_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.heroes = [{ name: "J" }, { name: "C" }];
                }
                AppComponent.prototype.addHero = function (name) {
                    this.heroes.push({ name: name });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        directives: [click_me_component_1.ClickMeComponent, keyup_component_1.KeyupComponent, highlight_directive_1.HighlightDirective, router_1.ROUTER_DIRECTIVES],
                        providers: [hero_service_1.HeroService],
                        template: "\n    <h1 [myHighlight]=\"color\" [defaultColor]=\"'orange'\">Component Router</h1>\n    <input type=\"radio\" name=\"colors\" (click)=\"color = 'blue'\"/> Blue\n    <input type=\"radio\" name=\"colors\" (click)=\"color = 'yellow'\"/> Yellow\n    <nav>\n      <a [routerLink]=\"['CrisisCenter']\">Crisis Center</a>\n      <a [routerLink]=\"['Hero', {id: '1'}]\">Asset Detail</a>\n      <a [routerLink]=\"['Heroes']\">Heroes</a>\n    </nav>\n    <router-outlet></router-outlet>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/crisis-center/...', name: 'CrisisCenter', component: crisis_center_component_1.CrisisCenterComponent, useAsDefault: true }
                    ].concat(heroes_routes_1.HERO_ROUTES)), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map