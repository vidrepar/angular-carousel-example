angular.module('cltre').directive('fullWidth', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, fn) {

            $(window).on('resize', function () {
                $(element).css({'width': $(window).width()});
            }).resize();

        }
    };
});
