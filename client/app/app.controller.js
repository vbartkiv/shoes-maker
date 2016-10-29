(function () {
    angular
        .module('ShoesMaker')
        .controller('appController', appController);

    appController.$inject = ['$http'];
    function appController($http) {
        var vm = this;
        var data;

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