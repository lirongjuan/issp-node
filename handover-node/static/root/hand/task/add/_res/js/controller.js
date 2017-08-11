var app = angular.module('taskAdd', ['toastr','ipCookie']);
app.controller('taskAddCtrl', function($scope,$state,toastr,taskSer){
    //获取所有的项目组
    taskSer.GetNo().then(function (response){
        if (response.data.code==0){
            $scope.num=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

    $scope.taskAddFun = function(){
        $scope.add.taskTime=angular.element('.taskTime').val();
       taskSer.addTask($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.hand.task.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


