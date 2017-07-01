var app = angular.module('problemEdit', ['toastr']);
app.controller('problemEditCtrl', function($scope, problemSer,$stateParams,$state,toastr){
    var problemData ={id: $stateParams.id};
    $scope.changSelect = function(){
        var obj={
            problemProcessingTime:$scope.editAccept.problemProcessingTime = angular.element('.a1').val(),
            affectedDepartment:$scope.editAccept.affectedDepartment = angular.element('.a2').val()
            };
        problemSer.gitDegree(obj).then(function(response){
            if(response.data.code == 0){
                $scope.projectNames = response.data.data;
                console.log($scope.projectNames)
            }
        });
    };
    //获取ID
    problemSer.findProblemId(problemData).then(function(response){
        if(response.data.code=='0'){
            $scope.editAccept = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //编辑点击提交
    $scope.problemEditFun = function(){
        var vm = $scope;
        vm.editAccept.year = angular.element('.addYear').val();
        vm.editAccept.problemEmergencyDegree = angular.element('.na').val();

        problemSer.editProblem(vm.editAccept).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectProcessed.problemAccepted.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
    //可手填的下拉框
    $scope.changeSelect = function () {
        $scope.editAccept.projectType = $scope.editAccept.projectType1;
    };

});





