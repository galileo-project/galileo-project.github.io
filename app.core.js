/**
 * Created by tor on 2016/5/2.
 */
(function() {
    "use strict";

    angular
        .module("galileo.core" , [])
        .controller("bodyCtrl", bodyCtrl);

    function bodyCtrl($location) {
        var vm = this;

        vm.sidebarUrl = "layout/sidebar/sidebar.tpl.html";

    }

})();