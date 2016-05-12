angular.module('cltre').controller('TipsCtrl', function ($scope, passwordsService) {

    $scope.tips = passwordsService.model.content.slice(0, passwordsService.model.content.length - 1);
    
});
