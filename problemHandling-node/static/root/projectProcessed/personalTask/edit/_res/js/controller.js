var app = angular.module('taskEdit', ['toastr']);
app.controller('taskEditCtrl', function($scope, taskSer,$stateParams,$state,toastr){
    var confirmData ={id: $stateParams.id};
    //获取内部项目编号
    taskSer.gitNum().then(function(response){
        if(response.data.code==0){
            $scope.numbers = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.changSelect = function(){
        var obj={projectNum:$scope.taskEdit.projectNum};
        taskSer.getBiddingName(obj).then(function(response){
            if(response.data.code == 0){
                $scope.projectNames = response.data.data;
            }
        });
    };
    //获取ID
    taskSer.findAssignmentId(confirmData).then(function(response){
        if(response.data.code == 0){
            $scope.taskEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.taskEditFun = function(){
        var vm = $scope;
        vm.taskEdit.internalProjectName = angular.element('.na').val();
        taskSer.editAssignment(vm.taskEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectProcessed.personalTask.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
    //可手填的下拉框
    $scope.changeSelect = function () {
        $scope.taskEdit.handler = $scope.taskEdit.handler1;
    };;

});





