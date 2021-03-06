/**
 * Alerts Controller
 */

angular
    .module('RDash')
    .controller('AlertsCtrl', ['$scope', '$rootScope', '$sce', AlertsCtrl]);

function AlertsCtrl($scope, $rootScope, $sce) {
    $scope.alerts = [];

    $scope.addAlert = function(message) {
        $scope.alerts = [{
            msg: $sce.trustAsHtml(message)
        }];
    };

    $rootScope.$on('addAlert', function(event, data) {
        $scope.addAlert(data);
    });

    $rootScope.$on('closeAlert', function(event, data) {
        $scope.closeAlert(data);
    });

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}