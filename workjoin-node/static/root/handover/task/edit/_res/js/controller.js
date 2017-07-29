var app = angular.module('taskEdit', ['toastr']);
app.controller('taskEditCtrl', function($scope, taskSer,$state,toastr,$stateParams,$filter){
    var taskId = {id : $stateParams.id};
    //获取值
    taskSer.taskId(taskId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //提交
    $scope.taskEditFun = function(){
     
        var d =  angular.element('.time').val();
        var data = $scope.data;
        data.taskTime=d;

        taskSer.taskEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.handover.task.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});