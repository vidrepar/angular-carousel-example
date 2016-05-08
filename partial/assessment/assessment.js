angular.module('cltre').controller('AssessmentCtrl', function ($scope, passwordsService, $mdDialog) {

    $scope.assessment = passwordsService.model.content[passwordsService.model.content.length - 1];

    $scope.submittedAnswer = {
        question: $scope.assessment.question,
        answer: 'no answer'
    };

    $scope.submit = function () {

        $mdDialog.show({
            controller: 'AssessmentDialogCtrl',
            templateUrl: 'partial/assessment-dialog/assessment-dialog.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            locals: $scope.submittedAnswer
        });

    };

    $('.container, #assessment-wrapper').css({
        'height': $(window).height(),
        'width': $(window).width()
    });

    $(window).on('resize', function () {
        $('.container, #assessment-wrapper').css({
            'height': $(window).height(),
            'width': $(window).width()
        });
    });

});
