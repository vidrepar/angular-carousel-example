angular.module('cltre',
    [
        'ui.bootstrap',
        'ui.router',
        'ngAnimate',
        'ngMaterial'
    ]);

angular.module('cltre').config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

    $stateProvider.state('assessment', {
        url: '/assessment',
        templateUrl: 'partial/assessment/assessment.html',
        controller: 'AssessmentCtrl'
    });
    $stateProvider.state('tips', {
        url: '/tips',
        templateUrl: 'partial/tips/tips.html',
        controller: 'TipsCtrl'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/assessment');
    $mdThemingProvider.theme('default')
        .primaryPalette('cyan', {
            'default': '700'
    })
        .accentPalette('cyan', {
            'default': '900'
        });

});

angular.module('cltre').run(function ($rootScope) {

    $rootScope.safeApply = function (fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
