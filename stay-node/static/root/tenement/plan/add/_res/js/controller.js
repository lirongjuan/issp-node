var app = angular.module('planAdd', ['toastr','ipCookie']);
app.controller('planAddCtrl', function($scope,$state,toastr,planSer){
    //获取所有的地区
    planSer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的项目组
    planSer.Getposition().then(function (response){
        if (response.data.code==0){
            $scope.position=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })

    //获取所有的用户
    planSer.getUserAll().then(function (response){
        if (response.data.code==0){
            $scope.user= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    planSer.getGroupAll().then(function (response){
        if (response.data.code==0){
            $scope.group= response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.planAddFun = function(){
        $scope.add.completeStartTime=angular.element('.completeStartTime').val();
        $scope.add.completeEndTime=angular.element('.completeEndTime').val();
        planSer.addPlan($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.tenement.plan.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


