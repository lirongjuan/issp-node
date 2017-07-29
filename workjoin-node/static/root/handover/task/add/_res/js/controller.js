var app = angular.module('taskAdd', ['toastr']);
app.controller('taskAddCtrl', function($scope, taskSer,$state,toastr){
    //添加
    $scope.taskAddFun = function(){
        var d =  angular.element('.time').val();
        var data = $scope.data;
        data.taskTime=d;
        taskSer.taskAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.handover.task.list');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});





