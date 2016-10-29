(function () {
    'use strict';

    angular
        .module('ShoesMaker')
        .controller('appController', appController);

    appController.$inject = ['$http', 'AppCache'];
    function appController($http, AppCache) {
        var vm = this;
        var data;

        vm.cache = AppCache;
        vm.search = search;
        vm.res = [];

        //////////////////////////////////////

        $http.get('/list').then(function (res) {
            data = res.data;
        });

        function search() {
            vm.res = _.filter(data.items, function (item) {
                return ~item.sole.indexOf(vm.sole);
            });
        }
    }

})();