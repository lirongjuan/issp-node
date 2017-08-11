var app = angular.module('taskEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('taskEditCtrl', function($scope,$state,$stateParams,toastr,taskSer){

    var getId = {id:$stateParams.id};
    taskSer.getTask(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的项目组
    taskSer.GetNo().then(function (response){
        if (response.data.code==0){
            $scope.num=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

    $scope.taskEditFun = function(){
        $scope.edit.taskTime=angular.element('.taskTime').val();
        taskSer.editTask($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.hand.task.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





