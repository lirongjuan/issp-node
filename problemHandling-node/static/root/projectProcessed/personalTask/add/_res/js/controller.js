var app = angular.module('taskAdd', ['toastr']);
app.controller('taskAddCtrl', function ($scope, taskSer, $state, toastr) {
    //获取内部项目编号
    taskSer.gitNum().then(function(response){
        if(response.data.code==0){
            $scope.numbers = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.changSelect = function(){
        var obj={projectNum:$scope.task.projectNum};
        taskSer.getBiddingName(obj).then(function(response){
            if(response.data.code == 0){
                $scope.projectNames = response.data.data;
            }
        });
    };
    //添加
    $scope.taskAddFun = function () {
        var vm = $scope;
        vm.task.internalProjectName = angular.element('.na').val();
        taskSer.addAssignment(vm.task).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.projectProcessed.personalTask.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

    //可手填的下拉框
    $scope.changeSelect = function () {
        $scope.task.handler = $scope.task.handler1;
    };
});




