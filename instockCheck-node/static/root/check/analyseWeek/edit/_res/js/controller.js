var app = angular.module('analyseWeekEdit', ['toastr','ipCookie','angularjs-dropdown-multiselect']);
app.controller('analyseWeekEditCtrl', function($scope,$state,$stateParams,toastr,analyseWeekSer){

    var getId = {id:$stateParams.id};
    analyseWeekSer.getWeek(getId).then(function(response){
        if(response.data.code==0){
            $scope.edit=response.data.data;
        }
    });
    //获取所有的地区
    analyseWeekSer.getAreaAll().then (function (response){
        if(response.data.code==0){
            $scope.area =response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    //获取所有的项目组
    analyseWeekSer.getgroupAll().then(function (response){
        if (response.data.code==0){
            $scope.group=response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
    $scope.WeekEditFun = function(){
        analyseWeekSer.editWeek($scope.edit).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.check.analyseWeek.list[12]');
                    toastr.success($scope.edit.projectGroup + "已成功编辑！", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }

            });
    };
});





