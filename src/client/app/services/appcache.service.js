(function () {
    'use strict';

    angular
        .module('ShoesMaker')
        .service('AppCache', AppCasheService);

    AppCasheService.$inject = ['$window', '$timeout'];
    function AppCasheService($window, $timeout) {

        var options = {
            status: null
        };

        if (!$window.applicationCache) return;

        // event listeners
        $window.applicationCache.addEventListener('updateready', onupdateready);
        $window.applicationCache.addEventListener('checking', onchecking);
        // $window.applicationCache.addEventListener('cached', oncached);
        // $window.applicationCache.addEventListener('noupdate', onnoupdate);
        // $window.applicationCache.addEventListener('obsolete', onobsolete);
        // $window.applicationCache.addEventListener('downloading', ondownloading);
        $window.applicationCache.addEventListener('error', onerror);
        $window.applicationCache.addEventListener('progress', onprogress);
        ////////////////////////////////////////

        function onupdateready() {
            options.status = 'new version is ready to use';
            $window.applicationCache.swapCache();
            $window.location.reload();
            clearStatus();
        }

        function onchecking(event) {
            options.status = 'checking for updates...';
            clearStatus();
        }

        function oncached(event) {
            options.status = 'cached...';
        }

        function onnoupdate(event) {
            options.status = 'no updates...';
            clearStatus();
        }

        function onobsolete(event) {
            options.status = 'obsoleted...';
        }

        function ondownloading(event) {
            options.status = 'downloadind...';
        }

        function onerror(event) {
            options.status = 'Error';
        }

        function onprogress(event) {
            options.status = 'downloaded ' + event.loaded + '/' + event.total;
        }

        function clearStatus() {
            $timeout(function () {
                options.status = null;
            }, 2000);
        }

        return options;
    }
})();