var app = angular.module('problemAdd', ['toastr']);
app.controller('problemAddCtrl', function ($scope, problemSer, $state, toastr) {
    $scope.changSelect = function(){
        var obj={
            problemProcessingTime:$scope.accepted.problemProcessingTime = angular.element('.a1').val(),
            affectedDepartment:$scope.accepted.affectedDepartment = angular.element('.a2').val()
            };
        problemSer.gitDegree(obj).then(function(response){
            if(response.data.code == 0){
                $scope.projectNames = response.data.data;
            }
        });
    };
    $scope.problemAddFun = function () {
        var vm = $scope;
        vm.accepted.year = angular.element('.addYear').val();
        vm.accepted.problemEmergencyDegree = angular.element('.na').val();
        problemSer.addProblem(vm.accepted).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.projectProcessed.problemAccepted.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

    //可手填的下拉框
    $scope.changeSelect = function () {
        $scope.accepted.projectType = $scope.accepted.projectType1;
    };

});




