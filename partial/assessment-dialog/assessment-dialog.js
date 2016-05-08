angular.module('cltre').controller('AssessmentDialogCtrl',function(
    $scope,
    $mdDialog,
    $state,
    question,
    answer){

    $scope.answer = answer;

    $scope.closeDialog = function() {
        $mdDialog.hide();
    };

    $scope.passwordTips = function() {
        $mdDialog.hide();
        $state.go('tips');
    };

});
