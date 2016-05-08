angular.module('cltre').controller('TipsCtrl', function ($scope, passwordsService) {

    $scope.tips = passwordsService.model.content.slice(0, passwordsService.model.content.length - 1);

    $('owl-directive, .container').css({
        'width': $(window).width()
    });

    $(window).on('resize', function () {
        $('owl-directive, .container').css({
            'width': $(window).width()
        });
    });

});
