var app = angular.module('analyseWeekAdd', ['toastr','ipCookie']);
app.controller('analyseWeekAddCtrl', function($scope,$state,toastr,analyseWeekSer){
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
    $scope.WeekAddFun = function(){
        analyseWeekSer.addWeek($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.check.analyseWeek.list[12]');
                toastr.success( $scope.add.projectGroup+"已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


