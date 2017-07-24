var app = angular.module('analyseDayEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('analyseDayEditCtrl', function($scope,$state,$stateParams,toastr,analyseDaySer){

    var getId = {id:$stateParams.id};
    analyseDaySer.getDay(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的地区
    analyseDaySer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的项目组
    analyseDaySer.getgroupAll().then(function (response){
        if (response.data.code==0){
            $scope.group=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.dayEditFun = function(){
        analyseDaySer.editDay($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.check.analyseDay.list[12]');
                    toastr.success($scope.edit.projectGroup + "已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





