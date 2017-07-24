var app = angular.module('analyseDayAdd', ['toastr','ipCookie']);
app.controller('analyseDayAddCtrl', function($scope,$state,toastr,analyseDaySer){
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
    $scope.DayAddFun = function(){
        analyseDaySer.addDay($scope.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.check.analyseDay.list[12]');
                toastr.success( $scope.add.projectGroup+"已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});


