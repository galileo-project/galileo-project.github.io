(function() {
    "use strict";
    
    angular
        .module("galileo.route", ["ngRoute"])
        .config(route);

    function route($routeProvider) {
        $routeProvider
            .when("/",{
                templateUrl:  "layout/pages/home.tpl.html",
                controller:   "pagesCtrl",
                controllerAs: "home"
            })
            .when("/gpm",{
                templateUrl:  "layout/pages/gpm.tpl.html",
                controller:   "pagesCtrl",
                controllerAs: "gpm"
            })
            .when("/ton",{
                templateUrl:  "layout/pages/ton.tpl.html",
                controller:   "pagesCtrl",
                controllerAs: "ton"
            })
            .when("/dockyard",{
                templateUrl:  "layout/pages/dockyard.tpl.html",
                controller:   "pagesCtrl",
                controllerAs: "dockyard"
            })
            .when("/cut",{
                templateUrl:  "layout/pages/cut.tpl.html",
                controller:   "pagesCtrl",
                controllerAs: "cut"
            })
            .when("/pyos",{
                templateUrl:  "layout/pages/pyos.tpl.html",
                controller:   "pagesCtrl",
                controllerAs: "pyos"
            })
            .when("/async",{
                templateUrl:  "layout/pages/async.tpl.html",
                controller:   "pagesCtrl",
                controllerAs: "async"
            })
            .otherwise("/");
    }
})();