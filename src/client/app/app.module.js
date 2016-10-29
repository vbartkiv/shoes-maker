(function () {
    'use strict';

    angular
        .module('ShoesMaker', [
            'ngMaterial',
            'ngAnimate',
            'ngAria',
            'ngMessages'
        ]);

    angular.element(document)
        .ready(function () {
            angular.bootstrap(document, ['ShoesMaker']);
        });

})();