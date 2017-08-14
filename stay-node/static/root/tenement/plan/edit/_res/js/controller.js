var app = angular.module('planEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('planEditCtrl', function($scope,$state,$stateParams,toastr,planSer){

    var getId = {id:$stateParams.id};
    planSer.getPlan(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的地区
    planSer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的项目组
    planSer.Getposition().then(function(response){
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
    $scope.planEditFun = function(){
        $scope.edit.completeStartTime=angular.element('.completeStartTime').val();
        $scope.edit.completeEndTime=angular.element('.completeEndTime').val();
        planSer.editPlan($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.tenement.plan.list[12]');
                    toastr.success("已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





